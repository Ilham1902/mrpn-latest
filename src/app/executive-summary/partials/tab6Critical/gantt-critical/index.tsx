import React from "react";
import {
  Gantt,
  Task,
  ViewMode,
  //   TaskListTable,
  //   TaskListHeader,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import CustomTooltip from "./tooltip";
import { Box } from "@mui/material";
import theme from "@/theme";

const CustomTaskListHeader = ({
  headerHeight,
  rowWidth,
  fontFamily,
  fontSize,
}: {
  headerHeight: any;
  rowWidth: any;
  fontFamily: any;
  fontSize: any;
}) => {
  return (
    <div
      style={{
        height: headerHeight,
        width: rowWidth,
        fontFamily,
        fontSize,
        display: "flex",
        alignItems: "center",
        paddingInline: 16,
        border: "1px solid #e0e0e0",
        backgroundColor: "#f5f5f5",
        fontWeight: 600,
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>Kegiatan</div>
      </div>
    </div>
  );
};

// const customColumns = [
//   { name: "name", label: "Task Name" },
//   { name: "from", label: "From" },
//   { name: "to", label: "To" },
//   { name: "customColumn", label: "Custom Column" },
// ];

// const CustomTaskListTable = (props: any) => {
//   return <TaskListTable columns={customColumns} {...props} />;
// };

// const CustomTaskListHeader = (props: any) => {
//   return <TaskListHeader columns={customColumns} {...props} />;
// };

interface ExtendedTask extends Task {
  customField: string;
}

// const tasks: ExtendedTask[] = [
//   {
//     start: new Date(),
//     end: new Date(),
//     name: "Task 1",
//     id: "Task 1",
//     type: "task",
//     progress: 45,
//     isDisabled: false,
//     customField: "Custom Value 1",
//   },
//   // More tasks...
// ];

// const CustomTaskList: React.FC<{ tasks: ExtendedTask[] }> = ({ tasks }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Start</th>
//           <th>End</th>
//           <th>Custom Field</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tasks.map((task) => (
//           <tr key={task.id}>
//             <td>{task.name}</td>
//             <td>{task.start.toDateString()}</td>
//             <td>{task.end.toDateString()}</td>
//             <td>{task.customField}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

export default function GanttChart({ tasks }: { tasks: Task[] }) {
  return (
    <Box
      sx={{
        "._35nLX": {
          fill: "#f5f5f5",
        },
        "._3zRJQ, ._9w8d5": { fontWeight: 600 },
        "._3zRJQ": { display: "none" },
        "._9w8d5": {
          transform: "translateY(-10px)",
        },
        "._1nBOt": {
          "& > div": {
            "&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)":
              {
                display: "none",
              },
          },
        },
        "._34SS0": {
          "& > div": {
            "&:nth-of-type(2),&:nth-of-type(3)": {
              display: "none",
            },
          },
        },
        "._nI1Xw": {
          div: {
            maxWidth: "90%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            lineClamp: 1,
          },
        },
      }}
    >
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Year}
        TooltipContent={CustomTooltip}
        preStepsCount={1}
        // customHeader={customHeader}
        listCellWidth={"400px"}
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
        TaskListHeader={CustomTaskListHeader}
        // TaskListTable={CustomTaskListTable}

        // renderTaskList={(tasks: any) =>
        //   tasks.map((task: any) => <CustomTask key={task.id} task={task} />)
        // }
      />
      {/* <CustomTaskList tasks={tasks} /> */}
    </Box>
  );
}
