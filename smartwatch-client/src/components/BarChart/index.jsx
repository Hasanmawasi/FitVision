import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

const data = [
  { day: "Monday", steps: 5000 },
  { day: "Tuesday", steps: 7000 },
  { day: "Wednesday", steps: 6000 },
  { day: "Thursday", steps: 9000 },
  { day: "Friday", steps: 10000 },
  { day: "Saturday", steps: 12000 },
  { day: "Sunday", steps: 8000 },
];

const StepsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="steps" fill="#007AFF" barSize={50} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StepsBarChart;
