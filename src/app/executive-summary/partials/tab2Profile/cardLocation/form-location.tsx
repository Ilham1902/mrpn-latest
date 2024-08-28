import React, { useEffect } from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { TextareaStyled } from "@/components/textarea";
import {
  SxAutocompleteTextField,
  SxAutocomplete,
} from "@/components/dropdownKp";
import { paramVariantDefault } from "@/utils/constant";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import { MiscMasterListProvinsiRes } from "@/app/misc/master/masterServiceModel";
import { ExsumLocationUpdateDto } from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationModel";


export default function FormLocation(
  {
    mode,
    options,
    request,
    setRequest,
    columns,
    setColumns
  }: {
    mode: string
    options: MiscMasterListProvinsiRes[]
    request: ExsumLocationUpdateDto
    setRequest: any,
    columns:MiscMasterListProvinsiRes[],
    setColumns:any
  }
) {

  const [selectAll, setSelectAll] = React.useState<boolean>(false);

  const handleToggleSelectAll = () => {
    setSelectAll((prev) => {
      if (!prev) {
        setColumns([...options])
      } else {
        if (columns.length > 0 && columns.length !== options.length) {
          setColumns([]) 
        }
      };
      return !prev;
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Lokasi" information="Lokasi" />
          {mode === "add" || mode === "edit" ? (
            <Autocomplete
              key={columns.length}
              multiple
              disableCloseOnSelect
              filterSelectedOptions
              size="small"
              freeSolo={false}
              value={columns}
              options={options}
              getOptionLabel={(option) => option.name}
              onChange={(_e, value, reason) => {
                if (reason === "clear" || reason === "removeOption")
                  setSelectAll(false);
                if (reason === "selectOption" && value.length === options.length)
                  setSelectAll(true);
                  setColumns(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Pilih provinsi"
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
                        label="Pilih semua provinsi"
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
          ) : (
            <Typography fontWeight={600}>-</Typography>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Keterangan" information="Keterangan" />
          {mode === "add" || mode === "edit" ? (
            <TextareaStyled
              aria-label="Keterangan"
              placeholder="Keterangan"
              value={request.values.length > 0 ? request.values[0].keterangan : ""}
              onChange={(e) => setRequest((prev:ExsumLocationUpdateDto) => {
                const newVal = {
                  ...prev,
                  values:[
                    {
                      keterangan:e.target.value,
                      provinsi: prev.values.length > 0 ? prev.values[0].provinsi : []
                    }
                  ]
                }
                return newVal
              })}
            />
          ) : (
            <Typography fontWeight={600}>{request.values[0].keterangan}</Typography>
          )}
        </FormControl>
      </Grid>
    </Grid>
  );
}
