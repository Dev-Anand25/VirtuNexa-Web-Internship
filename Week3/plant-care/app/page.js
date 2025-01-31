"use client"
import React, { useState } from "react";

const PlantCareScheduler = () => {
  const [plants, setPlants] = useState([]);
  const [plantName, setPlantName] = useState("");
  const [wateringInterval, setWateringInterval] = useState("");
  const [pruningInterval, setPruningInterval] = useState("");
  const [fertilizingInterval, setFertilizingInterval] = useState("");

  const addPlant = () => {
    if (!plantName || !wateringInterval || !pruningInterval || !fertilizingInterval) return;

    setPlants([
    ...plants,
      {
        name: plantName,
        watering: parseInt(wateringInterval),
        pruning: parseInt(pruningInterval),
        fertilizing: parseInt(fertilizingInterval),
        lastWatered: new Date(),
        lastPruned: new Date(),
        lastFertilized: new Date(),
      },
    ]);

    setPlantName("");
    setWateringInterval("");
    setPruningInterval("");
    setFertilizingInterval("");
  };

  const getNextReminder = (lastDate, interval) => {
    if (!interval || isNaN(interval)) return "Invalid interval";
    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + interval);
    return nextDate.toDateString();
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Plant Care Scheduler</h1>
      <div className="mb-4">
        <label className="block">Plant Name:</label>
        <input
          type="text"
          placeholder="Enter plant name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <label className="block">Watering Interval (days):</label>
        <input
          type="number"
          placeholder="Enter watering interval"
          value={wateringInterval}
          onChange={(e) => setWateringInterval(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <label className="block">Pruning Interval (days):</label>
        <input
          type="number"
          placeholder="Enter pruning interval"
          value={pruningInterval}
          onChange={(e) => setPruningInterval(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <label className="block">Fertilizing Interval (days):</label>
        <input
          type="number"
          placeholder="Enter fertilizing interval"
          value={fertilizingInterval}
          onChange={(e) => setFertilizingInterval(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button onClick={addPlant} className="bg-green-500 text-white px-4 py-2 mt-2 w-full">
          Add Plant
        </button>
      </div>

      <div>
        {plants.map((plant, index) => (
          <div key={index} className="border p-4 mb-2">
            <h2 className="font-bold">{plant.name}</h2>
            <p>Next Watering: {getNextReminder(plant.lastWatered, plant.watering)}</p>
            <p>Next Pruning: {getNextReminder(plant.lastPruned, plant.pruning)}</p>
            <p>Next Fertilizing: {getNextReminder(plant.lastFertilized, plant.fertilizing)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareScheduler;
