import React from "react";
import {Autocomplete, Box, Checkbox, Divider, FormControlLabel, Paper, TextField} from "@mui/material";
import {SxAutocomplete, SxAutocompleteTextField} from "@/components/dropdown/dropdownRkp";
import {paramVariantDefault} from "@/app/utils/constant";

export interface AutoCompleteMultipleProp<T> {
  value: T[]
  options: T[]
  getOptionLabel: (option: T) => string
  handleChange: Function
  placeHolder: string
  labelSelectAll: string
}

export function AutocompleteSelectMultiple<T>(
  {
    value,
    options,
    getOptionLabel,
    handleChange,
    placeHolder,
    labelSelectAll
  }: AutoCompleteMultipleProp<T>
) {
  return (
    <Autocomplete
      multiple
      filterSelectedOptions
      size="small"
      freeSolo={false}
      value={value}
      options={options}
      getOptionLabel={getOptionLabel}
      onChange={(_e, value, reason) => {
        if (reason === "clear" || reason === "removeOption")
          handleChange([])
        if (reason === "selectOption" && value.length === options.length) {
          handleChange(options)
        }
        handleChange(value)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={placeHolder}
          sx={SxAutocompleteTextField(paramVariantDefault)}
        />
      )}
      PaperComponent={(paperProps) => {
        const {children, ...restPaperProps} = paperProps;
        return (
          <Paper {...restPaperProps}>
            <Box onMouseDown={(e) => e.preventDefault()} pl={1.5} py={0.5}>
              <FormControlLabel
                onClick={(e) => {
                  e.preventDefault();
                  handleChange(options)
                }}
                label={labelSelectAll}
                control={<Checkbox id="select-all-checkbox" checked={value.length == options.length}/>}
              />
            </Box>
            <Divider/>
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
  );
}

export interface AutoCompleteSingleProp<T> {
  value: T|undefined
  options: T[]
  getOptionLabel: (option: T) => string
  handleChange: Function
  placeHolder: string
}

export function AutocompleteSelectSingle<T>(
  {
    value,
    options,
    getOptionLabel,
    handleChange,
    placeHolder,
  }: AutoCompleteSingleProp<T>
) {
  return (
    <Autocomplete
      filterSelectedOptions
      size="small"
      freeSolo={false}
      value={value}
      options={options}
      getOptionLabel={getOptionLabel}
      onChange={(_e, value) => {
        handleChange(value)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={placeHolder}
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
  );
}

export interface AutoCompleteFreeSoloProp {
  multiple:boolean
  value: string|undefined
  options: string[]
  handleChange: Function
  placeHolder: string
}

export function AutocompleteSelectFreeSolo(
  {
    multiple,
    value,
    options,
    handleChange,
    placeHolder,
  }: AutoCompleteFreeSoloProp
) {
  return (
    <Autocomplete
      multiple={multiple}
      filterSelectedOptions
      size="small"
      freeSolo
      value={value}
      options={options}
      onChange={(_e, value) => {
        handleChange(value)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={placeHolder}
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
  );
}
