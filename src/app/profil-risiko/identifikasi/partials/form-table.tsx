import React, {SetStateAction} from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
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
import SelectCustomTheme from "@/app/components/select";
import {listPeristiwaRisiko} from "../setting";
import {red} from "@mui/material/colors";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import EmptyState from "@/app/components/empty";
import {IconEmptyData} from "@/app/components/icons";
import theme from "@/theme";
import {
  SxAutocompleteTextField,
  SxAutocomplete,
} from "@/components/dropdown/dropdownRkp";
import HeaderIdentifikasi from "./header";
import {paramVariantDefault} from "@/app/utils/constant";
import {listRiskCategory} from "@/app/utils/data";
import {IdentificationRiskAddReqDto, IdentificationRiskResDto} from "@/app/profil-risiko/identifikasi/pageModel";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {useRKPContext} from "@/lib/core/hooks/useHooks";
import {IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";


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

  function createData(
    id: number,
    indikator: string,
    nilai: string,
    satuan: string,
    anggaran: string,
    objek: string
  ) {
    return {id, indikator, nilai, satuan, anggaran, objek};
  }

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
                minRows={3}
              />

            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FieldLabelInfo
                title="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                information="Penyebab/Faktor Risiko Strategis MRPN Linsek"
              />

              <TextareaStyled
                aria-label="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                placeholder="Penyebab/Faktor Risiko Strategis MRPN Linsek"
                disabled={mode === "read"}
                value={request.penyebab.length > 0 ? request.penyebab[0] : ""}
                onChange={(e) => setRequest(prevState => {
                  return {
                    ...prevState,
                    penyebab:[e.target.value]
                  }
                })}
                minRows={3}
              />

            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FieldLabelInfo
                title="Dampak Strategis MRPN Linsek"
                information="Dampak Strategis MRPN Linsek"
              />

              <TextareaStyled
                aria-label="Dampak Strategis MRPN Linsek"
                placeholder="Dampak Strategis MRPN Linsek"
                disabled={mode === "read"}
                value={request.dampak.length > 0 ? request.dampak[0] : ""}
                onChange={(e) => setRequest(prevState => {
                  return {
                    ...prevState,
                    dampak:[e.target.value]
                  }
                })}
                minRows={3}
              />

            </FormControl>
          </Grid>
        </>
      </Grid>
    </Stack>
  );
}
