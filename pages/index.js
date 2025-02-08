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
    <div className="p-6 bg-gradient-to-b from-green-100 to-green-50 min-h-screen font-sans relative">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-green-800 flex justify-center items-center">
          Plant Care Manager <span className="ml-2">🌱</span>
        </h1>
        <p className="text-green-600 mt-2">Keep your green companions happy and thriving.</p>
      </header>

      {/* Success Pop-up */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-md shadow-md">
          Plant added successfully!
        </div>
      )}

      {/* Plant List */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Your Plant Collection</h2>
        {plants.length === 0 ? (
          <p className="text-center text-green-600">No plants added yet. Tap the + button to add your first plant!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="p-4 border border-green-300 rounded-lg bg-white shadow-md relative"
              >
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => removePlant(plant.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖
                  </button>
                </div>
                <h3 className="text-lg font-bold text-green-800">{plant.name}</h3>
                <p className="text-green-600 mt-1">Species: {plant.species}</p>
                <p className="text-green-600 mt-1">Acquired: {plant.acquisitionDate}</p>
                <p className="text-green-600 mt-1">Notes: {plant.notes}</p>
                <p className="text-green-600 mt-1">Category: {plant.category}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Add Plant Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700"
      >
        +
      </button>

      {/* Add Plant Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Add a New Plant</h2>
            <div className="grid gap-4">
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
              <div className="flex justify-end gap-4 mt-4">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantCareApp;
