import React, { useState } from "react";

const PlantCareApp = () => {
  const [plants, setPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlant, setNewPlant] = useState({ name: "", species: "", notes: "", schedule: "" });

  const addPlant = () => {
    if (newPlant.name && newPlant.species) {
      setPlants([...plants, newPlant]);
      setNewPlant({ name: "", species: "", notes: "", schedule: "" });
      setShowModal(false);
    }
  };

  const removePlant = (index) => {
    setPlants(plants.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Plant Care Manager</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
        >
          Add Plant
        </button>
      </header>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
              <h2 className="text-xl font-semibold text-green-800">{plant.name}</h2>
              <p className="text-sm text-gray-600">Species: {plant.species}</p>
              <p className="text-sm text-gray-600">Notes: {plant.notes}</p>
              <p className="text-sm text-gray-600">Schedule: {plant.schedule}</p>
            </div>
            <button
              onClick={() => removePlant(index)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-green-700 mb-4">Add a New Plant</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Plant Name"
                value={newPlant.name}
                onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Species"
                value={newPlant.species}
                onChange={(e) => setNewPlant({ ...newPlant, species: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Notes"
                value={newPlant.notes}
                onChange={(e) => setNewPlant({ ...newPlant, notes: e.target.value })}
                className="w-full p-2 border rounded"
              ></textarea>
              <input
                type="text"
                placeholder="Care Schedule (e.g., Water every 3 days)"
                value={newPlant.schedule}
                onChange={(e) => setNewPlant({ ...newPlant, schedule: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={addPlant}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Add Plant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantCareApp;
