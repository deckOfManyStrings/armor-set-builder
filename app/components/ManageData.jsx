'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { skills } from '../data/skills';
import { armorSets, allArmorPieces } from '../data/armor';

export default function ManageData() {
  const [activeTab, setActiveTab] = useState('armorSets');
  const [editMode, setEditMode] = useState(false);
  const [selectedSet, setSelectedSet] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  
  // Form states
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    type: 'head',
    defense: 0,
    skills: []
  });
  
  // Reset form when changing selection
  useEffect(() => {
    if (selectedPiece) {
      setFormData({
        id: selectedPiece.id,
        name: selectedPiece.name,
        type: selectedPiece.type,
        defense: selectedPiece.defense,
        skills: [...selectedPiece.skills]
      });
    } else {
      setFormData({
        id: '',
        name: '',
        type: 'head',
        defense: 0,
        skills: []
      });
    }
  }, [selectedPiece]);

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { id: skills[0].id, level: 1 }]
    });
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...formData.skills];
    updatedSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [field]: field === 'level' ? parseInt(value) : value
    };
    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'defense' ? parseInt(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('In a real app, this would save the data to your database or local storage. Currently, the demo data is hardcoded in the data folder.');
    // In a real app, you would update your data source here
    // This is just a UI demonstration
  };

  const handleExport = () => {
    const dataToExport = {
      skills,
      armorSets
    };
    
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = 'armor-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        alert('Data imported successfully! In a real app, this would update your data store.');
        // In a real app, you would validate and update your data source here
        console.log('Imported data:', importedData);
      } catch (error) {
        alert('Error importing data. Please make sure it\'s valid JSON.');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-4 sm:py-8 px-3 sm:px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
          <h1 className="text-xl sm:text-2xl font-bold">Manage Armor Data</h1>
          <Link href="/" className="px-3 py-1 sm:px-4 sm:py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">
            Back to Builder
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap border-b">
            <button
              className={`px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm ${activeTab === 'armorSets' ? 'bg-blue-50 border-b-2 border-blue-500' : 'bg-white'}`}
              onClick={() => setActiveTab('armorSets')}
            >
              Armor Sets
            </button>
            <button
              className={`px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm ${activeTab === 'armorPieces' ? 'bg-blue-50 border-b-2 border-blue-500' : 'bg-white'}`}
              onClick={() => setActiveTab('armorPieces')}
            >
              Armor Pieces
            </button>
            <button
              className={`px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm ${activeTab === 'skills' ? 'bg-blue-50 border-b-2 border-blue-500' : 'bg-white'}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm ${activeTab === 'importExport' ? 'bg-blue-50 border-b-2 border-blue-500' : 'bg-white'}`}
              onClick={() => setActiveTab('importExport')}
            >
              Import/Export
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {/* Armor Sets Tab */}
            {activeTab === 'armorSets' && (
              <div>
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-semibold">Armor Sets</h2>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add New Set
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pieces</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {armorSets.map((set) => (
                        <tr key={set.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{set.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{set.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{set.pieces.length} pieces</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                            <button className="text-red-500 hover:text-red-700">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Armor Pieces Tab */}
            {activeTab === 'armorPieces' && (
              <div>
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-semibold">Armor Pieces</h2>
                  <div>
                    <button 
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                      onClick={() => {
                        setSelectedPiece(null);
                        setEditMode(true);
                      }}
                    >
                      Add New Piece
                    </button>
                    {editMode ? (
                      <button 
                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                        onClick={() => {
                          setEditMode(false);
                          setSelectedPiece(null);
                        }}
                      >
                        Cancel
                      </button>
                    ) : null}
                  </div>
                </div>
                
                {editMode ? (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">{selectedPiece ? 'Edit Armor Piece' : 'Add New Armor Piece'}</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                          <input
                            type="text"
                            name="id"
                            className="w-full p-2 border rounded"
                            value={formData.id}
                            onChange={handleFormChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            className="w-full p-2 border rounded"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                          <select
                            name="type"
                            className="w-full p-2 border rounded"
                            value={formData.type}
                            onChange={handleFormChange}
                            required
                          >
                            <option value="head">Head</option>
                            <option value="chest">Chest</option>
                            <option value="arms">Arms</option>
                            <option value="waist">Waist</option>
                            <option value="legs">Legs</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Defense</label>
                          <input
                            type="number"
                            name="defense"
                            className="w-full p-2 border rounded"
                            value={formData.defense}
                            onChange={handleFormChange}
                            required
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-medium text-gray-700">Skills</label>
                          <button
                            type="button"
                            className="text-sm text-blue-500 hover:text-blue-700"
                            onClick={handleAddSkill}
                          >
                            + Add Skill
                          </button>
                        </div>
                        
                        {formData.skills.length === 0 ? (
                          <p className="text-sm text-gray-500">No skills added yet.</p>
                        ) : (
                          <div className="space-y-2">
                            {formData.skills.map((skill, index) => (
                              <div key={index} className="flex items-center space-x-2 bg-white p-2 rounded border">
                                <select
                                  className="p-1 border rounded flex-grow"
                                  value={skill.id}
                                  onChange={(e) => handleSkillChange(index, 'id', e.target.value)}
                                >
                                  {skills.map((s) => (
                                    <option key={s.id} value={s.id}>
                                      {s.name}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  className="p-1 border rounded w-20"
                                  value={skill.level}
                                  onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                                >
                                  {[1, 2, 3, 4, 5, 6, 7].map((level) => (
                                    <option key={level} value={level}>
                                      Lv. {level}
                                    </option>
                                  ))}
                                </select>
                                <button
                                  type="button"
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => handleRemoveSkill(index)}
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          {selectedPiece ? 'Update Piece' : 'Add Piece'}
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defense</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {allArmorPieces.map((piece) => (
                          <tr key={piece.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{piece.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{piece.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{piece.defense}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {piece.skills.map((skill) => (
                                <span key={skill.id} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                                  {skills.find(s => s.id === skill.id)?.name || skill.id} Lv.{skill.level}
                                </span>
                              ))}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button 
                                className="text-blue-500 hover:text-blue-700 mr-3"
                                onClick={() => {
                                  setSelectedPiece(piece);
                                  setEditMode(true);
                                }}
                              >
                                Edit
                              </button>
                              <button className="text-red-500 hover:text-red-700">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-semibold">Skills</h2>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add New Skill
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Level</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {skills.map((skill) => (
                        <tr key={skill.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{skill.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{skill.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.maxLevel}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{skill.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                            <button className="text-red-500 hover:text-red-700">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Import/Export Tab */}
            {activeTab === 'importExport' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Import & Export Data</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Export Data</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Export your armor sets, pieces, and skills data to a JSON file for backup or sharing.
                    </p>
                    <button 
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={handleExport}
                    >
                      Export to JSON
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Import Data</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Import armor sets, pieces, and skills data from a JSON file. This will replace your existing data.
                    </p>
                    <label className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                      Import from JSON
                      <input 
                        type="file" 
                        accept=".json" 
                        className="hidden" 
                        onChange={handleImport}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}