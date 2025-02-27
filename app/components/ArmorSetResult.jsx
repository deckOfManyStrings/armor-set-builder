'use client';

import { useState } from 'react';

export default function ArmorSetResult({ armorSet, totalSkills }) {
  const [expanded, setExpanded] = useState(false);
  
  if (!armorSet || !armorSet.pieces || armorSet.pieces.length === 0) {
    return <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg my-2 sm:my-4 text-sm sm:text-base">No armor set matches found.</div>;
  }
  
  // Check if all selected skills are fully satisfied
  const unachievableSkills = Object.entries(totalSkills)
    .filter(([_, skill]) => skill.level === 0)
    .map(([_, skill]) => skill.name);
    
  const partiallyAchievedSkills = Object.entries(totalSkills)
    .filter(([_, skill]) => skill.level > 0 && skill.desired && skill.level < skill.desired)
    .map(([_, skill]) => `${skill.name} (${skill.level}/${skill.desired})`);
    
  const hasImpossibleSkills = unachievableSkills.length > 0 || partiallyAchievedSkills.length > 0;

  const totalDefense = armorSet.pieces.reduce((sum, piece) => sum + piece.defense, 0);
  const armorPieces = {
    head: armorSet.pieces.find(p => p.type === 'head'),
    chest: armorSet.pieces.find(p => p.type === 'chest'),
    arms: armorSet.pieces.find(p => p.type === 'arms'),
    waist: armorSet.pieces.find(p => p.type === 'waist'),
    legs: armorSet.pieces.find(p => p.type === 'legs')
  };

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md my-2 sm:my-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h3 className="text-base sm:text-lg font-bold">Recommended Armor Set</h3>
        <button className="text-blue-500 text-sm sm:text-base">
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      
      {hasImpossibleSkills && (
        <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-md text-xs sm:text-sm text-amber-700">
          <p className="font-medium">Some skills cannot be fully satisfied with available armor:</p>
          {unachievableSkills.length > 0 && (
            <div className="mt-1">
              <span className="font-medium">Unavailable: </span>
              <span>{unachievableSkills.join(', ')}</span>
            </div>
          )}
          {partiallyAchievedSkills.length > 0 && (
            <div className="mt-1">
              <span className="font-medium">Partial matches: </span>
              <span>{partiallyAchievedSkills.join(', ')}</span>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-2">
        <div className="flex justify-between text-xs sm:text-sm text-gray-700">
          <span>Total Defense:</span>
          <span className="font-medium">{totalDefense}</span>
        </div>
      </div>

      {expanded && (
        <>
          <div className="mt-3 sm:mt-4">
            <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Armor Pieces</h4>
            <div className="space-y-1 sm:space-y-2">
              {['head', 'chest', 'arms', 'waist', 'legs'].map(type => (
                <div key={type} className="flex justify-between p-1 sm:p-2 bg-gray-50 rounded text-xs sm:text-sm">
                  <div className="overflow-hidden">
                    <span className="capitalize">{type}:</span>{' '}
                    <span className="font-medium truncate">{armorPieces[type]?.name || 'None'}</span>
                  </div>
                  <div className="text-gray-600 shrink-0 ml-1">
                    DEF: {armorPieces[type]?.defense || 0}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Resulting Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
              {Object.entries(totalSkills)
                .filter(([_, skill]) => skill.level > 0) // Only show skills with level > 0
                .map(([skillId, { name, level }]) => (
                <div key={skillId} className="flex justify-between p-1 sm:p-2 bg-blue-50 rounded text-xs sm:text-sm">
                  <span className="truncate mr-1">{name}</span>
                  <span className="font-medium shrink-0">Lv. {level}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}