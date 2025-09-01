export default function Dashboard() {
  return (
    <div className="pt-20 container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
        <h2 className="text-lg font-bold mb-2">Calories Burned</h2>
        <p className="text-2xl font-extrabold text-success">450 kcal</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
        <h2 className="text-lg font-bold mb-2">Steps Taken</h2>
        <p className="text-2xl font-extrabold text-primary">10,254</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
        <h2 className="text-lg font-bold mb-2">Workout Sessions</h2>
        <p className="text-2xl font-extrabold text-accent">5 this week</p>
      </div>
    </div>
  );
}
