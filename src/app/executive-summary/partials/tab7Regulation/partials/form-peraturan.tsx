import React, { Fragment } from "react";
import {
 Checkbox,
 FormControl,
 FormControlLabel,
 FormGroup,
 Grid,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";

export default function FormPeraturan({ mode }: { mode?: string }) {
 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Peraturan Terkait"
       information="Peraturan Terkait"
      />
      {mode === "add" || mode === "edit" ? (
       <FormGroup
        sx={{
         flexWrap: "nowrap",
         maxHeight: 200,
         overflowY: "auto",
         "&::-webkit-scrollbar": {
          width: "3px",
         },
         label: {
          span: {
           py: 0.2,
          },
         },
        }}
       >
        {[...new Array(8)].map((_, i) => (
         <Fragment key={i}>
          <FormControlLabel
           control={<Checkbox />}
           label="Peraturan Presiden Nomor 79 Tahun 2019"
          />
          <FormControlLabel
           control={<Checkbox />}
           label="Peraturan Presiden Nomor 109 Tahun 2022"
          />
          <FormControlLabel
           control={<Checkbox />}
           label="Peraturan Presiden Nomor 109 Tahun 2020"
          />
         </Fragment>
        ))}
       </FormGroup>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Amanat Peraturan yang Terkait"
       information="Amanat Peraturan yang Terkait"
      />
      {mode === "add" ? (
       <TextareaComponent
        label="Amanat Peraturan yang Terkait"
        placeholder="Amanat Peraturan yang Terkait"
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Amanat Peraturan yang Terkait"
        placeholder="Amanat Peraturan yang Terkait"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
