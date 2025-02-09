import React, { useState } from "react";

const PlantCareApp = () => {
  const [plants, setPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlant, setNewPlant] = useState({ name: "", species: "", notes: "" });

  const addPlant = () => {
    setPlants([...plants, newPlant]);
    setNewPlant({ name: "", species: "", notes: "" });
    setShowModal(false);
  };

  const removePlant = (index) => {
    setPlants(plants.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Plant Care Manager</h1>
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Plant
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plants.map((plant, index) => (
          <div key={index} className="rounded-xl shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p className="text-sm text-gray-600">Species: {plant.species}</p>
            <p className="text-sm text-gray-600">Notes: {plant.notes}</p>
            <button
              onClick={() => removePlant(index)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">Add a New Plant</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Plant Name"
                value={newPlant.name}
                onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Species"
                value={newPlant.species}
                onChange={(e) => setNewPlant({ ...newPlant, species: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Notes"
                value={newPlant.notes}
                onChange={(e) => setNewPlant({ ...newPlant, notes: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={addPlant}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Plant
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantCareApp;
