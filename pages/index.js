import React, { useState } from 'react';

const PlantCareApp = () => {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({
    name: '',
    species: '',
    acquisitionDate: '',
    notes: '',
    category: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Add Plant
  const addPlant = () => {
    if (newPlant.name && newPlant.species) {
      setPlants([...plants, { id: Date.now(), ...newPlant }]);
      setNewPlant({ name: '', species: '', acquisitionDate: '', notes: '', category: '' });
      setShowForm(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000); // Auto-hide success message after 2 seconds
    }
  };

  // Remove Plant
  const removePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Plant Care Manager 🌱</h1>
        <p className="text-green-600">Your virtual assistant for plant care</p>
      </header>

      {/* Success Pop-up */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-md">
          Plant added successfully!
        </div>
      )}

      {/* Add Plant Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add New Plant
        </button>
      </div>

      {/* Add Plant Form */}
      {showForm && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">Add a New Plant</h2>
          <div className="grid gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Plant Name"
              value={newPlant.name}
              onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
              className="p-2 border border-green-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Species"
              value={newPlant.species}
              onChange={(e) => setNewPlant({ ...newPlant, species: e.target.value })}
              className="p-2 border border-green-300 rounded-md"
            />
            <input
              type="date"
              placeholder="Acquisition Date"
              value={newPlant.acquisitionDate}
              onChange={(e) => setNewPlant({ ...newPlant, acquisitionDate: e.target.value })}
              className="p-2 border border-green-300 rounded-md"
            />
            <textarea
              placeholder="Notes"
              value={newPlant.notes}
              onChange={(e) => setNewPlant({ ...newPlant, notes: e.target.value })}
              className="p-2 border border-green-300 rounded-md"
            />
            <select
              value={newPlant.category}
              onChange={(e) => setNewPlant({ ...newPlant, category: e.target.value })}
              className="p-2 border border-green-300 rounded-md"
            >
              <option value="">Select Category</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Succulent">Succulent</option>
              <option value="Flowering">Flowering</option>
            </select>
            <div className="flex justify-center gap-4">
              <button
                onClick={addPlant}
                className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add Plant
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Plant List */}
      <section>
        <h2 className="text-xl font-semibold text-green-700 mb-4">Your Plant Collection</h2>
        {plants.length === 0 ? (
          <p className="text-center text-green-600">No plants added yet. Start by adding your first plant!</p>
        ) : (
          <ul className="grid gap-4">
            {plants.map((plant) => (
              <li
                key={plant.id}
                className="p-4 border border-green-300 rounded-md bg-white shadow-sm"
              >
                <h3 className="text-lg font-bold text-green-800">{plant.name}</h3>
                <p className="text-green-600">Species: {plant.species}</p>
                <p className="text-green-600">Acquired on: {plant.acquisitionDate}</p>
                <p className="text-green-600">Notes: {plant.notes}</p>
                <p className="text-green-600">Category: {plant.category}</p>
                <button
                  onClick={() => removePlant(plant.id)}
                  className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove Plant
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default PlantCareApp;
