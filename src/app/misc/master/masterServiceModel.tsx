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

// LIST PROVINSI
export type MiscMasterListProvinsiReq = BaseAPIServiceParam & {
  body: {};
};
export interface MiscMasterListProvinsiRes {
  id: number
  name: string
}

// LIST PERPRES
export type MiscMasterListPerpresReq = BaseAPIServiceParam & {
  body: {};
};
export interface MiscMasterListPerpresRes {
  id: number
  title:string
  value: string
}