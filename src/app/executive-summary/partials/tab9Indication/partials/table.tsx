import React from "react";
import {
  alpha,
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import { ExsumIndicationResDto } from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import { useAuthContext } from "@/lib/core/hooks/useHooks";
import { usePathname } from "next/navigation";
import { hasPrivilege } from "@/lib/core/helpers/authHelpers";
import { InfoTooltip } from "@/app/components/InfoTooltip";
import ActionColumn from "@/components/actions/action";

export default function TableIndication({
  data,
  handleModalOpen,
  handleModalOpenDelete,
}: {
  data?: ExsumIndicationResDto[];
  handleModalOpen?: any;
  handleModalOpenDelete?: any;
}) {
  const { permission } = useAuthContext((state) => state);
  const pathname = usePathname();

  const handleEditData = (id: number) => {
    if (data) {
      handleModalOpen(id);
    }
  };

  const handleDeleteData = (id: number) => {
    if (data) {
      handleModalOpenDelete(id);
    }
  };

  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
          <TableRow>
            {(hasPrivilege(permission, pathname, "update") ||
              hasPrivilege(permission, pathname, "delete")) && (
              <TableCell>
                <Typography variant="body1" fontWeight={600}>
                  Action
                </Typography>
              </TableCell>
            )}
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
            <TableCell width={200}>
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
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, index) => (
              <React.Fragment key={row + "-" + index}>
                <TableRow>
                  {(hasPrivilege(permission, pathname, "update") ||
                    hasPrivilege(permission, pathname, "delete")) && (
                    <TableCell
                      rowSpan={
                        row.perlakuan.length == 0 ? 1 : row.perlakuan.length
                      }
                      sx={{ verticalAlign: "top" }}
                    >
                      <ActionColumn
                        editClick={
                          hasPrivilege(permission, pathname, "update")
                            ? () => handleEditData(row.id)
                            : undefined
                        }
                        deleteClick={
                          hasPrivilege(permission, pathname, "delete")
                            ? () => handleDeleteData(row.id)
                            : undefined
                        }
                      />
                    </TableCell>
                  )}
                  <TableCell
                    rowSpan={
                      row.perlakuan.length == 0 ? 1 : row.perlakuan.length
                    }
                    sx={{ verticalAlign: "top" }}
                  >
                    <Typography variant="body1">{row.tows.value}</Typography>
                  </TableCell>
                  <TableCell
                    rowSpan={
                      row.perlakuan.length == 0 ? 1 : row.perlakuan.length
                    }
                    sx={{ verticalAlign: "top" }}
                  >
                    <Typography variant="body1">
                      {row.indikasi_risiko}
                    </Typography>
                  </TableCell>
                  <TableCell
                    rowSpan={
                      row.perlakuan.length == 0 ? 1 : row.perlakuan.length
                    }
                    sx={{ verticalAlign: "top" }}
                  >
                    <Typography variant="body1">
                      {row.kategori_risiko}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                      {row.perlakuan.length > 0 &&
                        row.perlakuan[0].perlakuan_risiko}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                      {row.perlakuan.length > 0 && row.perlakuan[0].ro.value}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: "middle" }}>
                    {row.perlakuan.length > 0 && (
                      <Stack gap={0.5}>
                        <Stack gap={0.5}>
                          <Paper
                            variant="outlined"
                            elevation={0}
                            sx={{ p: "4px 8px", width: 400, bgcolor: grey[50] }}
                          >
                            <Stack
                              marginTop={"10px"}
                              display="inline-flex"
                              alignItems="center"
                              direction="row"
                              gap={0.5}
                              flexWrap="wrap"
                            >
                              {row.perlakuan[0].stakeholder.map(
                                (st, stIndex) => (
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
                                )
                              )}
                            </Stack>
                          </Paper>
                        </Stack>
                      </Stack>
                    )}
                  </TableCell>
                </TableRow>
                {row.perlakuan.slice(1).map((perlakuan, i) => (
                  <TableRow key={perlakuan + "-" + index + "-" + i}>
                    <TableCell>
                      <Typography variant="body1">
                        {perlakuan.perlakuan_risiko}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {perlakuan.ro.value}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ verticalAlign: "middle" }}>
                      <Stack gap={0.5}>
                        <Paper
                          variant="outlined"
                          elevation={0}
                          sx={{ p: "4px 8px", width: 400, bgcolor: grey[50] }}
                        >
                          <Stack
                            marginTop={"10px"}
                            display="inline-flex"
                            alignItems="center"
                            direction="row"
                            gap={0.5}
                            flexWrap="wrap"
                          >
                            {perlakuan.stakeholder.map((st, stIndex) => (
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
