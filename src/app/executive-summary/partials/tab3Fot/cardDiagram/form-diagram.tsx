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
  TextField,
  Typography,
} from "@mui/material";
import {
  SxAutocompleteTextField,
  SxAutocomplete,
} from "@/components/dropdownKp";
import {paramVariantDefault} from "@/utils/constant";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import {StrategyTowsContent} from "./tableDiagram";
import {ExsumTWOSDto} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsModel";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {ExsumSupportProjectRes} from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportModel";
import {
  MiscMasterListProvinsiRes,
  MiscMasterListStakeholderRes,
  MiscMasterListSumberPendanaanRes
} from "@/app/misc/master/masterServiceModel";
import {ExsumDiagramState} from "@/app/executive-summary/partials/tab3Fot/cardDiagram/cardDiagramModel";
import {list} from "postcss";

export default function FormDiagram(
  {
    request,
    listProvinsi,
    handleChangeLocation,
    listStakeholder,
    handleChangeStakeholder,
    listSof,
    handleChangeListSof,
    dataTows,
    rkpState,
    support
  }: {
    request:ExsumDiagramState
    listProvinsi: MiscMasterListProvinsiRes[]
    handleChangeLocation:any
    listStakeholder: MiscMasterListStakeholderRes[]
    handleChangeStakeholder:any
    listSof:MiscMasterListSumberPendanaanRes[]
    handleChangeListSof:any
    dataTows: ExsumTWOSDto | undefined,
    rkpState: ProjectDefaultDto | undefined
    support: ExsumSupportProjectRes | undefined
  }
) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo
            title="Nomenklatur Kegiatan Prioritas"
            information="Nomenklatur Kegiatan Prioritas"
          />
          <Typography fontWeight={600}>
            {rkpState?.value ?? ""}
          </Typography>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo
            title="Sasaran & Kegiatan Prioritas"
            information="Sasaran & Kegiatan Prioritas"
          />
          <Typography fontWeight={600}>
            {support?.sasaran[0].value ?? ""}
          </Typography>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Strategi TOWS" information="Strategi TOWS"/>
          {dataTows && <StrategyTowsContent data={dataTows}/>}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Sumber Pendanaan" information="Sumber Pendanaan"/>
          <Autocomplete
            multiple
            disableCloseOnSelect
            filterSelectedOptions
            size="small"
            freeSolo={false}
            value={request.sumber_pendanaan}
            options={listSof}
            getOptionLabel={(option) => option.name}
            onChange={(_e, value, reason) => {
              if (reason === "clear" || reason === "removeOption") handleChangeListSof([]);
              if (reason === "selectOption" && value.length === listSof.length) handleChangeListSof(listSof);
              console.log(value)
              handleChangeListSof(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Pilih sumber pendanaan"
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
                        handleChangeListSof(listSof);
                      }}
                      label="Pilih semua sumber pendanaan"
                      control={<Checkbox id="select-all-checkbox" checked={(request.sumber_pendanaan.length == listSof.length)}/>}
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
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo
            title="Indikasi K/L/D Badan Usaha"
            information="Indikasi K/L/D Badan Usaha"
          />
          <Autocomplete
            multiple
            disableCloseOnSelect
            filterSelectedOptions
            size="small"
            freeSolo={false}
            value={request.stakeholder}
            options={listStakeholder}
            getOptionLabel={(option) => option.value}
            onChange={(_e, value, reason) => {
              if (reason === "clear" || reason === "removeOption")
                handleChangeStakeholder([])
              if (
                reason === "selectOption" &&
                value.length === listStakeholder.length
              )
                handleChangeStakeholder(listStakeholder);
              handleChangeStakeholder(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Pilih indikasi K/L/D/Badan usaha"
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
                        handleChangeStakeholder(listStakeholder);
                      }}
                      label="Pilih semua indikasi"
                      control={<Checkbox id="select-all-checkbox" checked={request.stakeholder.length == listStakeholder.length}/>}
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
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Indikasi Lokasi" information="Indikasi Lokasi"/>
          <Autocomplete
            multiple
            disableCloseOnSelect
            filterSelectedOptions
            size="small"
            freeSolo={false}
            value={request.lokasi}
            options={listProvinsi}
            getOptionLabel={(option) => option.name}
            onChange={(_e, value, reason) => {
              if (reason === "clear" || reason === "removeOption")
                handleChangeLocation([])
              if (reason === "selectOption" && value.length === listProvinsi.length){
                handleChangeLocation(listProvinsi)
              }
              handleChangeLocation(value)
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
              const {children, ...restPaperProps} = paperProps;
              return (
                <Paper {...restPaperProps}>
                  <Box onMouseDown={(e) => e.preventDefault()} pl={1.5} py={0.5}>
                    <FormControlLabel
                      onClick={(e) => {
                        e.preventDefault();
                        handleChangeLocation(listProvinsi)
                      }}
                      label="Pilih semua provinsi"
                      control={<Checkbox id="select-all-checkbox" checked={request.lokasi.length == listProvinsi.length}/>}
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
        </FormControl>
      </Grid>
    </Grid>
  );
}
