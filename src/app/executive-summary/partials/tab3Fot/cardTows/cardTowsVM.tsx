import {useExsumContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {
  ExsumTWOSResDto, ExsumTWOSOptions, ExsumTWOSReqDto,
  initExsumTWOSRequestDto, UpdateTOWSByExsumIdServiceModel,
} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsModel";
import {API_CODE} from "@/lib/core/api/apiModel";
import {doCreate, doGet, doUpdate} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsService";

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
        console.log(result)
        setOptions(result.options)
        if (result.tows){
          setRequest(result.tows)
        }
      }
    }
  }

  async function updateData(){
    const req:ExsumTWOSReqDto = {...request}
    req.exsum_id = exsum.id
    const params:UpdateTOWSByExsumIdServiceModel = {
      body: req,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    }

    let response
    if (req.id == 0){
      response = await doCreate(params)
    }else{
      response = await doUpdate(params)
    }

    if (response?.code == API_CODE.sucess) {
      getData().then(r => {
        setModalOpen(false)
      })
    }
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