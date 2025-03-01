'use client';

import { useState } from 'react';
import { skills } from '../data/skills';

export default function ArmorSetResult({ armorSet, totalSkills, isLoading }) {
  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm my-4 border border-gray-200 flex justify-center items-center py-8">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-3"></div>
          <p className="text-gray-600">Finding the best armor set...</p>
        </div>
      </div>
    );
  }
  
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

  // Function to render decoration slots with appropriate visualization
  const renderSlots = (slots) => {
    if (!slots || slots.length === 0) return (
      <div className="flex items-center text-gray-400">
        <span className="text-gray-600 font-medium mr-1">Slots:</span>
        <span>None</span>
      </div>
    );
    
    return (
      <div className="flex items-center">
        <span className="text-gray-600 font-medium mr-1">Slots:</span>
        <div className="flex space-x-1">
          {slots.map((size, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center h-5 w-5 rounded-full text-xs font-bold border ${getSlotColor(size)}`}
              title={`Level ${size} decoration slot`}
            >
              {size}
            </div>
          ))}
        </div>
        <span className="ml-1 text-xs text-gray-500">({slots.length} × Lv. {slots.join('/')})</span>
      </div>
    );
  };

  // Get appropriate color based on slot size
  const getSlotColor = (size) => {
    switch(size) {
      case 1: return "bg-gray-100 border-gray-300 text-gray-600";
      case 2: return "bg-blue-50 border-blue-300 text-blue-600";
      case 3: return "bg-purple-50 border-purple-300 text-purple-600";
      case 4: return "bg-yellow-50 border-yellow-400 text-yellow-700";
      default: return "bg-gray-100 border-gray-300 text-gray-600";
    }
  };

  // Get color class for element type
  const getElementColor = (element) => {
    switch (element.toLowerCase()) {
      case 'fire': return 'text-red-600';
      case 'water': return 'text-blue-600';
      case 'thunder': return 'text-yellow-600';
      case 'ice': return 'text-slate-200';  // Using slate-200 for white to ensure visibility
      case 'dragon': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };
  
  // Get background color for element type (for labels/badges)
  const getElementBgColor = (element) => {
    switch (element.toLowerCase()) {
      case 'fire': return 'bg-red-100';
      case 'water': return 'bg-blue-100';
      case 'thunder': return 'bg-yellow-100';
      case 'ice': return 'bg-slate-100';
      case 'dragon': return 'bg-purple-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm my-4 border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">Recommended Armor Set</h3>
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
                  <span className={`capitalize font-medium mr-1 ${getElementColor(element)}`}>
                    {element}:
                  </span>
                  <span className={`${value >= 0 ? 'text-green-600' : 'text-red-600'} font-bold`}>
                    {value > 0 ? '+' : ''}{value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
          Armor Pieces
        </h4>
        
        <div className="mb-2 text-xs bg-gray-50 p-2 rounded border border-gray-200">
          <p className="font-medium text-gray-700">Decoration slots legend:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-4 w-4 rounded-full border bg-gray-100 border-gray-300 text-gray-600 text-xs font-bold mr-1">
                1
              </div>
              <span>Level 1 slot</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-4 w-4 rounded-full border bg-blue-50 border-blue-300 text-blue-600 text-xs font-bold mr-1">
                2
              </div>
              <span>Level 2 slot</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-4 w-4 rounded-full border bg-purple-50 border-purple-300 text-purple-600 text-xs font-bold mr-1">
                3
              </div>
              <span>Level 3 slot</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-4 w-4 rounded-full border bg-yellow-50 border-yellow-400 text-yellow-700 text-xs font-bold mr-1">
                4
              </div>
              <span>Level 4 slot</span>
            </div>
          </div>
        </div>
        
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
            <div key={type} className="flex flex-col p-3 bg-gray-50 rounded border border-gray-200 text-sm">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="capitalize font-medium text-gray-800 mr-1">{type}:</span>
                  <span className="text-gray-700 truncate">{armorPieces[type]?.name || 'None'}</span>
                </div>
                <div className="text-gray-700 font-medium">DEF: {armorPieces[type]?.defense || 0}</div>
              </div>
              
              <div className="mt-1.5">
                {renderSlots(armorPieces[type]?.slots)}
              </div>
              
              {armorPieces[type]?.skills && armorPieces[type]?.skills.length > 0 && (
                <div className="flex flex-wrap items-center mt-1.5">
                  <span className="text-gray-600 font-medium mr-1">Skills:</span>
                  <div className="flex flex-wrap gap-x-2">
                    {armorPieces[type].skills.map(skill => {
                      const skillData = skills.find(s => s.id === skill.id);
                      return (
                        <span key={skill.id} className="text-gray-700">
                          {skillData?.name} {Array(skill.level).fill('●').join('')}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {armorPieces[type]?.resistances && (
                <div className="flex items-center mt-1.5">
                  <span className="text-gray-600 font-medium mr-1">Resistances:</span>
                  <div className="flex gap-1.5 text-xs">
                    {Object.entries(armorPieces[type].resistances)
                      .map(([element, value]) => (
                        <span 
                          key={element} 
                          className={`flex items-center px-1.5 rounded ${getElementBgColor(element)} ${value >= 0 ? 'text-gray-800' : 'text-red-600'}`}
                          title={`${element.charAt(0).toUpperCase() + element.slice(1)} resistance`}
                        >
                          <span className={`font-medium ${getElementColor(element)}`}>
                            {element.charAt(0).toUpperCase()}
                          </span>
                          <span>{value > 0 ? '+' : ''}{value}</span>
                        </span>
                      ))
                    }
                  </div>
                </div>
              )}
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
    </div>
  );
}