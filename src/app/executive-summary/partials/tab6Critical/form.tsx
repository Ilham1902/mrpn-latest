import React, {SetStateAction, useState} from "react";
import {
 FormControl,
 Grid,
 ToggleButton,
 ToggleButtonGroup,
 Typography,
} from "@mui/material";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { green, orange } from "@mui/material/colors";
import theme from "@/theme";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {AutocompleteSelectMultiple, AutocompleteSelectSingle} from "@/components/autocomplete";
import {ExsumCriticalState} from "@/app/executive-summary/partials/tab6Critical/cardCriticalModel";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {MiscMasterListKategoriProyekRes} from "@/app/misc/master/masterServiceModel";
import {GetColor} from "@/utils/color";

export default function FormCritical(
  {
    optionsRO,
    optionsStrategy,
    optionProjectCategory,
    state,
    setState
  } : {
    optionsRO:RoDto[]
    optionsStrategy:string[],
    optionProjectCategory:MiscMasterListKategoriProyekRes[]
    state:ExsumCriticalState
    setState:(value:SetStateAction<ExsumCriticalState>) => void
  }
) {

 return (
  <Grid container spacing={2}>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo
      title="Rincian Output/Project"
      information="Rincian Output/Project"
     />
      <AutocompleteSelectSingle
        value={state.ro}
        options={optionsRO}
        getOptionLabel={(option) => option.value}
        handleChange={(val:RoDto) => setState(prev => {
          return {
            ...prev,
            ro:val
          }
        })}
        placeHolder={"Pilih rincian output/project"}
      />
    </FormControl>
   </Grid>
   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Tagging Strategi" information="Tagging Strategi" />
      <AutocompleteSelectMultiple
        value={state.strategy}
        options={optionsStrategy}
        handleChange={(val: string[]) => setState(prev => {
          return {
            ...prev,
            strategy: val
          };
        })}
        placeHolder={"Pilih tagging strategi"}
        getOptionLabel={(option: string) => option}
        labelSelectAll={"Pilih semua tagging"}
      />
    </FormControl>
   </Grid>
   <Grid item xs={12} md={6}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Penanggungjawab" information="Penanggungjawab" />
     <Typography fontWeight={600}>
       {state.ro ? state.ro.kementrian.value : "-"}
     </Typography>
    </FormControl>
   </Grid>
   <Grid item xs={12} md={6}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Sumber Anggaran" information="Sumber Anggaran" />
     <Typography fontWeight={600}>
       {state.ro ? (state.ro.sumber_anggaran == null ? "-" : state.ro.sumber_anggaran) : "-"}
     </Typography>
    </FormControl>
   </Grid>

    <Grid item lg={6}>
      <FormControl fullWidth>
        <FieldLabelInfo title="Waktu Mulai Pengerjaan" information="Waktu Mulai Pengerjaan" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              ".MuiInputBase-root": {
                height: 40,
              },
            }}
            format="D MMM YYYY"
            value={dayjs(state.start_date)}
            onChange={(e:any) =>  setState((prev) => {
              return {...prev, start_date:dayjs(e).format('YYYY-MM-DD')}
            })}
          />
        </LocalizationProvider>
      </FormControl>
    </Grid>
    <Grid item lg={6}>
      <FormControl fullWidth>
        <FieldLabelInfo title="Waktu Selesai Pengerjaan" information="Waktu Selesai Pengerjaan" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              ".MuiInputBase-root": {
                height: 40,
              },
            }}
            format="D MMM YYYY"
            value={dayjs(state.end_date)}
            onChange={(e:any) =>  setState((prev) => {
              return {...prev, end_date:dayjs(e).format('YYYY-MM-DD')}
            })}
          />
        </LocalizationProvider>
      </FormControl>
    </Grid>

   <Grid item xs={12}>
    <FormControl fullWidth>
     <FieldLabelInfo title="Kategori Proyek" information="Kategori Proyek" />
     <ToggleButtonGroup
       value={state.kategori_proyek_id}
       exclusive
       onChange={(
         event: React.MouseEvent<HTMLElement>,
         newAlignment: number
       ) => {
         setState((prev) => {
           return {
             ...prev,
             kategori_proyek_id:newAlignment
           }
         })
       }}
       aria-label="time"
     >
       {optionProjectCategory.map((row, index) =>
         <ToggleButton
           key={index}
           value={row.id}
           sx={{
             lineHeight: 1,
             "&.Mui-selected": {
               bgcolor: GetColor(row.id),
               color: "white",
             },
           }}
         >
           {row.name}
         </ToggleButton>
       )}
     </ToggleButtonGroup>
    </FormControl>
   </Grid>
  </Grid>
 );
}
