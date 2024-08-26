import React, { Fragment } from "react";
import {
 Box,
 Button,
 Chip,
 DialogActions,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
 alpha,
} from "@mui/material";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { grey } from "@mui/material/colors";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormIndication from "./form";
import { dataTema } from "@/app/executive-summary/dataTema";
import {ExsumTWOSDto, ExsumTWOSResDto} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsModel";

const TitleTableContent = ({ title }: { title: string }) => {
 return (
  <Typography
   variant="body1"
   fontWeight={600}
   sx={{ textDecoration: "underline" }}
  >
   {title}
  </Typography>
 );
};

export default function TableTows(
  {
   data
  } : {
   data:ExsumTWOSResDto
  }
) {

 return (
   <TableContainer component={Paper} elevation={0}>
    <Table size="small">
     <TableHead sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
      <TableRow>
       <TableCell>
        <Typography variant="body1" fontWeight={600}>
         Faktor Eksternal/Internal
        </Typography>
       </TableCell>
       <TableCell width="40%">
        <Typography variant="body1" fontWeight={600}>
         Strength (S)
        </Typography>
        <Typography variant="caption" fontWeight={600}>
         Tentukan Faktor Kekuatan Internal
        </Typography>
       </TableCell>
       <TableCell width="40%">
        <Typography variant="body1" fontWeight={600}>
         Weakness (W)
        </Typography>
        <Typography variant="caption" fontWeight={600}>
         Tentukan Faktor Kelemahan Internal
        </Typography>
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
       <TableCell
         sx={{
          verticalAlign: "top",
          bgcolor: alpha(theme.palette.primary.main, 0.1),
         }}
       >
        <Typography variant="body1" fontWeight={600}>
         Opportunity (O)
        </Typography>
        <Typography variant="caption" fontWeight={600}>
         Tentukan Faktor Peluang Eksternal
        </Typography>
       </TableCell>
       <TableCell sx={{ verticalAlign: "top" }}>
        <TitleTableContent title="Strategi SO" />
        <Typography variant="body1">
         {data.tows?.so ?? "-"}
        </Typography>
       </TableCell>
       <TableCell sx={{ verticalAlign: "top" }}>
        <TitleTableContent title="Strategi WO" />
        <Typography variant="body1">
         {data.tows?.wo ?? "-"}
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
       <TableCell
         sx={{
          verticalAlign: "top",
          bgcolor: alpha(theme.palette.primary.main, 0.1),
         }}
       >
        <Typography variant="body1" fontWeight={600}>
         Threats (T)
        </Typography>
        <Typography variant="caption" fontWeight={600}>
         Tentukan Faktor Ancaman Eksternal
        </Typography>
       </TableCell>
       <TableCell sx={{ verticalAlign: "top" }}>
        <TitleTableContent title="Strategi ST" />
        <Typography variant="body1">
         {data.tows?.st ?? "-"}
        </Typography>
       </TableCell>
       <TableCell sx={{ verticalAlign: "top" }}>
        <TitleTableContent title="Strategi WT" />
        <Typography variant="body1">
         {data.tows?.wt ?? "-"}
        </Typography>
       </TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
 );
}
