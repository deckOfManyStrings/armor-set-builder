// utils/armorFinder.js
import { allArmorPieces } from '../data/armor';
import { skills } from '../data/skills';

// Find all Group Skills available in the armor data
export function getAllGroupSkills() {
  const groupSkillsMap = {};
  
  // Extract all group skills from armor sets
  allArmorPieces.forEach(piece => {
    if (piece.setGroupSkills) {
      piece.setGroupSkills.forEach(groupSkill => {
        if (!groupSkillsMap[groupSkill.id]) {
          // Find the skill data
          const skillData = skills.find(s => s.id === groupSkill.id);
          if (skillData) {
            groupSkillsMap[groupSkill.id] = {
              id: groupSkill.id,
              name: skillData.name,
              description: skillData.description,
              pieces: []
            };
          }
        }
        // Add this piece to the group skill's pieces list
        if (groupSkillsMap[groupSkill.id]) {
          groupSkillsMap[groupSkill.id].pieces.push(piece.id);
        }
      });
    }
  });
  
  return Object.values(groupSkillsMap);
}

// Calculate which group skills are active for a given armor set
export function calculateActiveGroupSkills(armorPieces) {
  const groupSkillsCount = {};
  const activeGroupSkills = [];
  
  // Count pieces for each group skill
  armorPieces.forEach(piece => {
    if (piece.setGroupSkills) {
      piece.setGroupSkills.forEach(groupSkill => {
        groupSkillsCount[groupSkill.id] = (groupSkillsCount[groupSkill.id] || 0) + 1;
      });
    }
  });
  
  // Check which group skills are active (3 or more pieces)
  Object.entries(groupSkillsCount).forEach(([skillId, count]) => {
    if (count >= 3) {
      const skillData = skills.find(s => s.id === skillId);
      if (skillData) {
        activeGroupSkills.push({
          id: skillId,
          name: skillData.name,
          count: count,
          effect: skillData.effects[0].effect
        });
      }
    }
  });
  
  return activeGroupSkills;
}

// Enhanced armor finder that considers group skills
export function findSimpleArmorSet(selectedSkills) {
  if (!selectedSkills || selectedSkills.length === 0) {
    return null;
  }
  
  // Create a map for faster skill lookup
  const desiredSkills = {};
  selectedSkills.forEach(skill => {
    desiredSkills[skill.id] = {
      id: skill.id,
      name: skill.name,
      desired: skill.level,
      level: 0
    };
  });
  
  // Filter available armor by types for each slot
  const armorByType = {
    head: allArmorPieces.filter(piece => piece.type === 'head'),
    chest: allArmorPieces.filter(piece => piece.type === 'chest'),
    arms: allArmorPieces.filter(piece => piece.type === 'arms'),
    waist: allArmorPieces.filter(piece => piece.type === 'waist'),
    legs: allArmorPieces.filter(piece => piece.type === 'legs')
  };
  
  // Try different search strategies to find the best armor set
  const resultGreedy = findArmorSetGreedy(armorByType, desiredSkills);
  const resultFocused = findArmorSetFocused(armorByType, desiredSkills);
  
  // Pick the better result
  let bestResult = null;
  
  if (resultGreedy && resultFocused) {
    const greedyCompletionRate = calculateCompletionRate(resultGreedy.skills);
    const focusedCompletionRate = calculateCompletionRate(resultFocused.skills);
    
    bestResult = greedyCompletionRate >= focusedCompletionRate ? resultGreedy : resultFocused;
  } else {
    bestResult = resultGreedy || resultFocused;
  }
  
  // If we found a valid set, calculate additional information and optimize it
  if (bestResult) {
    // Remove unnecessary pieces that don't contribute to desired skills
    bestResult.pieces = removeUnnecessaryPieces(bestResult.pieces, desiredSkills);
    
    // Calculate group skills
    const activeGroupSkills = calculateActiveGroupSkills(bestResult.pieces);
    bestResult.groupSkills = activeGroupSkills;
    
    // Add unlocked skills from Group Skills
    activeGroupSkills.forEach(groupSkill => {
      // Find the corresponding skill it unlocks
      const groupSkillData = skills.find(s => s.id === groupSkill.id);
      if (groupSkillData && groupSkillData.effects && groupSkillData.effects[0]) {
        // Check if this group skill unlocks another skill
        const effectText = groupSkillData.effects[0].effect;
        if (effectText.includes('Unlocks:')) {
          const unlockedSkillName = effectText.split('Unlocks: ')[1].split(' ')[0];
          const unlockedSkillData = skills.find(s => s.name === unlockedSkillName);
          
          if (unlockedSkillData) {
            // Add the unlocked skill to our total skills
            bestResult.skills[unlockedSkillData.id] = {
              id: unlockedSkillData.id,
              name: unlockedSkillData.name,
              level: 1,
              desired: 0,
              fromGroupSkill: groupSkill.name
            };
          }
        }
      }
    });
    
    // Recalculate skill levels with final piece selection
    recalculateSkillLevels(bestResult);
  }
  
  return bestResult;
}

// Remove armor pieces that don't contribute to the desired skills
function removeUnnecessaryPieces(pieces, desiredSkills) {
  if (!pieces || pieces.length === 0) return [];
  
  // Track which pieces are necessary
  const necessaryPieces = [];
  
  // Create a copy of desired skills to track what's needed
  const remainingSkillLevels = {};
  Object.entries(desiredSkills).forEach(([id, skill]) => {
    if (skill.desired > 0) {
      remainingSkillLevels[id] = skill.desired;
    }
  });
  
  // Sort pieces by their contribution to desired skills (most valuable first)
  const sortedPieces = [...pieces].sort((a, b) => {
    return calculatePieceValueForDesiredSkills(b, remainingSkillLevels) - 
           calculatePieceValueForDesiredSkills(a, remainingSkillLevels);
  });
  
  // Add pieces that contribute to desired skills
  sortedPieces.forEach(piece => {
    let isNecessary = false;
    
    if (piece.skills) {
      piece.skills.forEach(skill => {
        // Check if this skill is desired and not already satisfied
        if (remainingSkillLevels[skill.id] > 0) {
          isNecessary = true;
          // Update remaining skill levels
          remainingSkillLevels[skill.id] = Math.max(0, remainingSkillLevels[skill.id] - skill.level);
        }
      });
    }
    
    if (isNecessary) {
      necessaryPieces.push(piece);
    }
  });
  
  return necessaryPieces;
}

// Calculate the value of a piece specifically for the remaining desired skills
function calculatePieceValueForDesiredSkills(piece, remainingSkillLevels) {
  if (!piece.skills) return 0;
  
  let value = 0;
  piece.skills.forEach(skill => {
    const remaining = remainingSkillLevels[skill.id] || 0;
    if (remaining > 0) {
      // Value is how much this piece contributes to skills still needed
      value += Math.min(skill.level, remaining);
    }
  });
  
  return value;
}

// Recalculate all skill levels based on final piece selection
function recalculateSkillLevels(armorSet) {
  // Reset skill levels
  Object.values(armorSet.skills).forEach(skill => {
    skill.level = 0;
  });
  
  // Recalculate skills from selected pieces
  armorSet.pieces.forEach(piece => {
    if (piece.skills) {
      piece.skills.forEach(skill => {
        if (armorSet.skills[skill.id]) {
          armorSet.skills[skill.id].level += skill.level;
        } else {
          // Add new skill that wasn't originally desired
          const skillData = skills.find(s => s.id === skill.id);
          armorSet.skills[skill.id] = {
            id: skill.id,
            name: skillData?.name || skill.id,
            level: skill.level,
            desired: 0
          };
        }
      });
    }
  });
}

// Helper function to calculate what percentage of desired skills are satisfied
function calculateCompletionRate(skillsMap) {
  let totalDesired = 0;
  let totalAchieved = 0;
  
  Object.values(skillsMap).forEach(skill => {
    if (skill.desired > 0) {
      totalDesired += skill.desired;
      totalAchieved += Math.min(skill.level, skill.desired);
    }
  });
  
  return totalDesired > 0 ? totalAchieved / totalDesired : 0;
}

// Greedy approach - select pieces with highest skill match count first
function findArmorSetGreedy(armorByType, desiredSkills) {
  const desiredSkillsCopy = JSON.parse(JSON.stringify(desiredSkills));
  const selectedPieces = [];
  
  // Find best piece for each slot
  ['head', 'chest', 'arms', 'waist', 'legs'].forEach(slotType => {
    const bestPiece = findBestPieceForSkills(armorByType[slotType], desiredSkillsCopy);
    if (bestPiece) {
      selectedPieces.push(bestPiece);
      updateSkillLevels(desiredSkillsCopy, bestPiece);
    }
  });
  
  return {
    pieces: selectedPieces,
    skills: desiredSkillsCopy
  };
}

// Focused approach - prioritize completing one skill at a time
function findArmorSetFocused(armorByType, desiredSkills) {
  const desiredSkillsCopy = JSON.parse(JSON.stringify(desiredSkills));
  const selectedPieces = {
    head: null,
    chest: null,
    arms: null,
    waist: null,
    legs: null
  };
  
  // Sort skills by priority (can be customized)
  const skillPriorities = Object.keys(desiredSkillsCopy).sort((a, b) => {
    // Higher level skills first
    return desiredSkillsCopy[b].desired - desiredSkillsCopy[a].desired;
  });
  
  // For each skill, find the best pieces to satisfy it
  for (const skillId of skillPriorities) {
    const skill = desiredSkillsCopy[skillId];
    
    // Skip if this skill is already satisfied
    if (skill.level >= skill.desired) {
      continue;
    }
    
    // For each empty slot, find the piece that contributes most to this skill
    for (const slotType of ['head', 'chest', 'arms', 'waist', 'legs']) {
      if (selectedPieces[slotType]) continue;
      
      const bestPieceForSkill = findBestPieceForSpecificSkill(
        armorByType[slotType], 
        skillId,
        skill.desired - skill.level
      );
      
      if (bestPieceForSkill) {
        selectedPieces[slotType] = bestPieceForSkill;
        updateSkillLevels(desiredSkillsCopy, bestPieceForSkill);
        
        // If we've satisfied this skill, break the slot loop
        if (skill.level >= skill.desired) {
          break;
        }
      }
    }
  }
  
  // Fill any remaining slots with best general match pieces
  for (const slotType of ['head', 'chest', 'arms', 'waist', 'legs']) {
    if (!selectedPieces[slotType]) {
      const bestPiece = findBestPieceForSkills(armorByType[slotType], desiredSkillsCopy);
      if (bestPiece) {
        selectedPieces[slotType] = bestPiece;
        updateSkillLevels(desiredSkillsCopy, bestPiece);
      }
    }
  }
  
  return {
    pieces: Object.values(selectedPieces).filter(Boolean),
    skills: desiredSkillsCopy
  };
}

// Helper function to find the best piece for a specific skill
function findBestPieceForSpecificSkill(pieces, skillId, levelNeeded) {
  if (!pieces || pieces.length === 0 || levelNeeded <= 0) {
    return null;
  }
  
  let bestPiece = null;
  let bestContribution = 0;
  
  pieces.forEach(piece => {
    if (!piece.skills) return;
    
    const skillMatch = piece.skills.find(s => s.id === skillId);
    if (skillMatch) {
      const contribution = Math.min(skillMatch.level, levelNeeded);
      
      if (contribution > bestContribution) {
        bestContribution = contribution;
        bestPiece = piece;
      } else if (contribution === bestContribution && bestContribution > 0) {
        // If equal contribution, consider defense and slots as tiebreakers
        const currentPieceValue = calculatePieceValue(piece);
        const bestPieceValue = calculatePieceValue(bestPiece);
        
        if (currentPieceValue > bestPieceValue) {
          bestPiece = piece;
        }
      }
    }
  });
  
  return bestPiece;
}

// Calculate overall value of a piece based on defense and slots
function calculatePieceValue(piece) {
  let value = piece.defense;
  
  // Add value for slots (higher level slots are worth more)
  if (piece.slots) {
    piece.slots.forEach(slotLevel => {
      value += slotLevel * 5;  // Arbitrary weight for slots
    });
  }
  
  return value;
}

// Helper function to find the best armor piece for desired skills
function findBestPieceForSkills(pieces, desiredSkills) {
  if (!pieces || pieces.length === 0) {
    return null;
  }
  
  let bestPiece = null;
  let bestScore = -1;
  
  pieces.forEach(piece => {
    let score = calculatePieceScore(piece, desiredSkills);
    
    // Consider group skills as a tie-breaker
    if (piece.setGroupSkills && piece.setGroupSkills.length > 0) {
      score += 0.1; // Small bonus for pieces with group skills
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestPiece = piece;
    } else if (score === bestScore && bestScore > 0) {
      // If scores are tied, choose the piece with better defense and slots
      const currentValue = calculatePieceValue(piece);
      const bestValue = calculatePieceValue(bestPiece);
      
      if (currentValue > bestValue) {
        bestPiece = piece;
      }
    }
  });
  
  return bestPiece;
}

// Calculate a score for a piece based on how well it matches desired skills
function calculatePieceScore(piece, desiredSkills) {
  if (!piece.skills) {
    return 0;
  }
  
  let score = 0;
  
  piece.skills.forEach(skill => {
    if (desiredSkills[skill.id]) {
      const desired = desiredSkills[skill.id].desired;
      const current = desiredSkills[skill.id].level;
      
      // How much this piece helps towards reaching the desired level
      const remaining = Math.max(0, desired - current);
      const contribution = Math.min(skill.level, remaining);
      
      score += contribution;
      
      // Bonus for exact skill matches
      if (skill.level === remaining) {
        score += 0.5;
      }
    }
  });
  
  return score;
}

// Update skill levels based on a selected armor piece
function updateSkillLevels(desiredSkills, piece) {
  if (!piece.skills) {
    return;
  }
  
  piece.skills.forEach(skill => {
    if (desiredSkills[skill.id]) {
      desiredSkills[skill.id].level += skill.level;
    }
  });
}