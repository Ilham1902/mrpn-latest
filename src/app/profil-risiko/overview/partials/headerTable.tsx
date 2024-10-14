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
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const dataHeader = [
    {
      sasaran:
        "Meningkatnya produksi dan produktivitas padi di KSPP Kalimantan Tengah",
      children: [
        {
          indikator: "Peningkatan Produksi Padi KSPP Kalimantan Tengah (%)",
          target: "10%",
          periodePemantauan: "2025",
        },
        {
          indikator:
            "Peningkatan Produktivitas Padi KSPP Kalimantan Tengah (%)",
          target: "10%",
          periodePemantauan: "2025",
        },
      ],
    },
  ];

  const nameofKP =
    "02.10.01 - Pengembangan Kawasan Sentra Produksi Pangan (KSPP) Kalimantan Tengah";

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
              Ketahanan Pangan
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          border={1}
          borderColor={theme.palette.primary.main}
          borderRadius={20}
          sx={{ cursor: "pointer" }}
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
              KP
            </Typography>
          </Stack>
          <Box>
            <Tooltip title={nameofKP} followCursor TransitionComponent={Grow}>
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                px={1.5}
                fontSize={13}
                fontWeight={600}
              >
                {nameofKP.substring(0, 35) + "..."}
              </Typography>
            </Tooltip>
            <Typography px={1.5} fontSize={13} fontWeight={600}></Typography>
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
          {dataHeader.map((row: any, index: any) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell rowSpan={row.children.length}>
                  {row.sasaran}
                </TableCell>
                <TableCell>{row.children[0].indikator}</TableCell>
                <TableCell align="center">{row.children[0].target}</TableCell>
                <TableCell align="center">
                  {row.children[0].periodePemantauan}
                </TableCell>
              </TableRow>
              {row.children.slice(1).map((child: any, childIndex: any) => (
                <TableRow key={childIndex}>
                  <TableCell>{child.indikator}</TableCell>
                  <TableCell align="center">{child.target}</TableCell>
                  <TableCell align="center">
                    {child.periodePemantauan}
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
