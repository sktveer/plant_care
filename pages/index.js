import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlant, setNewPlant] = useState({ name: "", species: "", notes: "" });
  const [successMessage, setSuccessMessage] = useState(false);
  const router = useRouter();

  const addPlant = () => {
    if (newPlant.name && newPlant.species) {
      setPlants([...plants, newPlant]);
      setNewPlant({ name: "", species: "", notes: "" });
      setShowModal(false);
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 3000); // Show success message for 3 seconds
    }
  };

  const openPlantDetails = (index) => {
    router.push(`/plant/${index}`); // Navigate to the plant detail page
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-green-700">My Plants</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600"
        >
          + Add Plant
        </button>
      </header>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
          Plant added successfully!
        </div>
      )}

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer"
            onClick={() => openPlantDetails(index)}
          >
            <img
              src="/default-plant.jpg"
              alt="Plant"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-green-800">{plant.name}</h2>
            <p className="text-gray-600">Species: {plant.species}</p>
            <p className="text-gray-600">{plant.notes}</p>
          </div>
        ))}
      </div>

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
