import React, { useEffect, useState } from "react"
import { doGetExsum, doGetRKP } from "./rkpService";
import { useExsumContext, useGlobalModalContext, useLoading, useRKPContext } from "@/lib/core/hooks/useHooks";
import { API_CODE } from "@/lib/core/api/apiModel";
import {ProjectDefaultDto, RKPDto} from "@/lib/core/context/rkpContext";
import { OptionsRKP } from "./rkpModel";
import { ExsumDto } from "@/lib/core/context/exsumContext";

const useRkpVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const rkpContext = useRKPContext(state => state);
  const exsumContext = useExsumContext();

  const {rkp,setRkp, rkpOption,setRkpOption, rkpState, setRkpState} = rkpContext

  async function getData() {
    const response = await doGetRKP({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });
    if (response?.code == API_CODE.sucess) {
      let result: RKPDto = response.result;
      rkpContext.setRkp(result)

      // generate Options
      let opt: OptionsRKP[] = []
      result.map(pn => {
        opt.push({
          id: pn.id,
          level: pn.level,
          code: pn.code,
          name: pn.name
        })
        pn.pp.map(pp => {
          opt.push({
            id: pp.id,
            level: pp.level,
            code: pp.code,
            name: pp.name
          })
          
          pp.p.map(p => {
            opt.push({
              id: p.id,
              level: p.level,
              code: p.code,
              name: p.name
            })
          })

        })
      })

      setRkpOption(opt)
    }
  }

  async function getExsum(params:ExsumDto) {
    const response = await doGetExsum({
      body: params,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });
    if (response?.code == API_CODE.sucess) {
      let result:ExsumDto = response.result
      exsumContext.setExsum(result)
    }
  }

  const handleChangeOptions = (params:OptionsRKP) => {
    setRkpState(params)
    if (params.level == "PP" || params.level == "P") {
      let req:ExsumDto = {
        id:0,
        tahun: new Date().getFullYear(),
        level: params.level,
        ref_id: params.id
      }
      getExsum(req)
    }
  }

  useEffect(() => {
    if (rkp.length == 0){
      getData()
    }
  }, [rkpContext.rkp]);

  return {
    options:rkpOption,
    handleChangeOptions,
    value:rkpState,
  }
}

export default useRkpVM;