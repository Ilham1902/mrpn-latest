import React, { SetStateAction } from "react";
import {
 Checkbox,
 FormControl,
 FormControlLabel,
 Grid,
 TextField,
 Typography,
} from "@mui/material";
import { TextareaStyled } from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import TableAnggaran from "./table-anggaran";
import { red } from "@mui/material/colors";
import {
 AutoCompleteSingleProp,
 AutocompleteSelectSingle,
} from "@/components/autocomplete";
import { ProPDto } from "@/app/misc/rkp/rkpServiceModel";
import { ExsumInterventionState } from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import {
 MiscMasterListStakeholderRes,
 MiscMasterRPJMNRes,
} from "@/app/misc/master/masterServiceModel";

export default function FormProfilRoProject({
 selectProP,
 selectStakeholder,
 state,
 setState,
 rpjmn,
}: {
 selectProP: AutoCompleteSingleProp<ProPDto>;
 selectStakeholder: AutoCompleteSingleProp<MiscMasterListStakeholderRes>;
 state: ExsumInterventionState;
 setState: (value: SetStateAction<ExsumInterventionState>) => void;
 rpjmn: MiscMasterRPJMNRes | undefined;
}) {
 return (
  <Grid container spacing={2}>
   <Grid item xs={12} md={5}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Format Kode" />
     <TextField
      value={state.code}
      onChange={(e) =>
       setState((prev) => {
        return {
         ...prev,
         code: e.target.value,
        };
       })
      }
      variant="outlined"
      size="small"
      placeholder="Format Kode"
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
   <Grid item xs={12} md={5}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Tagging ProP" />
     <AutocompleteSelectSingle
      value={selectProP.value}
      options={selectProP.options}
      getOptionLabel={selectProP.getOptionLabel}
      handleChange={selectProP.handleChange}
      placeHolder={selectProP.placeHolder}
     />
    </FormControl>
   </Grid>
   <Grid item xs={12} md={2}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Intervensi Kunci" />
     <FormControlLabel
      control={
       <Checkbox
        checked={state.intervensi}
        onChange={(checked) =>
         setState((prevState) => {
          return {
           ...prevState,
           intervensi: checked.target.checked,
          };
         })
        }
       />
      }
      label={
       <Typography fontWeight={600} color={red[600]} fontSize={12}>
        Intervensi Kunci
       </Typography>
      }
     />
    </FormControl>
   </Grid>
   <Grid item xs={12} md={5}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Penanggungjawab" />
     <AutocompleteSelectSingle
      value={selectStakeholder.value}
      options={selectStakeholder.options}
      handleChange={selectStakeholder.handleChange}
      placeHolder={selectStakeholder.placeHolder}
      getOptionLabel={selectStakeholder.getOptionLabel}
     />
    </FormControl>
   </Grid>
   <Grid item xs={12} md={7}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Nomenklatur RO/Project" />
     <TextField
      value={state.nomenklatur}
      onChange={(e) =>
       setState((prev) => {
        return {
         ...prev,
         nomenklatur: e.target.value,
        };
       })
      }
      variant="outlined"
      size="small"
      placeholder="Nomenklatur RO/Project"
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Indikator Project" />
     <TextareaStyled
      value={state.indikator}
      onChange={(e) =>
       setState((prev) => {
        return {
         ...prev,
         indikator: e.target.value,
        };
       })
      }
      aria-label="Tuliskan Indikator Project"
      placeholder="Tuliskan Indikator Project"
      minRows={3}
     />
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <TableAnggaran rpjmn={rpjmn} state={state} setState={setState} />
   </Grid>
  </Grid>
 );
}
