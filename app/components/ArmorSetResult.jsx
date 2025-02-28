'use client';

import { useState } from 'react';
import { skills } from '../data/skills';

export default function ArmorSetResult({ armorSet, totalSkills }) {
  const [expanded, setExpanded] = useState(false);
  
  if (!armorSet || !armorSet.pieces || armorSet.pieces.length === 0) {
    return (
      <div className="bg-yellow-50 p-4 rounded-lg my-4 text-sm border border-yellow-200">
        <div className="flex items-start">
          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="font-medium text-yellow-800">No armor set matches found for these skills.</p>
            <p className="text-yellow-700 mt-2">Try selecting a different combination of skills.</p>
          </div>
        </div>
      </div>
    );
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
  
  // Get elemental resistances
  const elementalResistances = armorSet.pieces.reduce((resistances, piece) => {
    if (piece.resistances) {
      Object.entries(piece.resistances).forEach(([element, value]) => {
        resistances[element] = (resistances[element] || 0) + value;
      });
    }
    return resistances;
  }, {});
  
  const armorPieces = {
    head: armorSet.pieces.find(p => p.type === 'head'),
    chest: armorSet.pieces.find(p => p.type === 'chest'),
    arms: armorSet.pieces.find(p => p.type === 'arms'),
    waist: armorSet.pieces.find(p => p.type === 'waist'),
    legs: armorSet.pieces.find(p => p.type === 'legs')
  };
  
  // Group armor pieces by set
  const setGroups = armorSet.pieces.reduce((groups, piece) => {
    const setName = piece.setName;
    if (!groups[setName]) {
      groups[setName] = {
        name: setName,
        count: 0,
        pieces: []
      };
    }
    groups[setName].count += 1;
    groups[setName].pieces.push(piece);
    return groups;
  }, {});

  // Calculate all skills provided by the armor set
  const allProvidedSkills = {};
  
  if (armorSet && armorSet.pieces) {
    armorSet.pieces.forEach(piece => {
      if (piece.skills) {
        piece.skills.forEach(skill => {
          const skillId = skill.id;
          if (!allProvidedSkills[skillId]) {
            const skillInfo = skills.find(s => s.id === skillId);
            allProvidedSkills[skillId] = {
              id: skillId,
              name: skillInfo?.name || skillId,
              level: skill.level,
              desired: totalSkills[skillId]?.desired || 0
            };
          } else {
            allProvidedSkills[skillId].level += skill.level;
          }
        });
      }
    });
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm my-4 border border-gray-200">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h3 className="text-lg font-bold text-gray-800">Recommended Armor Set</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1 hover:bg-blue-50 rounded transition">
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      
      {hasImpossibleSkills && (
        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm">
          <div className="flex items-start">
            <svg className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-medium text-yellow-800">Some skills cannot be fully satisfied with available armor:</p>
              {unachievableSkills.length > 0 && (
                <div className="mt-1">
                  <span className="font-medium text-yellow-800">Unavailable: </span>
                  <span className="text-yellow-700">{unachievableSkills.join(', ')}</span>
                </div>
              )}
              {partiallyAchievedSkills.length > 0 && (
                <div className="mt-1">
                  <span className="font-medium text-yellow-800">Partial matches: </span>
                  <span className="text-yellow-700">{partiallyAchievedSkills.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <div className="flex justify-between text-sm text-gray-700">
            <span className="font-medium">Total Defense:</span>
            <span className="font-bold">{totalDefense}</span>
          </div>
        </div>
        
        {Object.keys(elementalResistances).length > 0 && (
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex flex-wrap gap-x-3 justify-between text-sm text-gray-700">
              {Object.entries(elementalResistances).map(([element, value]) => (
                <div key={element} className="flex items-center">
                  <span className="capitalize font-medium mr-1">{element}:</span>
                  <span className={`${value >= 0 ? 'text-green-600' : 'text-red-600'} font-bold`}>
                    {value > 0 ? '+' : ''}{value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {expanded && (
        <>
          <div className="mt-4">
            <h4 className="font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
              Armor Pieces
            </h4>
            
            {/* Set grouping */}
            <div className="mb-3">
              {Object.values(setGroups).map((group) => (
                <div key={group.name} className="text-xs flex items-center mb-1">
                  <div className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded mr-2">{group.count}x</div>
                  <span className="font-medium text-gray-700">{group.name}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              {['head', 'chest', 'arms', 'waist', 'legs'].map(type => (
                <div key={type} className="flex justify-between p-3 bg-gray-50 rounded border border-gray-200 text-sm">
                  <div className="overflow-hidden w-3/5">
                    <div className="flex items-center">
                      <span className="capitalize font-medium text-gray-800 mr-1">{type}:</span>
                      <span className="text-gray-700 truncate">{armorPieces[type]?.name || 'None'}</span>
                    </div>
                    <div className="text-gray-600 text-xs mt-0.5">
                      {armorPieces[type]?.skills?.map(skill => {
                        const skillData = skills.find(s => s.id === skill.id);
                        return (
                          <span key={skill.id} className="mr-2">
                            {skillData?.name} {Array(skill.level).fill('●').join('')}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-gray-700 shrink-0 ml-1 flex flex-col items-end justify-between">
                    <div className="font-medium">DEF: {armorPieces[type]?.defense || 0}</div>
                    {armorPieces[type]?.resistances && (
                      <div className="flex gap-1 text-xs">
                        {Object.entries(armorPieces[type].resistances)
                          .filter(([_, value]) => value !== 0)
                          .map(([element, value]) => (
                            <span 
                              key={element} 
                              className={`${value > 0 ? 'text-green-600' : 'text-red-600'} font-mono`}
                              title={`${element.charAt(0).toUpperCase() + element.slice(1)} resistance`}
                            >
                              {element.charAt(0).toUpperCase()}{value > 0 ? '+' : ''}{value}
                            </span>
                          ))
                        }
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
              Resulting Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(allProvidedSkills)
                .sort(([_, a], [__, b]) => {
                  // Sort by whether it was desired first, then by level
                  if ((a.desired > 0) !== (b.desired > 0)) {
                    return b.desired > 0 ? 1 : -1;
                  }
                  return b.level - a.level;
                })
                .map(([skillId, { name, level, desired }]) => {
                  const skillData = skills.find(s => s.id === skillId);
                  const effect = skillData?.effects?.find(e => e.level === level)?.effect;
                  const isDesired = desired > 0;
                  
                  return (
                    <div 
                      key={skillId} 
                      className={`flex flex-col p-2 rounded border ${
                        isDesired ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      } text-sm`}
                    >
                      <div className="flex justify-between">
                        <span className={`truncate mr-1 font-medium ${isDesired ? 'text-blue-800' : 'text-gray-800'}`}>
                          {name}
                          {isDesired && level >= desired && 
                            <span className="ml-1 text-green-600 text-xs">✓</span>
                          }
                        </span>
                        <span className={`font-medium shrink-0 ${isDesired ? 'text-blue-700' : 'text-gray-700'}`}>
                          Lv. {level}{isDesired ? `/${desired}` : ''}
                        </span>
                      </div>
                      {effect && (
                        <span className="text-gray-600 text-xs mt-1">{effect}</span>
                      )}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function getElementColor(element) {
  switch (element) {
    case 'fire': return 'text-red-600';
    case 'water': return 'text-blue-600';
    case 'thunder': return 'text-yellow-600';
    case 'ice': return 'text-cyan-600';
    case 'dragon': return 'text-purple-600';
    default: return 'text-gray-600';
  }
}