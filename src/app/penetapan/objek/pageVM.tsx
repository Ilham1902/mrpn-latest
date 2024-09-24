import {
  useExsumContext,
  useGlobalModalContext,
  useLoading,
  usePenetapanObjectContext,
  useRKPContext
} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {PNDto, ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {
  initPenetapanObjectState, PenetapanObjectEntityCheckedDto,
  PenetapanObjectLongListAssignObjectReqDto,
  PenetapanObjectLongListReqDto,
  PenetapanObjectLongListReqValueDto,
  PenetapanObjectReqDto, PenetapanObjectShortListDto, PenetapanObjectEntityDto,
  PenetapanObjectVMState, PenetapanObjectStateEntityDto, PenetapanObjectEntityReqDto, PenetapanObjectEntityValueReqDto
} from "@/app/penetapan/objek/pageModel";
import {
  doCratePenetapanObjectLongList,
  doCratePenetapanObjectLongListAssignObject,
  doCreatePenetapanObjectTopic,
  doGetPenetapanObject,
  doGetPenetapanObjectCascading,
  doGetPenetapanObjectEntity,
  doGetPenetapanObjectEntityUsulan,
  doGetPenetapanObjectShortList, doUpdateOrCreatePenetapanObjectEntityUsulan
} from "@/app/penetapan/objek/pageService";
import {API_CODE} from "@/lib/core/api/apiModel";
import useRkpVM from "@/components/dropdown/rkpVM";
import {PenetapanObjectDto, PenetapanObjectUraianDto} from "@/lib/core/context/penetapanObjectContext";
import {RKPCascadingDto} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramModel";

const usePenetapanObjectVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {
    rkp,
    year
  } = useRKPContext(state => state)
  const {
    getData
  } = useRkpVM()
  const {
    objects,
    setObjects,
    objectState,
    setObjectState,
    uraianState,
    setUraianState,
  } = usePenetapanObjectContext(state => state)

  const initState = JSON.parse(JSON.stringify(initPenetapanObjectState))
  const [stateTopic, setStateTopic] = useState<PenetapanObjectVMState>(initState)
  const [stateShorList, setStateShortList] = useState<PenetapanObjectShortListDto[]>([])
  const [stateCascading, setStateCascading] = useState<RKPCascadingDto[]>([])
  const [stateEntity, setStateEntity] = useState<PenetapanObjectStateEntityDto[]>([])
  const [optionPN, setOptionPN] = useState<ProjectDefaultDto[]>([])
  const [modalAdd, setModalAdd] = useState<boolean>(false)

  const generateOptionPN = () => {

    let opt: ProjectDefaultDto[] = []
    rkp.map(pn => {
      // opt.push({
      //   id: pn.id,
      //   level: "PN",
      //   code: pn.code,
      //   value: pn.value
      // })
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

    setOptionPN(opt)
  }

  async function getPenetapanObjectTopic(){
    const response = await doGetPenetapanObject({
      body:{
        tahun: year
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      let result:PenetapanObjectDto[] = response.result
      setObjects(result)
    }
  }

  async function updateOrCreateTopic(){
    const req:PenetapanObjectReqDto = {
      id: stateTopic.id,
      code: stateTopic.code,
      topik: stateTopic.topik,
      tahun: year,
      values: stateTopic.values
    }
    const response = await doCreatePenetapanObjectTopic({
      body:req,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      getPenetapanObjectTopic()
      const initState = JSON.parse(JSON.stringify(initPenetapanObjectState))
      setModalAdd(false)
      setStateTopic(initState)
    }
  }

  async function updateOrCreateLongList(){
    let reqLongList:PenetapanObjectLongListReqDto = {
      values:[]
    }

    let reqLongListAssignObject:PenetapanObjectLongListAssignObjectReqDto = {
      values:[]
    }

    uraianState.map(u => {
      const values:PenetapanObjectLongListReqValueDto = {
        uraian_id:u.id,
        prioritas:[]
      }
      u.prioritas.map(p => {
        if (p.value){
          values.prioritas.push(p.value)
        }
      })
      reqLongList.values.push(values)

      reqLongListAssignObject.values.push({
        uraian_id:u.id,
        assignObjek:u.objek == null ? false : u.objek
      })
    });

    const responseLongList = await doCratePenetapanObjectLongList({
      body:reqLongList,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (responseLongList?.code != API_CODE.success){
      return false
    }

    const responseLongListAssignObject = await doCratePenetapanObjectLongListAssignObject({
      body:reqLongListAssignObject,
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (responseLongListAssignObject?.code != API_CODE.success){
      return false
    }

    getPenetapanObjectTopic()
    return true

  }

  async function getPenetapanObjectShortList(){
    if (objectState !== undefined){
      const response = await doGetPenetapanObjectShortList({
        body:{id:objectState.id},
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
      if (response?.code == API_CODE.success){
        let result:PenetapanObjectShortListDto[] = response.result
        setStateShortList(result)
      }
    }
  }

  async function getPenetapanObjectCascading(){
    if (objectState !== undefined){
      const response = await doGetPenetapanObjectCascading({
        body:{id:objectState.id},
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
      if (response?.code == API_CODE.success){
        let result:RKPCascadingDto[] = response.result
        setStateCascading(result)
      }
    }
  }

  async function getPenetapanObjectEntity(){

    if (objectState !== undefined){
      const response = await doGetPenetapanObjectEntity({
        body:{id:objectState.id},
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
      if (response?.code != API_CODE.success){
        return
      }

      const response2 = await doGetPenetapanObjectEntityUsulan({
        body:{id:objectState.id},
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
      if (response2?.code != API_CODE.success){
        return
      }

      let allEntity:PenetapanObjectEntityDto[] = response.result
      let checkedEntity:PenetapanObjectEntityCheckedDto[] = response2.result

      let state:PenetapanObjectStateEntityDto[] = []

      allEntity.map(x => {
        if (x.type == "SUPPORT"){
          x.stakeholder.map(y => {

            let row:PenetapanObjectStateEntityDto = Object.assign({items:[]}, y)

            const getIndex = checkedEntity.findIndex(checked => checked.entitas.id == y.id)
            if (getIndex > -1){
              row.items = [...row.items, ...checkedEntity[getIndex].items]
            }

            state.push(row)

          })
        }
      })

      setStateEntity(state)

    }
  }

  async function updateOrCreateEntity(){
    if (objectState !== undefined){
      console.log(stateEntity)
      let req:PenetapanObjectEntityReqDto = {
        id_objek: objectState.id,
        values: []
      }
      stateEntity.map(st => {
        const val:PenetapanObjectEntityValueReqDto = {
          entitas: st.id,
          kriteria: []
        }
        st.items.map(s => {
          val.kriteria.push(s.value)
        })
        req.values.push(val)
      })
      const response = await doUpdateOrCreatePenetapanObjectEntityUsulan({
        body:req,
        loadingContext:loadingContext,
        errorModalContext:errorModalContext
      })
      if (response?.code == API_CODE.success){
        getPenetapanObjectEntity()
      }
    }
  }

  const useEffectGenerateOption = () => {
    if (rkp.length > 0 && optionPN.length == 0) {
      generateOptionPN()
    } else {
      getData()
    }
    if (objects.length == 0){
      getPenetapanObjectTopic()
    }
  }

  const useEffectObjectState = () => {
    if (objectState !== undefined){
      const uraianDt:PenetapanObjectUraianDto[] = objectState.penetapan_object_list.reduce<PenetapanObjectUraianDto[]>(
        (acc,b) => {
          return [...acc, ...b.uraian]
        }, []
      )
      const sortedData:PenetapanObjectUraianDto[] = uraianDt.sort((a,b) => {
        const n1 = a.prioritas.length
        const n2 = b.prioritas.length
        if (n1 > n2) {
          return -1;
        }
        if (n1 < n2) {
          return 1;
        }
        return 0;
      })
      setUraianState(sortedData)

      getPenetapanObjectEntity()
    }
  }

  return {
    useEffectGenerateOption,
    useEffectObjectState,
    objects,
    objectState,
    setObjectState,
    modalAdd,
    setModalAdd,
    optionPN,
    stateTopic,
    setStateTopic,
    stateShorList,
    stateCascading,
    stateEntity,
    setStateEntity,
    generateOptionPN,
    updateOrCreateTopic,
    updateOrCreateLongList,
    updateOrCreateEntity,
    getPenetapanObjectShortList,
    getPenetapanObjectCascading,
    getPenetapanObjectEntity,
  }
}

export default usePenetapanObjectVM