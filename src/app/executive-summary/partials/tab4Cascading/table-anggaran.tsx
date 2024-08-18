import React, { Fragment } from "react";
import {
 Grid,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 TextField,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { dataTema } from "../../dataTema";

export default function TableAnggaran({ project }: { project: string }) {
 function createData(id: number, tahun: string) {
  return {
   id,
   tahun,
  };
 }

 const rows = [
  createData(1, "2025"),
  createData(2, "2026"),
  createData(3, "2027"),
  createData(4, "2028"),
  createData(5, "2029"),
 ];

 return (
  <Table sx={{ minWidth: 650 }} size="small">
   <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
    <TableRow>
     <TableCell>
      <Typography variant="body1" fontWeight={600}>
       Tahun
      </Typography>
     </TableCell>
     <TableCell>
      <Typography variant="body1" fontWeight={600}>
       Target
      </Typography>
     </TableCell>
     <TableCell>
      <Typography variant="body1" fontWeight={600}>
       Anggaran
      </Typography>
     </TableCell>
     <TableCell>
      <Typography variant="body1" fontWeight={600}>
       Sumber Anggaran
      </Typography>
     </TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    {rows.map((row) => (
     <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
     >
      <TableCell>{row.tahun}</TableCell>
      <TableCell>
       <Grid container spacing={2}>
        <Grid item xs={4}>
         <TextField
          variant="outlined"
          size="small"
          placeholder="Nilai"
          InputLabelProps={{
           shrink: true,
          }}
         />
        </Grid>
        <Grid item xs={8}>
         <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Satuan"
          InputLabelProps={{
           shrink: true,
          }}
         />
        </Grid>
       </Grid>
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Anggaran"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Sumber Anggaran"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
    ))}
   </TableBody>
  </Table>
 );
}
