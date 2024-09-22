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
import {OptionsRKP} from "@/app/misc/rkp/rkpServiceModel";

const usePenetapanObjectVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { rkp, year } = useRKPContext(state => state)
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
      tahun: year,
      values: state.values
    }
    const response = await doCreatePenetapanObject({
      body:req,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      getPenetapanObject()
      const initState = JSON.parse(JSON.stringify(initPenetapanObjectState))
      setModalAdd(false)
      setState(initState)
    }
  }

  const generateOptionPN = () => {

    let opt: ProjectDefaultDto[] = []
    rkp.map(pn => {
      opt.push({
        id: pn.id,
        level: "PN",
        code: pn.code,
        value: pn.value
      })
      pn.pp.map(pp => {
        opt.push({
          id: pp.id,
          level: "PP",
          code: pp.code,
          value: pp.value
        })

        pp.kp.map(kp => {
          opt.push({
            id: kp.id,
            level: "KP",
            code: kp.code,
            value: kp.value
          })
        })

      })
    })

    // const optPN:ProjectDefaultDto[] = rkp.reduce<ProjectDefaultDto[]>(
    //   (a,b) => {
    //     const dto:ProjectDefaultDto = {
    //       id: b.id,
    //       level: b.level,
    //       code: b.code,
    //       value: b.value
    //     }
    //     return [...a, dto]
    //   },
    //   []
    // );

    setOptionPN(opt)
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