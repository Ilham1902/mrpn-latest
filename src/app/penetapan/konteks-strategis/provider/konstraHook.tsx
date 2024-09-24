import {useContext} from "react";
import {useStore} from "zustand";
import {KonstraContext, KonstraStore} from "@/app/penetapan/konteks-strategis/provider/konstraContext";

export const useKonstraContext = <T,>(
  selector: (store: KonstraStore) => T,
): T => {
  const globalStoreContext = useContext(KonstraContext)

  if (!globalStoreContext) {
    throw new Error(`useGlobalStore must be use within GlobalStoreProvider`)
  }

  return useStore(globalStoreContext, selector)
}