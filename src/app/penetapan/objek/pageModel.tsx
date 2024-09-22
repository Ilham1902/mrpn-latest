import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface PenetapanObjectState {
  id:number
  code:string
  topik:string
  tahun:number
  values:ProjectDefaultDto[]
}

export const initPenetapanObjectState:PenetapanObjectState = {
  id: 0,
  code: "",
  topik: "",
  tahun: 2025,
  values: []
}

export interface PenetapanObjectResDto {
  id:number
  code:string
  topik:string
  tahun:number
  values:ProjectDefaultDto[]
}

export const initPenetapanObjectResDto:PenetapanObjectResDto = {
  id: 0,
  code: "",
  topik: "",
  tahun: 2025,
  values: []
}

export interface PenetapanObjectReqDto {
  id:number
  code:string
  topik:string
  tahun:number
  values:ProjectDefaultDto[]
}

export type GetPenetapanObjectIdServiceModel = BaseAPIServiceParam & {
  body: {  };
};

export type UpdateOrCreatePenetapanObjectIdServiceModel = BaseAPIServiceParam & {
  body: PenetapanObjectReqDto;
};