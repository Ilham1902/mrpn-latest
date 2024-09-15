import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {ProPDto, RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {doGetPROP, doGetRO} from "@/app/misc/rkp/rkpService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  ExsumInterventionProjectReqDto,
  ExsumInterventionState, initExsumInterventionState, ProjectTargetAnggaranDto
} from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiModel";
import {
  MiscMasterListStakeholderRes,
  MiscMasterListSumberPendanaanRes,
  MiscMasterRPJMNRes
} from "@/app/misc/master/masterServiceModel";
import {
  doGetMasterListRpjmn,
  doGetMasterListStakeholder,
  doGetMasterListSumberPendanaan
} from "@/app/misc/master/masterService";
import {
  doCreateIntervention,
  doGetIntervention
} from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiService";
import {MRT_RowSelectionState} from "material-react-table";

const useCardIntervensiVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()
  const {rpjmn, setRpjmn} = useRKPContext(state => state)

  const [listProP, setListProP] = useState<ProPDto[]>([])
  const [listSof, setListSof] = useState<MiscMasterListSumberPendanaanRes[]>([])
  const [listStakeholder, setListStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [modal, setModal] = useState<{ action: boolean, type: string }>({action: false, type: ""})

  const [state, setState] = useState<ExsumInterventionState>({...initExsumInterventionState})
  const [data, setData] = useState<RoDto[]>([])

  async function getRpjmn() {
    const response = await doGetMasterListRpjmn({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.success) {
      const result: MiscMasterRPJMNRes = response.result
      setRpjmn(result)
    }
  }

  async function getListProP() {
    const response = await doGetPROP({
      body: {by: exsum.level, id: [exsum.ref_id]},
      errorModalContext: errorModalContext,
      loadingContext: loadingContext
    })
    if (response?.code == API_CODE.success) {
      const result: ProPDto[] = response.result
      setListProP(result)
    }
  }

  async function getListSumberPendanaan() {
    const response = await doGetMasterListSumberPendanaan({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext
    })
    if (response?.code == API_CODE.success) {
      const result: MiscMasterListSumberPendanaanRes[] = response.result
      if (result) {
        setListSof(result)
      }
    }
  }

  async function getListStakeholder() {
    const response = await doGetMasterListStakeholder({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext
    })
    if (response?.code == API_CODE.success) {
      const result: MiscMasterListStakeholderRes[] = response.result
      if (result) {
        setListStakeholder(result)
      }
    }
  }

  function handleChangeState<T>(data: T) {
    if (modal.type == "RO") {
      setState(prev => {
        return {
          ...prev,
          prop: undefined,
          ro: (data as RoDto[])
        }
      })
    }

    if (modal.type == "NON_RO") {
      setState(prev => {
        return {
          ...prev,
          ro: [],
          prop: (data as ProPDto)
        }
      })
    }
  }

  async function getData() {
    const response = await doGetIntervention({
      body: {exsum_id: exsum.id},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.success) {
      const result: RoDto[] = response.result

      setData(result)

      const roOnly = result.filter(x => x.type == "RO")
      setState(prev => {
        return {
          ...prev,
          ro: roOnly
        }
      })
    }
  }

  const handleSubmit = async () => {

    if (modal.type == "NON_RO" && (state.prop == undefined || state.kementrian == undefined)) {
      return
    }
    const request: ExsumInterventionProjectReqDto = {
      id: 0,
      exsum_id: exsum.id,
      type: modal.type,
      code: state.code,
      prop: state.prop?.id ?? 0,
      kementrian_id: state.kementrian?.id ?? 0,
      nomenklatur: state.nomenklatur,
      indikator: state.indikator,
      list: state.list,
      list_ro: state.ro,
      intervention: state.intervensi
    }
    const response = await doCreateIntervention({
      body: request,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.success) {
      await getData()
      setModal({action:false,type:""})
    }
  }

  return {
    exsum,
    rpjmn,
    state,
    setState,
    handleChangeState,
    data,
    listProP,
    listStakeholder,
    modal,
    setModal,
    handleSubmit,
    getRpjmn,
    getListProP,
    getListSumberPendanaan,
    getListStakeholder,
    getData,
    listSof
  }
}

export default useCardIntervensiVM;