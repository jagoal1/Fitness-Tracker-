import { useState } from "react";

const exerciseList = [
  { name: "Push Ups", description: "Great for upper body strength." },
  { name: "Squats", description: "Build lower body muscles." },
  { name: "Plank", description: "Core strengthening exercise." },
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
      <input
        type="text"
        placeholder="Search exercises..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block mb-6 p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {filteredExercises.map((exercise, index) => (
          <div
            key={index}
            className="p-5 bg-white dark:bg-gray-800 dark:text-gray-100 
                       shadow-md rounded-xl border border-gray-200 dark:border-gray-700 
                       hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
