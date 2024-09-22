import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface PenetapanObjectState {
  id:number
  code:string
  topik:string
  tahun:number
  pn_ids:ProjectDefaultDto[]
}

export const initPenetapanObjectState:PenetapanObjectState = {
  id: 0,
  code: "",
  topik: "",
  tahun: 2025,
  pn_ids: []
}

export interface PenetapanObjectResDto {
  id:number
  code:string
  topik:string
  tahun:number
  pn_ids:ProjectDefaultDto[]
}

export const initPenetapanObjectResDto:PenetapanObjectResDto = {
  id: 0,
  code: "",
  topik: "",
  tahun: 2025,
  pn_ids: []
}

export interface PenetapanObjectReqDto {
  id:number
  code:string
  topik:string
  pn_ids:number[]
}

export type GetPenetapanObjectIdServiceModel = BaseAPIServiceParam & {
  body: {  };
};

export type UpdateOrCreatePenetapanObjectIdServiceModel = BaseAPIServiceParam & {
  body: PenetapanObjectReqDto;
};