import React from "react";
import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 Cell,
 ResponsiveContainer,
 Tooltip,
 LineChart,
 Line,
 CartesianGrid,
} from "recharts";
import { BlockCard } from "./card";
import { CustomTooltip } from "./chart-risiko";

export default function ChartTarget({}) {
 const data = [
  {
   name: "TW I",
   target: 24,
   realisasi: 19,
  },
  {
   name: "TW II",
   target: 24,
   realisasi: 23,
  },
  {
   name: "TW III",
   target: 19,
   realisasi: 18,
  },
  {
   name: "TW IV",
   target: 23,
   realisasi: 18,
  },
 ];

 return (
  <BlockCard title="Target & Realisasi Penurunan Risiko">
   <ResponsiveContainer width="100%" height={300}>
    <LineChart
     width={500}
     height={300}
     data={data}
     margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
     }}
    >
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Line type="monotone" dataKey="target" stroke="#EF4444" strokeWidth={2} />
     <Line
      type="monotone"
      dataKey="realisasi"
      stroke="#00CCFF"
      strokeWidth={2}
      activeDot={{ r: 8 }}
     />
    </LineChart>
   </ResponsiveContainer>
  </BlockCard>
 );
}
