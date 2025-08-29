
import React, { useState } from "react";
import ExerciseSearch from "./ExerciseSearch";
import { v4 as uuidv4 } from "uuid";

export default function WorkoutLog({ onSave }) {
  const [notes, setNotes] = useState("");
  const [exercises, setExercises] = useState([]);

  function addExercise(base) {
    setExercises(prev => [...prev, { localId: uuidv4(), id: base.id, name: base.name, sets: [{ reps: 8, weight: 0 }] }]);
  }
  function updateSet(exIndex, setIndex, field, value) {
    setExercises(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[exIndex].sets[setIndex][field] = value;
      return copy;
    });
  }
  function addSet(exIndex) {
    setExercises(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[exIndex].sets.push({ reps: 8, weight: 0 });
      return copy;
    });
  }
  function removeExercise(localId) {
    setExercises(prev => prev.filter(e => e.localId !== localId));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (exercises.length === 0) return alert("Add at least one exercise");
    const workout = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      notes,
      exercises: exercises.map(({id, name, sets}) => ({id, name, sets}))
    };
    onSave(workout);
    // reset
    setNotes(""); setExercises([]);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <h2 className="text-xl font-bold">Log Workout</h2>

      <ExerciseSearch onSelect={addExercise} />

      <div>
        {exercises.map((ex, i) => (
          <div key={ex.localId} className="p-3 border rounded mt-3">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{ex.name}</div>
              <button type="button" onClick={() => removeExercise(ex.localId)} className="text-sm text-red-600">Remove</button>
            </div>

            <div className="mt-2 space-y-2">
              {ex.sets.map((s, si) => (
                <div key={si} className="flex items-center gap-2">
                  <label>Reps</label>
                  <input type="number" value={s.reps} min="0" onChange={e => updateSet(i, si, "reps", Number(e.target.value))} className="w-20 p-1 border rounded"/>
                  <label>Weight</label>
                  <input type="number" value={s.weight} min="0" onChange={e => updateSet(i, si, "weight", Number(e.target.value))} className="w-24 p-1 border rounded"/> kg
                </div>
              ))}
              <button type="button" onClick={() => addSet(i)} className="mt-2 px-2 py-1 bg-gray-200 rounded">Add set</button>
            </div>
          </div>
        ))}
      </div>

      <textarea placeholder="Notes (optional)" value={notes} onChange={e => setNotes(e.target.value)} className="w-full p-2 border rounded" />

      <div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save Workout</button>
      </div>
    </form>
  );
}
