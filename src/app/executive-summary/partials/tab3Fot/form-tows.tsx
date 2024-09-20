import React, { Fragment } from "react";
import {
 Autocomplete,
 Box,
 Checkbox,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 IconButton,
 Paper,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { paramVariantDefault } from "@/app/utils/constant";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { listSwotSo, listSwotSt, listSwotWo, listSwotWt } from "../../data";
import TextareaComponent from "@/app/components/textarea";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";

type Option = (typeof listSwotSo)[number];

const data = [
 { label: "Strength Opportunity", shortness: "SO" },
 { label: "Weakness Opportunity", shortness: "WO" },
 { label: "Strength Threats", shortness: "ST" },
 { label: "Weakness Threats", shortness: "WT" },
];

const FieldGroup = ({
 addField,
 onclick,
 label,
 shortness,
}: {
 detailItem?: any;
 addField?: boolean;
 onclick?: () => void;
 label: string;
 shortness: string;
}) => {
 const [columnsSo, setColumnsSo] = React.useState<Option[]>([]);
 const [columnsWo, setColumnsWo] = React.useState<Option[]>([]);
 const [columnsSt, setColumnsSt] = React.useState<Option[]>([]);
 const [columnsWt, setColumnsWt] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);
 const [itemFactor, setItemFactor] = React.useState([{ id: 0 }]);

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const handleToggleSelectAllSo = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsSo([...listSwotSo]);
   else setColumnsSo([]);
   return !prev;
  });
 };

 const handleToggleSelectAllWo = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsWo([...listSwotWo]);
   else setColumnsWo([]);
   return !prev;
  });
 };
 const handleToggleSelectAllSt = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsSt([...listSwotSt]);
   else setColumnsSt([]);
   return !prev;
  });
 };
 const handleToggleSelectAllWt = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsWt([...listSwotWt]);
   else setColumnsWt([]);
   return !prev;
  });
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
     <TextField
      size="small"
      fullWidth
      InputLabelProps={{
       shrink: true,
      }}
      placeholder={`Tuliskan deskripsi ${shortness}`}
     />
    </Grid>
    <Grid item xs={12} md={addField ? 5 : 6}>
     <Autocomplete
      multiple
      disableCloseOnSelect
      filterSelectedOptions
      size="small"
      freeSolo={false}
      value={columnsSo}
      options={listSwotSo}
      getOptionLabel={(option) => option.description}
      onChange={(_e, value, reason) => {
       if (reason === "clear" || reason === "removeOption") setSelectAll(false);
       if (reason === "selectOption" && value.length === listSwotSo.length)
        setSelectAll(true);
       setColumnsSo(value);
      }}
      renderInput={(params) => (
       <TextField
        {...params}
        InputLabelProps={{
         shrink: true,
        }}
        placeholder={`Pilih kata kunci ${shortness}`}
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
            handleToggleSelectAllSo();
           }}
           label="Pilih semua kata kunci"
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
    </Grid>
    {addField && (
     <Grid item xs={12} md={1}>
      <Stack justifyContent="center" alignItems="center" height="40px">
       <IconButton
        aria-label="delete"
        color="error"
        onClick={onclick}
        sx={{ p: 0 }}
       >
        <IconFA size={18} name="trash-can" />
       </IconButton>
      </Stack>
     </Grid>
    )}
   </Grid>
  </>
 );
};

export default function FormTows({ mode }: { mode?: string }) {
 const [columnsSo, setColumnsSo] = React.useState<Option[]>([]);
 const [columnsWo, setColumnsWo] = React.useState<Option[]>([]);
 const [columnsSt, setColumnsSt] = React.useState<Option[]>([]);
 const [columnsWt, setColumnsWt] = React.useState<Option[]>([]);
 const [selectAll, setSelectAll] = React.useState<boolean>(false);
 const [itemFactor, setItemFactor] = React.useState([{ id: 0 }]);

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const handleToggleSelectAllSo = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsSo([...listSwotSo]);
   else setColumnsSo([]);
   return !prev;
  });
 };

 const handleToggleSelectAllWo = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsWo([...listSwotWo]);
   else setColumnsWo([]);
   return !prev;
  });
 };
 const handleToggleSelectAllSt = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsSt([...listSwotSt]);
   else setColumnsSt([]);
   return !prev;
  });
 };
 const handleToggleSelectAllWt = () => {
  setSelectAll((prev) => {
   if (!prev) setColumnsWt([...listSwotWt]);
   else setColumnsWt([]);
   return !prev;
  });
 };

 const addFactor = () => {
  let arr = [...itemFactor];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItemFactor(newItem);
 };

 const minusFactor = (nowId: any) => {
  let arr = [...itemFactor];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItemFactor(newArr);
 };

 return (
  <>
   <Stack gap={2}>
    {data.map((itemTows, index) => (
     <Paper
      key={index}
      elevation={0}
      variant="outlined"
      sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
     >
      <Stack direction="row" justifyContent="space-between" mb={1}>
       <Typography
        gutterBottom
        variant="h6"
        component="div"
        lineHeight={1.3}
        sx={{ textTransform: "capitalize" }}
       >
        {`Strategi ${itemTows.label} (${itemTows.shortness})`}
       </Typography>
       <AddButton
        title={`Tambah  ${itemTows.shortness}`}
        small
        noMargin
        onclick={addFactor}
       />
      </Stack>
      <Stack gap={1}>
       <FieldGroup
        label={`${itemTows.label} (${itemTows.shortness})`}
        shortness={`${itemTows.shortness}`}
       />
       {itemFactor.map((tags: any) => (
        <Fragment key={`${tags.id}`}>
         <FieldGroup
          label={`${itemTows.label} (${itemTows.shortness})`}
          shortness={`${itemTows.shortness}`}
          addField
          onclick={() => minusFactor(tags.id)}
         />
        </Fragment>
       ))}
      </Stack>
     </Paper>
    ))}
   </Stack>
  </>
 );
}
