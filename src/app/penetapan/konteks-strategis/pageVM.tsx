import {useEffect} from "react";
import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import {useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import {doGetMasterListObject} from "@/app/misc/master/masterService";
import {API_CODE} from "@/lib/core/api/apiModel";
import {useKonstraContext} from "@/app/penetapan/konteks-strategis/provider/konstraHook";

const useKonstraVM = () => {

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
  } = useKonstraContext(store => store)

  const getMasterListObject = async () => {
    const response = await doGetMasterListObject({
      body: {tahun: year},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext
    })
    if (response?.code == API_CODE.success) {
      const result: MasterListObjectRes[] = response.result
      setObjects(result)
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

export default useKonstraVM