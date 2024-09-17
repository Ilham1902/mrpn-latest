import React, { Fragment } from "react";
import {
 Stack,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
} from "@mui/material";
import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";
import { dataMatriks } from "@/app/penetapan/kriteria/dataMatriks";

export default function Matriks({ levelId }: { levelId?: number }) {
 const colorMap: { [key: string]: string } = {
  blue: blue[400],
  green: green[400],
  yellow: yellow[400],
  orange: orange[400],
  red: red[400],
 };

 const matriksFive = (
  <>
   {dataMatriks.map((itemMatriks, index) => (
    <Fragment key={index}>
     {levelId === itemMatriks.id && (
      <>
       <Table
        sx={{
         td: {
          "&:first-of-type, &:nth-of-type(2)": {
           color: "white",
          },
         },
         tr: {
          "&:first-of-type": {
           td: {
            "&:nth-of-type(3)": {
             color: "white",
            },
           },
          },
         },
        }}
       >
        <TableHead
         sx={{
          "td, th": { borderColor: grey[700] },
         }}
        >
         <TableRow>
          <TableCell
           colSpan={3}
           rowSpan={3}
           align="center"
           sx={{ p: 1, color: grey[400] }}
          >
           {itemMatriks.header.title}
          </TableCell>
          <TableCell colSpan={5} align="center" sx={{ p: 1, color: grey[400] }}>
           Level Dampak
          </TableCell>
         </TableRow>
         <TableRow>
          {itemMatriks.header.levels.map((level, index) => (
           <TableCell
            key={index}
            align="center"
            sx={{ p: 1, color: grey[400] }}
           >
            {level}
           </TableCell>
          ))}
         </TableRow>
         <TableRow>
          {itemMatriks.header.descriptions.map((desc, index) => (
           <TableCell
            key={index}
            align="center"
            sx={{ p: 1, color: grey[400] }}
           >
            {desc}
           </TableCell>
          ))}
         </TableRow>
        </TableHead>
        <TableBody
         sx={{
          "td, th": { borderColor: grey[700] },
         }}
        >
         <TableRow
          sx={{
           "&:first-of-type ": { td: { "&:first-of-type": { border: 0 } } },
          }}
         >
          <TableCell
           width={70}
           rowSpan={5}
           align="center"
           sx={{
            p: 1,
            transform: "rotate(270deg)",
           }}
          >
           Level Kemungkinan
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 600 }}>
           {5}
          </TableCell>
          <TableCell sx={{ fontWeight: 600 }}>
           {itemMatriks.rows[0].frequency}
          </TableCell>
          {itemMatriks.rows[0].values.map((value, colIndex) => (
           <TableCell
            key={colIndex}
            align="center"
            width={150}
            sx={{
             fontWeight: 700,
             bgcolor: colorMap[itemMatriks.rows[0].colors[colIndex]],
            }}
           >
            {value}
           </TableCell>
          ))}
         </TableRow>
         {itemMatriks.rows.slice(1).map((row, rowIndex) => (
          <TableRow
           key={rowIndex}
           sx={{
            "&:last-child td, &:last-child th": { border: 0 },
           }}
          >
           <TableCell align="center" sx={{ fontWeight: 600 }}>
            {4 - rowIndex}
           </TableCell>
           <TableCell sx={{ fontWeight: 600 }}>{row.frequency}</TableCell>
           {row.values.map((value, colIndex) => (
            <TableCell
             key={colIndex}
             align="center"
             sx={{ fontWeight: 700, bgcolor: colorMap[row.colors[colIndex]] }}
            >
             {value}
            </TableCell>
           ))}
          </TableRow>
         ))}
        </TableBody>
       </Table>
      </>
     )}
    </Fragment>
   ))}
  </>
 );

 return (
  <Stack mt={2}>
   {matriksFive}
   {/* {levelMatriks} */}
  </Stack>
 );
}
