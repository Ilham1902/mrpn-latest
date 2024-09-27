import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  ExsumRoadmapDto,
  initExsumRoadmapReq
} from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapModel";
import {MiscMasterRPJMNRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListRpjmn} from "@/app/misc/master/masterService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doCreate, doDelete, doGet} from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapService";

const useCardRoadmapVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()
  const { rpjmn, setRpjmn } = useRKPContext(state => state)

  const [dataOutput,setDataOutput] = useState<ExsumRoadmapDto[]>([])
  const [dataBusiness,setDataBusiness] = useState<ExsumRoadmapDto[]>([])
  const [request, setRequest] = useState<ExsumRoadmapDto>({...initExsumRoadmapReq})
  const [modal, setModal] = useState<{open:boolean,title:string}>({open:false,title:""})
  const [modalDelete, setModalDelete] = useState<{isOpen:boolean,id:number}>({isOpen:false,id:0})

  async function getRpjmn(){
    const response = await doGetMasterListRpjmn({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.success){
      const result:MiscMasterRPJMNRes = response.result
      setRpjmn(result)
    }
  }

  const handleOpenModal = (action:boolean,type:string) => {
    setRequest(prev => {
      return {
        ...prev,
        type:type
      }
    })
    switch (type){
      case "OUTPUT":{
        setModal({
          open:action,
          title:"Project Roadmap Berbasis Output"
        })
        break;
      }
      case "BISNIS":{
        setModal({
          open:action,
          title:"Project Roadmap Berbasis Bisnis"
        })
        break;
      }
      default:{
        setModal({
          open:action,
          title:"Project Roadmap Berbasis Bisnis"
        })
        break;
      }
    }
  }

  async function getData() {
    const req:ExsumRoadmapDto = {
      ...request,
      exsum_id:exsum.id
    }
    const params = {
      body: req,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    }
    const response = await doGet(params)
    if (response?.code == API_CODE.success){
      const result:ExsumRoadmapDto[] = response.result

      const outputData = result.filter(x => x.type == "OUTPUT")
      setDataOutput(outputData)

      const businessData = result.filter(x => x.type == "BISNIS")
      setDataBusiness(businessData)
    }
  }

  async function updateData(){
    const req:ExsumRoadmapDto = {
      ...request,
      exsum_id:exsum.id
    }
    const params = {
      body: req,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    }
    const response = await doCreate(params)
    if (response?.code == API_CODE.success){
      getData().then(r => {
        setRequest({...initExsumRoadmapReq})
        handleOpenModal(false, "")
      })
    }
  }

  async function deleteData(){
    if (modalDelete.id == 0){
      setModalDelete({isOpen:false, id:0})
      return
    }

    const response = await doDelete({
      body:{id:modalDelete.id},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })

    if (response?.code == API_CODE.success){
      getData().then(r => {
        setModalDelete({isOpen:false, id:0})
      })
    }
  }

  useEffect(() => {
    if (rpjmn == undefined) getRpjmn();
    if (exsum.id != 0) getData()
  }, [exsum]);

  return {
    rpjmn,
    dataOutput,
    dataBusiness,
    request,
    setRequest,
    modal,
    handleOpenModal,
    updateData,
    modalDelete,
    setModalDelete,
    deleteData
  }

}

export default useCardRoadmapVM;