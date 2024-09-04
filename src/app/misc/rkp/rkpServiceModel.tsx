import { BaseAPIServiceParam } from "@/lib/core/api/apiModel"
import { ExsumDto } from "@/lib/core/context/exsumContext";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";

export type GetRKPServiceModel = BaseAPIServiceParam & {
    body: {};
};

export type OptionsRKP = ProjectDefaultDto

export type GetExsumServiceModel = BaseAPIServiceParam & {
    body: ExsumDto;
};

export type RkpDefaultReqV1Dto = {
    level: string
    ref_id: number
};

export type RkpDefaultReqV2Dto = {
    by: string
    id: number[]
};

export type RkpLocationReqDto = {
    exsum_id: number[]
    action: string
};

export type GetRkpLocationServiceModel = BaseAPIServiceParam & {
    body: RkpLocationReqDto;
};

export interface RoDto {
    id:number
    src_rkp_prop_id:number
    tahun:number
    code:string
    value:string
    kl:string
    kl_code:string
    pkkr:string
    target:string
    fisik:string
    satuan:string
    lokasi:string
    alokasi:number
    type:string
    intervention:boolean
}
export type GetRkpROServiceModel = BaseAPIServiceParam & {
    body: RkpDefaultReqV2Dto;
};

export interface ProPDto {
    id:number
    src_rkp_kp_id:number
    code:string
    value:string
}
export type GetRkpPROPServiceModel = BaseAPIServiceParam & {
    body: RkpDefaultReqV2Dto;
};