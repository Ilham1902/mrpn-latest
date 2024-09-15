import {useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import React, {useState} from "react";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {API_CODE, ResponseBaseDto} from "@/lib/core/api/apiModel";

import {doCreate, doGet, doUpdate} from "@/app/penetapan/konteks-strategis/cardStakeholderEksternal/service";
import {
  initKonstraStakeholderEksternalReqDto,
  KonstraStakeholderEksternalReqDto, KonstraStakeholderEksternalResDto
} from "@/app/penetapan/konteks-strategis/cardStakeholderEksternal/model";


const useCardStakeholderInternalVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { rkpState } = useRKPContext(state => state)

  const [listStakeholder, setListStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);

  const [data, setData] = useState<KonstraStakeholderEksternalResDto[]>([])
  const [request, setRequest] = useState<KonstraStakeholderEksternalReqDto>(initKonstraStakeholderEksternalReqDto)

  async function getListStakeholder(){
    const response = await doGetMasterListStakeholder({
      body:{},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      const result:MiscMasterListStakeholderRes[] = response.result
      if (result){
        setListStakeholder(result)
      }
    }
  }

  async function getDataStakeholderInternal(){
    const response = await doGet({
      body: {
        level:rkpState?.level ?? "",
        ref_id:rkpState?.id ?? 0
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      const result:KonstraStakeholderEksternalResDto[] = response.result
      setData(result)

      const genereteReq:KonstraStakeholderEksternalReqDto = {
        ...request
      }
      result.map(res => {
        const indexReq = genereteReq.values.findIndex(x => x.type == res.type)
        if (indexReq > -1) {
          genereteReq.values[indexReq].stakeholder = res.stakeholder
          genereteReq.values[indexReq].value = res.value
        }
      })
      genereteReq.id = 1
      setRequest(genereteReq)
    }
  }

  async function updateData(){
    const req:KonstraStakeholderEksternalReqDto = {
      ...request,
      level:rkpState?.level ?? "",
      ref_id:rkpState?.id ?? 0
    }

    let response:ResponseBaseDto|undefined
    if (req.id > 0){
      response = await doUpdate({
        body:req,
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
    }else{
      response = await doCreate({
        body:req,
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
    }

    if (response?.code == API_CODE.success){
      getDataStakeholderInternal().then(r => {
        setModalOpenStakeholder(false)
      })
    }
  }

  const handleSelectStakeholder = (selectedItems:number[], type:string) => {

    const itemSelected:MiscMasterListStakeholderRes[] = []
    selectedItems.map(x => {
      const getId = listStakeholder.find(i => i.id == x)
      if (getId) itemSelected.push(getId)
    })

    setRequest(prev => {
      const newVal = {...prev}
      const stakeholderTypeIndex = newVal.values.findIndex(item => item.type == type)

      if (stakeholderTypeIndex > -1){
        newVal.values[stakeholderTypeIndex].stakeholder = itemSelected
      }
      return newVal
    })

  }

  const handleChangeDescription = (value:string, type:string) => {
    setRequest(prev => {
      const newVal = {...prev}
      const stakeholderTypeIndex = newVal.values.findIndex(item => item.type == type)

      if (stakeholderTypeIndex > -1){
        newVal.values[stakeholderTypeIndex].value = value
      }
      return newVal
    })
  }

  return {
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
  }

}
export default useCardStakeholderInternalVM;