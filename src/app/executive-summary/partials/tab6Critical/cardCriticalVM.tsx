import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {doGetRO} from "@/app/misc/rkp/rkpService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {useEffect, useState} from "react";
import {
  ExsumCriticalData,
  ExsumCriticalReqDto,
  ExsumCriticalState,
  initExsumCriticalReqDto
} from "@/app/executive-summary/partials/tab6Critical/cardCriticalModel";
import useCardTOWSVM from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsVM";
import {MiscMasterListKategoriProyekReq, MiscMasterListKategoriProyekRes} from "@/app/misc/master/masterServiceModel";
import {doGetMasterListlistKategoriProyek} from "@/app/misc/master/masterService";
import {
  doCreateCriticalPath,
  doGetCriticalPath
} from "@/app/executive-summary/partials/tab6Critical/cardCriticalService";
import {Task} from "gantt-task-react";
import dayjs from "dayjs";
import {GetColor} from "@/utils/color";

const useCardCriticalVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const useCardTows = useCardTOWSVM();

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [optionRO, setOptionRO] = useState<RoDto[]>([])
  const [optionProjectCategory, setOptionProjectCategory] = useState<MiscMasterListKategoriProyekRes[]>([])
  const [state, setState] = useState<ExsumCriticalState>({...initExsumCriticalReqDto})
  const [optionStrategy, setOptionStrategy] = useState<string[]>([])
  const [data, setData] = useState<ExsumCriticalData[]>([])
  const [ganChart, setGanChart] = useState<Task[]>([])

  async function getListRO() {
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

  async function getListProjectCategory() {
    const response = await doGetMasterListlistKategoriProyek({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      let result: MiscMasterListKategoriProyekRes[] = response.result
      setOptionProjectCategory(result)
    }
  }

  async function getData(){
    const response = await doGetCriticalPath({
      body: {exsum_id:exsum.id},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      const result:ExsumCriticalData[] = response.result
      setData(result)

      const tasks:Task[] = []
      result.map(res => {
        const t:Task = {
          id: res.id.toString(),
          type: "task",
          name: res.ro.value,
          start: dayjs(res.start_date).toDate(),
          end: dayjs(res.end_date).toDate(),
          progress: 0,
          styles: { backgroundColor: GetColor(res.kategori_proyek.id) },
        }
        tasks.push(t)
      })

      setGanChart(tasks)

    }
  }

  const handleSubmit = async () => {

    if (state.ro == undefined || state.start_date == "" || state.end_date == "" || state.kategori_proyek_id == 0 || state.strategy.length == 0) {
      return
    }

    let value:{tagging:string}[] = []
    state.strategy.map(x => {
      value.push({
        tagging:x
      })
    })

    const request:ExsumCriticalReqDto = {
      id: 0,
      exsum_id: exsum.id,
      ro_id: state.ro.id,
      start_date: state.start_date,
      end_date: state.end_date,
      kategori_proyek_id: state.kategori_proyek_id,
      values: value
    }

    const response = await doCreateCriticalPath({
      body: request,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      getData()
      setModalOpen(false)
    }

  }

  useEffect(() => {
    const data = useCardTows.data
    if (data != undefined && data.tows != undefined) {
      let options: string[] = []
      options.push(data.tows.so)
      options.push(data.tows.wo)
      options.push(data.tows.st)
      options.push(data.tows.wt)
      console.log(options)
      setOptionStrategy(options)
    }
  }, [useCardTows.data]);

  useEffect(() => {
    if (exsum.id > 0) {
      getListRO();
      getData();
    }
    if (optionProjectCategory.length == 0) getListProjectCategory();
  }, [exsum]);

  return {
    optionRO,
    optionStrategy,
    optionProjectCategory,
    state,
    setState,
    modalOpen,
    setModalOpen,
    handleSubmit,
    data,
    ganChart
  }

}

export default useCardCriticalVM;