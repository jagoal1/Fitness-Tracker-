import { useState } from "react";

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exercises = [
    { name: "Push Up", bodyPart: "Chest" },
    { name: "Squat", bodyPart: "Legs" },
    { name: "Plank", bodyPart: "Core" },
    { name: "Burpee", bodyPart: "Full Body" },
    // 👇 make sure all have `name` defined
  ];

  const filteredExercises = exercises.filter(exercise =>
    exercise?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Exercise Library</h2>
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-2 rounded mb-6 w-full"
      />

      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow rounded-lg border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{exercise.name}</h3>
              <p className="text-gray-600">{exercise.bodyPart}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No exercises found.</p>
        )}
      </ul>
    </div>
  );
};

export default Exercises;
