import { useContext, useEffect } from "react";
import { GlobalModalContext } from "../context/globalmodalContext";
import { LoadingContext } from "../context/loadingContext";
import { RKPContext } from "../context/rkpContext";
import { ExsumContext } from "../context/exsumContext";

export const useLoading = () => useContext(LoadingContext);
export const useGlobalModalContext = () => useContext(GlobalModalContext);
export const useRKPContext = () => useContext(RKPContext);
export const useExsumContext = () => useContext(ExsumContext);

export function useOutsideAlerter(
  ref: any,
  onClickOutside: (val: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.debug("outside clicked");
        onClickOutside(true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}


