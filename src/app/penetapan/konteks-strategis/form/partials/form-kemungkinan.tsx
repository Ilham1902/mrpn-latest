import React from "react";
import {
 Paper,
 SelectChangeEvent,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 TextField,
} from "@mui/material";
import theme from "@/theme";

export default function FormKemungkinan({ mode }: { mode?: string }) {
 return (
  <Paper sx={{ overflowX: "auto", minWidth: "100% !important" }}>
   <Table size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Level Kemungkinan</TableCell>
      <TableCell>Probabilitas</TableCell>
      <TableCell>Jumlah Frekuensi</TableCell>
      <TableCell>Low frequency event</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     <TableRow>
      <TableCell>Hampir tidak terjadi (1)</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Probabilitias"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Low frequency event"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Jarang terjadi (2)</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Probabilitias"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Low frequency event"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Kadang terjadi (3)</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Probabilitias"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Low frequency event"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Sering terjadi (4)</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Probabilitias"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Low frequency event"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Hampir pasti terjadi (5)</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Probabilitias"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Low frequency event"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
    </TableBody>
   </Table>
  </Paper>
 );
}
