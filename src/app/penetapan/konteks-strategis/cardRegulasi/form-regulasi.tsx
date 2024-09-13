import React, {SetStateAction} from "react";
import {FormControl, Grid, TextField, Typography} from "@mui/material";
import TextareaComponent, {TextareaStyled} from "@/components/textarea";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import {RegulasiState} from "@/app/penetapan/konteks-strategis/cardRegulasi/model";

export default function FormRegulation(
  {
    state,
    setState
  } : {
    state:RegulasiState
    setState:(value:(SetStateAction<RegulasiState>)) => void
  }
) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo
            title="Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait"
            information="Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait"
          />
          <TextareaStyled
            aria-label="Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait"
            placeholder="Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait"
            minRows={3}
            value={state.regulasi}
            onChange={(e) => setState(prevState => {
              return {
                ...prevState,
                regulasi:e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Keterangan" information="Keterangan"/>
          <TextareaStyled
            aria-label="Keterangan"
            placeholder="Keterangan"
            minRows={3}
            value={state.keterangan}
            onChange={(e) => setState(prevState => {
              return {
                ...prevState,
                keterangan:e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
