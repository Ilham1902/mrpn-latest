import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {ProPDto, RoDto} from "@/app/misc/rkp/rkpServiceModel";

export interface ProjectDefaultDto {
  id: number
  level: string
  code: string
  value: string
}

export type PropDto = ProPDto & {
  ro:RoDto[]
}

export type KLPengampu = MiscMasterListStakeholderRes & {
  id:number
  props:PropDto[]
}

export interface IndikatorDto {
  id: number
  code: string
  value: string
  kementerian: KLPengampu
}

export interface SasaranDto {
  id: number
  code: string
  value: string
  indikator: {
    value: string[]
    prop:PropDto[][]
  }
}

export type KPDto = ProjectDefaultDto & {
  sasaran: SasaranDto
}

export type PPDto = ProjectDefaultDto & {
  kp: KPDto
}

export type PNDto = ProjectDefaultDto & {
  pp: PPDto
}

export type RKPCascadingDto = { pn : PNDto }

export type PropCascadingDto = ProPDto & { isChecked: boolean }

export interface ExsumCascadingStateDto {
  src_rkp_kp_indikator_id: number
  src_stakeholder_id: MiscMasterListStakeholderRes | undefined
  src_rkp_prop_id: PropCascadingDto[]
}

export const initExsumCascadingStateDto: ExsumCascadingStateDto = {
  src_rkp_kp_indikator_id: 0,
  src_stakeholder_id: undefined,
  src_rkp_prop_id: []
}

export interface ExsumCascadingReqDto {
  src_rkp_kp_indikator_id: number
  src_stakeholder_id: number
  src_rkp_prop_id: number[]
}

export type GetExsumCascadingDiagramByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { exsum_id: number };
};

export type UpdateExsumCascadingDiagramByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumCascadingReqDto;
};

export type DeleteExsumCascadingDiagramByIdServiceModel = BaseAPIServiceParam & {
  body: { id:number };
};