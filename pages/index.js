import React, { useState } from "react";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlant, setNewPlant] = useState({ name: "", species: "", notes: "" });
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [wateredToday, setWateredToday] = useState([]);

  const addPlant = () => {
    if (newPlant.name && newPlant.species) {
      setPlants([...plants, { ...newPlant, streak: 0 }]);
      setNewPlant({ name: "", species: "", notes: "" });
      setShowModal(false);
    }
  };

  const toggleWatered = (index) => {
    const updatedPlants = [...plants];
    if (wateredToday.includes(index)) {
      setWateredToday(wateredToday.filter((i) => i !== index));
      updatedPlants[index].streak -= 1;
    } else {
      setWateredToday([...wateredToday, index]);
      updatedPlants[index].streak += 1;
    }
    setPlants(updatedPlants);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-green-100 to-green-200 p-6">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center py-16 bg-gradient-to-r from-green-400 via-green-300 to-green-100 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-green-800 mb-4">Nurture Your Green Haven</h1>
        <p className="text-xl text-gray-700 mb-6">Track. Care. Flourish. Your plants deserve the best!</p>
        <button
          onClick={() => setShowModal(true)}
          className="px-8 py-4 bg-green-600 text-white font-bold text-xl rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Add Your First Plant
        </button>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-700 text-3xl">🌱</span>
          </div>
          <h3 className="text-lg font-bold text-green-700">Plant Profiles</h3>
          <p className="text-gray-600">Create profiles to track your plant collection.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-700 text-3xl">📅</span>
          </div>
          <h3 className="text-lg font-bold text-green-700">Care Schedules</h3>
          <p className="text-gray-600">Set reminders and never miss a watering.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-700 text-3xl">💧</span>
          </div>
          <h3 className="text-lg font-bold text-green-700">Watering Tips</h3>
          <p className="text-gray-600">Learn how to keep your plants healthy.</p>
        </div>
      </div>

      {/* Plants Section */}
      <h2 className="text-3xl font-bold text-green-800 mt-16 mb-4">My Plants</h2>
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
            <p className="text-gray-600 mb-4">{plant.notes}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWatered(index);
                }}
                className={`px-4 py-2 rounded-lg shadow-md text-white font-medium ${wateredToday.includes(index) ? "bg-green-600" : "bg-gray-400"} hover:opacity-90`}
              >
                {wateredToday.includes(index) ? "Watered" : "Water"}
              </button>
              <div className="text-green-700 font-bold">Streak: {plant.streak} days</div>
            </div>
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
