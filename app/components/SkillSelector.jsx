'use client';

import { useState, useEffect } from 'react';
import { skills } from '../data/skills';

export default function SkillSelector({ selectedSkills, onSkillsChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(skills);

  useEffect(() => {
    setFilteredSkills(
      skills.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      onSkillsChange([...selectedSkills, { id: skillId, name: skillData.name, level, maxLevel: skillData.maxLevel }]);
    }
  };

  const getSelectedLevel = (skillId) => {
    const skill = selectedSkills.find(s => s.id === skillId);
    return skill ? skill.level : 0;
  };

  return (
    <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Select Skills</h2>
      
      <div className="mb-3 sm:mb-4">
        <input
          type="text"
          placeholder="Search skills..."
          className="w-full p-2 text-sm sm:text-base border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-2 sm:space-y-3 max-h-60 sm:max-h-96 overflow-y-auto">
        {filteredSkills.map(skill => {
          const selectedLevel = getSelectedLevel(skill.id);
          
          return (
            <div key={skill.id} className="flex flex-col bg-white p-2 sm:p-3 rounded shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <h3 className="font-medium text-sm sm:text-base">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{skill.description}</p>
                </div>
                <div className="flex items-center self-end sm:self-auto">
                  {Array.from({ length: skill.maxLevel }, (_, i) => i + 1).map(level => (
                    <button
                      key={level}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full mx-1 flex items-center justify-center ${
                        selectedLevel >= level
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700'
                      } text-xs sm:text-sm`}
                      onClick={() => handleSkillToggle(skill.id, selectedLevel === level ? level - 1 : level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 sm:mt-4 bg-white p-2 sm:p-3 rounded shadow">
        <h3 className="font-bold text-sm sm:text-base">Selected Skills</h3>
        {selectedSkills.length === 0 ? (
          <p className="text-gray-500 mt-1 text-xs sm:text-sm">No skills selected</p>
        ) : (
          <ul className="mt-2 space-y-1">
            {selectedSkills.map(skill => (
              <li key={skill.id} className="flex justify-between text-xs sm:text-sm">
                <span>{skill.name}</span>
                <span className="font-medium">Level {skill.level}/{skill.maxLevel}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}