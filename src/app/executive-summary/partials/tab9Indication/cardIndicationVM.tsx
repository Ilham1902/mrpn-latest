import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {
  ExsumIndicationDto,
  initExsumIndicationDto
} from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import {doGetIndication} from "@/app/executive-summary/partials/tab9Indication/cardIndicationService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {doGetRO} from "@/app/misc/rkp/rkpService";

const useCardIndicationVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const [roKunci, setRoKunci] = useState<RoDto[]>([])
  const [data, setData] = useState<ExsumIndicationDto[]>([])
  const [request, setRequest] = useState<ExsumIndicationDto>(initExsumIndicationDto)

  async function getJenisRisiko() {
  }

  async function getKeyword() {
  }

  async function getRoKunci() {
    const response = await doGetRO({
      body: {
        by: exsum.level,
        id: [exsum.ref_id]
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.sucess) {
      let result: RoDto[] = response.result
      setRoKunci(result)
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

    if (response?.code == API_CODE.sucess) {
      let result: ExsumIndicationDto[] = response.result
      setData(result)
    }

  }

  async function createData() {
    console.log("process ke api create data")
  }

  const handleCreateData = () => {
    console.log("trigger create data")
    createData()
  }

  useEffect(() => {
    if (roKunci.length == 0) getRoKunci()
    if (exsum.id > 0) getData();
  }, [exsum]);

  return {
    data,
    request,
    roKunci,
    setRequest,
    handleCreateData
  }

}

export default useCardIndicationVM;