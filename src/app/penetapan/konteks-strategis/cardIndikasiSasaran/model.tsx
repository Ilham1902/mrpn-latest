import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";
import {IndikatorDto, SasaranDto} from "@/app/misc/rkp/rkpServiceModel";

export interface PenetapanIndikasiSasaran {
    id: number
    uraian: string
    sasaran: SasaranDto
    indikator: IndikatorDto
    target: string
}

export interface PenetapanIndikasiSasaranResDto {
    id: number
    uraian: string
    sasaran_pn: SasaranDto
    indikator_pn: IndikatorDto
    sasaran_pp: SasaranDto
    indikator_pp: IndikatorDto
    sasaran_kp: SasaranDto
    indikator_kp: IndikatorDto
    target: string
}

export interface PenetapanIndikasiSasaranReqDto {
    id:number
    level:string
    ref_id:number
    uraian:string
    sasaran_id:number
    indikator_id:number
    target:string
}

export interface PenetapanIndikasiSasaranState {
    id:number
    uraian:string
    sasaran_id:SasaranDto|undefined
    indikator_id:IndikatorDto|undefined
    target:string
}

export const initPenetapanIndikasiSasaranState:PenetapanIndikasiSasaranState = {
    id:0,
    uraian: "",
    sasaran_id: undefined,
    indikator_id: undefined,
    target: ""
}

export interface GetByRefIdAndLevel {
    level:string
    ref_id: number
}

export type GetByRefIdAndLevelServiceModel = BaseAPIServiceParam & {
    body: GetByRefIdAndLevel;
};

export type UpdateServiceModel = BaseAPIServiceParam & {
    body: PenetapanIndikasiSasaranReqDto;
};
