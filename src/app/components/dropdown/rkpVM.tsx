import React, { useEffect, useState } from "react"
import { doGetExsum, doGetRKP } from "../../misc/rkp/rkpService";
import { useExsumContext, useGlobalModalContext, useLoading, useRKPContext } from "@/lib/core/hooks/useHooks";
import { API_CODE } from "@/lib/core/api/apiModel";
import { OptionsRKP } from "../../misc/rkp/rkpServiceModel";
import { ExsumDto } from "@/lib/core/context/exsumContext";
import {doGetSystemParamByModuleAndName} from "@/app/misc/sysparams/sysParamService";
import {GetSysParamsServiceResModel} from "@/app/misc/sysparams/sysParamServiceModel";
import {ProjectDefaultDto, RKPDto} from "@/lib/core/context/rkpContext";

const useRkpVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const rkpContext = useRKPContext(state => state);
  const exsumContext = useExsumContext();

  const {rkpOption,setRkpOption, rkpState, setRkpState, year} = rkpContext
  const [allowedSelectRKP, setAllowedSelectRKP] = useState<string[]>([])

  async function getAllowedSelectRKP() {
    const response = await doGetSystemParamByModuleAndName({
      body: {
        module:"RKP",
        name:"ALLOW_SELECT_LEVEL"
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    })

    if (response?.code == API_CODE.success){
      let result: GetSysParamsServiceResModel = response.result;
      const allowSelect:string[] = JSON.parse(result.value);
      setAllowedSelectRKP(allowSelect)
    }

  }
  async function getData() {
    const response = await doGetRKP({
      body: {
        tahun:rkpContext.year
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });

    if (response?.code == API_CODE.success) {
      let result: RKPDto = response.result;
      rkpContext.setRkp(result)

      // generate Options
      let opt: OptionsRKP[] = []
      result.map(pn => {
        if (allowedSelectRKP.includes("PN")){
          opt.push({
            id: pn.id,
            level: "PN",
            code: pn.code,
            value: pn.value
          })
        }
        pn.pp.map(pp => {
          if (allowedSelectRKP.includes("PP")){
            opt.push({
              id: pp.id,
              level: "PP",
              code: pp.code,
              value: pp.value
            })
          }

          pp.kp.map(kp => {
            if (allowedSelectRKP.includes("KP")){
              opt.push({
                id: kp.id,
                level: "KP",
                code: kp.code,
                value: kp.value
              })
            }

            kp.prop.map(prop => {
              if (allowedSelectRKP.includes("PROP")){
                opt.push({
                  id: prop.id,
                  level: "PROP",
                  code: prop.code,
                  value: prop.value
                })
              }

              prop.ro.map(ro => {
                if (allowedSelectRKP.includes("P")){
                  opt.push({
                    id: ro.id,
                    level: "P",
                    code: ro.code,
                    value: ro.value
                  })
                }
              })
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
    if (response?.code == API_CODE.success) {
      let result:ExsumDto = response.result
      exsumContext.setExsum(result)
    }
  }

  function triggerChange(params: ProjectDefaultDto) {
    if (allowedSelectRKP.includes(params.level)) {
      let req: ExsumDto = {
        id: 0,
        tahun: year,
        level: params.level,
        ref_id: params.id
      }
      getExsum(req)
    }
  }

  const handleChangeOptions = (params:OptionsRKP) => {
    if (params == null) {
      setRkpState(undefined)
    } else {
      setRkpState(params)
    }
  }

  useEffect(() => {
    if (rkpState) triggerChange(rkpState);
  }, [rkpState]);

  useEffect(() => {
    if (rkpState !== undefined) triggerChange(rkpState);
  }, [year]);

  return {
    allowedSelectRKP,
    options:rkpOption,
    handleChangeOptions,
    value:rkpState,
    getAllowedSelectRKP,
    getData,
    triggerChange
  }
}

export default useRkpVM;