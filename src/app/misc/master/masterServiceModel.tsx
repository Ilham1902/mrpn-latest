import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

// LIST KEBIJAKAN
export type MiscMasterListKebijakanReq = BaseAPIServiceParam & {
  body: {};
};
export interface MiscMasterListKebijakanRes {
  name: string
}
export const initMiscMasterListKebijakan:MiscMasterListKebijakanRes[] = []

// LIST PROVINSI
export type MiscMasterListProvinsiReq = BaseAPIServiceParam & {
  body: {};
};
export interface MiscMasterListProvinsiRes {
  id: number
  name: string
}
export const initMiscMasterListProvinsi:MiscMasterListProvinsiRes[] = []