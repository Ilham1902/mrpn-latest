import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import {useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {doGetMasterListObject} from "@/app/misc/master/masterService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {usePenetapanContext} from "@/lib/core/hooks/useHooks";

const usePenetapanGlobalVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();

  const {
    year
  } = useRKPContext(state => state)

  const {
    objects,
    setObjects,
    objectState,
    setObjectState,
  } = usePenetapanContext(store => store)

  const getMasterListObject = async () => {
    const response = await doGetMasterListObject({
      body: {tahun: year},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext
    })
    if (response?.code == API_CODE.success) {
      const result: MasterListObjectRes[] = response.result
      setObjects(result)
      const getIndex = result.findIndex(x => x.id == objectState?.id)
      if (getIndex == -1){
        setObjectState(undefined)
      }
    }
  }

  return {
    objects,
    setObjects,
    objectState,
    setObjectState,
    getMasterListObject
  }
}

export default usePenetapanGlobalVM