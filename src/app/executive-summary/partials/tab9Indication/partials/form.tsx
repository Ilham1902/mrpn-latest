import React, {SetStateAction} from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import {
  SxAutocompleteTextField,
  SxAutocomplete,
} from "@/app/components/dropdownKp";
import {listTagProP} from "@/app/executive-summary/data";
import {paramVariantDefault} from "@/app/utils/constant";
import AddEntity from "./add";
import AddRisk from "./addRisk";
import {
  AutocompleteSelectFreeSolo,
  AutocompleteSelectMultiple,
  AutocompleteSelectSingle
} from "@/components/autocomplete";
import {ExsumIndicationState} from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {ExsumSWOTValuesDto} from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotModel";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";

export default function FormIndication(
  {
    state,
    setState,
    optionRiskType,
    optionStrategy,
    optionStakeholder,
    optionRO
  }: {
    state: ExsumIndicationState
    setState: (value: SetStateAction<ExsumIndicationState>) => void
    optionRiskType: string[]
    optionStrategy: ExsumSWOTValuesDto[]
    optionStakeholder: MiscMasterListStakeholderRes[]
    optionRO:RoDto[]
  }) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Jenis Risiko" information="Jenis Risiko"/>
          <AutocompleteSelectSingle
            value={state.jenis}
            options={optionRiskType}
            getOptionLabel={(option) => option}
            handleChange={(val: string) => setState(prevState => {
              return {
                ...prevState,
                jenis: val
              }
            })}
            placeHolder={"Pilih jenis risiko"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <AddRisk optionStrategy={optionStrategy} state={state} setState={setState}/>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Perlakuan Risiko" information="Perlakuan Risiko"/>
          <AutocompleteSelectMultiple
            value={state.perlakuan}
            options={optionRO}
            getOptionLabel={opt => opt.value}
            handleChange={(newVal:RoDto[]) => setState(prevState => {
              return {
                ...prevState,
                perlakuan:newVal
              }
            })}
            placeHolder={"Pilih RO Kunci"}
            labelSelectAll={"Pilih semua rincian output"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Typography gutterBottom>Indikasi Entitas Utama & Pendukung</Typography>
          <AddEntity optionStakeholder={optionStakeholder} state={state} setState={setState}/>
        </FormControl>
      </Grid>
    </Grid>
  );
}
