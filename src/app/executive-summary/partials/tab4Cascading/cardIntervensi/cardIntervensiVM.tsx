import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {ProPDto, RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {doGetPROP, doGetRO} from "@/app/misc/rkp/rkpService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  ExsumInterventionState, initExsumInterventionState, ProjectTargetAnggaranDto
} from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import {MiscMasterListStakeholderRes, MiscMasterRPJMNRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListRpjmn, doGetMasterListStakeholder} from "@/app/misc/master/masterService";

const useCardIntervensiVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()
  const { rpjmn, setRpjmn } = useRKPContext(state => state)

  const [listProP, setListProP] = useState<ProPDto[]>([])
  const [listRo, setListRo] = useState<RoDto[]>([])
  const [listStakeholder, setListStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [modal, setModal] = useState<{action:boolean,type:string}>({action:false,type:""})

  const [state, setState] = useState<ExsumInterventionState>({...initExsumInterventionState})
  const [data, setData] = useState<ExsumInterventionState>()

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

  async function getListRo(){
    const response = await doGetRO({
      body: {by:exsum.level,id:[exsum.ref_id]},
      errorModalContext: errorModalContext,
      loadingContext: loadingContext
    })
    if (response?.code == API_CODE.sucess){
      const result:RoDto[] = response.result
      setListRo(result)
    }
  }

  async function getListProP(){
    const response = await doGetPROP({
      body: {by:exsum.level,id:[exsum.ref_id]},
      errorModalContext: errorModalContext,
      loadingContext: loadingContext
    })
    if (response?.code == API_CODE.sucess){
      const result:ProPDto[] = response.result
      setListProP(result)
    }
  }

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

  function handleChangeState<T>(data:T[]){
    if (modal.type == "RO"){
      setState(prev => {
        return {
          ...prev,
          prop:[],
          ro:(data as RoDto[])
        }
      })
    }

    if (modal.type == "NON_RO"){
      setState(prev => {
        return {
          ...prev,
          ro:[],
          prop:(data as ProPDto[])
        }
      })
    }
  }

  useEffect(() => {
    if (rpjmn == undefined) getRpjmn();
    if (listProP.length == 0) getListProP();
    if (listRo.length == 0) getListRo();
    if (listStakeholder.length == 0) getListStakeholder();
  }, []);

  useEffect(() => {
    if (rpjmn && state.list.length == 0){
      const thisState = {...state}
      for (let i = rpjmn.start; i <= rpjmn.end; i++) {
        const dataAnggaran:ProjectTargetAnggaranDto = {
          tahun: i,
          target: "",
          satuan: "",
          anggaran: 0,
          sumber_anggaran: ""
        }
        thisState.list.push(dataAnggaran)
      }
    }
  }, [rpjmn]);

  return {
    rpjmn,
    state,
    setState,
    handleChangeState,
    data,
    listProP,
    listRo,
    listStakeholder,
    modal,
    setModal
  }
}

export default useCardIntervensiVM;