'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SkillSelector from './components/SkillSelector';
import ArmorSetResult from './components/ArmorSetResult';
import GroupSkills from './components/GroupSkills';
import { findSimpleArmorSet } from './utils/armorFinder';

export default function Home() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [recommendedSet, setRecommendedSet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Update recommendations when selected skills change
  useEffect(() => {
    if (selectedSkills.length === 0) {
      setRecommendedSet(null);
      return;
    }

    setIsLoading(true);
    
    // Simulate processing delay for better UX
    setTimeout(() => {
      const result = findSimpleArmorSet(selectedSkills);
      setRecommendedSet(result);
      setIsLoading(false);
    }, 500);
  }, [selectedSkills]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 bg-white shadow">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-800">Armor Set Builder</h1>
          <p className="text-gray-600 mt-2">Find the perfect armor combination for your skills</p>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="bg-blue-50 p-4 rounded-lg mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-blue-700">
              Select skills to find the best armor set combination
            </p>
            {/* <Link 
              href="/manage-data" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
              Manage Armor Data
            </Link> */}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <SkillSelector 
              selectedSkills={selectedSkills} 
              onSkillsChange={setSelectedSkills} 
            />
            
            {/* Add the Group Skills Display component */}
            <GroupSkills />
          </div>
          
          <div>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                Recommended Armor
              </h2>
              
              {selectedSkills.length === 0 ? (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-600">Select some skills to get armor recommendations</p>
                </div>
              ) : isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <ArmorSetResult 
                  armorSet={recommendedSet} 
                  totalSkills={recommendedSet?.skills || {}}
                />
              )}
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-2 text-gray-800 border-b pb-2">
                About This Tool
              </h2>
              <div className="text-gray-600">
                <p>
                  This tool helps you find the optimal armor combination to achieve your desired skills.
                  Select the skills you want, and we&apos;ll recommend the best armor set.
                </p>
                <p className="mt-2">
                  This Armor builder is still a work in progress and may not always provide the best results or the correct information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500 mt-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p>Armor Set Builder &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}