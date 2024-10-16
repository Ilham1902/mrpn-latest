import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doGetIndikatorKP} from "@/app/executive-summary/partials/tab2Profile/cardIndicator/cardIndikatorService";
import {IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";
import {useState} from "react";

const useCardIndikatorVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const [indikatorKP, setIndikatorKP] = useState<IndikatorDto[]>([])

  const getIndikatorProject = async () => {
    const response = await doGetIndikatorKP({
      body: {
        id:exsum.ref_id
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });
    if (response?.code == API_CODE.success) {
      let result: IndikatorDto[] = response.result;
      if (result) {
        setIndikatorKP(result)
      }
    }
  }

  return {
    exsum,
    indikatorKP,
    getIndikatorProject
  }
}

export default useCardIndikatorVM;