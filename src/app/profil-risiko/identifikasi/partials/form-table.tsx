import React, {SetStateAction} from "react";
import {
  Autocomplete, Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Icon, IconButton,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import TextareaComponent, {TextareaStyled} from "@/app/components/textarea";
import {red} from "@mui/material/colors";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import EmptyState from "@/app/components/empty";
import {IconEmptyData} from "@/app/components/icons";
import theme from "@/theme";
import HeaderIdentifikasi from "./header";
import {IdentificationRiskAddReqDto, IdentificationRiskResDto} from "@/app/profil-risiko/identifikasi/pageModel";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {useRKPContext} from "@/lib/core/hooks/useHooks";
import {IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";
import {ActionIcon} from "@/components/actions/action";
import AddButton from "@/components/buttonAdd";
import {IconFA} from "@/components/icons/icon-fa";


export default function FormTable(
  {
    mode,
    data,
    request,
    setRequest,
    optionRiskType
  }: {
    mode?: string;
    data: IdentificationRiskResDto | undefined
    request: IdentificationRiskAddReqDto
    setRequest: (value: (SetStateAction<IdentificationRiskAddReqDto>)) => void
    optionRiskType: string[]
  }) {

  const {rpjmn, year} = useRKPContext(store => store)

  const getTarget = (indikator:IndikatorDto) => {
    let index = 0

    if (rpjmn != undefined){
      for (let i = rpjmn.start; i <= rpjmn.end; i++) {
        if (i !== year && i <= year){
          index++
        }
      }
    }
    let target = ""
    switch (index){
      case 0:
        target = indikator.target_0
        break
      case 1:
        target = indikator.target_1
        break
      case 2:
        target = indikator.target_2
        break
      case 3:
        target = indikator.target_3
        break
      case 4:
        target = indikator.target_4
        break
      default:
        target = indikator.target_0
        break
    }

    return target

  }

  return (
    <Stack gap={2}>

      <HeaderIdentifikasi noPadding data={data}/>

      <Grid container spacing={2}>
        <>
          <Grid item xs={12}>
            <Divider>
              <Chip label="Indikator Sasaran" size="small"/>
            </Divider>
          </Grid>

          <Grid item xs={12}>
            <Table size="small">
              <TableHead sx={{bgcolor: theme.palette.primary.light}}>
                <TableRow>
                  <TableCell rowSpan={2}>Indikator</TableCell>
                  <TableCell colSpan={2} align="center">
                    Target
                  </TableCell>
                  <TableCell rowSpan={2}>Anggaran</TableCell>
                  <TableCell rowSpan={2}>Objek MRPN</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nilai</TableCell>
                  <TableCell>Satuan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mode === "add" ? (
                  <TableRow>
                    <TableCell colSpan={8}>
                      <EmptyState
                        icon={<IconEmptyData/>}
                        title="Data Kosong"
                        description="Silahkan isi konten tabel ini"
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {data && data.indikator.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                      >
                        <TableCell>{row.value}</TableCell>
                        <TableCell sx={{textAlign:"center"}}>{getTarget(row)}</TableCell>
                        <TableCell>{row.satuan}</TableCell>
                        <TableCell sx={{textAlign:"right"}}>{"Rp N/A"}</TableCell>
                        <TableCell>{"-"}</TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </Grid>

          <Grid item xs={12}>
            <Divider/>
          </Grid>

          <Grid item xs={12} sm={8}>
            <FormControl fullWidth>
              <FieldLabelInfo
                title="Kategori Risiko MRPN Linsek"
                information="Kategori Risiko MRPN Linsek"
              />

              {mode !== "read" &&
                  <AutocompleteSelectSingle
                      value={request.kategori_risiko}
                      options={optionRiskType}
                      getOptionLabel={opt => opt}
                      handleChange={(e: string) => setRequest(prevState => {
                        return {
                          ...prevState,
                          kategori_risiko: e
                        }
                      })}
                      placeHolder={"Pilih kategori risiko"}
                  />
              }

              {mode === "read" &&
                  <Typography fontWeight={600}>{request.kategori_risiko}</Typography>
              }

            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <FieldLabelInfo title="Insidentil" information="Insidentil"/>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={mode === "read"}
                    checked={request.insidentil}
                    value={request.insidentil}
                    onChange={e => setRequest(prevState => {
                      return {
                        ...prevState,
                        insidentil: e.target.checked
                      }
                    })}
                  />
                }
                label={
                  <Typography fontWeight={600} color={red[600]}>
                    Insidentil
                  </Typography>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FieldLabelInfo
                title="Peristiwa Risiko Strategis MRPN Linsek"
                information="Peristiwa Risiko Strategis MRPN Linsek"
              />

              <TextareaStyled
                aria-label="Peristiwa Risiko Strategis MRPN Linsek"
                placeholder="Peristiwa Risiko Strategis MRPN Linsek"
                disabled={mode === "read"}
                value={request.peristiwa_risiko}
                onChange={(e) => setRequest(prevState => {
                  return {
                    ...prevState,
                    peristiwa_risiko:e.target.value
                  }
                })}
              />

            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <Stack direction={"row"} gap={2} justifyContent={"space-between"} marginY={1}>
                <FieldLabelInfo
                  title="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                  information="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                />
                {mode !== "read" &&
                  <AddButton
                    title={`Tambah`}
                    filled
                    noMargin
                    onclick={() => setRequest(prevState => {
                      let p = prevState.penyebab
                      p.push("")
                      return {
                        ...prevState,
                        penyebab:p
                      }
                    })}
                  />
                }
              </Stack>

              <Stack direction={"column"} gap={1}>
                {request.penyebab.map((p,pi) =>
                  <Stack direction={"column"} gap={1}>
                    <Stack direction={"row"} gap={1}>
                      <TextareaStyled
                        key={`ip-${pi}`}
                        aria-label="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                        placeholder="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                        disabled={mode === "read"}
                        value={p}
                        onChange={(e) => setRequest(prevState => {
                          let dt = prevState.penyebab
                          dt[pi] = e.target.value
                          return {
                            ...prevState,
                            penyebab:dt
                          }
                        })}
                      />

                      {pi > 0 &&
                        <Stack minWidth={"50px"} justifyContent={"center"}>
                          <IconButton
                            aria-label="delete"
                            color="error"
                            onClick={() => setRequest(prevState => {
                              let dt = prevState.penyebab
                              dt.splice(pi, 1)
                              return {
                                ...prevState,
                                penyebab:dt
                              }
                            })}
                            sx={{p: 0}}
                          >
                            <IconFA size={18} name="trash-can"/>
                          </IconButton>
                        </Stack>
                      }

                    </Stack>
                  </Stack>
                )}
              </Stack>

            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <Stack direction={"row"} gap={2} justifyContent={"space-between"} marginY={1}>
                <FieldLabelInfo
                  title="Dampak Strategis MRPN Linsek"
                  information="Dampak Strategis MRPN Linsek"
                />
                {mode !== "read" &&
                  <AddButton
                    title={`Tambah`}
                    filled
                    noMargin
                    onclick={() => setRequest(prevState => {
                      let p = prevState.dampak
                      p.push("")
                      return {
                        ...prevState,
                        dampak:p
                      }
                    })}
                  />
                }
              </Stack>

              <Stack direction={"column"} gap={1}>
                {request.dampak.map((p,pi) =>
                  <Stack direction={"column"} gap={1}>
                    <Stack direction={"row"} gap={1}>
                      <TextareaStyled
                        key={`ip-${pi}`}
                        aria-label="Dampak Strategis MRPN Linsek"
                        placeholder="Dampak Strategis MRPN Linsek"
                        disabled={mode === "read"}
                        value={p}
                        onChange={(e) => setRequest(prevState => {
                          let dt = prevState.dampak
                          dt[pi] = e.target.value
                          return {
                            ...prevState,
                            dampak:dt
                          }
                        })}
                      />

                      {pi > 0 &&
                          <Stack minWidth={"50px"} justifyContent={"center"}>
                              <IconButton
                                  aria-label="delete"
                                  color="error"
                                  onClick={() => setRequest(prevState => {
                                    let dt = prevState.dampak
                                    dt.splice(pi, 1)
                                    return {
                                      ...prevState,
                                      dampak:dt
                                    }
                                  })}
                                  sx={{p: 0}}
                              >
                                  <IconFA size={18} name="trash-can"/>
                              </IconButton>
                          </Stack>
                      }

                    </Stack>
                  </Stack>
                )}
              </Stack>

            </FormControl>
          </Grid>

        </>
      </Grid>
    </Stack>
  );
}
