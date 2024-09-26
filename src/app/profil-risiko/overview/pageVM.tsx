import {useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";
import {useState} from "react";
import {RiskTreatmentResDto} from "@/app/profil-risiko/perlakuan/pageModel";
import {doGetRiskTreatment} from "@/app/profil-risiko/perlakuan/pageService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {RiskOverview, RiskOverviewData} from "@/app/profil-risiko/overview/pageModel";
import {doGetRiskOverview} from "@/app/profil-risiko/overview/pageService";

const useRiskOverviewVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();

  const {
    objectState
  } = usePenetapanGlobalVM()

  const [dataRiskOverview, setDataRiskOverview] = useState<RiskOverview|undefined>(undefined)

  const getRiskOverviewData = async () => {
    const response = await doGetRiskOverview({
      body: {
        uraian_penetapan_objek_id: objectState?.id ?? 0
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code === API_CODE.success){
      const result:RiskOverview = response.result

      const obj = Object.groupBy(result.overviews, (risk) => risk.analisis_br)
      const sorted = Object.keys(obj).sort((a,b) => (parseInt(a) < parseInt(b)) ? 1 : -1)

      const finalOverviewData = result.overviews.reduce<RiskOverviewData[]>(
        (a,b) => {
          let prior:number = 1
          const getIndex = sorted.findIndex(x => parseInt(x) == b.analisis_br)
          if (getIndex > -1){
            prior = getIndex+1
          }
          b.prioritas = prior
          return [...a,b]
        },
        []
      )

      setDataRiskOverview({
        object:result.object,
        overviews:finalOverviewData
      })
    }
  }


  return {
    dataRiskOverview,
    getRiskOverviewData,
  }

}

export default useRiskOverviewVM