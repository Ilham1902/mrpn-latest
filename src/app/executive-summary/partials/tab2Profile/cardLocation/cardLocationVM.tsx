import { useExsumContext, useGlobalModalContext, useLoading } from "@/lib/core/hooks/useHooks";
import { useEffect, useState } from "react";
import {
  ExsumLocationDto, ExsumLocationUpdateDto, initExsumLocationUpdateDto
} from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationModel";
import { doCreate, doGet } from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationService";
import { API_CODE } from "@/lib/core/api/apiModel";
import { doGetMasterListProvinsi } from "@/app/misc/master/masterService";
import { MiscMasterListProvinsiRes } from "@/app/misc/master/masterServiceModel";
import {doGetRkpLocation} from "@/app/misc/rkp/rkpService";
import {RkpDefaultReqV1Dto, RkpLocationReqDto} from "@/app/misc/rkp/rkpServiceModel";

const useCardLocationVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [columns, setColumns] = useState<MiscMasterListProvinsiRes[]>([]);

  const [locationExsum, setLocationExsum] = useState<MiscMasterListProvinsiRes[]>([])
  const [data, setData] = useState<ExsumLocationDto[]>([])
  const [request, setRequest] = useState<ExsumLocationUpdateDto>({ ...initExsumLocationUpdateDto })
  const [modal, setModal] = useState(false);

  async function getLocationByExsumTOWSDiagram(){
    const params:RkpLocationReqDto = {
      action: "exsum_only",
      exsum_id: [exsum.id]
    }
    const response = await doGetRkpLocation({
      body: params,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.sucess){
      const result:MiscMasterListProvinsiRes[] = response.result
      setLocationExsum(result)
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
      let result: ExsumLocationDto[] = response.result;
      if (result.length > 0) {
        setData(result)
      } else {
        setData([])
        setRequest({ ...initExsumLocationUpdateDto })
      }
    }
  }

  useEffect(() => {
    if (exsum.id !== 0) {
      getData();
      getLocationByExsumTOWSDiagram()
    }
  }, [exsum]);

  async function updateData() {
    const req = {...request}
    req.exsum_id = exsum.id
    const params = {
      body: req,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    }

    if (request.id !== 0) {
      // TODO : implement this
      console.log("not implement")
    } else {
      const response = await doCreate(params);
      if (response?.code == API_CODE.sucess) {
        getData();
        setModal(false)
      }
    }

  }

  return {
    data,
    request,
    setRequest,
    modal,
    setModal,
    locationExsum,
    updateData,
    columns,
    setColumns
  }

}

export default useCardLocationVM;