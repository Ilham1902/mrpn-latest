import React from "react";
import {
  Typography,
  Stack,
  Button,
  DialogActions,
  MenuItem,
  SelectChangeEvent,
  Grow,
  Tooltip,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import {IconEmptyData} from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import AddButton from "@/app/components/buttonAdd";
import TableProfilIntervensi from "./table-profil-intervensi";
import TableProfilRoKunci from "./table-profil-ro-kunci";
import FormProfilRoProject from "./form-profil-ro-project";
import useCardIntervensiVM from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiVM";
import {ProPDto} from "@/app/misc/rkp/rkpServiceModel";
import {AutoCompleteMultipleProp, AutoCompleteSingleProp} from "@/components/autocomplete";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";

export default function CardRoKunci({project}: { project: string }) {

  const {
    rpjmn,
    state,
    setState,
    handleChangeState,
    data,
    listProP,
    listRo,
    listStakeholder,
    modal,
    setModal
  } = useCardIntervensiVM()

  const selectProP:AutoCompleteMultipleProp<ProPDto> = {
    value:state.prop,
    options:listProP,
    getOptionLabel:(opt)=> opt.value,
    handleChange:(value:ProPDto[]) => handleChangeState<ProPDto>(value),
    placeHolder:"Pilih tagging ProP",
    labelSelectAll:"Pilih semua tagging"
  }

  const selectStakeholder:AutoCompleteSingleProp<MiscMasterListStakeholderRes> = {
    value:state.pj_id,
    options:listStakeholder,
    getOptionLabel:(opt)=> opt.value,
    handleChange:(value:MiscMasterListStakeholderRes) => setState(prev => {
      return {
        ...prev,
        pj_id:value
      }
    }),
    placeHolder:"Pilih Penanggungjawab",
  }

  return (
    <CardItem
      title="Profil Intervensi Kunci"
      addButton={
        <>
          <AddButton
            filled
            small
            title="Tambah Project"
            onclick={() => setModal({action: true, type: "NON_RO"})}
          />
          <AddButton
            filled
            small
            title="Tambah Profil RO"
            onclick={() => setModal({action: true, type: "RO"})}
          />
        </>
      }
    >
      {data == undefined ? (
        <EmptyState
          dense
          icon={<IconEmptyData width={100}/>}
          title="Data Kosong"
          description="Silahkan isi konten halaman ini"
        />
      ) : (
        <TableProfilIntervensi project={project}/>
      )}

      <DialogComponent
        tableMode
        width={1000}
        dialogOpen={(modal.type == "RO" && modal.action)}
        dialogClose={() => setModal({action: false, type: "RO"})}
        title="Tambah Profil RO Kunci"
        dialogFooter={
          <DialogActions sx={{p: 2, px: 3}}>
            <Button variant="outlined" onClick={() => setModal({action: false, type: "RO"})}>
              Batal
            </Button>
            <Button variant="contained" type="submit">
              Simpan
            </Button>
          </DialogActions>
        }
      >
        <TableProfilRoKunci/>
      </DialogComponent>

      <DialogComponent
        width={"90%"}
        dialogOpen={(modal.type == "NON_RO" && modal.action)}
        dialogClose={() => setModal({action: false, type: "NON_RO"})}
        title="Tambah Nomenklatur RO/Project"
        dialogFooter={
          <DialogActions sx={{p: 2, px: 3}}>
            <Button variant="outlined" onClick={() => setModal({action: false, type: "NON_RO"})}>
              Batal
            </Button>
            <Button variant="contained" type="submit">
              Simpan
            </Button>
          </DialogActions>
        }
      >
        <FormProfilRoProject
          selectProP={selectProP}
          selectStakeholder={selectStakeholder}
          state={state}
          setState={setState}
          rpjmn={rpjmn}
        />
      </DialogComponent>

    </CardItem>
  );
}
