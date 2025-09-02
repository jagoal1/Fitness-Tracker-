import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-blue-500 dark:bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">🏋️ Fitness Tracker</h1>
      
      {/* Navigation Links */}
      <div className="flex items-center space-x-8"> 
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Workouts</Link>
        <Link to="/progress" className="hover:underline">Progress</Link>
        <Link to="/exercises" className="hover:underline">Exercises</Link>
        
        {/* Dark Mode Toggle aligned with links */}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
