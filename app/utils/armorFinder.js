// utils/armorFinder.js
import { allArmorPieces } from '../data/armor';

/**
 * Find the best armor set combination based on selected skills
 * @param {Array} targetSkills - Array of {id, level} objects representing desired skills
 * @returns {Object} The best armor set combination
 */
export function findBestArmorSet(targetSkills) {
  if (!targetSkills || targetSkills.length === 0) {
    return null;
  }

  // Group armor pieces by type
  const armorByType = {
    head: allArmorPieces.filter(piece => piece.type === 'head'),
    chest: allArmorPieces.filter(piece => piece.type === 'chest'),
    arms: allArmorPieces.filter(piece => piece.type === 'arms'),
    waist: allArmorPieces.filter(piece => piece.type === 'waist'),
    legs: allArmorPieces.filter(piece => piece.type === 'legs')
  };

  // Get all possible combinations
  // For a real app with many armor pieces, you'd want a more efficient algorithm
  // This is a simplified version for demonstration
  let bestScore = -1;
  let bestCombination = null;
  let bestSkillsTotal = null;

  // Helper function to evaluate a combination
  const evaluateCombination = (combination) => {
    // Calculate total skills provided by the combination
    const skillsProvided = {};
    
    combination.forEach(piece => {
      if (!piece) return;
      
      piece.skills.forEach(skill => {
        if (!skillsProvided[skill.id]) {
          skillsProvided[skill.id] = { level: 0, name: skill.id };
        }
        skillsProvided[skill.id].level += skill.level;
      });
    });

    // For each skill in skillsProvided, find its name from the targetSkills
    for (const skillId in skillsProvided) {
      const targetSkill = targetSkills.find(s => s.id === skillId);
      if (targetSkill) {
        skillsProvided[skillId].name = targetSkill.name;
      }
    }

    // Calculate score based on how well the combination matches target skills
    let score = 0;
    for (const targetSkill of targetSkills) {
      const provided = skillsProvided[targetSkill.id]?.level || 0;
      // Only count up to the required level
      const effective = Math.min(provided, targetSkill.level);
      score += effective;
      
      // Bonus for exact matches
      if (provided === targetSkill.level) {
        score += 0.5;
      }
    }

    // Penalty for missing required skills
    for (const targetSkill of targetSkills) {
      if (!skillsProvided[targetSkill.id]) {
        score -= 1;
      }
    }

    return { score, skillsProvided };
  };

  // Try various combinations
  // In a real app, this would use a more sophisticated algorithm
  // For simplicity, we'll try each piece from each type
  const combinations = [];
  
  for (const head of armorByType.head) {
    for (const chest of armorByType.chest) {
      for (const arms of armorByType.arms) {
        for (const waist of armorByType.waist) {
          for (const legs of armorByType.legs) {
            const combination = [head, chest, arms, waist, legs];
            combinations.push(combination);
            
            const { score, skillsProvided } = evaluateCombination(combination);
            
            if (score > bestScore) {
              bestScore = score;
              bestCombination = combination;
              bestSkillsTotal = skillsProvided;
            }
          }
        }
      }
    }
  }

  // Return the best combination found
  return {
    pieces: bestCombination,
    score: bestScore,
    skills: bestSkillsTotal
  };
}

/**
 * A simpler but less optimal approach to find a matching armor set
 * This is more efficient for demonstration purposes but won't find the optimal solution
 */
export function findSimpleArmorSet(targetSkills) {
  if (!targetSkills || targetSkills.length === 0) {
    return null;
  }

  // Create a scoring function for each piece
  const scoreArmorPiece = (piece) => {
    let score = 0;
    for (const pieceSkill of piece.skills) {
      const targetSkill = targetSkills.find(ts => ts.id === pieceSkill.id);
      if (targetSkill) {
        score += Math.min(pieceSkill.level, targetSkill.level);
      }
    }
    return score;
  };

  // Find the best piece for each slot
  const bestPieces = {};
  const slotTypes = ['head', 'chest', 'arms', 'waist', 'legs'];
  
  for (const type of slotTypes) {
    const piecesOfType = allArmorPieces.filter(p => p.type === type);
    if (piecesOfType.length > 0) {
      bestPieces[type] = piecesOfType.reduce((best, current) => {
        const bestScore = scoreArmorPiece(best);
        const currentScore = scoreArmorPiece(current);
        return currentScore > bestScore ? current : best;
      }, piecesOfType[0]);
    }
  }

  // Calculate total skills provided by the set
  const skillsTotal = {};
  const selectedPieces = Object.values(bestPieces);

  for (const piece of selectedPieces) {
    for (const skill of piece.skills) {
      if (!skillsTotal[skill.id]) {
        // Find the name from targetSkills
        const targetSkill = targetSkills.find(ts => ts.id === skill.id);
        skillsTotal[skill.id] = {
          level: 0,
          name: targetSkill ? targetSkill.name : skill.id
        };
      }
      skillsTotal[skill.id].level += skill.level;
    }
  }

  // Add skills that are in the target but not achieved or not fully achieved
  for (const targetSkill of targetSkills) {
    if (!skillsTotal[targetSkill.id]) {
      skillsTotal[targetSkill.id] = {
        level: 0,
        name: targetSkill.name
      };
    } else if (skillsTotal[targetSkill.id].level < targetSkill.level) {
      // Mark as partially satisfied - the skill is found but not at the desired level
      skillsTotal[targetSkill.id].desired = targetSkill.level;
    }
  }

  return {
    pieces: selectedPieces,
    skills: skillsTotal
  };
}