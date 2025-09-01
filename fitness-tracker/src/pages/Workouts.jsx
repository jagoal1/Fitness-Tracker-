import WorkoutLog from "../components/WorkoutLog";
import WorkoutHistory from "../components/WorkoutHistory";
import { useState } from "react";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div>
      <WorkoutLog setWorkouts={setWorkouts} />
      <WorkoutHistory workouts={workouts} />
    </div>
  );
}
