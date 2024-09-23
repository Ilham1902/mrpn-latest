import React, { Fragment } from "react";
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

type Option = (typeof listPeraturan)[number];

export default function FormPeraturan({
 options,
 request,
 setRequest,
}: {
 options: MiscMasterListPerpresRes[];
 request: ExsumRegulationDto;
 setRequest: (prev: any) => void;
}) {
 const [columnsInstance, setColumnsInstance] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);

 const handleToggleSelectAllInstance = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsInstance([...listPeraturan]);
   else setColumnsInstance([]);
   return !prev;
  });
 };

 const isChecked = (id: number) => {
  return request.perpres.findIndex((x) => x.id == id) !== -1;
 };

 const handleChangeChecked = (
  isChecked: boolean,
  item: MiscMasterListPerpresRes
 ) => {
  setRequest((prev: ExsumRegulationDto) => {
   const newReq = { ...request };
   if (!isChecked) {
    const checkedItem = newReq.perpres.findIndex((x) => x.id == item.id);
    if (checkedItem !== -1) {
     newReq.perpres.splice(checkedItem, 1);
    }
   } else {
    newReq.perpres.push(item);
   }
   return {
    ...prev,
    perpres: newReq.perpres,
   };
  });
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Peraturan Terkait"
       information="Peraturan Terkait"
      />
      {/* <FormGroup
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
       {options.map((row, i) => (
         <Fragment key={i}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked(row.id)}
                onChange={(event) => handleChangeChecked(event.target.checked, row)}
              />
            }
            label={row.title}
          />
         </Fragment>
       ))}
      </FormGroup> */}
      <Autocomplete
       multiple
       disableCloseOnSelect
       filterSelectedOptions
       size="small"
       freeSolo={false}
       value={columnsInstance}
       options={listPeraturan}
       getOptionLabel={(option) => option.source}
       onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
         setSelectAll(false);
        if (reason === "selectOption" && value.length === listPeraturan.length)
         setSelectAll(true);
        setColumnsInstance(value);
       }}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Pilih peraturan terkait"
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
             handleToggleSelectAllInstance();
            }}
            label="Pilih semua peraturan"
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
     <FormControl fullWidth>
      <FieldLabelInfo
       title="Amanat Peraturan yang Terkait"
       information="Amanat Peraturan yang Terkait"
      />
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
