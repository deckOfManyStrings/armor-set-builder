export const armorSets = [
    {
      id: 'rathalos',
      name: 'Rathalos Set',
      pieces: [
        {
          id: 'rathalos_helm',
          name: 'Rathalos Helm',
          type: 'head',
          defense: 38,
          skills: [
            { id: 'attack', level: 2 },
            { id: 'fire_res', level: 1 }
          ]
        },
        {
          id: 'rathalos_mail',
          name: 'Rathalos Mail',
          type: 'chest',
          defense: 38,
          skills: [
            { id: 'weakness_exploit', level: 2 },
            { id: 'fire_res', level: 1 }
          ]
        },
        {
          id: 'rathalos_vambraces',
          name: 'Rathalos Vambraces',
          type: 'arms',
          defense: 38,
          skills: [
            { id: 'attack', level: 1 },
            { id: 'fire_res', level: 1 }
          ]
        },
        {
          id: 'rathalos_coil',
          name: 'Rathalos Coil',
          type: 'waist',
          defense: 38,
          skills: [
            { id: 'attack', level: 1 },
            { id: 'critical_eye', level: 1 }
          ]
        },
        {
          id: 'rathalos_greaves',
          name: 'Rathalos Greaves',
          type: 'legs',
          defense: 38,
          skills: [
            { id: 'critical_eye', level: 2 }
          ]
        }
      ]
    },
    
    {
      id: 'nargacuga',
      name: 'Nargacuga Set',
      pieces: [
        {
          id: 'nargacuga_helm',
          name: 'Nargacuga Helm',
          type: 'head',
          defense: 36,
          skills: [
            { id: 'critical_eye', level: 2 },
            { id: 'thunder_res', level: 1 }
          ]
        },
        {
          id: 'nargacuga_mail',
          name: 'Nargacuga Mail',
          type: 'chest',
          defense: 36,
          skills: [
            { id: 'critical_eye', level: 1 },
            { id: 'critical_boost', level: 1 }
          ]
        },
        {
          id: 'nargacuga_vambraces',
          name: 'Nargacuga Vambraces',
          type: 'arms',
          defense: 36,
          skills: [
            { id: 'critical_eye', level: 1 },
            { id: 'thunder_res', level: 1 }
          ]
        },
        {
          id: 'nargacuga_coil',
          name: 'Nargacuga Coil',
          type: 'waist',
          defense: 36,
          skills: [
            { id: 'critical_boost', level: 1 },
            { id: 'thunder_res', level: 1 }
          ]
        },
        {
          id: 'nargacuga_greaves',
          name: 'Nargacuga Greaves',
          type: 'legs',
          defense: 36,
          skills: [
            { id: 'critical_eye', level: 2 }
          ]
        }
      ]
    },
    
    {
      id: 'bone',
      name: 'Bone Set',
      pieces: [
        {
          id: 'bone_helm',
          name: 'Bone Helm',
          type: 'head',
          defense: 20,
          skills: [
            { id: 'attack', level: 1 }
          ]
        },
        {
          id: 'bone_mail',
          name: 'Bone Mail',
          type: 'chest',
          defense: 20,
          skills: [
            { id: 'defense', level: 1 }
          ]
        },
        {
          id: 'bone_vambraces',
          name: 'Bone Vambraces',
          type: 'arms',
          defense: 20,
          skills: [
            { id: 'attack', level: 2 }
          ]
        },
        {
          id: 'bone_coil',
          name: 'Bone Coil',
          type: 'waist',
          defense: 20,
          skills: [
            { id: 'defense', level: 2 }
          ]
        },
        {
          id: 'bone_greaves',
          name: 'Bone Greaves',
          type: 'legs',
          defense: 20,
          skills: [
            { id: 'attack', level: 1 }
          ]
        }
      ]
    }
  ];

// Create a flattened array of all armor pieces for easier processing
export const allArmorPieces = armorSets.flatMap(set => 
    set.pieces.map(piece => ({
      ...piece,
      setId: set.id,
      setName: set.name
    }))
  );