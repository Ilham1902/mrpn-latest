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

type Option = (typeof listEntity)[number];

const ItemKP = ({ full, type }: { full?: boolean; type: string }) => {
 return (
  <>
   <Grid item xs={12} md={4}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Entitas" information="Entitas" />
     <TextField
      variant="outlined"
      size="small"
      placeholder={`Entitas`}
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
   <Grid item xs={12} md={full ? 8 : 7}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Instansi" information="Instansi" />
     <Autocomplete
      multiple
      size="small"
      freeSolo
      options={[]}
      renderInput={(params) => (
       <TextField
        {...params}
        InputLabelProps={{
         shrink: true,
        }}
        placeholder="Tambah instansi"
        sx={SxAutocompleteTextField(paramVariantDefault)}
       />
      )}
      renderTags={(value, props) =>
       value.map((option, index) => (
        <Fragment key={index}>
         <Chip size="small" label={option} {...props({ index })} />
        </Fragment>
       ))
      }
      sx={{
       ...SxAutocomplete,
       ".MuiInputBase-root": {
        borderRadius: 1,
       },
      }}
     />
    </FormControl>
   </Grid>
  </>
 );
};

export default function AddEntity({
 optionStakeholder,
 state,
 setState,
}: {
 state: ExsumIndicationState;
 setState: (value: SetStateAction<ExsumIndicationState>) => void;
 optionStakeholder: MiscMasterListStakeholderRes[];
}) {
 function deleteRow(index: number) {
  setState((prevState) => {
   const prevEntity = prevState.entity;
   prevEntity.others.splice(index, 1);

   return {
    ...prevState,
    entity: prevEntity,
   };
  });
 }

 function addRow() {
  setState((prevState) => {
   const prevEntity = prevState.entity;

   const newRow: OthersEntityState = {
    type: "",
    entity: [],
   };

   prevEntity.others.push(newRow);

   return {
    ...prevState,
    entity: prevEntity,
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
       key={state.entity.coordinator ? state.entity.coordinator.id : undefined}
       value={state.entity.coordinator}
       options={optionStakeholder}
       getOptionLabel={(opt) => opt.value}
       handleChange={(val: MiscMasterListStakeholderRes) =>
        setState((prevState) => {
         const prevEntity = prevState.entity;
         prevEntity.coordinator = val;
         return {
          ...prevState,
          entity: prevEntity,
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
1bersifat lintas sektor"
      />
      <AutocompleteSelectMultiple
       value={state.entity.main}
       options={optionStakeholder}
       getOptionLabel={(opt) => opt.value}
       handleChange={(val: MiscMasterListStakeholderRes[]) =>
        setState((prevState) => {
         const prevEntity = prevState.entity;
         prevEntity.main = val;
         return {
          ...prevState,
          entity: prevEntity,
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
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <FieldLabelInfo titleSection title="Tambah Entitas" />
       </Grid>
       {state.entity.others.map((row, index) => (
        <Fragment key={`${index}`}>
         <Grid item xs={12} md={4}>
          <FormControl fullWidth>
           <FieldLabelInfo
            title="Entitas"
            titleField
            information="Kementerian negara, lembaga, pemerintah daerah, pemerintah desa, badan usaha, dan badan
lainnya"
           />
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
              const entity = prevState.entity;
              entity.others[index].type = e.target.value;
              return {
               ...prevState,
               entity: entity,
              };
             })
            }
           />
          </FormControl>
         </Grid>

         <Grid item xs={12} md={7}>
          <FormControl fullWidth>
           <FieldLabelInfo title="Instansi" />
           <AutocompleteSelectMultiple
            value={state.entity.others[index].entity}
            options={optionStakeholder}
            getOptionLabel={(opt) => opt.value}
            handleChange={(val: MiscMasterListStakeholderRes[]) =>
             setState((prevState) => {
              const prevEntity = prevState.entity;
              prevEntity.others[index].entity = val;
              return {
               ...prevState,
               entity: prevEntity,
              };
             })
            }
            placeHolder={"Pilih instansi"}
            labelSelectAll={"Pilih semua instansi"}
           />
          </FormControl>
         </Grid>

         <Grid item lg={1}>
          <FormControl sx={{ mt: "32px" }}>
           <IconButton
            aria-label="delete"
            color="error"
            onClick={() => deleteRow(index)}
           >
            <IconFA size={18} name="trash-can" />
           </IconButton>
          </FormControl>
         </Grid>
        </Fragment>
       ))}
      </Grid>
      <FormControl sx={{ mt: 2 }}>
       <AddButton title="Tambah entitas" noMargin onclick={() => addRow()} />
      </FormControl>
     </Paper>
    </Grid>
   </Grid>
  </>
 );
}
