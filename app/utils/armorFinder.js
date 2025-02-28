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
  
  // Simple greedy algorithm - select the best piece for each slot
  const selectedPieces = [];
  
  // Find best head piece
  let bestHeadPiece = findBestPieceForSkills(armorByType.head, desiredSkills);
  if (bestHeadPiece) {
    selectedPieces.push(bestHeadPiece);
    updateSkillLevels(desiredSkills, bestHeadPiece);
  }
  
  // Find best chest piece
  let bestChestPiece = findBestPieceForSkills(armorByType.chest, desiredSkills);
  if (bestChestPiece) {
    selectedPieces.push(bestChestPiece);
    updateSkillLevels(desiredSkills, bestChestPiece);
  }
  
  // Find best arms piece
  let bestArmsPiece = findBestPieceForSkills(armorByType.arms, desiredSkills);
  if (bestArmsPiece) {
    selectedPieces.push(bestArmsPiece);
    updateSkillLevels(desiredSkills, bestArmsPiece);
  }
  
  // Find best waist piece
  let bestWaistPiece = findBestPieceForSkills(armorByType.waist, desiredSkills);
  if (bestWaistPiece) {
    selectedPieces.push(bestWaistPiece);
    updateSkillLevels(desiredSkills, bestWaistPiece);
  }
  
  // Find best legs piece
  let bestLegsPiece = findBestPieceForSkills(armorByType.legs, desiredSkills);
  if (bestLegsPiece) {
    selectedPieces.push(bestLegsPiece);
    updateSkillLevels(desiredSkills, bestLegsPiece);
  }
  
  // Calculate group skills
  const activeGroupSkills = calculateActiveGroupSkills(selectedPieces);
  
  // Add unlocked skills from Group Skills
  activeGroupSkills.forEach(groupSkill => {
    // Find the corresponding skill it unlocks
    const groupSkillData = skills.find(s => s.id === groupSkill.id);
    if (groupSkillData && groupSkillData.effects && groupSkillData.effects[0]) {
      const unlockedSkillId = groupSkillData.effects[0].effect.split(': ')[1].toLowerCase().replace(' ', '_');
      const unlockedSkillData = skills.find(s => s.id === unlockedSkillId);
      
      if (unlockedSkillData) {
        // Add the unlocked skill to our total skills
        desiredSkills[unlockedSkillId] = {
          name: unlockedSkillData.name,
          level: 1,
          maxLevel: unlockedSkillData.maxLevel,
          fromGroupSkill: groupSkill.name
        };
      }
    }
  });
  
  return {
    pieces: selectedPieces,
    skills: desiredSkills,
    groupSkills: activeGroupSkills
  };
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