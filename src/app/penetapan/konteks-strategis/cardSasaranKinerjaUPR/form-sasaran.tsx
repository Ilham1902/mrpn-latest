import React, {SetStateAction} from "react";
import {FormControl, Grid, TextField, Typography} from "@mui/material";
import TextareaComponent, {TextareaStyled} from "@/components/textarea";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import {SasaranIndikatorTargetUPRState} from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/model";
import {IndikatorDto, SasaranDto} from "@/app/misc/rkp/rkpServiceModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {AutocompleteSelectSingle} from "@/components/autocomplete";

export default function FormSasaran(
  {
    state,
    setState,
    optionSasaranIndikator,
    optionIndikatorSasaran,
    optionStakeholder,
    setOptionIndikatorSasaran,
  }: {
    state: SasaranIndikatorTargetUPRState,
    setState: (value: (SetStateAction<SasaranIndikatorTargetUPRState>)) => void
    optionSasaranIndikator: SasaranDto[]
    optionIndikatorSasaran: IndikatorDto[]
    optionStakeholder: MiscMasterListStakeholderRes[]
    setOptionIndikatorSasaran: (value: (SetStateAction<IndikatorDto[]>)) => void
  }
) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Peran" information="Peran"/>
          <TextareaStyled
            aria-label="Peran"
            placeholder="Peran"
            minRows={3}
            value={state.peran}
            onChange={(e) => setState(prevState => {
              return {
                ...prevState,
                peran: e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Entitas MRPN" information="Entitas MRPN"/>
          <AutocompleteSelectSingle
            key={state.stakeholder_id?.id ?? 0}
            value={state.stakeholder_id}
            options={optionStakeholder}
            getOptionLabel={(opt) => opt.value}
            handleChange={(val:MiscMasterListStakeholderRes) => setState(prevState => {
              return {
                ...prevState,
                stakeholder_id:val
              }
            })}
            placeHolder={"Pilih Entitas MRPN"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Sasaran" information="Sasaran"/>
          <AutocompleteSelectSingle
            key={state.sasaran_id?.id ?? 0}
            value={state.sasaran_id}
            options={optionSasaranIndikator}
            getOptionLabel={(opt) => opt.value}
            handleChange={(val:SasaranDto) => {
              setState(prevState => {
                return {
                  ...prevState,
                  sasaran_id: val
                }
              })
              setOptionIndikatorSasaran(val.indikator)
            }}
            placeHolder={"Pilih Sasaran"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Indikator" information="Indikator"/>
          <AutocompleteSelectSingle
            key={state.indikator_id?.id ?? 0}
            value={state.indikator_id}
            options={optionIndikatorSasaran}
            getOptionLabel={(opt) => opt.value}
            handleChange={(val:IndikatorDto) => {
              setState(prevState => {
                return {
                  ...prevState,
                  indikator_id: val
                }
              })
            }}
            placeHolder={"Pilih Indikator"}
          />

        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Target" information="Target"/>
          <TextareaStyled
            aria-label="Target"
            placeholder="Target"
            value={state.target}
            onChange={(e) => setState(prevState => {
              return {
                ...prevState,
                target: e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
