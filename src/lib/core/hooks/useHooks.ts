import { useContext, useEffect } from "react";
import { GlobalModalContext } from "../context/globalmodalContext";
import { LoadingContext } from "../context/loadingContext";
import {RKPContext, RkpStore} from "../context/rkpContext";
import { ExsumContext } from "../context/exsumContext";
import {useStore} from "zustand";

export const useLoading = () => useContext(LoadingContext);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const useExsumContext = () => useContext(ExsumContext);

export const useRKPContext = <T,>(
    selector: (store: RkpStore) => T,
): T => {
  const globalStoreContext = useContext(RKPContext)

  if (!globalStoreContext) {
    throw new Error(`useGlobalStore must be use within GlobalStoreProvider`)
  }

  return useStore(globalStoreContext, selector)
}

// export function useOutsideAlerter(
//   ref: any,
//   onClickOutside: (val: boolean) => void
// ) {
//   useEffect(() => {
//     function handleClickOutside(event: any) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         console.debug("outside clicked");
//         onClickOutside(true);
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });
// }


