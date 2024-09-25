import {useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import useKonstraVM from "@/app/penetapan/konteks-strategis/pageVM";
import {useState} from "react";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {doGetDataProfileKunci} from "@/app/penetapan/konteks-strategis/cardProfileIntervensi/service";
import {API_CODE} from "@/lib/core/api/apiModel";

const useProfileKunciVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { objectState } = useKonstraVM()

  const [data, setData] = useState<RoDto[]>([])

  async function getDataProfileKunci(){
    const response = await doGetDataProfileKunci({
      body:{id:objectState?.id ?? 0},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      const result:RoDto[] = response.result
      setData(result)
    }
  }

  return {
    objectState,
    data,
    getDataProfileKunci
  }
}

export default useProfileKunciVM;