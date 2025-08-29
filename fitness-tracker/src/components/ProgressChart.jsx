import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ProgressChart({ workouts }) {
  // aggregate total weight per day
  const data = useMemo(() => {
    const map = {};
    workouts.forEach(w => {
      const d = new Date(w.timestamp).toISOString().slice(0,10);
      if (!map[d]) map[d] = 0;
      w.exercises.forEach(ex => {
        ex.sets.forEach(s => {
          const weight = Number(s.weight) || 0;
          const reps = Number(s.reps) || 0;
          map[d] += weight * reps;
        });
      });
    });
    // convert to array sorted by date
    return Object.keys(map).sort().map(date => ({ date, totalWeight: Math.round(map[date]) }));
  }, [workouts]);

  if (data.length === 0) return <div className="p-4">No progress data yet.</div>;

  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold mb-2">Progress — Total weight lifted (per day)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalWeight" stroke="#1f2937" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}