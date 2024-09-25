"use client"

import React, {ReactNode, useRef} from "react";
import {StoreApi} from "zustand";
import {
  createKonstraStore, PenetapanContext,
  PenetapanState,
  PenetapanStore
} from "@/lib/core/context/penetapanContext";

export const PenetapanProvider = (
  {
    children,
    state
  }: {
    children: ReactNode,
    state: PenetapanState
  }
) => {

  const storeRef = useRef<StoreApi<PenetapanStore>>()
  if (!storeRef.current) {
    storeRef.current = createKonstraStore(state)
  }

  return (
    <PenetapanContext.Provider value={storeRef.current}>
      {children}
    </PenetapanContext.Provider>
  );
}