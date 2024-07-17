import React from "react";
import {
 Checkbox,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
} from "@mui/material";
import theme from "@/theme";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

export default function TableLonglistStepTwo({ mode }: { mode?: string }) {
 return (
  <>
   <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table sx={{ minWidth: 650 }} size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width={70}>No.</TableCell>
       <TableCell>Uraian Objek MRPN Linsek</TableCell>
       <TableCell align="center">Prioritas</TableCell>
       <TableCell align="center">Rangking</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {mode === "add" ? (
       <TableRow>
        <TableCell colSpan={7}>
         <EmptyState
          icon={<IconEmptyData />}
          title="Data Kosong"
          description="Silahkan isi konten tabel ini"
         />
        </TableCell>
       </TableRow>
      ) : (
       <>
        {[...new Array(3)].map((_, i) => (
         <TableRow key={i}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>Uraian {i + 1}</TableCell>
          <TableCell align="center">{5 - i}</TableCell>
          <TableCell align="center">
           <Checkbox />
          </TableCell>
         </TableRow>
        ))}
       </>
      )}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
