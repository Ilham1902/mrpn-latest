import React, { Fragment, SetStateAction } from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Divider,
 FormControl,
 FormControlLabel,
 FormGroup,
 Grid,
 Paper,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent, { TextareaStyled } from "@/components/textarea";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import { MiscMasterListPerpresRes } from "@/app/misc/master/masterServiceModel";
import { ExsumRegulationDto } from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";
import { listPeraturan } from "@/app/utils/data";
import {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/app/components/dropdown/dropdownRkp";
import { paramVariantDefault } from "@/app/utils/constant";
import { AutocompleteSelectMultiple } from "@/components/autocomplete";

type Option = (typeof listPeraturan)[number];

export default function FormPeraturan({
 options,
 request,
 setRequest,
}: {
 options: MiscMasterListPerpresRes[];
 request: ExsumRegulationDto;
 setRequest: (value: SetStateAction<ExsumRegulationDto>) => void;
}) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Peraturan Terkait" />
      <AutocompleteSelectMultiple
       value={request.perpres}
       options={options}
       getOptionLabel={(opt) => opt.title}
       handleChange={(e: MiscMasterListPerpresRes[]) =>
        setRequest((prevState) => {
         return {
          ...prevState,
          perpres: e,
         };
        })
       }
       placeHolder={"Pilih peraturan terkait"}
       labelSelectAll={"Pilih semua peraturan terkait"}
      />
     </FormControl>
    </Grid>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Amanat Peraturan yang Terkait" />
      <TextareaStyled
       aria-label="Amanat Peraturan yang Terkait"
       placeholder="Amanat Peraturan yang Terkait"
       minRows={3}
       value={request.amanat}
       onChange={(e) =>
        setRequest((prev: ExsumRegulationDto) => {
         return {
          ...prev,
          amanat: e.target.value,
         };
        })
       }
      />
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
