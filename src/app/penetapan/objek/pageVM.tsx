import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {PNDto, ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {
  initPenetapanObjectResDto,
  initPenetapanObjectState,
  PenetapanObjectReqDto,
  PenetapanObjectResDto,
  PenetapanObjectState
} from "@/app/penetapan/objek/pageModel";
import {doCreatePenetapanObject, doGetPenetapanObject} from "@/app/penetapan/objek/pageService";
import {API_CODE} from "@/lib/core/api/apiModel";
import useRkpVM from "@/components/dropdown/rkpVM";

const usePenetapanObjectVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { rkp } = useRKPContext(state => state)
  const {
    getData
  } = useRkpVM()

  const initState = JSON.parse(JSON.stringify(initPenetapanObjectState))
  const [state, setState] = useState<PenetapanObjectState>(initState)
  const [optionPN, setOptionPN] = useState<ProjectDefaultDto[]>([])
  const [dataPenetapanObject, setDataPenetapanObject] = useState<PenetapanObjectResDto[]>([])

  const [topic, setTopic] = useState<PenetapanObjectResDto|undefined>(undefined)
  const [modalAdd, setModalAdd] = useState<boolean>(false)

  async function getPenetapanObject(){
    const response = await doGetPenetapanObject({
      body:{},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      let result:PenetapanObjectResDto[] = response.result
      setDataPenetapanObject(result)
    }
  }

  async function updateOrCreate(){
    const req:PenetapanObjectReqDto = {
      id: state.id,
      code: state.code,
      topik: state.topik,
      pn_ids: state.pn_ids.reduce<number[]>(
        (a,b) => {
          return [...a,b.id]
        },
        []
      )
    }
    const response = await doCreatePenetapanObject({
      body:req,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      getPenetapanObject()
    }
  }

  const generateOptionPN = () => {
    const optPN:ProjectDefaultDto[] = rkp.reduce<ProjectDefaultDto[]>(
      (a,b) => {
        const dto:ProjectDefaultDto = {
          id: b.id,
          level: b.level,
          code: b.code,
          value: b.value
        }
        return [...a, dto]
      },
      []
    );
    setOptionPN(optPN)
  }

  useEffect(() => {
    if (rkp.length > 0 && optionPN.length == 0) {
      generateOptionPN()
    } else {
      getData()
    }
    getPenetapanObject()
  }, []);

  return {
    topic,
    setTopic,
    modalAdd,
    setModalAdd,
    dataPenetapanObject,
    optionPN,
    state,
    setState,
    updateOrCreate
  }
}

export default usePenetapanObjectVM