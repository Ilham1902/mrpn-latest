import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {useEffect} from "react";
import {doGetCascadingDiagram} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramService";
import {API_CODE} from "@/lib/core/api/apiModel";

const useCardDiagramVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()
  const {rkpState} = useRKPContext(state => state)

  async function getData(){
    const response = await doGetCascadingDiagram({
      body:{exsum_id:exsum.id},
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      console.log(response.result)
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return {
    rkpState
  }
}

export default useCardDiagramVM