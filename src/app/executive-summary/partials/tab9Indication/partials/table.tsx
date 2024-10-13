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
} from "@mui/material";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { grey } from "@mui/material/colors";
import { ExsumIndicationResDto } from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import { useAuthContext } from "@/lib/core/hooks/useHooks";
import { usePathname } from "next/navigation";
import { hasPrivilege } from "@/lib/core/helpers/authHelpers";
import { InfoTooltip } from "@/app/components/InfoTooltip";

export default function TableIndication({
  data,
  handleModalOpen,
  handleModalOpenDelete,
}: {
  data?: ExsumIndicationResDto[];
  handleModalOpen: any;
  handleModalOpenDelete: any;
}) {
  const { permission } = useAuthContext((state) => state);
  const pathname = usePathname();

  return (
    <>
      {/* <TableContainer component={Paper} elevation={0}>
        <Table size="small">
          <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
            <TableRow>
              <TableCell>
                <Typography variant="body1" fontWeight={600}>
                  Jenis Risiko
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight={600}>
                  Kejadian Risiko
                </Typography>
              </TableCell>
              <TableCell>
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <Typography variant="body1" fontWeight={600}>
                    Perlakuan Risiko
                  </Typography>
                  <InfoTooltip
                    title="Proses untuk menurunkan keterpaparan risiko yang dikaitkan dengan toleransi dan selera risiko
yang telah ditetapkan"
                  />
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight={600}>
                  KL Penanggung Jawab
                </Typography>
              </TableCell>
              <TableCell width="100px"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((itemRow, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ verticalAlign: "top" }}>
                  <Typography variant="body1">
                    {itemRow.jenis === "" ? "-" : itemRow.jenis}
                  </Typography>
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  <ul>
                    {itemRow.kejadian.map((k, index2) => (
                      <li key={index2}>
                        <Typography
                          variant="body1"
                          key={index + ".kejadian." + index2}
                        >
                          {k.keterangan === "" ? "-" : k.keterangan}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell sx={{ verticalAlign: "top" }}>
                  <Typography variant="body1">
                    <ul>
                      {itemRow.perlakuan.map((k, index2) => (
                        <li key={index2}>
                          <Typography
                            variant="body1"
                            key={index + ".perlakuan." + index2}
                          >
                            {k.value === "" ? "-" : k.value}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </TableCell>
                <TableCell sx={{ verticalAlign: "middle" }}>
                  <Stack gap={0.5}>
                    {Object.entries(itemRow.groupStakeholder).map(
                      ([key, value]) => (
                        <Paper
                          key={key}
                          variant="outlined"
                          elevation={0}
                          sx={{ p: "4px 8px", width: 400, bgcolor: grey[50] }}
                        >
                          <Typography
                            fontWeight={500}
                            fontSize={13}
                            whiteSpace="nowrap"
                          >
                            {key} :
                          </Typography>
                          <Stack
                            marginTop={"10px"}
                            display="inline-flex"
                            alignItems="center"
                            direction="row"
                            gap={0.5}
                            flexWrap="wrap"
                          >
                            {value.map((st, stIndex) => (
                              <Box key={stIndex} component="span">
                                <Chip
                                  label={st.value}
                                  size="small"
                                  sx={{
                                    height: "auto",
                                    ".MuiChip-label": {
                                      whiteSpace: "wrap",
                                      lineHeight: 1.2,
                                      py: 0.6,
                                    },
                                  }}
                                />
                              </Box>
                            ))}
                          </Stack>
                        </Paper>
                      )
                    )}
                  </Stack>
                </TableCell>
                <TableCell
                  sx={{ verticalAlign: "baseline", textAlign: "center" }}
                >
                  <Stack
                    gap={"5px"}
                    justifyContent={"center"}
                    direction={"row"}
                  >
                    {hasPrivilege(permission, pathname, "update") && (
                      <IconFA
                        name="edit"
                        size={16}
                        color={theme.palette.primary.main}
                        sx={{ cursor: "pointer" }}
                        onclick={() => handleModalOpen(itemRow.id)}
                      />
                    )}
                    {hasPrivilege(permission, pathname, "delete") && (
                      <IconFA
                        name="trash"
                        size={16}
                        color={theme.palette.error.main}
                        sx={{ cursor: "pointer" }}
                        onclick={() => handleModalOpenDelete(itemRow.id)}
                      />
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead sx={{ bgcolor: "primary.light" }}>
          <TableRow>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Analisis TOWS
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Indikasi Risiko
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Kategori Risiko
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Perlakuan Risiko
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Rincian Output
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" fontWeight={600}>
                Penanggungjawab
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row, index) => (
            <React.Fragment key={row + "-" + index}>
              <TableRow>
                <TableCell
                  rowSpan={row.perlakuan.length}
                  sx={{ verticalAlign: "top" }}
                >
                  <Typography variant="body1">{row.tows.value}</Typography>
                </TableCell>
                <TableCell
                  rowSpan={row.perlakuan.length}
                  sx={{ verticalAlign: "top" }}
                >
                  <Typography variant="body1">{row.indikasi_risiko}</Typography>
                </TableCell>
                <TableCell
                  rowSpan={row.perlakuan.length}
                  sx={{ verticalAlign: "top" }}
                >
                  <Typography variant="body1">{row.kategori_risiko}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    {row.perlakuan[0].perlakuan_risiko}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.perlakuan[0].ro.value}</Typography>
                </TableCell>
                <TableCell sx={{ verticalAlign: "middle" }}>
                  <Stack gap={0.5}>
                    {Object.entries(row.perlakuan[0].groupStakeholder).map(
                      ([key, value]) => (
                        <Paper
                          key={key}
                          variant="outlined"
                          elevation={0}
                          sx={{ p: "4px 8px", width: 400, bgcolor: grey[50] }}
                        >
                          <Typography
                            fontWeight={500}
                            fontSize={13}
                            whiteSpace="nowrap"
                          >
                            {key} :
                          </Typography>
                          <Stack
                            marginTop={"10px"}
                            display="inline-flex"
                            alignItems="center"
                            direction="row"
                            gap={0.5}
                            flexWrap="wrap"
                          >
                            {value.map((st, stIndex) => (
                              <Box key={stIndex} component="span">
                                <Chip
                                  label={st.value}
                                  size="small"
                                  sx={{
                                    height: "auto",
                                    ".MuiChip-label": {
                                      whiteSpace: "wrap",
                                      lineHeight: 1.2,
                                      py: 0.6,
                                    },
                                  }}
                                />
                              </Box>
                            ))}
                          </Stack>
                        </Paper>
                      )
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
              {row.perlakuan.slice(1).map((perlakuan, i) => (
                <TableRow key={perlakuan + "-" + index + "-" + i}>
                  <TableCell>
                    <Typography variant="body1">{perlakuan.perlakuan_risiko}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{perlakuan.ro.value}</Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: "middle" }}>
                    <Stack gap={0.5}>
                      {Object.entries(perlakuan.groupStakeholder).map(
                        ([key, value]) => (
                          <Paper
                            key={key}
                            variant="outlined"
                            elevation={0}
                            sx={{ p: "4px 8px", width: 400, bgcolor: grey[50] }}
                          >
                            <Typography
                              fontWeight={500}
                              fontSize={13}
                              whiteSpace="nowrap"
                            >
                              {key} :
                            </Typography>
                            <Stack
                              marginTop={"10px"}
                              display="inline-flex"
                              alignItems="center"
                              direction="row"
                              gap={0.5}
                              flexWrap="wrap"
                            >
                              {value.map((st, stIndex) => (
                                <Box key={stIndex} component="span">
                                  <Chip
                                    label={st.value}
                                    size="small"
                                    sx={{
                                      height: "auto",
                                      ".MuiChip-label": {
                                        whiteSpace: "wrap",
                                        lineHeight: 1.2,
                                        py: 0.6,
                                      },
                                    }}
                                  />
                                </Box>
                              ))}
                            </Stack>
                          </Paper>
                        )
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
