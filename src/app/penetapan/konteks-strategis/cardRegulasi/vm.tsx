import {useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  initRegulasiState,
  RegulasiData, RegulasiReqDto,
  RegulasiResDto,
  RegulasiState
} from "@/app/penetapan/konteks-strategis/cardRegulasi/model";
import {
  doCreateRegulasi, doDeleteRegulasi,
  doGetRegulasi,
  doUpdateRegulasi
} from "@/app/penetapan/konteks-strategis/cardRegulasi/service";

const useCardRegulasi = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { rkpState } = useRKPContext(state => state)

  const [modal, setModal] = useState<{isOpen:boolean,action:string}>({isOpen:false,action:"add"});
  const [data, setData] = useState<RegulasiData[]>([])
  const [state, setState] = useState<RegulasiState>(JSON.parse(JSON.stringify(initRegulasiState)))

  async function getData(){
    const response = await doGetRegulasi({
      body: {
        ref_id:rkpState?.id ?? 0,
        level:rkpState?.level ?? ""
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      if (response?.code == API_CODE.success){
        let result:RegulasiResDto[] = response.result

        const data:RegulasiData[] = []

        result.map(res => {

          const row:RegulasiData = {
            id: res.id,
            regulasi: res.regulasi,
            keterangan: res.keterangan
          }

          data.push(row)

        })

        setData(data)
      }
    }
  }

  async function createUpdateDelete(){
    const request:RegulasiReqDto = {
      id: state.id,
      level: rkpState?.level ?? "",
      ref_id: rkpState?.id ?? 0,
      regulasi: state.regulasi,
      keterangan: state.keterangan
    }

    let response
    if (modal.action !== "delete" && request.id == 0) {
      response = await doCreateRegulasi({
        body: request,
        loadingContext: loadingContext,
        errorModalContext: errorModalContext
      })
    }
    if (modal.action !== "delete" && request.id > 0) {
      response = await doUpdateRegulasi({
        body: request,
        loadingContext: loadingContext,
        errorModalContext: errorModalContext
      })
    }
    if (modal.action === "delete") {
      response = await doDeleteRegulasi({
        body: request,
        loadingContext: loadingContext,
        errorModalContext: errorModalContext
      })
    }

    if (response?.code == API_CODE.success) {
      getData()
      setModal({isOpen:false,action:"add"})
    }

  }

  async function hanldeOpenModal(id:number){
    const thisState:RegulasiState = JSON.parse(JSON.stringify(initRegulasiState))
    if (id === 0){
      setState(thisState)
    }else{
      const index = data.findIndex(x => x.id === id)
      if (index > -1) {
        const dt:RegulasiData = data[index]
        const dataState:RegulasiState = {
          id: dt.id,
          regulasi: dt.regulasi,
          keterangan: dt.keterangan
        }
        setState(dataState)
      }else{
        setState(thisState)
      }
    }
  }

  return {
    rkpState,
    getData,
    state,
    setState,
    data,
    modal,
    setModal,
    hanldeOpenModal,
    createUpdateDelete
  }

}

export default useCardRegulasi