import React, {ReactNode, useRef} from "react";
import {StoreApi} from "zustand";
import {
  createKonstraStore, KonstraContext,
  KonstraState,
  KonstraStore
} from "@/app/penetapan/konteks-strategis/provider/konstraContext";

export const KonstraProvider = (
  {
    children,
    state
  }: {
    children: ReactNode,
    state: KonstraState
  }
) => {

  const storeRef = useRef<StoreApi<KonstraStore>>()
  if (!storeRef.current) {
    storeRef.current = createKonstraStore(state)
  }

  return (
    <KonstraContext.Provider value={storeRef.current}>
      {children}
    </KonstraContext.Provider>
  );
}