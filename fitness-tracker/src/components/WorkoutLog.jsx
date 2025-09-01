import { useState } from "react";

export default function WorkoutLog({ setWorkouts }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleDateString(),
    };
    setWorkouts((prev) => [...prev, newWorkout]);
    setExercise(""); setSets(""); setReps(""); setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-6">
      <h2 className="font-bold text-lg mb-2">Log Workout</h2>
      <input className="border p-2 mr-2" placeholder="Exercise"
        value={exercise} onChange={(e) => setExercise(e.target.value)} />
      <input className="border p-2 mr-2" placeholder="Sets"
        value={sets} onChange={(e) => setSets(e.target.value)} />
      <input className="border p-2 mr-2" placeholder="Reps"
        value={reps} onChange={(e) => setReps(e.target.value)} />
      <input className="border p-2 mr-2" placeholder="Weight (kg)"
        value={weight} onChange={(e) => setWeight(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
