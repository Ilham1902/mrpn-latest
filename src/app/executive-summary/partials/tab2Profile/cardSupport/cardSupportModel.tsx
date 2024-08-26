import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";

export interface IndikatorDto {
  id:number
  code:string
  value:string
}
export interface SasaranDto {
  id:number
  code:string
  value:string
  indikator: IndikatorDto[]
}
export type ExsumSupportProjectRes = ProjectDefaultDto & {
  sasaran: SasaranDto[]
};

export type ExsumSupportProjectReq = {
  level: string
  ref_id: number
};

export type GetSupportServiceModel = BaseAPIServiceParam & {
  body: ExsumSupportProjectReq;
};