import { useEffect, useState } from "react";
import axios from "axios";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://wger.de/api/v2/exercise/?language=2&limit=20")
      .then(res => setExercises(res.data.results))
      .catch(() => alert("Error fetching exercises"));
  }, []);

  const filtered = exercises.filter(ex =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exercise Library</h1>
      <input className="border p-2 mb-4"
        placeholder="Search exercise..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} />

      <ul>
        {filtered.length > 0 ? filtered.map((ex) => (
          <li key={ex.id} className="border-b py-2">
            <strong>{ex.name}</strong> – {ex.description ? ex.description.replace(/<[^>]+>/g, '') : "No description"}
          </li>
        )) : <p>No exercises found.</p>}
      </ul>
    </div>
  );
}
