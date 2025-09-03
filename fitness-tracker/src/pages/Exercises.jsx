import { useState } from "react";

const exerciseList = [
  // 🏋️ Upper Body
  { name: "Push Ups", description: "Great for chest, shoulders, and triceps." },
  { name: "Pull Ups", description: "Strengthens back, biceps, and grip." },
  { name: "Bench Press", description: "Targets chest, shoulders, and arms." },
  { name: "Bicep Curls", description: "Isolates and builds the biceps." },

  // 🦵 Lower Body
  { name: "Squats", description: "Builds quads, hamstrings, and glutes." },
  { name: "Lunges", description: "Improves balance and leg strength." },
  { name: "Deadlifts", description: "Works hamstrings, glutes, and lower back." },
  { name: "Calf Raises", description: "Strengthens calves and ankles." },

  // 🔥 Core
  { name: "Plank", description: "Core stability and endurance exercise." },
  { name: "Crunches", description: "Targets the abdominal muscles." },
  { name: "Russian Twists", description: "Works obliques and improves rotation strength." },
  { name: "Leg Raises", description: "Strengthens lower abs and hip flexors." },

  // ❤️ Cardio
  { name: "Jump Rope", description: "Great for cardio, agility, and footwork." },
  { name: "Burpees", description: "Full body movement that builds stamina." },
  { name: "Mountain Climbers", description: "Core + cardio + endurance exercise." },
  { name: "Running", description: "Improves overall cardiovascular health." },
];

const Exercises = () => {
  const [search, setSearch] = useState("");

  const filteredExercises = exerciseList.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        Exercise Library
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search exercises by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block mb-6 p-3 rounded-md 
                   border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 
                   text-gray-900 dark:text-gray-100 
                   placeholder-gray-400 dark:placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Exercise Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise, index) => (
            <div
              key={index}
              className="p-5 bg-white dark:bg-gray-800 dark:text-gray-100 
                         shadow-md rounded-xl border border-gray-200 dark:border-gray-700 
                         hover:shadow-lg transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exercise.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500 dark:text-gray-400">
            No exercises match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Exercises;
