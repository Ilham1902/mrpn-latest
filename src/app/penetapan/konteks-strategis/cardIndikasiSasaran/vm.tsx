import {useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  doCreateIndikasiSasaran, doDeleteIndikasiSasaran,
  doGetIndikasiSasaran, doUpdateIndikasiSasaran
} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/service";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  initPenetapanIndikasiSasaranState, PenetapanIndikasiSasaranReqDto,
  PenetapanIndikasiSasaran,
  PenetapanIndikasiSasaranState, PenetapanIndikasiSasaranResDto
} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/model";
import {doGetRKPSasaranIndikator} from "@/app/misc/rkp/rkpService";
import {RKPSasaranDto, SasaranDto, IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";

const useIndikatorSasaranVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { rkpState } = useRKPContext(state => state)

  const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
  const [modalOpenDelete, setModalOpenDelete] = React.useState(false);
  const [indikatorSasaranData, setIndikatorSasaranData] = useState<PenetapanIndikasiSasaran[]>([])

  const [optionSasaranIndikator, setOptionSasaranIndikator] = useState<SasaranDto[]>([])
  const initState:PenetapanIndikasiSasaranState = JSON.parse(JSON.stringify(initPenetapanIndikasiSasaranState))
  const [state, setState] = useState<PenetapanIndikasiSasaranState>(initState)

  const [optionIndikatorSasaran, setOptionIndikatorSasaran] = useState<IndikatorDto[]>([])

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

  async function getDataIndikatorSasaran(){
    const response = await doGetIndikasiSasaran({
      body: {
        level: rkpState?.level ?? "",
        ref_id: rkpState?.id ?? 0
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      let result:PenetapanIndikasiSasaranResDto[] = response.result

      const data:PenetapanIndikasiSasaran[] = []

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

        const row:PenetapanIndikasiSasaran = {
          id: res.id,
          uraian: res.uraian,
          sasaran: sasaran,
          indikator: indikator,
          target: res.target
        }

        data.push(row)

      })

      setIndikatorSasaranData(data)
    }
  }

  async function updateOrCreate(){
    const request:PenetapanIndikasiSasaranReqDto = {
      id:state.id,
      level: rkpState?.level ?? "",
      ref_id: rkpState?.id ?? 0,
      uraian: state.uraian,
      sasaran_id: state.sasaran_id?.id ?? 0,
      indikator_id: state.indikator_id?.id ?? 0,
      target: state.target
    }

    let response
    if (request.id == 0){
      response = await doCreateIndikasiSasaran({
        body:request,
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
    } else {
      response = await doUpdateIndikasiSasaran({
        body:request,
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
    }

    if (response?.code == API_CODE.success){
      getDataIndikatorSasaran()
      setModalOpenAdd(false)
    }

  }

  async function deleteData(){
    const request:PenetapanIndikasiSasaranReqDto = {
      id:state.id,
      level: rkpState?.level ?? "",
      ref_id: rkpState?.id ?? 0,
      uraian: state.uraian,
      sasaran_id: state.sasaran_id?.id ?? 0,
      indikator_id: state.indikator_id?.id ?? 0,
      target: state.target
    }
    const response = await doDeleteIndikasiSasaran({
      body:request,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      getDataIndikatorSasaran()
      setModalOpenDelete(false)
    }
  }

  const hanldeOpenModal = (id:number) => {
    const index = indikatorSasaranData.findIndex(x => x.id == id)

    if (index === -1){
      const initStateFromReq:PenetapanIndikasiSasaranState = JSON.parse(JSON.stringify(initPenetapanIndikasiSasaranState))
      setState(initStateFromReq)
    } else {
      const data = indikatorSasaranData[index]

      const indexSasaran = optionSasaranIndikator.findIndex(y => y.id == data.sasaran.id)
      if (indexSasaran > -1) setOptionIndikatorSasaran(optionSasaranIndikator[indexSasaran].indikator)

      const thisState:PenetapanIndikasiSasaranState = {
        id: data.id,
        uraian: data.uraian,
        sasaran_id: data.sasaran,
        indikator_id: data.indikator,
        target: data.target
      }
      setState(thisState)
    }
  }

  return {
    rkpState,
    optionSasaranIndikator,
    getOptionSasaranIndikator,
    indikatorSasaranData,
    getDataIndikatorSasaran,
    modalOpenAdd,
    setModalOpenAdd,
    state,
    setState,
    updateOrCreate,
    hanldeOpenModal,
    optionIndikatorSasaran,
    setOptionIndikatorSasaran,
    modalOpenDelete,
    setModalOpenDelete,
    deleteData
  }
}

export default useIndikatorSasaranVM