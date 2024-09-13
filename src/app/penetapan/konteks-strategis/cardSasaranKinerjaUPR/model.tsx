import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {IndikatorDto, SasaranDto} from "@/app/misc/rkp/rkpServiceModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";

export interface SasaranIndikatorTargetUPRData {
  id: number
  peran: string,
  stakeholder_id: MiscMasterListStakeholderRes
  sasaran: SasaranDto
  indikator: IndikatorDto
  target: string
}

export interface SasaranIndikatorTargetUPRResDto {
  id: number
  peran: string
  sasaran_pn: SasaranDto
  indikator_pn: IndikatorDto
  sasaran_pp: SasaranDto
  indikator_pp: IndikatorDto
  sasaran_kp: SasaranDto
  indikator_kp: IndikatorDto
  stakeholder: MiscMasterListStakeholderRes
  target: string
}

export interface SasaranIndikatorTargetUPRReqDto {
  id: number
  level: string
  ref_id: number
  peran: string
  sasaran_id: number
  indikator_id: number
  stakeholder_id: number
  target: string
}

export interface SasaranIndikatorTargetUPRState {
  id: number
  peran: string
  stakeholder_id: MiscMasterListStakeholderRes | undefined
  sasaran_id: SasaranDto | undefined
  indikator_id: IndikatorDto | undefined
  target: string
}

export const initSasaranIndikatorTargetUPRState: SasaranIndikatorTargetUPRState = {
  id: 0,
  peran: "",
  stakeholder_id: undefined,
  sasaran_id: undefined,
  indikator_id: undefined,
  target: ""
}

export interface GetByRefIdAndLevel {
  level: string
  ref_id: number
}

export type GetByRefIdAndLevelServiceModel = BaseAPIServiceParam & {
  body: GetByRefIdAndLevel;
};

export type CreateUpdateDeleteServiceModel = BaseAPIServiceParam & {
  body: SasaranIndikatorTargetUPRReqDto;
};
