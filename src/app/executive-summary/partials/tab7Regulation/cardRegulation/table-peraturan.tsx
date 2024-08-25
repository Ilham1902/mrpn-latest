import React from "react";
import {
 Button, Chip,
 DialogActions,
 Icon,
 IconButton,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import DialogComponent from "@/components/dialog";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import FormPeraturan from "./form-peraturan";
import {ExsumRegulationDto} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";

export default function TablePeraturan({
 data,
  deleteData
}: {
 data:ExsumRegulationDto[]
 deleteData:any
}) {

 return (
  <>
   <Stack
    mb={2}
    direction="row"
    justifyContent="space-between"
    alignItems="center"
   >
    <FieldLabelInfo
     titleSection
     title="Daftar Peraturan Perundang-Undangan yang Terkait"
     information="Daftar Peraturan Perundang-Undangan yang Terkait"
    />
   </Stack>
    <TableContainer component={Paper} elevation={0} variant="outlined">
    <Table size="small">
     <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
      <TableRow>
       <TableCell width="70px"></TableCell>
       <TableCell>Peraturan Terkait</TableCell>
       <TableCell>Amanat Peraturan yang Terkait</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {data.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
         <TableCell sx={{ textAlign: "center" }}>
          <Tooltip title="Delete" placement="top">
           <IconButton
             aria-label="delete"
             color="error"
             onClick={() => deleteData(row.id)}
           >
            <Icon
              baseClassName="fas"
              className={`fa-trash-alt`}
              sx={{
               fontSize: "14px",
              }}
            />
           </IconButton>
          </Tooltip>
         </TableCell>
         <TableCell>{row.perpres.map((y,index2) => (
           <Chip
             key={index2}
             size="small"
             label={y.title}
           />
         ))}</TableCell>
         <TableCell>{row.amanat}</TableCell>
        </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </>
 );
}
