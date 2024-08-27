import React, { Fragment } from "react";
import {
 Autocomplete,
 Card,
 CardContent,
 Checkbox,
 Chip,
 FormControl,
 FormControlLabel,
 FormGroup,
 FormLabel,
 Grid,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import dynamic from "next/dynamic";
import { OptionKebijakan, listKebijakan } from "@/app/utils/data";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import { grey } from "@mui/material/colors";
import { paramVariantDefault } from "@/app/utils/constant";

const FCLItem = ({ keyIndex, item }: { keyIndex: any; item: string }) => {
 return (
  <FormControlLabel
   key={keyIndex}
   control={<Checkbox name={item} sx={{ py: 0 }} />}
   label={
    <Stack direction="row" alignItems="flex-start" gap={1}>
     <Typography color={grey[600]}>{keyIndex + 1}.</Typography> {item}
    </Stack>
   }
   sx={{ alignItems: "flex-start" }}
  />
 );
};

const MultiCheckbox = ({
 title,
 children,
 maxHeight,
}: {
 title: string;
 children: React.ReactNode;
 maxHeight?: number;
}) => {
 return (
  <Card variant="outlined">
   <CardContent sx={{ pb: "16px !important" }}>
    <FormControl
     component="fieldset"
     variant="standard"
     sx={{ gap: 2, width: "100%" }}
    >
     <FormLabel component="legend">{title}</FormLabel>
     <FormGroup
      sx={{
       mt: 2,
       gap: 1,
       overflowY: "auto",
       flexWrap: "nowrap",
       maxHeight: maxHeight ? maxHeight : 150,
       "&::-webkit-scrollbar": {
        width: "3px",
       },
       ".MuiCheckbox-root": {
        p: "0 10px",
       },
      }}
     >
      {children}
     </FormGroup>
    </FormControl>
   </CardContent>
  </Card>
 );
};

export default function FormRelated({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const [selectedOptions, setSelectedOptions] = React.useState<
  OptionKebijakan[]
 >([]);

 const handleChange = (
  event: React.ChangeEvent<{}>,
  value: OptionKebijakan[] | null
 ) => {
  setSelectedOptions(value ?? []);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kebijakan</Typography>
      {mode === "add" || mode === "edit" ? (
       <Stack
        gap={2}
        sx={{
         ".MuiPaper-root": {
          minWidth: "0 !important",
         },
        }}
       >
        <Autocomplete
         size="small"
         multiple
         disableCloseOnSelect
         options={listKebijakan}
         getOptionLabel={(option: OptionKebijakan) => option.label}
         renderInput={(params) => (
          <TextField
           {...params}
           InputLabelProps={{
            shrink: true,
           }}
           placeholder="Pilih kebijakan"
           sx={SxAutocompleteTextField(paramVariantDefault)}
          />
         )}
         renderTags={(value: OptionKebijakan[], getTagProps) => {
          return value.map((option: OptionKebijakan, index: number) => {
           const { key, ...restProps } = getTagProps({ index });
           return (
            <Chip
             key={option.id}
             size="small"
             label={option.label}
             {...restProps}
            />
           );
          });
         }}
         value={selectedOptions}
         onChange={handleChange}
         sx={{
          ...SxAutocomplete,
          ".MuiInputBase-root": {
           borderRadius: 1,
          },
         }}
        />

        {selectedOptions.map((option: OptionKebijakan, index: number) => (
         <Fragment key={index}>
          {option.value === "10" ? (
           <>
            <MultiCheckbox title="Astacita" maxHeight={200}>
             {option.list?.map((item, index) => (
              <Fragment key={index}>
               <FCLItem keyIndex={index} item={item} />
              </Fragment>
             ))}
            </MultiCheckbox>
           </>
          ) : option.value === "13" ? (
           <MultiCheckbox title="8 Quick Wins" maxHeight={200}>
            {option.list?.map((item, index) => (
             <Fragment key={index}>
              <FCLItem keyIndex={index} item={item} />
             </Fragment>
            ))}
           </MultiCheckbox>
          ) : option.value === "14" ? (
           <MultiCheckbox title="20 Game Changer" maxHeight={200}>
            {option.list?.map((item, index) => (
             <Fragment key={index}>
              <FCLItem keyIndex={index} item={item} />
             </Fragment>
            ))}
           </MultiCheckbox>
          ) : option.value === "15" ? (
           <MultiCheckbox
            title="45 Indikator Utama Pembangunan"
            maxHeight={350}
           >
            {option.list?.map((item, index) => (
             <Fragment key={index}>
              <FCLItem keyIndex={index} item={item} />
             </Fragment>
            ))}
           </MultiCheckbox>
          ) : option.value === "17" ? (
           <MultiCheckbox title="17 Program Prioritas" maxHeight={350}>
            {option.list?.map((item, index) => (
             <Fragment key={index}>
              <FCLItem keyIndex={index} item={item} />
             </Fragment>
            ))}
           </MultiCheckbox>
          ) : null}
         </Fragment>
        ))}
       </Stack>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item xs={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Keterangan</Typography>
      {mode === "add" ? (
       <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        //  style={{ maxHeight: 200, minHeight: 200 }}
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Keterangan"
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
