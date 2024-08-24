import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

// LIST KEBIJAKAN
export type MiscMasterListKebijakanReq = BaseAPIServiceParam & {
  body: {};
};
export interface MiscMasterListKebijakanChildRes {
  id: number
  src_kebijakan_id: number
  value: string
  isCheck?: boolean
}
export interface MiscMasterListKebijakanRes {
  id:number
  name: string
  list: MiscMasterListKebijakanChildRes[]
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