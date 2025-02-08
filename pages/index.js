// Plant Care App Functionalities

// State to manage plant collection
const plants = [
  // Example plant objects:
  // { id: 1, name: "Aloe Vera", type: "Succulent", schedule: { water: "Every 3 days", sunlight: "Full Sun", fertilize: "Monthly" }, careGuide: "Aloe Vera needs bright sunlight and moderate watering." }
];

// Function to add a new plant
function addPlant(plant) {
  plants.push({ ...plant, id: Date.now() });
  console.log("Plant added:", plant);
}

// Function to remove a plant by ID
function removePlant(id) {
  const index = plants.findIndex((plant) => plant.id === id);
  if (index !== -1) {
    plants.splice(index, 1);
    console.log(`Plant with ID ${id} removed.`);
  } else {
    console.error(`Plant with ID ${id} not found.`);
  }
}

// Function to update plant details
function updatePlant(id, updatedDetails) {
  const plant = plants.find((p) => p.id === id);
  if (plant) {
    Object.assign(plant, updatedDetails);
    console.log(`Plant with ID ${id} updated:`, updatedDetails);
  } else {
    console.error(`Plant with ID ${id} not found.`);
  }
}

// Function to set care schedules for watering, sunlight, fertilization
function setCareSchedule(id, schedule) {
  const plant = plants.find((p) => p.id === id);
  if (plant) {
    plant.schedule = schedule;
    console.log(`Care schedule set for plant ID ${id}:`, schedule);
  } else {
    console.error(`Plant with ID ${id} not found.`);
  }
}

// Function to get a plant's care guide
function getCareGuide(plantType) {
  // Example guide - Ideally, this could fetch from a database or API
  const careGuides = {
    "Succulent": "Succulents require bright sunlight and minimal watering.",
    "Fern": "Ferns need indirect sunlight and moist soil.",
    "Orchid": "Orchids prefer bright, indirect light and weekly watering."
  };

  return careGuides[plantType] || "Care guide not available for this plant type.";
}

// UI Interaction Mockup
// Adding a new plant example
addPlant({
  name: "Snake Plant",
  type: "Succulent",
  schedule: {
    water: "Every 2 weeks",
    sunlight: "Low to Medium Light",
    fertilize: "Bi-Annual"
  }
});

// Setting a care schedule example
setCareSchedule(1, { water: "Weekly", sunlight: "Bright Indirect Light", fertilize: "Monthly" });

// Getting a care guide example
const guide = getCareGuide("Succulent");
console.log("Care Guide for Succulent:", guide);

// Removing a plant example
removePlant(1);

// Updating a plant example
updatePlant(2, { name: "Updated Plant Name" });
