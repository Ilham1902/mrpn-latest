import React from "react";
import {Gantt, Task, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import CustomTooltip from "./tooltip";
import { Box } from "@mui/material";
import theme from "@/theme";

export default function GanttChart(
  {
   project,
    tasks
  }: {
   project?: string
   tasks:Task[]
  }
) {
 return (
  <Box
   sx={{
    "._3zRJQ": { fontWeight: 600 },
   }}
  >
   <Gantt
    tasks={tasks}
    viewMode={ViewMode.Year}
    TooltipContent={CustomTooltip}
    preStepsCount={1}
    // customHeader={customHeader}
    listCellWidth={""}
    // ganttHeight={420}
    columnWidth={120}
    rowHeight={60}
    barCornerRadius={6}
    barBackgroundColor={theme.palette.primary.main}
    barBackgroundSelectedColor={theme.palette.primary.dark}
    // arrowColor={grey[500]}
    // arrowIndent={30}
    fontFamily="'Poppins', sans-serif"
    fontSize="14px"
    // headerHeight={200}
   />
  </Box>
 );
}
