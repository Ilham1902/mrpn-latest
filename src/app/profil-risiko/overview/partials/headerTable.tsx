import React from "react";
import {
  Box,
  Grow,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import theme from "@/theme";
import { IdentificationRiskResDto } from "@/app/profil-risiko/identifikasi/pageModel";
import { InfoTooltip } from "@/app/components/InfoTooltip";
import { grey } from "@mui/material/colors";
import {IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";
import {useRKPContext} from "@/lib/core/hooks/useHooks";

export default function HeaderTable({
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
        target = indikator.target_0+" "+indikator.satuan;
        break;
      case 1:
        target = indikator.target_1+" "+indikator.satuan;
        break;
      case 2:
        target = indikator.target_2+" "+indikator.satuan;
        break;
      case 3:
        target = indikator.target_3+" "+indikator.satuan;
        break;
      case 4:
        target = indikator.target_4+" "+indikator.satuan;
        break;
      default:
        target = indikator.target_0+" "+indikator.satuan;
        break;
    }

    return target;
  };

  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1.5}
      >
        <Stack
          direction="row"
          alignItems="center"
          border={1}
          borderColor={theme.palette.primary.main}
          borderRadius={20}
        >
          <Stack
            direction="row"
            bgcolor={theme.palette.primary.main}
            px={2}
            alignItems="center"
            height="34px"
            sx={{
              borderTopLeftRadius: 24,
              borderBottomLeftRadius: 24,
            }}
          >
            <Typography
              fontSize={13}
              color="white"
              fontWeight={600}
              lineHeight={1}
            >
              Topik
            </Typography>
          </Stack>
          <Box>
            <Typography px={1.5} fontSize={13} fontWeight={600}>
              {data?.topik ?? "-"}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Table
        size="small"
        sx={{
          tr: {
            td: {
              py: noPadding ? 0.5 : 1.5,
              "&:first-of-type": {
                border: 0,
              },
            },
            "&:last-of-type": {
              td: { border: 0 },
            },
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: grey[300], borderTopLeftRadius: 20 }}>
              Sasaran
            </TableCell>
            <TableCell sx={{ bgcolor: grey[300] }}>Indikator</TableCell>
            <TableCell align="center" sx={{ bgcolor: grey[300] }}>
              Target
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: grey[300], borderTopRightRadius: 20 }}
            >
              Periode Pemantauan
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.sasaran && data.sasaran.map((ssr,index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell rowSpan={data.indikator.length}>
                  {ssr}
                </TableCell>
                <TableCell>{data.indikator[0].value}</TableCell>
                <TableCell align="center">{getTarget(data.indikator[0])}</TableCell>
                <TableCell align="center">
                  {data.periode}
                </TableCell>
              </TableRow>
              {data.indikator.slice(1).map((child, childIndex) => (
                <TableRow key={childIndex}>
                  <TableCell>{child.value}</TableCell>
                  <TableCell align="center">{getTarget(child)}</TableCell>
                  <TableCell align="center">
                    {data.periode}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
