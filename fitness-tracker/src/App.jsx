import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Progress from "./pages/Progress";
import Exercises from "./pages/Exercises";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/exercises">Exercises</Link>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
