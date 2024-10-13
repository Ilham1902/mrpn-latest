import React, { Fragment, SetStateAction } from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import AddEntity from "./add";
import AddRisk from "./addRisk";
import {
  AutocompleteSelectFreeSolo,
  AutocompleteSelectMultiple,
  AutocompleteSelectSingle,
} from "@/components/autocomplete";
import { ExsumIndicationState } from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import { MiscMasterListStakeholderRes } from "@/app/misc/master/masterServiceModel";
import { ExsumSWOTValuesDto } from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotModel";
import { RoDto } from "@/app/misc/rkp/rkpServiceModel";
import TextareaComponent from "@/app/components/textarea";
import AddButton from "@/app/components/buttonAdd";
import { grey } from "@mui/material/colors";

export default function FormIndication({
  state,
  setState,
  optionRiskType,
  optionStrategy,
  optionStakeholder,
  optionRO,
}: {
  state: ExsumIndicationState;
  setState: (value: SetStateAction<ExsumIndicationState>) => void;
  optionRiskType: string[];
  optionStrategy: ExsumSWOTValuesDto[];
  optionStakeholder: MiscMasterListStakeholderRes[];
  optionRO: RoDto[];
}) {
  const [itemMenu, setItemMenu] = React.useState([{ id: 1 }]);

  const addMenu = () => {
    let arr = [...itemMenu];
    if (arr.length >= 10) {
      return;
    } else {
      arr.push({ id: Math.floor(Math.random() * 1000) });
    }
    const newItem = arr;
    setItemMenu(newItem);
  };

  const minusMenu = (nowId: any) => {
    let arr = [...itemMenu];
    let newArr = arr.filter((val) => {
      if (nowId === val.id) {
        return false;
      } else {
        return true;
      }
    });
    setItemMenu(newArr);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Analisis SWOT" />
          <AutocompleteSelectSingle
            key={state.jenis}
            value={state.jenis}
            options={optionRiskType}
            getOptionLabel={(option) => option}
            handleChange={(val: string) =>
              setState((prevState) => {
                return {
                  ...prevState,
                  jenis: val,
                };
              })
            }
            placeHolder={"Pilih analisis SWOT"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Indikasi Risiko" />
          <TextareaComponent
            row={2}
            label="Tuliskan indikasi risiko"
            placeholder="Tuliskan indikasi risiko"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Kategori Risiko" />
          <AutocompleteSelectSingle
            key={state.jenis}
            value={state.jenis}
            options={optionRiskType}
            getOptionLabel={(option) => option}
            handleChange={(val: string) =>
              setState((prevState) => {
                return {
                  ...prevState,
                  jenis: val,
                };
              })
            }
            placeHolder={"Pilih kategori risiko"}
          />
        </FormControl>
      </Grid>
      {/* <Grid item xs={12}>
    <FormControl fullWidth>
     <AddRisk
      optionStrategy={optionStrategy}
      state={state}
      setState={setState}
     />
    </FormControl>
   </Grid> */}
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FieldLabelInfo titleSection title="PERLAKUAN RISIKO" />
          <AddButton
            title="Tambah perlakuan"
            noMargin
            onclick={() => addMenu()}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box
          maxHeight="40vh"
          overflow="auto"
          pb={0.5}
          sx={{
            "&::-webkit-scrollbar": {
              width: "3px",
            },
          }}
        >
          <Grid container spacing={2}>
            {itemMenu.map((tags: any, index) => (
              <Fragment key={`${tags.id}`}>
                <Grid item xs={12}>
                  <Paper
                    variant="outlined"
                    sx={{ p: 2, bgcolor: `${index % 2 !== 0 && grey[100]}` }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <FieldLabelInfo
                            titleSection
                            title={`SUB #${index + 1}`}
                          />
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <AddButton
                              errorColor
                              title="Hapus"
                              noMargin
                              onclick={() => minusMenu(tags.id)}
                            />
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <FieldLabelInfo
                            title="Perlakuan Risiko"
                            titleField
                            information="Proses untuk menurunkan keterpaparan risiko yang dikaitkan dengan toleransi dan selera risiko
yang telah ditetapkan"
                          />
                          <AutocompleteSelectMultiple
                            bgWhite
                            key={state.perlakuan.length}
                            value={state.perlakuan}
                            options={optionRO}
                            getOptionLabel={(opt) => opt.value}
                            handleChange={(newVal: RoDto[]) =>
                              setState((prevState) => {
                                return {
                                  ...prevState,
                                  perlakuan: newVal,
                                };
                              })
                            }
                            placeHolder={"Pilih perlakuan risiko"}
                            labelSelectAll={"Pilih semua rincian output"}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <FieldLabelInfo title="Rincian Output" titleField />
                          <AutocompleteSelectMultiple
                            bgWhite
                            key={state.perlakuan.length}
                            value={state.perlakuan}
                            options={optionRO}
                            getOptionLabel={(opt) => opt.value}
                            handleChange={(newVal: RoDto[]) =>
                              setState((prevState) => {
                                return {
                                  ...prevState,
                                  perlakuan: newVal,
                                };
                              })
                            }
                            placeHolder={"Pilih rincian output"}
                            labelSelectAll={"Pilih semua rincian output"}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <FieldLabelInfo
                                titleSection
                                title="PENANGGUNGJAWAB PERLAKUAN"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl fullWidth>
                                <Typography gutterBottom>
                                  Indikasi Entitas Utama & Pendukung
                                </Typography>
                                <AddEntity
                                  optionStakeholder={optionStakeholder}
                                  state={state}
                                  setState={setState}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
