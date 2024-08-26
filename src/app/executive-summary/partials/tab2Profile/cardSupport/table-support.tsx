import React from "react";
import {
 Box,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { dataTema } from "../../../dataTema";
import {ExsumSupportProjectRes} from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportModel";
import {ExsumDto} from "@/lib/core/context/exsumContext";

export default function TableSupport(
  {
    data,
    exsum
  } : {
   data:ExsumSupportProjectRes
   exsum:ExsumDto
  }
) {
 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>
       <Typography variant="body1" fontWeight={600}>
        {exsum.level}
       </Typography>
      </TableCell>
      <TableCell width={200}>
       <Typography variant="body1" fontWeight={600}>
        Kode Sasaran {exsum.level}
       </Typography>
      </TableCell>
      <TableCell width="50%">
       <Typography variant="body1" fontWeight={600}>
        Sasaran {exsum.level}
       </Typography>
      </TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     <TableRow
       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
     >
      <TableCell sx={{ verticalAlign: "top" }} rowSpan={data.sasaran.length+1}>
       <Typography variant="body1">{data.value}</Typography>
      </TableCell>
     </TableRow>
     {data.sasaran.map((sasaran, index) => (
       <TableRow
         key={index}
         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell sx={{ verticalAlign: "top" }}>
         <Typography variant="body1">
          {sasaran.code}
         </Typography>
        </TableCell>
        <TableCell sx={{ verticalAlign: "top" }}>
         <Typography component="p" variant="body1" textAlign="left">
          {sasaran.value}
         </Typography>
        </TableCell>
       </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
