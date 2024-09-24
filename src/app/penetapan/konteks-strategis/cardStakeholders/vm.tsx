import {useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useState} from "react";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {API_CODE, ResponseBaseDto} from "@/lib/core/api/apiModel";

import {
  initKonstraStakeholderInternalStateReqDto,
  KonstraStakeholderInternalStateDto,
  KonstraStakeholderInternalResDto, KonstraStakeholderInternalReqDto, KonstraStakeholderInternalValueDto
} from "@/app/penetapan/konteks-strategis/cardStakeholders/model";
import {doCreate, doGet, doUpdate} from "@/app/penetapan/konteks-strategis/cardStakeholders/service";
import useKonstraVM from "@/app/penetapan/konteks-strategis/pageVM";

const useCardStakeholderInternalVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { objectState } = useKonstraVM()

  const [listStakeholder, setListStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);
  const [data, setData] = useState<MiscMasterListStakeholderRes[]>([])
  const [request, setRequest] = useState<KonstraStakeholderInternalStateDto>(initKonstraStakeholderInternalStateReqDto)
  const [type, setType] = useState<string>("")

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

  async function getDataStakeholder(){
    const response = await doGet({
      body: {
        type_stakeholder:type,
        uraian_penetapan_objek_id:objectState?.id ?? 0
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      const result:KonstraStakeholderInternalResDto[] = response.result

      let dt:MiscMasterListStakeholderRes[] = []
      result.map(st => {
        dt.push(st.stakeholder)
      })
      setData(dt)

      const genereteReq:KonstraStakeholderInternalStateDto = {
        uraian_penetapan_objek_id: objectState?.id ?? 0,
        type_stakeholder: type,
        values: []
      }
      const state:KonstraStakeholderInternalValueDto = {
        type_stakeholder: type,
        label: "",
        value: "",
        stakeholder: []
      }
      result.map(res => {
        state.stakeholder.push(res.stakeholder)
      })
      genereteReq.values.push(state)
      genereteReq.uraian_penetapan_objek_id = 1
      setRequest(genereteReq)
    }
  }

  async function updateData(){
    const req:KonstraStakeholderInternalReqDto = {
      type_stakeholder: type,
      uraian_penetapan_objek_id: objectState?.id ?? 0,
      values: []
    }

    request.values.map(st => {
      st.stakeholder.map(stval => {
        req.values.push({
          src_stakeholder_id:stval.id
        })
      })
    })

    let response:ResponseBaseDto|undefined
    if (data.length > 0){
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
      getDataStakeholder().then(r => {
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
      const stakeholderTypeIndex = newVal.values.findIndex(item => item.type_stakeholder == type)

      if (stakeholderTypeIndex > -1){
        newVal.values[stakeholderTypeIndex].stakeholder = itemSelected
      }
      return newVal
    })

  }

  return {
    objectState,
    data,
    listStakeholder,
    modalOpenStakeholder,
    setModalOpenStakeholder,
    request,
    setRequest,
    updateData,
    handleSelectStakeholder,
    getListStakeholder,
    getDataStakeholder,
    type,
    setType
  }

}
export default useCardStakeholderInternalVM;