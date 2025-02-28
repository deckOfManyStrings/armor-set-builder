'use client';

import { useState, useEffect } from 'react';
import { skills } from '../data/skills';
import { getAllGroupSkills } from '../utils/armorFinder';

export default function GroupSkillsDisplay() {
  const [groupSkills, setGroupSkills] = useState([]);
  const [expandedSkill, setExpandedSkill] = useState(null);
  
  useEffect(() => {
    // Get all available group skills
    const allGroupSkills = getAllGroupSkills();
    setGroupSkills(allGroupSkills);
  }, []);
  
  const toggleExpandSkill = (skillId) => {
    setExpandedSkill(expandedSkill === skillId ? null : skillId);
  };

  if (groupSkills.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Group Skills</h2>
      
      <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
        {groupSkills.map(groupSkill => {
          const skillData = skills.find(s => s.id === groupSkill.id);
          const isExpanded = expandedSkill === groupSkill.id;
          
          if (!skillData) return null;
          
          return (
            <div key={groupSkill.id} className="bg-indigo-50 p-3 rounded border border-indigo-200">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-medium text-indigo-800">
                        {skillData.name}
                      </h3>
                      <button 
                        onClick={() => toggleExpandSkill(groupSkill.id)}
                        className="ml-auto sm:ml-2 text-indigo-500 hover:text-indigo-700 text-xs p-1"
                      >
                        {isExpanded ? '▼' : '▶'}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-indigo-600">
                      {skillData.description}
                    </p>
                    <div className="mt-1 flex items-center text-xs">
                      <span className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded mr-2">
                        {skillData.effects[0].effect}
                      </span>
                      <span className="text-indigo-600">
                        Required: 3 pieces
                      </span>
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="mt-1 text-xs border-t border-indigo-200 pt-2">
                    <h4 className="font-medium text-indigo-700">Available in:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1">
                      {groupSkill.pieces.length > 0 ? (
                        groupSkill.pieces.map((pieceId, index) => {
                          return (
                            <div 
                              key={index} 
                              className="p-1 rounded bg-indigo-100 text-indigo-800"
                            >
                              {pieceId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </div>
                          );
                        })
                      ) : (
                        <div className="p-1 text-indigo-600">No pieces available</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}