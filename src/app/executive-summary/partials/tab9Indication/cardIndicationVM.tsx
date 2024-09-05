import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  COORDINATOR,
  ExsumIndicationReqDto, ExsumIndicationResDto,
  ExsumIndicationState, IndicationReqDto,
  initStateExsumIndication, MAIN, StakeholderReqDto, StakeholderResGroupDto
} from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import {
  doCreateIndication,
  doGetIndication
} from "@/app/executive-summary/partials/tab9Indication/cardIndicationService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {doGetRO} from "@/app/misc/rkp/rkpService";
import {doGetSystemParamByModuleAndName} from "@/app/misc/sysparams/sysParamService";
import useCardTOWSVM from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsVM";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {GetSysParamsServiceResModel} from "@/app/misc/sysparams/sysParamServiceModel";
import useCardSWOTVM from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotVM";
import {
  ExsumSWOTValuesDto
} from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotModel";

const useCardIndicationVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()
  const useCardSWOT = useCardSWOTVM();

  const [optionRiskType, setOptionRiskType] = useState<string[]>([])
  const [optionStrategy, setOptionStrategy] = useState<ExsumSWOTValuesDto[]>([])
  const [optionRO, setOptionRO] = useState<RoDto[]>([])
  const [optionStakeholder, setOptionStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [data, setData] = useState<ExsumIndicationResDto[]>([])
  const [state, setState] = useState<ExsumIndicationState>(Object.assign({}, {...initStateExsumIndication}))
  const [modalOpen, setModalOpen] = React.useState(false);

  async function getOptionRiskType(){
    const response = await doGetSystemParamByModuleAndName({
      body: {
        module:"RISK",
        name:"RISK_TYPE"
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      let result: GetSysParamsServiceResModel = response.result
      const paramValue:string[] = JSON.parse(result.value);
      console.log(result)
      console.log(paramValue)
      setOptionRiskType(paramValue)
    }
  }

  async function getOptionRO() {
    const response = await doGetRO({
      body: {
        by: exsum.level,
        id: [exsum.ref_id]
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      let result: RoDto[] = response.result
      setOptionRO(result)
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

  async function getData() {
    const response = await doGetIndication({
      body: {
        exsum_id: exsum.id
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      let result: ExsumIndicationResDto[] = response.result

      let stData:StakeholderResGroupDto = {}
      result.map((res,index) => {
        res.stakeholder.map((st) => {
          if (stData.hasOwnProperty(st.group.type)){
            stData[st.group.type].push(st)
          } else {
            stData[st.group.type] = [st]
          }
        })
        result[index].groupStakeholder = stData
      })

      console.log(result)

      setData(result)
    }
  }

  const updateData = async () => {

    const kejadianState = state.kejadian
    if (kejadianState.length == 0) return
    let kejadian:IndicationReqDto[] = []
    kejadianState.map(k => {
      const swotIds:number[] = k.swot.reduce<number[]>(
        (acc, b) => {
          return [...acc, b.id]
        },
        []
      )
      kejadian.push({
        keterangan:k.keterangan,
        swot:swotIds
      })
    })

    const perlakuanState = state.perlakuan
    if (perlakuanState.length == 0) return
    const perlakuan:number[] = perlakuanState.reduce<number[]>(
      (acc, b) => {
        return [...acc, b.id]
      },
      []
    )

    let stakeholders:StakeholderReqDto[] = []

    const coordinatorStakeholder = state.entity.coordinator
    if (coordinatorStakeholder == undefined) return
    stakeholders.push({
      type: COORDINATOR,
      id: coordinatorStakeholder.id
    })

    const mainStakeholder = state.entity.main
    if (mainStakeholder == undefined) return
    mainStakeholder.map(d => {
      stakeholders.push({
        type: MAIN,
        id: d.id
      })
    })

    const othersStakeholder = state.entity.others
    if (othersStakeholder == undefined) return
    othersStakeholder.map(d => {
      d.entity.map(e => {
        stakeholders.push({
          type: d.type,
          id: e.id
        })
      })
    })

    const requestDto:ExsumIndicationReqDto = {
      id: 0,
      jenis: state.jenis,
      kejadian: kejadian,
      perlakuan: perlakuan,
      stakeholder: stakeholders,
      exsum_id: exsum.id
    }

    const response = await doCreateIndication({
      body:requestDto,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      getData()
      setModalOpen(false)
      setState(Object.assign({}, {...initStateExsumIndication}))
    }

  }

  useEffect(() => {
    const data = useCardSWOT.data
    if (data != undefined) {
      setOptionStrategy(data.values)
    }
  }, [useCardSWOT.data]);

  useEffect(() => {
    if (optionRO.length == 0) getOptionRO()
    if (optionRiskType.length == 0) getOptionRiskType()
    if (optionStakeholder.length == 0) getOptionStakeholder()
    if (exsum.id > 0) getData();
  }, [exsum]);

  return {
    data,
    state,
    setState,
    optionRO,
    optionStrategy,
    optionRiskType,
    optionStakeholder,
    modalOpen,
    setModalOpen,
    updateData
  }

}

export default useCardIndicationVM;