import React, { useState } from 'react';

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({ name: '', type: '' });

  // Add Plant
  const addPlant = () => {
    if (newPlant.name && newPlant.type) {
      setPlants([...plants, { id: Date.now(), ...newPlant }]);
      setNewPlant({ name: '', type: '' });
    }
  };

  // Remove Plant
  const removePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Plant Care App 🌱</h1>
      <h2>Manage Your Plants</h2>

      {/* Add Plant Form */}
      <div>
        <input
          type="text"
          placeholder="Plant Name"
          value={newPlant.name}
          onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Plant Type"
          value={newPlant.type}
          onChange={(e) => setNewPlant({ ...newPlant, type: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addPlant} style={{ padding: '5px 10px' }}>
          Add Plant
        </button>
      </div>

      {/* Plant List */}
      <div style={{ marginTop: '20px' }}>
        <h3>Your Plants</h3>
        {plants.length === 0 ? (
          <p>No plants added yet. Start by adding a plant!</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {plants.map((plant) => (
              <li
                key={plant.id}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                }}
              >
                <strong>{plant.name}</strong> - {plant.type}
                <button
                  onClick={() => removePlant(plant.id)}
                  style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
