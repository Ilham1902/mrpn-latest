import React, {Fragment} from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {TextareaStyled} from "@/app/components/textarea";
import {
  SxAutocompleteTextField,
  SxAutocomplete,
} from "@/app/components/dropdownKp";
import {grey} from "@mui/material/colors";
import {paramVariantDefault} from "@/app/utils/constant";
import {MiscMasterListKebijakanRes} from "@/app/misc/master/masterServiceModel";
import {
  ExsumRelatedInitState,
  ExsumRelatedDto
} from "@/app/executive-summary/partials/tab2Profile/cardRelated/cardRelatedModel";
import type ReactQuill from "react-quill";

const FCLItem = ({keyIndex, item}: { keyIndex: any; item: string }) => {
  return (
    <FormControlLabel
      key={keyIndex}
      control={<Checkbox name={item} sx={{py: 0}}/>}
      label={
        <Stack direction="row" alignItems="flex-start" gap={1}>
          <Typography color={grey[600]}>{keyIndex + 1}.</Typography> {item}
        </Stack>
      }
      sx={{alignItems: "flex-start"}}
    />
  );
};

const MultiCheckbox = (
  {
    title,
    children,
    maxHeight,
  }: {
    title: string;
    children: React.ReactNode;
    maxHeight?: number;
  }
) => {
  return (
    <Card variant="outlined">
      <CardContent sx={{pb: "16px !important"}}>
        <FormControl
          component="fieldset"
          variant="standard"
          sx={{gap: 2, width: "100%"}}
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
                p: "2px 10px",
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

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
  forwardedRef: React.LegacyRef<ReactQuill>
}

export default function FormRelated(
  {
    mode,
    options,
    state,
    setState
  }: {
    mode?: string
    options:MiscMasterListKebijakanRes[]
    state:ExsumRelatedInitState
    setState: (params:any) => void
  }
) {

  // const ReactQuill = dynamic(async () => {
  //     const { default: RQ } = await import('react-quill')
  //
  //     function QuillJS({ forwardedRef, ...props }: IWrappedComponent) {
  //       return <RQ ref={forwardedRef} {...props} />
  //     }
  //
  //     return QuillJS
  //   },
  //   {
  //     ssr: false,
  //   },);
  // const quillRef = React.useRef<ReactQuill>(null)

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Typography gutterBottom>Kebijakan</Typography>
            {mode === "add" || mode === "edit" ? (
              <Autocomplete
                size="small"
                multiple
                disableCloseOnSelect
                options={options}
                getOptionLabel={(option: MiscMasterListKebijakanRes) => option.name}
                value={state.options}
                onChange={(event, value) =>
                  setState((prev:ExsumRelatedInitState) => {
                    return {
                      ...prev,
                      options:value ?? []
                    }
                  })
                }
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
                renderTags={(value: MiscMasterListKebijakanRes[], getTagProps) => {
                  return value.map((option: MiscMasterListKebijakanRes, index: number) => {
                    const {key, ...restProps} = getTagProps({index});
                    return (
                      <Chip
                        key={option.id}
                        size="small"
                        label={option.name}
                        {...restProps}
                      />
                    );
                  });
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
            <Typography gutterBottom>Keterangan</Typography>
            {mode === "add" ? (
              <Stack
                gap={2}
                sx={{
                  ".MuiPaper-root": {
                    minWidth: "0 !important",
                  },
                }}
              >

                {/*<ReactQuill*/}
                {/*  key={state.value}*/}
                {/*  theme="snow"*/}
                {/*  defaultValue={state.value}*/}
                {/*  forwardedRef={quillRef}*/}
                {/*/>*/}

                <TextareaStyled
                  value={state.value}
                  minRows={3}
                  onChange={(e) => {
                    setState((prev:ExsumRelatedInitState) => {
                      return {
                        ...prev,
                        value:e.target.value
                      }
                    });
                  }}
                />

                {state.options.map((option: MiscMasterListKebijakanRes, index: number) =>
                  option.list.length > 0 && (
                    <Box key={index}>
                      <MultiCheckbox title={option.name} maxHeight={200}>
                        {option.list.map((item, index2) => (
                          <Fragment key={index2}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={item?.isCheck}
                                  onChange={(event) =>
                                    setState((prev:ExsumRelatedInitState) => {
                                      const newVal = {...prev}
                                      newVal.options[index].list[index2].isCheck = event.target.checked
                                      return newVal
                                    })
                                  }
                                  name={item.value}
                                  sx={{py: 0}}
                                />
                              }
                              label={
                                <Stack direction="row" alignItems="flex-start" gap={1}>
                                  <Typography color={grey[600]}>{index2 + 1}.</Typography> {item.value}
                                </Stack>
                              }
                              sx={{alignItems: "flex-start"}}
                            />
                          </Fragment>
                        ))}
                      </MultiCheckbox>
                    </Box>
                  )
                )}
              </Stack>
            ) : (
              <Typography fontWeight={600}>-</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
