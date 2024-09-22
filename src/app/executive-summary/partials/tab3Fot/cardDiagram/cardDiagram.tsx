import React, {useEffect} from "react";
import {Button, DialogActions} from "@mui/material";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import DialogComponent from "@/components/dialog";
import TableDiagram from "./tableDiagram";
import FormDiagram from "./form-diagram";
import useCardTOWSVM from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsVM";
import {useRKPContext} from "@/lib/core/hooks/useHooks";
import useCardSupportVM from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportVM";
import useCardDiagramVM from "@/app/executive-summary/partials/tab3Fot/cardDiagram/cardDiagramVM";

export default function CardDiagram({project}: { project: string }) {

  const {rkpState} = useRKPContext(state => state)
  const useCardTOWS = useCardTOWSVM()
  const useCardSupport = useCardSupportVM()

  const {
    data,
    listProvinsi,
    handleChangeLocation,
    listStakeholder,
    handleChangeStakeholder,
    listSof,
    handleChangeSumberPendanaan,
    modalOpen,
    setModalOpen,
    request,
    updateData
  } = useCardDiagramVM()

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardItem title="Diagram"
                setting={(useCardTOWS.data == undefined || useCardTOWS.data.tows == null) ? undefined : true}
                settingEditOnclick={(useCardTOWS.data == undefined || useCardTOWS.data.tows == null) ? undefined : handleModalOpen}>
        {useCardTOWS.data == undefined || useCardTOWS.data.tows == undefined ? (
          <EmptyState
            dense
            icon={<IconEmptyData width={100}/>}
            title="Data Kosong"
            description="Silahkan isi konten Matriks TOWS terlebih dulu"
          />
        ) : (
          <TableDiagram dataTows={useCardTOWS.data.tows} rkpState={rkpState} support={useCardSupport.data} data={data}/>
        )}
      </CardItem>
      <DialogComponent
        dialogOpen={modalOpen}
        dialogClose={handleModalClose}
        title="Ubah Diagram"
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
        <FormDiagram
          request={request}
          dataTows={useCardTOWS.data.tows}
          rkpState={rkpState}
          support={useCardSupport.data}
          listProvinsi={listProvinsi}
          handleChangeLocation={handleChangeLocation}
          listStakeholder={listStakeholder}
          handleChangeStakeholder={handleChangeStakeholder}
          listSof={listSof}
          handleChangeListSof={handleChangeSumberPendanaan}
        />
      </DialogComponent>
    </>
  );
}
