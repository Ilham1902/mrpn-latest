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
 TextField,
 Typography,
} from "@mui/material";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";
import {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/components/dropdown/dropdownRkp";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listEntity, listTagProP } from "@/app/executive-summary/data";
import {
 ExsumIndicationState,
 IndicationState,
} from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import { AutocompleteSelectMultiple } from "@/components/autocomplete";
import { ExsumSWOTValuesDto } from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotModel";

export default function AddRisk({
 optionStrategy,
 state,
 setState,
}: {
 state: ExsumIndicationState;
 setState: (value: SetStateAction<ExsumIndicationState>) => void;
 optionStrategy: ExsumSWOTValuesDto[];
}) {
 const addIndicationRow = () => {
  setState((prevState) => {
   const newIndication: IndicationState = {
    keterangan: "",
    keyword_swot: [],
   };
   const prevIndication = [...prevState.kejadian];
   prevIndication.push(newIndication);

   return {
    ...prevState,
    kejadian: prevIndication,
   };
  });
 };

 function deleteIndicationRow(index: number) {
  setState((prevState) => {
   const prevIndication = [...prevState.kejadian];
   prevIndication.splice(index, 1);

   return {
    ...prevState,
    kejadian: prevIndication,
   };
  });
 }

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <Paper variant="outlined" sx={{ p: 2, minWidth: "0 !important" }}>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <FieldLabelInfo titleSection title="Kejadian Risiko" />
       </Grid>
       {state.kejadian.map((indication, index) => (
        <Fragment key={`${index}`}>
         <Grid item xs={12} md={5}>
          <FormControl fullWidth>
           <FieldLabelInfo title="Keterangan" />
           <TextField
            variant="outlined"
            size="small"
            placeholder={`Keterangan`}
            InputLabelProps={{
             shrink: true,
            }}
            value={indication.keterangan}
            onChange={(e) =>
             setState((prevState) => {
              const prevIndication = [...prevState.kejadian];
              prevIndication[index].keterangan = e.target.value;
              return {
               ...prevState,
               kejadian: prevIndication,
              };
             })
            }
           />
          </FormControl>
         </Grid>

         <Grid item xs={12} md={6}>
          <FormControl fullWidth>
           <FieldLabelInfo title="Keyword SWOT" />
           <AutocompleteSelectMultiple
            value={indication.keyword_swot}
            options={optionStrategy}
            getOptionLabel={(option) => option.value}
            handleChange={(newVal: ExsumSWOTValuesDto[]) =>
             setState((prevState) => {
              const prevIndication = [...prevState.kejadian];
              prevIndication[index].keyword_swot = newVal;
              return {
               ...prevState,
               kejadian: prevIndication,
              };
             })
            }
            placeHolder={"Pilih RO Kunci"}
            labelSelectAll={"Pilih semua rincian output"}
           />
          </FormControl>
         </Grid>

         <Grid item lg={1}>
          <FormControl sx={{ mt: "32px" }}>
           <IconButton
            aria-label="delete"
            color="error"
            onClick={() => deleteIndicationRow(index)}
           >
            <IconFA size={18} name="trash-can" />
           </IconButton>
          </FormControl>
         </Grid>
        </Fragment>
       ))}
      </Grid>
      <FormControl sx={{ mt: 2 }}>
       <AddButton
        title="Tambah kejadian risiko"
        noMargin
        onclick={() => addIndicationRow()}
       />
      </FormControl>
     </Paper>
    </Grid>
   </Grid>
  </>
 );
}
