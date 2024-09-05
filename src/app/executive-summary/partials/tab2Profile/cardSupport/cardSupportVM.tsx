import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {doGet} from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {useEffect, useState} from "react";
import {ExsumSupportProjectRes} from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportModel";

const useCardSupportVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const [data,setData] = useState<ExsumSupportProjectRes>()

  async function getData(){

    const response = await doGet({
      body: {
        ref_id:exsum.ref_id,
        level:exsum.level
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      const result:ExsumSupportProjectRes = response.result
      setData(result)
    }
  }

  useEffect(() => {
    if (exsum.id != 0) getData();
  }, []);

  return {
    data,
    exsum
  }

}
export default useCardSupportVM;