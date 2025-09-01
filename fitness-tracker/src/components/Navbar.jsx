export default function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">🏋️ Fitness Tracker</h1>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/dashboard" className="hover:text-gray-200">Dashboard</a></li>
          <li><a href="/workouts" className="hover:text-gray-200">Workouts</a></li>
          <li><a href="/profile" className="hover:text-gray-200">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
}
