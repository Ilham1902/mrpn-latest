import {useState} from "react";
import {useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";
import {API_CODE, ResponseBaseDto} from "@/lib/core/api/apiModel";
import {doGetSystemParamByModuleAndName} from "@/app/misc/sysparams/sysParamService";
import {GetSysParamsServiceResModel} from "@/app/misc/sysparams/sysParamServiceModel";
import {
  doCreateRiskTreatment, doDeleteRiskTreatment,
  doGetRiskTreatment,
  doUpdateRiskTreatment
} from "@/app/profil-risiko/perlakuan/pageService";
import {
  initRiskTreatmentState,
  RiskTreatmentReqDto,
  RiskTreatmentResDto, RiskTreatmentState
} from "@/app/profil-risiko/perlakuan/pageModel";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";

const useTreatmentRiskVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();

  const {
    objectState
  } = usePenetapanGlobalVM()

  const [modal, setModal] = useState<{isOpen:boolean, action:string}>({isOpen:false, action:"create"})


  const [dataTreatmentRisk, setDataTreatmentRisk] = useState<RiskTreatmentResDto|undefined>(undefined)
  const getTreatmentRiskData = async () => {
    const response = await doGetRiskTreatment({
      body: {
        uraian_penetapan_objek_id: objectState?.id ?? 0
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code === API_CODE.success){
      const result:RiskTreatmentResDto = response.result
      // console.log(result.profilRisiko[0].perlakuan.penanggung_jawab)
      setDataTreatmentRisk(result)
    }
  }


  const [optionRiskDecision, setOptionRiskDecision] = useState<string[]>([])
  async function getOptionRiskDecision(){
    const response = await doGetSystemParamByModuleAndName({
      body: {
        module:"RISK",
        name:"RISK_DECISION"
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      let result: GetSysParamsServiceResModel = response.result
      const paramValue:string[] = JSON.parse(result.value);
      setOptionRiskDecision(paramValue)
    }
  }


  const [optionStakeholder, setOptionStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
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


  const initState:RiskTreatmentState = JSON.parse(JSON.stringify(initRiskTreatmentState))
  const [state, setState] = useState<RiskTreatmentState>(initState)

  const actionModal = (isOpen: boolean, action: string, id?:number) => {
    let initState:RiskTreatmentState = JSON.parse(JSON.stringify(initRiskTreatmentState))

    if (id != undefined && dataTreatmentRisk !== undefined){
      const getIndex = dataTreatmentRisk.profilRisiko.findIndex(x => x.id == id)
      if (getIndex > -1){
        const reqData = dataTreatmentRisk.profilRisiko[getIndex]
        initState = {
          id: reqData.perlakuan.id,
          profil_risiko: reqData,
          keputusan: reqData.perlakuan.keputusan,
          start_date: reqData.perlakuan.start_date,
          end_date: reqData.perlakuan.end_date,
          ro: reqData.perlakuan.rincian_output,
          src_matriks_risiko: reqData.perlakuan.matriks,
          src_stakeholder: reqData.perlakuan.penanggung_jawab,
          target: "",
          triwulan: reqData.perlakuan.triwulan
        }
      }
    }

    setState(initState)

    setModal({
      isOpen: isOpen,
      action: action
    })
  }


  const updateOrCreateOrDelete = async () => {

    const today = new Date();
    const quarter = Math.floor((today.getMonth() + 3) / 3);

    const roData = state.ro.reduce<number[]>(
      (a,b) => [...a,b.id],
      []
    )

    const req:RiskTreatmentReqDto = {
      id: state.id,
      profil_risiko_id: state.profil_risiko?.id ?? 0,
      keputusan: state.keputusan,
      ro: roData,
      start_date: state.start_date,
      end_date: state.end_date,
      src_stakeholder_id: state.src_stakeholder?.id ?? 0,
      src_matriks_risiko_id: state.src_matriks_risiko?.id ?? 0,
      triwulan: quarter
    }

    let response
    if (modal.action !== "delete"){

      if (req.id == 0){
        response = await doCreateRiskTreatment({
          body:req,
          loadingContext:loadingContext,
          errorModalContext:errorModalContext
        })
      } else {
        response = await doUpdateRiskTreatment({
          body:req,
          loadingContext:loadingContext,
          errorModalContext:errorModalContext
        })
      }

    } else{
      response = await doDeleteRiskTreatment({
        body:req,
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
    }

    if (response?.code === API_CODE.success){
      getTreatmentRiskData()
      setModal({isOpen:false,action:"create"})
    }

  }

  return {
    modal,
    setModal,
    getTreatmentRiskData,
    dataTreatmentRisk,
    setDataTreatmentRisk,
    state,
    setState,
    updateOrCreateOrDelete,
    optionRiskDecision,
    getOptionRiskDecision,
    actionModal,
    optionStakeholder,
    setOptionStakeholder,
    getOptionStakeholder
  }

}

export default useTreatmentRiskVM;