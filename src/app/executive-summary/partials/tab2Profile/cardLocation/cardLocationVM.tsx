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
import {RkpDefaultReqDto} from "@/app/misc/rkp/rkpServiceModel";

const useCardLocationVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [listProvinsi, setListProvinsi] = useState<MiscMasterListProvinsiRes[]>([])
  const [columns, setColumns] = useState<MiscMasterListProvinsiRes[]>([]);

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

  async function getRkpLocation(){
    const params:RkpDefaultReqDto = {
      level: "KP",
      ref_id: 1
    }
    const response = await doGetRkpLocation({
      body: params,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })
    if (response?.code == API_CODE.sucess){
      console.log(response.result)
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
      console.log(response.result)
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

        let columnsFilter:MiscMasterListProvinsiRes[] = []
        columnsFilter = listProvinsi.filter(x => {
          return propList.includes(x.id)
        })
        setColumns(columnsFilter)
        
      } else {
        setData([])
        setRequest({ ...initExsumLocationUpdateDto })
      }
    }
  }

  useEffect(() => {

    if (columns.length > 0) {
      let listProp: number[] = []
      columns.map(x => {
        listProp.push(x.id)
      })
      setRequest((prev:ExsumLocationUpdateDto) => {
        const newVal = {
          ...prev,
          values:[
            {
              keterangan:prev.values.length > 0 ?prev.values[0].keterangan : "",
              provinsi:listProp
            }
          ]
        }
        return newVal
      }) 
    }

  },[columns])

  useEffect(() => {
    if (listProvinsi.length == 0) {
      getProvinsi()
      getRkpLocation()
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
    updateData,
    columns,
    setColumns
  }

}

export default useCardLocationVM;