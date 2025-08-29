
import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import WorkoutLog from "./components/WorkoutLog";
import WorkoutHistory from "./components/WorkoutHistory";
import ProgressChart from "./components/ProgressChart";

export default function App() {
  const [workouts, setWorkouts] = useLocalStorage("fit_workouts_v1", []);

  function addWorkout(w) {
    setWorkouts(prev => [w, ...prev]);
  }

  function deleteWorkout(id) {
    if (!confirm("Delete this workout?")) return;
    setWorkouts(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Fitness Tracker</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div><WorkoutLog onSave={addWorkout} /></div>
        <div className="space-y-4">
          <ProgressChart workouts={workouts} />
          <WorkoutHistory workouts={workouts} onDelete={deleteWorkout} />
        </div>
      </div>
    </div>
  );
}
