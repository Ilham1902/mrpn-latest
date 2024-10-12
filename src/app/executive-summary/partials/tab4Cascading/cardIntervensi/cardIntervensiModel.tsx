import {ProPDto, RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ProjectTargetAnggaranDto {
  tahun: number
  target: string
  satuan: string
  anggaran: number
  anggaranString: string
  sumber_anggaran: string
}

export interface ExsumInterventionProjectReqDto {
  id: number
  exsum_id: number
  type: string
  code: string
  prop: number
  kementrian_id: number
  nomenklatur: string
  indikator: string
  intervention: boolean
  list: ProjectTargetAnggaranDto[]
  list_ro:RoDto[]
}

export interface ExsumInterventionState {
  id: number
  exsum_id: number
  type: string
  code: string
  kementrian: MiscMasterListStakeholderRes | undefined
  nomenklatur: string
  indikator: string
  list: ProjectTargetAnggaranDto[]
  intervensi: boolean,
  prop: ProPDto|undefined
  ro: RoDto[]
}

export const initExsumInterventionState: ExsumInterventionState = {
  id: 0,
  exsum_id: 0,
  type: "",
  code: "",
  kementrian: undefined,
  nomenklatur: "",
  indikator: "",
  list: [],
  intervensi: false,
  prop: undefined,
  ro: []
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetExsumInterventionByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateExsumInterventionByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumInterventionProjectReqDto;
};

export type UpdateById = BaseAPIServiceParam & {
  body: { id:number };
};

export type UpdateV2ExsumIntervention = BaseAPIServiceParam & {
  body: {
    id: number;
    prop: number;
    code: string;
    nomenklatur: string;
    kementrian_id: number;
    indikator: string;
    target: string;
    satuan: string;
    anggaran: number;
    sumber_anggaran: string;
    type: string;
    intervention: boolean;
  }
}