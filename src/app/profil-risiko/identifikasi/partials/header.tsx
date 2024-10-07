import React from "react";
import {
 Table,
 TableBody,
 TableCell,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { IdentificationRiskResDto } from "@/app/profil-risiko/identifikasi/pageModel";
import { InfoTooltip } from "@/app/components/InfoTooltip";

export default function HeaderIdentifikasi({
 noPadding,
 asTable,
 viewOnly,
 data,
}: {
 noPadding?: boolean;
 asTable?: boolean;
 viewOnly?: boolean;
 data?: IdentificationRiskResDto;
}) {
 return (
  <Table
   size="small"
   sx={{
    td: {
     py: noPadding ? 0.5 : 1.5,
    },
   }}
  >
   <TableBody>
    <TableRow>
     <TableCell
      width={250}
      sx={{
       bgcolor: viewOnly ? "unset" : theme.palette.primary.light,
      }}
     >
      Topik MRPN
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null} {data?.topik}
      </Typography>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell
      sx={{
       bgcolor: viewOnly ? "unset" : theme.palette.primary.light,
       display: "flex",
       alignItems: "center",
       gap: 0.5,
      }}
     >
      Objek MRPN Lintas Sektor
      <InfoTooltip
       title="PKPPR yang dikategorikan lintas sektor yang menjadi objek penerapan MRPN LS, melalui
penetapan oleh Komite MRPN"
      />
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null} {data?.objek_mrpn}
      </Typography>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell
      sx={{
       bgcolor: viewOnly ? "unset" : theme.palette.primary.light,
       display: "flex",
       alignItems: "center",
       gap: 0.5,
      }}
     >
      Sasaran
      <InfoTooltip title="Tujuan spesifik yang ingin dicapai melalui implementasi strategi dan kebijakan pembangunan" />
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null} {data?.sasaran ? data?.sasaran : "-"}
      </Typography>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell
      sx={{ bgcolor: viewOnly ? "unset" : theme.palette.primary.light }}
     >
      Indikator
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null}{" "}
       {data?.sasaran_indikator ? data?.sasaran_indikator : "-"}
      </Typography>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell
      sx={{ bgcolor: viewOnly ? "unset" : theme.palette.primary.light }}
     >
      Target
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null}{" "}
       {data?.sasaran_target ? data?.sasaran_target : "-"}
      </Typography>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell
      sx={{ bgcolor: viewOnly ? "unset" : theme.palette.primary.light }}
     >
      Periode
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null} {data?.periode ? data?.periode : "-"}
      </Typography>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell
      sx={{ bgcolor: viewOnly ? "unset" : theme.palette.primary.light }}
     >
      Direktorat
     </TableCell>
     <TableCell>
      <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
       {viewOnly ? ":" : null} {data?.direktorat ? data?.direktorat : "-"}
      </Typography>
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 );
}
