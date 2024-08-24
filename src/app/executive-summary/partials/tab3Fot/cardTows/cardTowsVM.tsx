import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import useCardSWOTVM from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotVM";
import React, {useEffect, useState} from "react";
import {
  ExsumTWOSResDto, ExsumTWOSOptions, ExsumTWOSReqDto,
  initExsumTWOSRequestDto,
} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsModel";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doGet} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsService";

const useCardTOWSVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext()

  const [ data, setData ] = useState<ExsumTWOSResDto>()
  const [ request, setRequest ] = useState<ExsumTWOSReqDto>(initExsumTWOSRequestDto)
  const [ options, setOptions ] = useState<ExsumTWOSOptions>()
  const [ modalOpen, setModalOpen] = React.useState(false);

  async function getData() {
    const response = await doGet({
      body: {
        exsum_id: exsum.id
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });
    if (response?.code == API_CODE.sucess) {
      const result:ExsumTWOSResDto = response.result
      if (result) {
        setData(result)
        setOptions(result.options)
        if (result.twos){
          setRequest(result.twos)
        }
      }
    }
  }

  async function updateData(){
    console.log(request)
  }

  useEffect(() => {
    if (exsum.id !== 0) {
      getData();
    }
  }, [exsum]);

  return {
    data,
    options,
    setOptions,
    request,
    setRequest,
    modalOpen,
    setModalOpen,
    updateData
  }

}

export default useCardTOWSVM;