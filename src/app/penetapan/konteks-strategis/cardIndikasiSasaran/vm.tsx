import {useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  doGetIndikasiSasaran
} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/service";
import {API_CODE} from "@/lib/core/api/apiModel";
import {
  PenetapanIndikasiSasaranResDto
} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/model";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";

const useIndikatorSasaranVM = () => {

  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { objectState } = usePenetapanGlobalVM()

  const [indikatorSasaranData, setIndikatorSasaranData] = useState<PenetapanIndikasiSasaranResDto|undefined>(undefined)

  async function getDataIndikatorSasaran(){
    const response = await doGetIndikasiSasaran({
      body: {
        id: objectState?.id ?? 0
      },
      loadingContext:loadingContext,
      errorModalContext:errorModalContext
    })
    if (response?.code == API_CODE.success){
      let result:PenetapanIndikasiSasaranResDto = response.result
      setIndikatorSasaranData(result)
    }
  }

  return {
    objectState,
    indikatorSasaranData,
    getDataIndikatorSasaran,
  }
}

export default useIndikatorSasaranVM