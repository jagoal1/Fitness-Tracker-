const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Dashboard
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">🏋️ Workouts</h3>
          <p className="text-gray-600 dark:text-gray-300">View and track your completed workouts.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">🔥 Calories</h3>
          <p className="text-gray-600 dark:text-gray-300">Monitor your daily calorie burn.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">📈 Progress</h3>
          <p className="text-gray-600 dark:text-gray-300">Track your fitness journey over time.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
