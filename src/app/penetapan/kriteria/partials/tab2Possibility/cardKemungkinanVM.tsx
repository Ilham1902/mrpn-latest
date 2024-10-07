import {
 useExsumContext,
 useGlobalModalContext,
 useLoading,
} from "@/lib/core/hooks/useHooks";
import { useEffect, useState } from "react";
import { API_CODE } from "@/lib/core/api/apiModel";
import { PenetapanKriteriaKemungkinanResponseDto } from "./cardKemungkinanModel";
import { doDelete, doGet, doUpdate } from "./cardKemungkinanService";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";

const useCardKemungkinanVM = () => {
 const loadingContext = useLoading();
 const errorModalContext = useGlobalModalContext();
 const { objectState } = usePenetapanGlobalVM();

 const [indikatorSasaranData, setIndikatorSasaranData] = useState<
  PenetapanKriteriaKemungkinanResponseDto | undefined
 >(undefined);

 async function getData() {
  const response = await doGet({
   body: {
    uraian_penetapan_objek_id: objectState?.id ?? 0,
   },
   loadingContext: loadingContext,
   errorModalContext: errorModalContext,
  });
  if (response?.code == API_CODE.success) {
   let result: PenetapanKriteriaKemungkinanResponseDto = response.result;
   setIndikatorSasaranData(result);
  }
 }

 return {
  objectState,
  indikatorSasaranData,
  getData,
 };
};

export default useCardKemungkinanVM;
