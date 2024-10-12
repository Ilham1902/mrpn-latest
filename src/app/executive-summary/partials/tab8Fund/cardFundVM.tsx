import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {useState} from "react";
import {ExsumFundRes} from "@/app/executive-summary/partials/tab8Fund/cardFundModel";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doGetExsumFund} from "@/app/executive-summary/partials/tab8Fund/cardFundService";

const useCardFundVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const [dataFund, setDataFund] = useState<ExsumFundRes[]>([])

  const getDataFund = async () => {
    const response = await doGetExsumFund({
      body: {
        exsum_id : exsum.id
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success) {
      let result: ExsumFundRes[] = response.result
      console.log(result)
      setDataFund(result)
    }
  }

  return {
    exsum,
    dataFund,
    getDataFund
  }

}

export default useCardFundVM;