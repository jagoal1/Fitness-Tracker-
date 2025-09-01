import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const sampleData = [
  { date: "Day 1", weight: 100 },
  { date: "Day 2", weight: 120 },
  { date: "Day 3", weight: 140 },
];

export default function ProgressChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">Progress Over Time</h2>
      <LineChart width={400} height={300} data={sampleData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#3B82F6" />
      </LineChart>
    </div>
  );
}
