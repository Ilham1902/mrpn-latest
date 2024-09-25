import {IndikatorDto} from "@/app/misc/rkp/rkpServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ProfileRiskDto {
  id: number
  uraian_penetapan_objek_id: number
  kategori_risiko: string
  insidentil: boolean
  peristiwa_risiko: string
  penyebab_dampak : {
    penyebab:string[]
    dampak:string[]
  }
}

export interface IdentificationRiskResDto {
  objek_mrpn: string
  topik: string
  sasaran: string
  sasaran_indikator: string
  sasaran_target: string
  periode: string
  direktorat: string
  indikator: IndikatorDto[]
  profile_risiko: ProfileRiskDto[]
}

export type GetIdentificationRiskServiceModel = BaseAPIServiceParam & {
  body: {
    uraian_penetapan_objek_id: number
  }
}

export interface IdentificationRiskAddReqDto {
  id:number
  uraian_penetapan_objek_id: number
  kategori_risiko: string
  insidentil: boolean
  peristiwa_risiko: string
  penyebab : string[]
  dampak : string[]
}

export type UpdateOrCreateIdentificationRiskServiceModel = BaseAPIServiceParam & {
  body: IdentificationRiskAddReqDto
}

export const initIdentificationRiskAddReqDto:IdentificationRiskAddReqDto = {
  id:0,
  uraian_penetapan_objek_id: 0,
  kategori_risiko: "",
  insidentil: false,
  peristiwa_risiko: "",
  penyebab: [],
  dampak: []
}