import { useExsumContext, useGlobalModalContext, useLoading } from "@/lib/core/hooks/useHooks";
import { useEffect, useState } from "react";
import {
  ExsumLocationDto, ExsumLocationUpdateDto, initExsumLocationUpdateDto
} from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationModel";
import { doCreate, doGet } from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationService";
import { API_CODE } from "@/lib/core/api/apiModel";
import {
  ExsumRelatedDto,
  initExsumRelatedDto
} from "@/app/executive-summary/partials/tab2Profile/cardRelated/cardRelatedModel";
import { doGetMasterListProvinsi } from "@/app/misc/master/masterService";
import { MiscMasterListProvinsiRes } from "@/app/misc/master/masterServiceModel";

const useCardLocationVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [listProvinsi, setListProvinsi] = useState<MiscMasterListProvinsiRes[]>([])
  const [data, setData] = useState<ExsumLocationDto[]>([])
  const [request, setRequest] = useState<ExsumLocationUpdateDto>({ ...initExsumLocationUpdateDto })
  const [modal, setModal] = useState(false);

  async function getProvinsi() {
    const response = await doGetMasterListProvinsi({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.sucess) {
      let result: MiscMasterListProvinsiRes[] = response.result;
      if (result) {
        setListProvinsi(result)
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
      let result: ExsumLocationDto[] = response.result;
      if (result.length > 0) {
        setData(result)

        let propList: number[] = []
        result[0].provinsi.map(x => {
          propList.push(x.id)
        })
        const generateRequest: ExsumLocationUpdateDto = {
          id: 0,
          exsum_id: exsum.id,
          values: [
            {
              keterangan: result[0].keterangan,
              provinsi: propList
            }
          ]
        }
        setRequest(generateRequest)
      } else {
        setData([])
        setRequest({ ...initExsumLocationUpdateDto })
      }
    }
  }

  useEffect(() => {
    if (listProvinsi.length == 0) {
      getProvinsi()
    }

    if (exsum.id !== 0) {
      getData();
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

    console.log(req)

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
    listProvinsi,
    updateData
  }

}

export default useCardLocationVM;