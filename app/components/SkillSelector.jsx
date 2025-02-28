'use client';

import { useState, useEffect } from 'react';
import { skills } from '../data/skills';

export default function SkillSelector({ selectedSkills, onSkillsChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [expandedSkill, setExpandedSkill] = useState(null);

  useEffect(() => {
    setFilteredSkills(
      skills.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSkillToggle = (skillId, level) => {
    const skillIndex = selectedSkills.findIndex(s => s.id === skillId);
    
    if (skillIndex > -1) {
      // If already selected, update level or remove if level is 0
      if (level === 0) {
        onSkillsChange(selectedSkills.filter(s => s.id !== skillId));
      } else {
        const updatedSkills = [...selectedSkills];
        updatedSkills[skillIndex] = { ...updatedSkills[skillIndex], level };
        onSkillsChange(updatedSkills);
      }
    } else if (level > 0) {
      // Add new skill with level
      const skillData = skills.find(s => s.id === skillId);
      onSkillsChange([...selectedSkills, { 
        id: skillId, 
        name: skillData.name, 
        level, 
        maxLevel: skillData.maxLevel,
        type: skillData.type
      }]);
    }
  };

  const getSelectedLevel = (skillId) => {
    const skill = selectedSkills.find(s => s.id === skillId);
    return skill ? skill.level : 0;
  };
  
  const toggleExpandSkill = (skillId) => {
    setExpandedSkill(expandedSkill === skillId ? null : skillId);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Select Skills</h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search skills..."
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex mb-3 gap-2 flex-wrap">
        <button 
          onClick={() => setSearchTerm('')}
          className={`px-2 py-1 text-xs rounded-full ${searchTerm === '' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All
        </button>
        <button 
          onClick={() => setSearchTerm('attack')}
          className={`px-2 py-1 text-xs rounded-full ${searchTerm === 'attack' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Attack
        </button>
        <button 
          onClick={() => setSearchTerm('defense')}
          className={`px-2 py-1 text-xs rounded-full ${searchTerm === 'defense' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Defense
        </button>
        <button 
          onClick={() => setSearchTerm('resistance')}
          className={`px-2 py-1 text-xs rounded-full ${searchTerm === 'resistance' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Resistance
        </button>
        <button 
          onClick={() => setSearchTerm('elemental')}
          className={`px-2 py-1 text-xs rounded-full ${searchTerm === 'elemental' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Elemental
        </button>
      </div>
      
      <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
        {filteredSkills.map(skill => {
          const selectedLevel = getSelectedLevel(skill.id);
          const isExpanded = expandedSkill === skill.id;
          
          return (
            <div key={skill.id} className="bg-gray-50 p-3 rounded border border-gray-200">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-800">
                        {skill.name}
                      </h3>
                      {skill.type && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs bg-gray-200 text-gray-700 rounded">
                          {skill.type?.replace('Equipment Skill', 'Eq.').replace('Group Skill', 'Group').replace('Set Bonus Skill', 'Set')}
                        </span>
                      )}
                      <button 
                        onClick={() => toggleExpandSkill(skill.id)}
                        className="ml-auto sm:ml-2 text-gray-500 hover:text-gray-700 text-xs p-1"
                      >
                        {isExpanded ? '▼' : '▶'}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{skill.description}</p>
                  </div>
                  <div className="flex items-center self-end sm:self-auto mt-1 sm:mt-0">
                    {Array.from({ length: skill.maxLevel }, (_, i) => i + 1).map(level => (
                      <button
                        key={level}
                        className={`w-7 h-7 rounded-full mx-1 flex items-center justify-center ${
                          selectedLevel >= level
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => handleSkillToggle(skill.id, selectedLevel === level ? level - 1 : level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                
                {isExpanded && skill.effects && (
                  <div className="mt-1 text-xs border-t border-gray-200 pt-2">
                    <div className="grid grid-cols-1 gap-1">
                      {skill.effects.map((effect, index) => (
                        <div 
                          key={index} 
                          className={`p-1 rounded ${selectedLevel >= effect.level ? 'bg-blue-50' : 'bg-gray-50'} flex items-center`}
                        >
                          <span className={`w-5 h-5 inline-flex items-center justify-center rounded-full mr-2 ${selectedLevel >= effect.level ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
                            {effect.level}
                          </span>
                          <span className={selectedLevel >= effect.level ? 'text-blue-900' : 'text-gray-600'}>
                            {effect.effect}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 bg-gray-50 p-3 rounded border border-gray-200">
        <h3 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Selected Skills</h3>
        {selectedSkills.length === 0 ? (
          <p className="text-gray-500 mt-2 text-sm italic">No skills selected</p>
        ) : (
          <ul className="mt-2 space-y-1">
            {selectedSkills.map(skill => {
              const skillData = skills.find(s => s.id === skill.id);
              const effect = skillData?.effects?.find(e => e.level === skill.level)?.effect;
              
              return (
                <li key={skill.id} className="flex flex-col py-1 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                    <span className="font-medium text-gray-700">Level {skill.level}/{skill.maxLevel}</span>
                  </div>
                  {effect && (
                    <span className="text-xs text-gray-600 mt-0.5">{effect}</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}