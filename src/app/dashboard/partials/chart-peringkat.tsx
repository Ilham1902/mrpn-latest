import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { BlockCard } from "./card";
import { CustomTooltipPie } from "./chart-status";
import { useMediaQuery, useTheme } from "@mui/material";

export default function ChartPeringkat({}) {
 const data = [
  { name: "Sangat Tinggi", value: 20 },
  { name: "Tinggi", value: 13 },
  { name: "Sedang", value: 22 },
  { name: "Rendah", value: 26 },
  { name: "Sangat Rendah", value: 19 },
 ];
 const COLORS = ["#33cc33", "#5bd65b", "#84e084", "#adeaad", "#d6f4d6"];

 const usetheme = useTheme();
 const breakpointDownSm = useMediaQuery(usetheme.breakpoints.down("sm"));
 const breakpointDownXl = useMediaQuery(usetheme.breakpoints.down("xl"));

 return (
  <BlockCard title="Peringkat Risiko">
   <ResponsiveContainer width="100%" height={300}>
    <PieChart>
     <Pie
      data={data}
      cx={breakpointDownSm ? 200 : breakpointDownXl ? 300 : 380}
      cy={140}
      innerRadius={60}
      outerRadius={100}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
      label={({ name, value }) => `${name}: ${value}%`}
     >
      {data.map((entry, index) => (
       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
     </Pie>
     <Tooltip content={<CustomTooltipPie />} />
    </PieChart>
   </ResponsiveContainer>
  </BlockCard>
 );
}
