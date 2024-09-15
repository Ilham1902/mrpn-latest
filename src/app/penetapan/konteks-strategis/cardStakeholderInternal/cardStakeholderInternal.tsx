import React, {useEffect} from "react";
import {Button, DialogActions, Grid} from "@mui/material";
import EmptyState from "@/app/components/empty";
import {IconEmptyData} from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import FormStakeholderInternal from "./form-stakeholder-internal";
import StakeholderChart from "@/components/cardStakeholder/stakeholder-chart";
import useCardStakeholderInternalVM from "@/app/penetapan/konteks-strategis/cardStakeholderInternal/vm";

export default function CardStakeholderInternal() {

  const {
    rkpState,
    data,
    listStakeholder,
    modalOpenStakeholder,
    setModalOpenStakeholder,
    request,
    setRequest,
    updateData,
    handleSelectStakeholder,
    handleChangeDescription,
    getListStakeholder,
    getDataStakeholderInternal
  } = useCardStakeholderInternalVM()

  useEffect(() => {
    if (rkpState !== undefined){
      getDataStakeholderInternal()
      if (listStakeholder.length == 0) getListStakeholder()
    }
  }, [rkpState]);

  const handleModalOpenStakeholder = () => {
    setModalOpenStakeholder(true);
  };

  const handleModalClose = () => {
    setModalOpenStakeholder(false);
  };

  return (
    <CardItem
      title="Daftar Pemangku Kepentingan Internal (Stakeholder Internal)"
      setting
      settingEditOnclick={handleModalOpenStakeholder}
    >
      {data.length == 0 ? (
        <EmptyState
          dense
          icon={<IconEmptyData width={100}/>}
          title="Data Kosong"
          description="Silahkan isi konten halaman ini"
        />
      ) : (
        <StakeholderChart data={data}/>
      )}

      <DialogComponent
        width={"80%"}
        dialogOpen={modalOpenStakeholder}
        dialogClose={handleModalClose}
        title="Ubah Daftar Pemangku Kepentingan Internal (Stakeholder Internal)"
        dialogFooter={
          <DialogActions sx={{p: 2, px: 3}}>
            <Button variant="outlined" onClick={handleModalClose}>
              Batal
            </Button>
            <Button variant="contained" type="submit" onClick={() => updateData()}>
              Simpan
            </Button>
          </DialogActions>
        }
      >
        <Grid container spacing={2}>
          {request.values.map((req,index) => (
            <FormStakeholderInternal
              key={index}
              title={req.label}
              listStakeholder={listStakeholder}
              selectedStakeholder={req.stakeholder}
              setSelectedStakeholder={(items:number[]) => handleSelectStakeholder(items, req.type)}
              description={req.value}
              setDescription={(item:string) => handleChangeDescription(item, req.type)}
            />
          ))}
        </Grid>
      </DialogComponent>
    </CardItem>
  );
}
