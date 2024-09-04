import React from "react";
import {
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
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
import {AutocompleteSelectMultiple} from "@/components/autocomplete";

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
          <AutocompleteSelectMultiple
            value={request.sumber_pendanaan}
            options={listSof}
            getOptionLabel={(option) => option.name}
            handleChange={handleChangeListSof}
            placeHolder={"Pilih sumber pendanaan"}
            labelSelectAll={"Pilih semua sumber pendanaan"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo
            title="Indikasi K/L/D Badan Usaha"
            information="Indikasi K/L/D Badan Usaha"
          />
          <AutocompleteSelectMultiple
            value={request.stakeholder}
            options={listStakeholder}
            getOptionLabel={(option) => option.value}
            handleChange={handleChangeStakeholder}
            placeHolder={"Pilih indikasi K/L/D/Badan usaha"}
            labelSelectAll={"Pilih semua indikasi"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Indikasi Lokasi" information="Indikasi Lokasi"/>
            <AutocompleteSelectMultiple
              value={request.lokasi}
              options={listProvinsi}
              getOptionLabel={(option) => option.name}
              handleChange={handleChangeLocation}
              placeHolder={"Pilih Provinsi"}
              labelSelectAll={"Pilih semua Provinsi"}
            />
        </FormControl>
      </Grid>
    </Grid>
  );
}
