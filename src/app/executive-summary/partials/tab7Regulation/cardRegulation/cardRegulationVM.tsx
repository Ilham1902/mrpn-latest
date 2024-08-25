import {doGetMasterListPerpres} from "@/app/misc/master/masterService";
import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {MiscMasterListPerpresRes} from "@/app/misc/master/masterServiceModel";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  ExsumRegulationDto,
  initExsumRegulationDto
} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";
import {
  doCreate,
  doDelete,
  doGet
} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationService";

const useCardRegulationVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [perpres, setPerpres] = useState<MiscMasterListPerpresRes[]>([])
  const [modalOpen, setModalOpen] = React.useState(false);
  const [data,setData] = useState<ExsumRegulationDto[]>([])
  const [request, setRequest] = useState<ExsumRegulationDto>(initExsumRegulationDto)

  async function getListPerpres(){
    const response = await doGetMasterListPerpres({
      body:{},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      const result:MiscMasterListPerpresRes[] = response.result
      if (result){
        setPerpres(result)
      }
    }
  }

  async function getData(){
    const response = await doGet({
      body:{exsum_id:exsum.id},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      const result:ExsumRegulationDto[] = response.result
      if (result){
        setData(result)
      }
    }

    const request:ExsumRegulationDto = {
      id:0,
      exsum_id: exsum.id,
      amanat: "",
      perpres: []
    }
    setRequest(request)
  }

  async function createData(){
    const response = await doCreate({
      body:request,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      getData()
      setModalOpen(false)
    }
  }

  async function deleteData(id:number){
    const response = await doDelete({
      body:{id:id},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      getData()
      setModalOpen(false)
    }
  }

  useEffect(() => {
    if (perpres.length == 0) getListPerpres();
    if (exsum.id !== 0) getData();
  }, []);

  return {
    data,
    perpres,
    modalOpen,
    setModalOpen,
    request,
    setRequest,
    createData,
    deleteData
  }

}

export default useCardRegulationVM