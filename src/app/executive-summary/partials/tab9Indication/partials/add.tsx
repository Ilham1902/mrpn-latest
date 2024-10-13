import React, { Fragment, SetStateAction } from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listEntity } from "@/app/executive-summary/data";
import {
  ExsumIndicationState,
  IndicationState,
  OthersEntityState,
} from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import { MiscMasterListStakeholderRes } from "@/app/misc/master/masterServiceModel";
import {
  AutocompleteSelectMultiple,
  AutocompleteSelectSingle,
} from "@/components/autocomplete";

export default function AddEntity({
  indexTags,
  optionStakeholder,
  state,
  setState,
}: {
  indexTags:number
  state: ExsumIndicationState;
  setState: (value: SetStateAction<ExsumIndicationState>) => void;
  optionStakeholder: MiscMasterListStakeholderRes[];
}) {
  function deleteRow(index: number) {
    setState((prevState) => {
      const prevPerlakuan = prevState.values;
      prevPerlakuan[indexTags].stakeholder.others.splice(index, 1);
      return {
        ...prevState,
        values: prevPerlakuan,
      };
    });
  }

  function addRow() {
    setState((prevState) => {
      const prevPerlakuan = prevState.values;
      const prevEntity = prevPerlakuan[indexTags].stakeholder

      const newRow: OthersEntityState = {
        type: "",
        entity: [],
      };

      prevEntity.others.push(newRow);

      return {
        ...prevState,
        values: prevPerlakuan,
      };
    });
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Kementerian Koordinator" />
            <AutocompleteSelectSingle
              key={
                state.values[indexTags].stakeholder.coordinator
                  ? state.values[indexTags].stakeholder.coordinator.id
                  : undefined
              }
              value={state.values[indexTags].stakeholder.coordinator}
              options={optionStakeholder}
              getOptionLabel={(opt) => opt.value}
              handleChange={(val: MiscMasterListStakeholderRes) =>
                setState((prevState) => {
                  const prevValue = prevState.values
                  const prevEntity = prevValue[indexTags].stakeholder;
                  prevEntity.coordinator = val;
                  return {
                    ...prevState,
                    values: prevValue,
                  };
                })
              }
              placeHolder={"Pilih kementerian koordinator"}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo
              title="Entitas Utama"
              titleField
              information="Kementerian negara atau lembaga yang mempunyai tanggung jawab utama dalam mengelola risiko
pada program, kegiatan, proyek, prioritas pembangunan, dan/atau jenis risiko tertentu yang
bersifat lintas sektor"
            />
            <AutocompleteSelectMultiple
              value={state.values[indexTags].stakeholder.main}
              options={optionStakeholder}
              getOptionLabel={(opt) => opt.value}
              handleChange={(val: MiscMasterListStakeholderRes[]) =>
                setState((prevState) => {
                  const prevValue = prevState.values
                  const prevEntity = prevValue[indexTags].stakeholder;
                  prevEntity.main = val;
                  return {
                    ...prevState,
                    values: prevValue,
                  };
                })
              }
              placeHolder={"Pilih entitas utama"}
              labelSelectAll={"Pilih semua entitas"}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 2, minWidth: "0 !important" }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FieldLabelInfo titleSection title="Tambah Entitas" />
                  <AddButton
                    title="Tambah entitas"
                    noMargin
                    onclick={() => addRow()}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <FieldLabelInfo
                    title="Entitas"
                    titleField
                    information="Kementerian negara, lembaga, pemerintah daerah, pemerintah desa, badan usaha, dan badan
lainnya"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={7}>
                <FormControl fullWidth>
                  <FieldLabelInfo title="Instansi" />
                </FormControl>
              </Grid>
              {state.values[indexTags].stakeholder.others.map((row, index) => (
                <Fragment key={`${index}`}>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder={`Entitas`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={row.type}
                        onChange={(e) =>
                          setState((prevState) => {
                            const prevValues = prevState.values
                            const entity = prevValues[indexTags].stakeholder;
                            entity.others[index].type = e.target.value;
                            return {
                              ...prevState,
                              values: prevValues,
                            };
                          })
                        }
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={11} md={7}>
                    <FormControl fullWidth>
                      <AutocompleteSelectMultiple
                        value={state.values[indexTags].stakeholder.others[index].entity}
                        options={optionStakeholder}
                        getOptionLabel={(opt) => opt.value}
                        handleChange={(val: MiscMasterListStakeholderRes[]) =>
                          setState((prevState) => {
                            const prevValues = prevState.values
                            const prevEntity = prevValues[indexTags].stakeholder;
                            prevEntity.others[index].entity = val;
                            return {
                              ...prevState,
                              values: prevValues,
                            };
                          })
                        }
                        placeHolder={"Pilih instansi"}
                        labelSelectAll={"Pilih semua instansi"}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={1} md={1}>
                    <FormControl>
                      <Stack height={40} justifyContent="center">
                        <IconButton
                          aria-label="delete"
                          color="error"
                          onClick={() => deleteRow(index)}
                        >
                          <IconFA size={18} name="trash-can" />
                        </IconButton>
                      </Stack>
                    </FormControl>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
