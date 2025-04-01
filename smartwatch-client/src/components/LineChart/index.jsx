import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend
  } from "recharts";
  
  const data = [
    { date: "Mon", steps: 1000, activeMinutes: 10 },
    { date: "Tue", steps: 7000, activeMinutes: 20 },
    { date: "Wed", steps: 6000, activeMinutes: 15 },
    { date: "Thu", steps: 9000, activeMinutes: 30 },
    { date: "Fri", steps: 10000, activeMinutes: 45 },
  ];
  
  const ActivityChart = () => (
    <section aria-labelledby="activity-chart">
     <h2 id="activity-chart">Activity Chart: Steps & Active Minutes</h2>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        
        {/* Y-Axis for Steps */}
        <YAxis yAxisId="left" orientation="left" label={{ value: 'Steps', angle: -90, position: 'insideLeft' }} />
        
        {/* Y-Axis for Active Minutes */}
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Active Minutes', angle: 90, position: 'insideRight' }} />
        
        <Tooltip />
        <Legend />
        
        {/* Steps Area */}
        <Area type="monotone" dataKey="steps" stackId="1" stroke="#8884d8" fill="#8884d8" yAxisId="left" />
        
        {/* Active Minutes Area */}
        <Area type="monotone" dataKey="activeMinutes" stackId="1" stroke="#82ca9d" fill="#82ca9d" yAxisId="right" />
      </AreaChart>
    </ResponsiveContainer>
    </section>
  );
  
  export default ActivityChart;
  