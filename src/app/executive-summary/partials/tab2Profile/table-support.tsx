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
import { dataTema } from "../../dataTema";

export default function TableSupport({ project }: { project?: string }) {
 return (
  <TableContainer component={Paper} elevation={0}>
   <Table sx={{ minWidth: 650 }} size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>
       <Typography variant="body1" fontWeight={600}>
        {project === "5" ? "PN" : "PP"}
       </Typography>
      </TableCell>
      <TableCell width={200}>
       <Typography variant="body1" fontWeight={600}>
        Kode Sasaran {project === "5" ? "PN" : "PP"}
       </Typography>
      </TableCell>
      <TableCell width="50%">
       <Typography variant="body1" fontWeight={600}>
        Sasaran {project === "5" ? "PN" : "PP"}
       </Typography>
      </TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {dataTema.map((itemDampak) => (
      <>
       {project === itemDampak.temaId && (
        <>
         {itemDampak.cascading.map((rowCascading, index) => (
          <TableRow
           key={index}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
           <TableCell sx={{ verticalAlign: "top" }}>
            <Typography variant="body1">{rowCascading.pnpp}</Typography>
           </TableCell>
           <TableCell sx={{ verticalAlign: "top" }}>
            <Typography variant="body1">
             {rowCascading.code === "" ? "-" : <>{rowCascading.code}</>}
            </Typography>
           </TableCell>
           <TableCell sx={{ verticalAlign: "top" }}>
            {rowCascading.sasaran.length > 1 ? (
             <Box component="ul" pl="20px !important">
              {rowCascading.sasaran.map((itemSasaran, index) => (
               <Box component="li" key={index} textAlign="left">
                <Typography variant="body1" key={index}>
                 {itemSasaran}
                </Typography>
               </Box>
              ))}
             </Box>
            ) : (
             <Typography component="p" variant="body1" textAlign="left">
              {rowCascading.sasaran}
             </Typography>
            )}
           </TableCell>
          </TableRow>
         ))}
        </>
       )}
      </>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 );
}
