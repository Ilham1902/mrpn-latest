import React from "react";
import {
  alpha,
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
import { useRKPContext } from "@/lib/core/hooks/useHooks";
import { IndikatorDto } from "@/app/misc/rkp/rkpServiceModel";

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
  const { rpjmn, year } = useRKPContext((store) => store);

  const getTarget = (indikator: IndikatorDto) => {
    let index = 0;

    if (rpjmn != undefined) {
      for (let i = rpjmn.start; i <= rpjmn.end; i++) {
        if (i !== year && i <= year) {
          index++;
        }
      }
    }
    let target = "";
    switch (index) {
      case 0:
        target = indikator.target_0 + " " + indikator.satuan;
        break;
      case 1:
        target = indikator.target_1 + " " + indikator.satuan;
        break;
      case 2:
        target = indikator.target_2 + " " + indikator.satuan;
        break;
      case 3:
        target = indikator.target_3 + " " + indikator.satuan;
        break;
      case 4:
        target = indikator.target_4 + " " + indikator.satuan;
        break;
      default:
        target = indikator.target_0 + " " + indikator.satuan;
        break;
    }

    return target;
  };

  return (
    <TableContainer component={Paper} elevation={0} variant="outlined">
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
          <TableRow>
            <TableCell>{getLevel(exsum.level)}</TableCell>
            <TableCell width={200}>
              Kode Sasaran {getLevel(exsum.level)}
            </TableCell>
            <TableCell width="40%">Sasaran {getLevel(exsum.level)}</TableCell>
            <TableCell>Indikator</TableCell>
            <TableCell width={200}>Target</TableCell>
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
                    {data.value}
                  </TableCell>
                )}
                <TableCell
                  rowSpan={sasaran.indikator.length}
                  sx={{ verticalAlign: "top" }}
                >
                  {sasaran.code}
                </TableCell>
                <TableCell
                  rowSpan={sasaran.indikator.length}
                  sx={{ verticalAlign: "top" }}
                >
                  {sasaran.value}
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  {sasaran.indikator.length > 0
                    ? sasaran.indikator[0].value
                    : ""}
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  {sasaran.indikator.length > 0
                    ? getTarget(sasaran.indikator[0])
                    : ""}
                </TableCell>
              </TableRow>
              {sasaran.indikator.slice(1).map((indikator, i) => (
                <TableRow key={`indikator-${index}-${i}`}>
                  <TableCell sx={{ verticalAlign: "top" }}>
                    {indikator.value}
                  </TableCell>
                  <TableCell sx={{ verticalAlign: "top" }}>
                    {getTarget(indikator)}
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
