import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  ExsumRoadmapDto,
  initExsumRoadmapReq
} from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapModel";
import {MiscMasterRPJMNRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListRpjmn} from "@/app/misc/master/masterService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doCreate, doGet} from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapService";

const useCardRoadmapVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [rpjmn, setRpjmn] = useState<MiscMasterRPJMNRes>()
  const [dataOutput,setDataOutput] = useState<ExsumRoadmapDto[]>([])
  const [dataBusiness,setDataBusiness] = useState<ExsumRoadmapDto[]>([])
  const [request, setRequest] = useState<ExsumRoadmapDto>({...initExsumRoadmapReq})
  const [modal, setModal] = useState<{open:boolean,title:string}>({open:false,title:""})

  async function getRpjmn(){
    const response = await doGetMasterListRpjmn({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.sucess){
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
    if (response?.code == API_CODE.sucess){
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
    if (response?.code == API_CODE.sucess){
      getData().then(r => {
        setRequest({...initExsumRoadmapReq})
        handleOpenModal(false, "")
      })
    }
  }

  useEffect(() => {
    if (rpjmn == undefined) getRpjmn();
    if (exsum.id != 0) getData()
  }, []);

  return {
    rpjmn,
    dataOutput,
    dataBusiness,
    request,
    setRequest,
    modal,
    handleOpenModal,
    updateData
  }

}

export default useCardRoadmapVM;