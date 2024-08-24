import React from "react";
import {Button, DialogActions, Grid} from "@mui/material";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import DialogComponent from "@/components/dialog";
import TableTows from "../table";
import useCardTOWSVM from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsVM";
import GenerateFormTWOS from "./form-tows";

export default function CardTows({project}: { project: string }) {

  const {
    options,
    data,
    request,
    setRequest,
    modalOpen,
    setModalOpen,
    updateData
  } = useCardTOWSVM()

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardItem title="Matriks TOWS" setting settingEditOnclick={handleModalOpen}>
        {data == undefined ? (
          <EmptyState
            dense
            icon={<IconEmptyData width={100}/>}
            title="Data Kosong"
            description="Silahkan isi konten halaman ini"
          />
        ) : (
          <TableTows data={data}/>
        )}
      </CardItem>
      <DialogComponent
        width={"90%"}
        dialogOpen={modalOpen}
        dialogClose={handleModalClose}
        title="Ubah Matriks TOWS"
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

          <GenerateFormTWOS
            type={`so`}
            title={`Strategi Strength Opportunity (SO)`}
            options={options ? options.so : []}
            keywords={request.so_keyword}
            strategi={request.so}
            setRequest={setRequest}
          />

          <GenerateFormTWOS
            type={`wo`}
            title={`Strategi Weakness Opportunity (WO)`}
            options={options ? options.wo : []}
            keywords={request.wo_keyword}
            strategi={request.wo}
            setRequest={setRequest}
          />

          <GenerateFormTWOS
            type={`st`}
            title={`Strategi Strength Threats (ST)`}
            options={options ? options.st : []}
            keywords={request.st_keyword}
            strategi={request.st}
            setRequest={setRequest}
          />

          <GenerateFormTWOS
            type={`wt`}
            title={`Strategi Weakness Threats (WT)`}
            options={options ? options.wt : []}
            keywords={request.wt_keyword}
            strategi={request.wt}
            setRequest={setRequest}
          />

        </Grid>
      </DialogComponent>
    </>
  );
}
