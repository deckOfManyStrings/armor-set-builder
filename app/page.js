'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SkillSelector from './components/SkillSelector';
import ArmorSetResult from './components/ArmorSetResult';
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
      <main className="container mx-auto py-4 sm:py-8 px-3 sm:px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Armor Set Builder</h1>
          <Link href="/manage-data" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base">
            Manage Data
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div>
            <SkillSelector 
              selectedSkills={selectedSkills} 
              onSkillsChange={setSelectedSkills} 
            />
          </div>
          
          <div>
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Recommended Armor</h2>
              
              {selectedSkills.length === 0 ? (
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-sm sm:text-base">Select some skills to get armor recommendations</p>
                </div>
              ) : isLoading ? (
                <div className="flex justify-center items-center h-32 sm:h-40">
                  <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <ArmorSetResult 
                  armorSet={recommendedSet} 
                  totalSkills={recommendedSet?.skills || {}}
                />
              )}
            </div>
            
            <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold mb-2">About This Tool</h2>
              <p className="text-sm sm:text-base text-gray-700">
                This tool helps you find the optimal armor combination to achieve your desired skills.
                Select the skills you want, and we'll recommend the best armor set.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-2">
                Currently using a simplified dataset for demonstration.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500">
        <p>Armor Set Builder &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}