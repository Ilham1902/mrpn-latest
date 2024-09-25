import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "@/theme";
import {IdentificationRiskResDto} from "@/app/profil-risiko/identifikasi/pageModel";

export default function HeaderIdentifikasi(
  {
    noPadding,
    asTable,
    viewOnly,
    data
  }: {
    noPadding?: boolean;
    asTable?: boolean;
    viewOnly?: boolean;
    data?: IdentificationRiskResDto
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
              : {data?.topik}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{bgcolor: viewOnly ? "unset" : theme.palette.primary.light}}
          >
            Objek MRPN Lintas Sektor
          </TableCell>
          <TableCell>
            <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
              : {data?.objek_mrpn}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{bgcolor: viewOnly ? "unset" : theme.palette.primary.light}}
          >
            Sasaran
          </TableCell>
          <TableCell>
            <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
              : {data?.sasaran}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{bgcolor: viewOnly ? "unset" : theme.palette.primary.light}}
          >
            Indikator
          </TableCell>
          <TableCell>
            <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
              : {data?.sasaran_indikator}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{bgcolor: viewOnly ? "unset" : theme.palette.primary.light}}
          >
            Target
          </TableCell>
          <TableCell>
            <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
              : {data?.sasaran_target}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{bgcolor: viewOnly ? "unset" : theme.palette.primary.light}}
          >
            Periode
          </TableCell>
          <TableCell>
            <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
              : {data?.periode}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{bgcolor: viewOnly ? "unset" : theme.palette.primary.light}}
          >
            Direktorat
          </TableCell>
          <TableCell>
            <Typography fontWeight={viewOnly ? 600 : 500} fontSize={14}>
              : {data?.direktorat}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
