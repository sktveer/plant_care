import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      <Button onClick={() => setShowModal(true)} className="mb-4">
        Add Plant
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plants.map((plant, index) => (
          <Card key={index} className="rounded-xl shadow-md">
            <CardContent>
              <h2 className="text-xl font-semibold">{plant.name}</h2>
              <p className="text-sm text-gray-600">Species: {plant.species}</p>
              <p className="text-sm text-gray-600">Notes: {plant.notes}</p>
              <Button
                onClick={() => removePlant(index)}
                className="mt-4 bg-red-500 hover:bg-red-600"
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">Add a New Plant</h2>
            <div className="mb-4">
              <Input
                placeholder="Plant Name"
                value={newPlant.name}
                onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                placeholder="Species"
                value={newPlant.species}
                onChange={(e) => setNewPlant({ ...newPlant, species: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Textarea
                placeholder="Notes"
                value={newPlant.notes}
                onChange={(e) => setNewPlant({ ...newPlant, notes: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={addPlant} className="mr-2">
                Add Plant
              </Button>
              <Button onClick={() => setShowModal(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantCareApp;
