import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  ExsumDiagramReqDto,
  ExsumDiagramState,
  initExsumDiagramState, UpdateExsumDiagramByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab3Fot/cardDiagram/cardDiagramModel";
import {
  doGetMasterListProvinsi,
  doGetMasterListStakeholder,
  doGetMasterListSumberPendanaan
} from "@/app/misc/master/masterService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  MiscMasterListProvinsiRes,
  MiscMasterListStakeholderRes,
  MiscMasterListSumberPendanaanRes
} from "@/app/misc/master/masterServiceModel";
import {doCreate, doGet, doUpdate} from "@/app/executive-summary/partials/tab3Fot/cardDiagram/cardDiagramService";

const useCardDiagramVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [listProvinsi, setListProvinsi] = useState<MiscMasterListProvinsiRes[]>([])
  const [listStakeholder, setListStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [listSof, setListSof] = useState<MiscMasterListSumberPendanaanRes[]>([])
  const [request, setRequest] = useState<ExsumDiagramState>({...initExsumDiagramState});
  const [data, setData] = useState<ExsumDiagramState>({...initExsumDiagramState})
  const [modalOpen, setModalOpen] = React.useState(false);

  async function getListProvinsi() {
    const response = await doGetMasterListProvinsi({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.sucess) {
      let result: MiscMasterListProvinsiRes[] = response.result;
      if (result) {
        setListProvinsi(result)
      }
    }
  }

  const handleChangeLocation = (value:MiscMasterListProvinsiRes[]) => {
    setRequest(prev => {
      return {
        ...prev,
        lokasi:value
      }
    })
  }

  async function getListStakeholder() {
    const response = await doGetMasterListStakeholder({
      body:{},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      const result:MiscMasterListStakeholderRes[] = response.result
      if (result){
        setListStakeholder(result)
      }
    }
  }

  const handleChangeStakeholder = (value:MiscMasterListStakeholderRes[]) => {
    setRequest(prev => {
      return {
        ...prev,
        stakeholder:value
      }
    })
  }

  async function getListSumberPendanaan() {
    const response = await doGetMasterListSumberPendanaan({
      body:{},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      const result:MiscMasterListSumberPendanaanRes[] = response.result
      if (result){
        setListSof(result)
      }
    }
  }

  const handleChangeListSof = (value:MiscMasterListSumberPendanaanRes[]) => {
    setRequest(prev => {
      return {
        ...prev,
        sumber_pendanaan:value
      }
    })
  }

  async function getData() {
    const response = await doGet({
      body: {exsum_id:exsum.id},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.sucess){
      const result:ExsumDiagramState = response.result
      setData(result)
      setRequest(result)
    }
  }

  async function updateData(){
    const reqState:ExsumDiagramState = {...request}
    const location:number[] = reqState.lokasi.reduce<number[]>(
      (acc,b) => {
        return [...acc, b.id]
      }, []
    )
    const sumberDana:number[] = reqState.sumber_pendanaan.reduce<number[]>(
      (acc,b) => {
        return [...acc, b.id]
      }, []
    )
    const stakeholder:number[] = reqState.stakeholder.reduce<number[]>(
      (acc,b) => {
        return [...acc, b.id]
      }, []
    )

    const req:ExsumDiagramReqDto = {
      id:reqState.id,
      exsum_id:exsum.id,
      sumber_pendanaan:sumberDana,
      stakeholder:stakeholder,
      lokasi:location
    }

    const params:UpdateExsumDiagramByExsumIdServiceModel = {
      body: req,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    }

    let response;
    if (req.id == 0){
      response = await doCreate(params)
    } else {
      response = await doUpdate(params)
    }
    if (response?.code == API_CODE.sucess){
      getData()
      setModalOpen(false)
    }
  }

  useEffect(() => {
    if (listProvinsi.length == 0) {
      getListProvinsi()
    }
    if (listStakeholder.length == 0) {
      getListStakeholder()
    }
    if (listSof.length == 0) {
      getListSumberPendanaan()
    }
    if (exsum.id !== 0) {
      getData();
    }
  }, [exsum]);

  return {
    data,
    listProvinsi,
    handleChangeLocation,
    listStakeholder,
    handleChangeStakeholder,
    listSof,
    handleChangeSumberPendanaan: handleChangeListSof,
    request,
    setRequest,
    modalOpen,
    setModalOpen,
    updateData
  }

}

export default useCardDiagramVM;