import {useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {useState} from "react";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  SasaranIndikatorTargetUPRData, SasaranIndikatorTargetUPRResDto
} from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/model";
import {
  doGetIndikasiSasaran
} from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/service";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";
import {stakeholderType} from "@/app/misc/master/masterServiceModel";

const useCardSasaranUPRVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();

  const {objectState} = usePenetapanGlobalVM()

  const [data, setData] = useState<SasaranIndikatorTargetUPRData[]>([])

  async function getData(){
    const response = await doGetIndikasiSasaran({
      body: {
        id:objectState?.id ?? 0,
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      let result:SasaranIndikatorTargetUPRResDto = response.result
      let data:SasaranIndikatorTargetUPRData[] = []

      if (result.exsum != null){
        result.exsum.kelembagaan.map(kl => {

          const iStakeholderType = stakeholderType.findIndex(x => x.type == kl.type)
          const peran:string = iStakeholderType > -1 ? stakeholderType[iStakeholderType].label : "";

          const row:SasaranIndikatorTargetUPRData = {
            peran: peran,
            entitas: [],
            sasaran: "SASARAN",
            indikator: "INDIKATOR",
            target: "TARGET"
          }
          kl.stakeholder.map(en => {
            row.entitas.push(en.value)
          })

          data.push(row)

        })
      }

      setData(data)
    }
  }

  return {
    objectState,
    getData,
    data,
  }

}

export default useCardSasaranUPRVM