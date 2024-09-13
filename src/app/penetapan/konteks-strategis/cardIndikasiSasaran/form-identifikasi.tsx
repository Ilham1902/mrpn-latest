import React, {SetStateAction, useEffect, useState} from "react";
import {FormControl, Grid, TextField, Typography} from "@mui/material";
import TextareaComponent, {TextareaStyled} from "@/components/textarea";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import {PenetapanIndikasiSasaranState} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/model";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {IndikatorDto, SasaranDto} from "@/app/misc/rkp/rkpServiceModel";

export default function FormIdentifikasi(
  {
    state,
    setState,
    optionSasaranIndikator,
    optionIndikatorSasaran,
    setOptionIndikatorSasaran
  }: {
    state: PenetapanIndikasiSasaranState
    setState: (value: (SetStateAction<PenetapanIndikasiSasaranState>)) => void
    optionSasaranIndikator:SasaranDto[]
    optionIndikatorSasaran:IndikatorDto[]
    setOptionIndikatorSasaran:(value: (SetStateAction<IndikatorDto[]>)) => void
  }
) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Uraian" information="Uraian"/>
          <TextareaStyled
            aria-label="Uraian"
            placeholder="Uraian"
            minRows={3}
            value={state.uraian}
            onChange={(e) => setState(prevState => {
              return {
                ...prevState,
                uraian:e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Sasaran" information="Sasaran"/>
          <AutocompleteSelectSingle
            key={state.sasaran_id ? state.sasaran_id.id : 0}
            value={state.sasaran_id}
            options={optionSasaranIndikator}
            getOptionLabel={(opt) => opt.value}
            handleChange={(e:SasaranDto) => {
              setState(prevState => {
                return {
                  ...prevState,
                  sasaran_id: e,
                }
              })
              setOptionIndikatorSasaran(e.indikator)
            }}
            placeHolder={"Pilih Sasaran"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Indikator" information="Indikator"/>
          <AutocompleteSelectSingle
            key={state.indikator_id ? state.indikator_id.id : 0}
            value={state.indikator_id}
            options={optionIndikatorSasaran}
            getOptionLabel={(opt) => opt.value}
            handleChange={(e:IndikatorDto) => setState(prevState => {
              return {
                ...prevState,
                indikator_id:e
              }
            })}
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
                target:e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
