export default function WorkoutHistory({ workouts }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <ul>
          {workouts.map((w) => (
            <li key={w.id} className="border-b py-2">
              <strong>{w.date}:</strong> {w.exercise} – {w.sets}x{w.reps} @ {w.weight}kg
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
