import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {useEffect, useState} from "react";
import {
  ExsumRelatedDto,
  initExsumRelatedDto
} from "@/app/executive-summary/partials/tab2Profile/cardRelated/cardRelatedModel";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doGet} from "@/app/executive-summary/partials/tab2Profile/cardGoals/cardGoalsService";
import {doGetMasterListKebijakan} from "@/app/misc/master/masterService";
import {MiscMasterListKebijakanRes} from "@/app/misc/master/masterServiceModel";

const useCardRelatedVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const {exsum} = useExsumContext()

  const [listKebijakan, setListKabijakan] = useState<MiscMasterListKebijakanRes[]>([])
  const [data, setData] = useState<ExsumRelatedDto[]>([])
  const [request, setRequest] = useState<ExsumRelatedDto>({ ...initExsumRelatedDto })
  const [modal, setModal] = useState(false);

  async function getMiscMasterListKebijakan(){
    const response = await doGetMasterListKebijakan({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });
    if (response?.code == API_CODE.sucess) {
      let result: MiscMasterListKebijakanRes[] = response.result;
      if (result) {
        setListKabijakan(result)
      }
    }
  }

  async function getData() {
    const response = await doGet({
      body: {
        exsum_id: exsum.id
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });

    if (response?.code == API_CODE.sucess) {
      let result: ExsumRelatedDto = response.result;
      if (result) {
        setData(result)
        setRequest(result)
      } else {
        setData({ ...initExsumRelatedDto })
        setRequest({ ...initExsumRelatedDto })
      }
    }
  }

  useEffect(() => {
    getMiscMasterListKebijakan()
    if (exsum.id !== 0) {
      getData();
    }
  }, [exsum]);

  return {
    listKebijakan,
    data,
    request,
    modal,
    setModal
  }

}

export default useCardRelatedVM;