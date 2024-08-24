import React from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import {
  SxAutocompleteTextField,
  SxAutocomplete,
} from "@/components/dropdownKp";
import {paramVariantDefault} from "@/utils/constant";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import {listSwotSo, listSwotSt, listSwotWo, listSwotWt} from "../../../data";
import TextareaComponent, {TextareaStyled} from "@/components/textarea";
import {
  ExsumTWOSReqDto,
  ExsumKeyword, ExsumTWOSDto
} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsModel";

export default function GenerateFormTWOS(
  {
    type,
    title,
    keywords,
    options,
    strategi,
    setRequest
  }: {
    type: string
    title: string
    keywords: ExsumKeyword[]
    options: ExsumKeyword[]
    strategi:string
    setRequest: (value: React.SetStateAction<ExsumTWOSDto>) => void
  }
) {

  const [selectAll, setSelectAll] = React.useState<boolean>(false);

  const handleToggleSelectAll = () => {
    setSelectAll((prev) => {
      if (!prev) {
        switch (type) {
          case "so": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                so_keyword: [...options]
              }
            })
            break;
          }
          case "wo": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                wo_keyword: [...options]
              }
            })
            break;
          }
          case "st": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                st_keyword: [...options]
              }
            })
            break;
          }
          case "wt": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                wt_keyword: [...options]
              }
            })
            break;
          }
        }
      } else {
        switch (type) {
          case "so": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                so_keyword: []
              }
            })
            break;
          }
          case "wo": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                wo_keyword: []
              }
            })
            break;
          }
          case "st": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                st_keyword: []
              }
            })
            break;
          }
          case "wt": {
            setRequest((prev: ExsumTWOSReqDto) => {
              return {
                ...prev,
                wt_keyword: []
              }
            })
            break;
          }
        }
      }
      return !prev;
    });
  };

  const handleChangeOptionValue = (value:ExsumKeyword[]) => {
    switch (type) {
      case "so": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            so_keyword: value
          }
        })
        break;
      }
      case "wo": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            wo_keyword: value
          }
        })
        break;
      }
      case "st": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            st_keyword: value
          }
        })
        break;
      }
      case "wt": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            wt_keyword: value
          }
        })
        break;
      }
    }
  }

  const handleChangeStrategicValue = (value:string) => {
    switch (type) {
      case "so": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            so: value
          }
        })
        break;
      }
      case "wo": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            wo: value
          }
        })
        break;
      }
      case "st": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            st: value
          }
        })
        break;
      }
      case "wt": {
        setRequest((prev: ExsumTWOSReqDto) => {
          return {
            ...prev,
            wt: value
          }
        })
        break;
      }
    }
  }

  return (
    <Grid item xs={12} md={6}>
      <FormControl fullWidth>
        <FieldLabelInfo
          title={title}
          information={title}
        />
        <Stack gap={1}>
          <TextareaStyled
            aria-label={`Tuliskan Strategi ${type.toUpperCase()}`}
            placeholder={`Tuliskan Strategi ${type.toUpperCase()}`}
            minRows={3}
            value={strategi}
            onChange={(e) => handleChangeStrategicValue(e.target.value)}
          />
          <Autocomplete
            multiple
            disableCloseOnSelect
            filterSelectedOptions
            size="small"
            freeSolo={false}
            value={keywords}
            options={options}
            getOptionLabel={(option) => option.value}
            onChange={(_e, value, reason) => {
              if (reason === "clear" || reason === "removeOption") setSelectAll(false);
              if (reason === "selectOption" && value.length === listSwotSo.length) setSelectAll(true);
              handleChangeOptionValue(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder={`Pilih kata kunci ${type.toUpperCase()}`}
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
                        handleToggleSelectAll();
                      }}
                      label="Pilih semua kata kunci"
                      control={<Checkbox id="select-all-checkbox" checked={selectAll}/>}
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
        </Stack>
      </FormControl>
    </Grid>
  )
}
