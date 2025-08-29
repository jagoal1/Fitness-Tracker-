import React, { useState, useEffect } from "react";
import { fetchExercises } from "../api/wger";

export default function ExerciseSearch({ onSelect }) {
  const [q, setQ] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!q.trim()) { setExercises([]); return; }
      setLoading(true); setError(null);
      fetchExercises({ search: q, limit: 12 })
        .then(data => setExercises(data.results || []))
        .catch(e => setError(e.message))
        .finally(() => setLoading(false));
    }, 400);
    return () => clearTimeout(t);
  }, [q]);

  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search exercises (e.g., squat, biceps)"
        className="w-full p-2 border rounded"
      />
      {loading && <div className="mt-2">Searching…</div>}
      {error && <div className="mt-2 text-red-500">{error}</div>}
      {!loading && !error && q && exercises.length === 0 && <div className="mt-2">No exercises found.</div>}
      <ul className="mt-2 space-y-2 max-h-48 overflow-auto">
        {exercises.map(ex => (
          <li key={ex.id} className="p-2 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{ex.name}</div>
              <div className="text-sm" dangerouslySetInnerHTML={{ __html: ex.description?.slice(0,120) || "" }} />
            </div>
            <button
              onClick={() => onSelect({ id: ex.id, name: ex.name })}
              className="ml-4 px-3 py-1 rounded bg-blue-600 text-white"
            >Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}