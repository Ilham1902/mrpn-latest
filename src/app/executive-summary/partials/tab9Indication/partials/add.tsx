import React, { Fragment } from "react";
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
} from "@/app/components/dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listEntity } from "@/app/executive-summary/data";

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

export default function AddEntity({ mode }: { mode?: string }) {
 const [itemsPP, setItemPP] = React.useState([{ id: 1 }]);
 const [columns, setColumns] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const addPP = () => {
  let arr = [...itemsPP];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItemPP(newItem);
 };

 const minusPP = (nowId: any) => {
  let arr = [...itemsPP];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItemPP(newArr);
 };

 const handleToggleSelectAll = () => {
  setSelectAll((prev) => {
   if (!prev) setColumns([...listEntity]);
   else setColumns([]);
   return !prev;
  });
 };

 return (
  <>
   <Grid container spacing={2}>
    {/* <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Entitas</Typography>
      <TextField
       variant="outlined"
       size="small"
       placeholder="Entitas"
       InputLabelProps={{
        shrink: true,
       }}
      />
     </FormControl>
    </Grid> */}
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Kementerian Koordinator"
       information="Kementerian Koordinator"
      />
      <Autocomplete
       //    multiple
       //    disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       options={listEntity}
       getOptionLabel={(option) => option.instance}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih kementerian koordinator"
         sx={SxAutocompleteTextField(paramVariantDefault)}
        />
       )}
       sx={{
        ...SxAutocomplete,
        ".MuiInputBase-root": {
         borderRadius: 1,
        },
       }}
      />
     </FormControl>
    </Grid>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo title="Entitas Utama" information="Entitas Utama" />
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columns}
       options={listEntity}
       getOptionLabel={(option) => option.instance}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listEntity.length)
         setSelectAll(true);
        setColumns(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih entitas utama"
         sx={SxAutocompleteTextField(paramVariantDefault)}
        />
       )}
       PaperComponent={(paperProps) => {
        const { children, ...restPaperProps } = paperProps;
        return (
         <Paper {...restPaperProps}>
          <Box onMouseDown={(e) => e.preventDefault()} pl={1.5} py={0.5}>
           <FormControlLabel
            onClick={(e) => {
             e.preventDefault();
             handleToggleSelectAll();
            }}
            label="Pilih semua entitas"
            control={<Checkbox id="select-all-checkbox" checked={selectAll} />}
           />
          </Box>
          <Divider />
          {children}
         </Paper>
        );
       }}
       sx={{
        ...SxAutocomplete,
        ".MuiInputBase-root": {
         borderRadius: 1,
        },
       }}
      />
     </FormControl>
    </Grid>
    <Grid item xs={12}>
     <Paper variant="outlined" sx={{ p: 2, minWidth: "0 !important" }}>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <FieldLabelInfo
         titleSection
         title="Tambah Entitas"
         information="Tambah Entitas"
        />
       </Grid>
       {itemsPP.map((tags: any) => (
        <Fragment key={`${tags.id}`}>
         <ItemKP type="pp" />
         <Grid item lg={1}>
          <FormControl sx={{ mt: "32px" }}>
           <IconButton
            aria-label="delete"
            color="error"
            onClick={() => minusPP(tags.id)}
           >
            <IconFA size={18} name="trash-can" />
           </IconButton>
          </FormControl>
         </Grid>
        </Fragment>
       ))}
      </Grid>
      <FormControl sx={{ mt: 2 }}>
       <AddButton title="Tambah entitas" noMargin onclick={addPP} />
      </FormControl>
     </Paper>
    </Grid>
   </Grid>
  </>
 );
}
