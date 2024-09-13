import {useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doGetRKPSasaranIndikator} from "@/app/misc/rkp/rkpService";
import {RKPSasaranDto, SasaranDto, IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";
import {
  initSasaranIndikatorTargetUPRState,
  SasaranIndikatorTargetUPRData, SasaranIndikatorTargetUPRReqDto, SasaranIndikatorTargetUPRResDto,
  SasaranIndikatorTargetUPRState
} from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/model";
import {
  doCreateIndikasiSasaran, doDeleteIndikasiSasaran,
  doGetIndikasiSasaran, doUpdateIndikasiSasaran
} from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/service";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";

const useCardSasaranUPRVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { rkpState } = useRKPContext(state => state)

  const [modal, setModal] = useState<{isOpen:boolean,action:string}>({isOpen:false,action:"add"});
  const [optionSasaranIndikator, setOptionSasaranIndikator] = useState<SasaranDto[]>([]);
  const [optionIndikatorSasaran, setOptionIndikatorSasaran] = useState<IndikatorDto[]>([])
  const [optionStakeholder, setOptionStakeholder] = useState<MiscMasterListStakeholderRes[]>([])

  const [data, setData] = useState<SasaranIndikatorTargetUPRData[]>([])
  const [state, setState] = useState<SasaranIndikatorTargetUPRState>(JSON.parse(JSON.stringify(initSasaranIndikatorTargetUPRState)))


  async function getData(){
    const response = await doGetIndikasiSasaran({
      body: {
        ref_id:rkpState?.id ?? 0,
        level:rkpState?.level ?? ""
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      if (response?.code == API_CODE.success){
        let result:SasaranIndikatorTargetUPRResDto[] = response.result

        const data:SasaranIndikatorTargetUPRData[] = []

        result.map(res => {

          let sasaran:SasaranDto = {
            id: 0,
            code: "",
            value: "",
            indikator: []
          }
          let indikator:IndikatorDto = {
            id: 0,
            code: "",
            value: ""
          }
          if (rkpState?.level == "PN"){
            sasaran = res.sasaran_pn
            indikator = res.indikator_pn
          }
          if (rkpState?.level == "PP"){
            sasaran = res.sasaran_pp
            indikator = res.indikator_pp
          }
          if (rkpState?.level == "KP"){
            sasaran = res.sasaran_kp
            indikator = res.indikator_kp
          }

          const row:SasaranIndikatorTargetUPRData = {
            id: res.id,
            peran: res.peran,
            sasaran: sasaran,
            indikator: indikator,
            target: res.target,
            stakeholder_id: res.stakeholder
          }

          data.push(row)

        })

        setData(data)
      }
    }
  }

  async function getOptionStakeholder() {
    const response = await doGetMasterListStakeholder({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext
    })
    if (response?.code == API_CODE.success) {
      const result: MiscMasterListStakeholderRes[] = response.result
      if (result) {
        setOptionStakeholder(result)
      }
    }
  }

  async function getOptionSasaranIndikator(){
    const response = await doGetRKPSasaranIndikator({
      body: {
        ref_id:rkpState?.id ?? 0,
        level:rkpState?.level ?? ""
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      const result:RKPSasaranDto = response.result
      setOptionSasaranIndikator(result.sasaran)
    }
  }

  async function createUpdateDelete(){
    const request:SasaranIndikatorTargetUPRReqDto = {
      id: state.id,
      level: rkpState?.level ?? "",
      ref_id: rkpState?.id ?? 0,
      peran: state.peran,
      sasaran_id: state.stakeholder_id?.id ?? 0,
      indikator_id: state.indikator_id?.id ?? 0,
      stakeholder_id: state.stakeholder_id?.id ?? 0,
      target: state.target
    }

    let response
    if (modal.action !== "delete" && request.id == 0) {
      response = await doCreateIndikasiSasaran({
        body: request,
        loadingContext: loadingContext,
        errorModalContext: errorModalContext
      })
    }
    if (modal.action !== "delete" && request.id > 0) {
      response = await doUpdateIndikasiSasaran({
        body: request,
        loadingContext: loadingContext,
        errorModalContext: errorModalContext
      })
    }
    if (modal.action === "delete") {
      response = await doDeleteIndikasiSasaran({
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
    const thisState:SasaranIndikatorTargetUPRState = JSON.parse(JSON.stringify(initSasaranIndikatorTargetUPRState))
    if (id === 0){
      setState(thisState)
    }else{
      const index = data.findIndex(x => x.id === id)
      if (index > -1) {

        const dt = data[index]
        const indexSasaran = optionSasaranIndikator.findIndex(y => y.id == dt.sasaran.id)
        if (indexSasaran > -1) setOptionIndikatorSasaran(optionSasaranIndikator[indexSasaran].indikator)

        const dataState:SasaranIndikatorTargetUPRState = {
          id: dt.id,
          peran: dt.peran,
          stakeholder_id: dt.stakeholder_id,
          sasaran_id: dt.sasaran,
          indikator_id: dt.indikator,
          target: dt.target
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
    getOptionSasaranIndikator,
    optionSasaranIndikator,
    setOptionSasaranIndikator,
    optionIndikatorSasaran,
    setOptionIndikatorSasaran,
    optionStakeholder,
    getOptionStakeholder,
    data,
    modal,
    setModal,
    hanldeOpenModal,
    createUpdateDelete
  }

}

export default useCardSasaranUPRVM