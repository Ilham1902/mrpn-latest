import React, { Fragment } from "react";
import {
 Chip, Icon, IconButton,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow, Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { dataTema } from "../../dataTema";
import {ExsumRelatedDto} from "@/app/executive-summary/partials/tab2Profile/cardRelated/cardRelatedModel";

export default function TableTagging({ project, data, handleDelete }: { project: string, data:ExsumRelatedDto[], handleDelete:any }) {
 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell sx={{ width: 100 }}>
       <Typography variant="body1" fontWeight={600}>
        Action
       </Typography>
      </TableCell>
      <TableCell sx={{ width: 200 }}>
       <Typography variant="body1" fontWeight={600}>
        Kebijakan
       </Typography>
      </TableCell>
      <TableCell>
       <Typography variant="body1" fontWeight={600}>
        Keterangan
       </Typography>
      </TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {data.map((x,index) => (
       <TableRow
         key={index}
         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell sx={{ textAlign: "center" }}>
         <Tooltip title="Delete" placement="top">
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleDelete(x.id)}
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
        <TableCell>
         {x.kebijakan.map((y,index2) => (
           <Chip
             key={index2}
             size="small"
             label={y.src_kebijakan?.name}
           />
         ))}
        </TableCell>
        <TableCell>
         <Typography variant="body1">{x.value}</Typography>
        </TableCell>
       </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
