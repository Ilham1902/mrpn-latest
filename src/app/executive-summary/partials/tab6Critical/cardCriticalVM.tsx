import {useExsumContext, useGlobalModalContext, useLoading, useRKPContext} from "@/lib/core/hooks/useHooks";
import React, {useEffect, useState} from "react";
import {PNDto, ProjectDefaultDto} from "@/lib/core/context/rkpContext";

const useCardCriticalVM = () => {

  // const loadingContext = useLoading();
  // const errorModalContext = useGlobalModalContext();
  // const { exsum } = useExsumContext()
  const { rkp, rkpState } = useRKPContext(state => state)
  const [modalOpen, setModalOpen] = React.useState(false);

  const [optionsRO, setOptionsRO] = useState<ProjectDefaultDto[]>([])
  const generateRO = () => {
    let opt:ProjectDefaultDto[] = []
    rkp.map(pn => {
      pn.pp.map(pp => {
        pp.kp.map(kp => {
          kp.prop.map(prop => {
            prop.ro.map(ro => {
              opt.push(ro)
            })
          })
        })

      })
    })
    setOptionsRO(opt)
  }

  useEffect(() => {
    generateRO()
  }, [rkpState]);

  return {
    optionsRO,
    modalOpen,
    setModalOpen
  }

}

export default useCardCriticalVM;