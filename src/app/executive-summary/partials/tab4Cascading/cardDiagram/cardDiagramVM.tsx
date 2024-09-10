import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {
  doCreateCascadingDiagram,
  doGetCascadingDiagram
} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  ExsumCascadingReqDto,
  ExsumCascadingStateDto, initExsumCascadingStateDto, PropCascadingDto,
  RKPCascadingDto
} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListStakeholder} from "@/app/misc/master/masterService";
import {ProPDto} from "@/app/misc/rkp/rkpServiceModel";
import {doGetPROP} from "@/app/misc/rkp/rkpService";

const useCardDiagramVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const [optionStakeholder, setOptionStakeholder] = useState<MiscMasterListStakeholderRes[]>([])
  const [optionProp, setOptionProp] = useState<PropCascadingDto[]>([])

  const [data, setData] = useState<RKPCascadingDto|undefined>(undefined)
  const [modal, setModal] = useState<boolean>(false)

  const [state, setState] = useState<ExsumCascadingStateDto>(Object.assign({}, initExsumCascadingStateDto))

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

  async function getOptionProP() {
    const response = await doGetPROP({
      body: {by: exsum.level, id: [exsum.ref_id]},
      errorModalContext: errorModalContext,
      loadingContext: loadingContext
    })
    if (response?.code == API_CODE.success) {
      const result: PropCascadingDto[] = response.result
      setOptionProp(result)
      setState(prevState => {
        return {
          ...prevState,
          src_rkp_prop_id:result
        }
      })
    }
  }

  async function getData(){
    const response = await doGetCascadingDiagram({
      body:{exsum_id:exsum.id},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      const result:RKPCascadingDto = response.result
      setData(result)
    }
  }

  async function createData(){
    if (state.src_stakeholder_id == undefined) return;
    if (state.src_rkp_prop_id.length == 0) return;
    const propIds:number[] = state.src_rkp_prop_id.reduce<number[]>((a,b) => {
      return [...a,b.id]
    },[])
    const req:ExsumCascadingReqDto = {
      src_rkp_kp_indikator_id: state.src_rkp_kp_indikator_id,
      src_stakeholder_id: state.src_stakeholder_id.id,
      src_rkp_prop_id: propIds
    }
    const response = await doCreateCascadingDiagram({
      body:req,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      getData()
      setModal(false)
    }
  }

  useEffect(() => {
    getData()
    getOptionStakeholder()
    getOptionProP()
  }, []);

  return {
    data,
    optionStakeholder,
    optionProp,
    modal,
    setModal,
    state,
    setState,
    createData
  }
}

export default useCardDiagramVM