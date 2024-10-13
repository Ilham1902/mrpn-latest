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
import { ExsumSupportProjectRes } from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportModel";
import { ExsumDto } from "@/lib/core/context/exsumContext";

export const getLevel = (level: string) => {
  switch (level) {
    case "PN":
      return "PN";
    case "PP":
      return "PN";
    case "KP":
      return "PP";
    case "PROP":
      return "KP";
    case "P":
      return "PROP";
    default:
      return "KP";
  }
};

export default function TableSupport({
  data,
  exsum,
}: {
  data: ExsumSupportProjectRes;
  exsum: ExsumDto;
}) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                {getLevel(exsum.level)}
              </Typography>
            </TableCell>
            <TableCell width={200}>
              <Typography variant="body1" fontWeight={600}>
                Kode Sasaran {getLevel(exsum.level)}
              </Typography>
            </TableCell>
            <TableCell width="40%">
              <Typography variant="body1" fontWeight={600}>
                Sasaran {getLevel(exsum.level)}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Indikator
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Target
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sasaran.map((sasaran, index) => (
            <React.Fragment key={`sasaran-${index}`}>
              <TableRow>
                {index === 0 && (
                  <TableCell
                    rowSpan={data.sasaran.reduce(
                      (acc, s) => acc + s.indikator.length,
                      0
                    )}
                    sx={{ verticalAlign: "top" }}
                  >
                    <Typography variant="body1">{data.value}</Typography>
                  </TableCell>
                )}
                <TableCell
                  rowSpan={sasaran.indikator.length}
                  sx={{ verticalAlign: "top" }}
                >
                  <Typography variant="body1">{sasaran.code}</Typography>
                </TableCell>
                <TableCell
                  rowSpan={sasaran.indikator.length}
                  sx={{ verticalAlign: "top" }}
                >
                  <Typography variant="body1">{sasaran.value}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    {"sasaran.indikator[0]"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{"sasaran.target[0]"}</Typography>
                </TableCell>
              </TableRow>
              {sasaran.indikator.slice(1).map((indikator, i) => (
                <TableRow key={`indikator-${index}-${i}`}>
                  <TableCell>
                    <Typography variant="body1">{"indikator"}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                      {"sasaran.target[i + 1]"}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
