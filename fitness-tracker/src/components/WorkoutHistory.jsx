import React, { useMemo, useState } from "react";
import { format } from "date-fns"; // small helper

function simpleDate(ts) {
  return format(new Date(ts), "yyyy-MM-dd");
}

export default function WorkoutHistory({ workouts, onDelete }) {
  const [filter, setFilter] = useState("");

  // group by date
  const grouped = useMemo(() => {
    const map = {};
    workouts.forEach(w => {
      const d = simpleDate(w.timestamp);
      if (!map[d]) map[d] = [];
      map[d].push(w);
    });
    // return sorted dates desc
    return Object.keys(map).sort((a,b)=>b.localeCompare(a)).map(date => ({ date, items: map[date] }));
  }, [workouts]);

  const filtered = grouped.map(group => ({
    ...group,
    items: group.items.filter(w => {
      if (!filter.trim()) return true;
      return w.exercises.some(ex => ex.name.toLowerCase().includes(filter.toLowerCase()));
    })
  })).filter(g => g.items.length > 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Workout History</h2>
      <input placeholder="Filter by exercise name" value={filter} onChange={e => setFilter(e.target.value)} className="w-full p-2 border rounded my-2" />
      {filtered.length === 0 && <div>No workouts found for that filter.</div>}
      {filtered.map(group => (
        <div key={group.date} className="mt-4">
          <div className="font-semibold mb-2">{format(new Date(group.date), "EEEE, MMM d, yyyy")}</div>
          <div className="space-y-3">
            {group.items.map(w => (
              <div key={w.id} className="border rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-gray-600">{new Date(w.timestamp).toLocaleTimeString()}</div>
                    <div className="font-medium">{w.notes || "Workout"}</div>
                  </div>
                  <div>
                    <button onClick={() => onDelete(w.id)} className="text-sm text-red-600">Delete</button>
                  </div>
                </div>
                <div className="mt-2">
                  {w.exercises.map((ex, i) => (
                    <div key={i} className="mt-2">
                      <div className="font-semibold">{ex.name}</div>
                      <div className="text-sm">{ex.sets.map((s, si) => `Set ${si+1}: ${s.reps} reps @ ${s.weight}kg`).join(" — ")}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}