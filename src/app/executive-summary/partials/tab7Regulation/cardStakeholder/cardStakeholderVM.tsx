import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {API_CODE, ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  ExsumStakeholderReqDto, ExsumStakeholderResDto, ExsumStakeholderValueDto, initExsumStakeholderReqDto
} from "@/app/executive-summary/partials/tab7Regulation/cardStakeholder/cardStakeholderModel";
import {
  doCreate,
  doGet,
  doUpdate
} from "@/app/executive-summary/partials/tab7Regulation/cardStakeholder/cardStakeholderService";

const useCardStakeholderVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [listStakeholder, setListStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [modalOpenStakeholder, setModalOpenStakeholder] = React.useState(false);
  const [data, setData] = useState<ExsumStakeholderResDto[]>([])
  const [request, setRequest] = useState<ExsumStakeholderReqDto>(initExsumStakeholderReqDto)

  async function getListStakeholder(){
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

  async function getData(){
    const response = await doGet({
      body: {exsum_id:exsum.id},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.sucess){
      const result:ExsumStakeholderResDto[] = response.result
      setData(result)

      const genereteReq:ExsumStakeholderReqDto = {
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
    const req:ExsumStakeholderReqDto = {
      ...request,
      exsum_id:exsum.id
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

    if (response?.code == API_CODE.sucess){
      getData().then(r => {
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

  useEffect(() => {
    if (listStakeholder.length == 0) getListStakeholder()
    if (exsum.id != 0) getData()
  }, []);

  return {
    data,
    listStakeholder,
    modalOpenStakeholder,
    setModalOpenStakeholder,
    request,
    setRequest,
    updateData,
    handleSelectStakeholder,
    handleChangeDescription
  }

}
export default useCardStakeholderVM;