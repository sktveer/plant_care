import React, { useState } from "react";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlant, setNewPlant] = useState({ name: "", species: "", notes: "" });
  const [selectedPlant, setSelectedPlant] = useState(null);

  const addPlant = () => {
    if (newPlant.name && newPlant.species) {
      setPlants([...plants, newPlant]);
      setNewPlant({ name: "", species: "", notes: "" });
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-50 to-green-200 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold text-green-800">🌿 Welcome to Your Plant Haven</h1>
        {plants.length > 0 && (
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700"
          >
            + Add Plant
          </button>
        )}
      </header>

      {/* Call to Action */}
      {!plants.length && (
        <div className="text-center mt-20">
          <h2 className="text-2xl text-green-700 font-semibold mb-4">Your garden awaits!</h2>
          <p className="text-gray-600 mb-6">Add your first plant to start your green journey 🌱</p>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 shadow-md"
          >
            Add Your First Plant
          </button>
        </div>
      )}

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedPlant(plant)}
          >
            <img
              src="https://i.imgur.com/y4DqwI4.png"
              alt="Default Plant"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-green-800">{plant.name}</h2>
            <p className="text-gray-600">Species: {plant.species}</p>
            <p className="text-gray-600">{plant.notes}</p>
          </div>
        ))}
      </div>

      {/* Plant Detail Page */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <button
              onClick={() => setSelectedPlant(null)}
              className="text-red-500 font-bold text-right block mb-4"
            >
              Close
            </button>
            <img
              src="https://i.imgur.com/y4DqwI4.png"
              alt="Plant Detail"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl font-bold text-green-800 mb-2">{selectedPlant.name}</h2>
            <p className="text-gray-600 mb-2">Species: {selectedPlant.species}</p>
            <p className="text-gray-600">{selectedPlant.notes}</p>
          </div>
        </div>
      )}

      {/* Add Plant Modal */}
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
}
