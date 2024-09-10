import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {ExsumSWOTValuesDto} from "@/app/executive-summary/partials/tab1Background/cardSwot/cardSwotModel";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";

export const COORDINATOR = "Entitas Koordinator"
export const MAIN = "Entitas Utama"

export interface IndicationReqDto {
  keterangan:string
  swot:number[]
}
export interface StakeholderReqDto {
  type:string
  id:number
}
export interface ExsumIndicationReqDto {
  id:number,
  exsum_id:number
  jenis:string
  kejadian:IndicationReqDto[]
  perlakuan:number[]
  stakeholder:StakeholderReqDto[]
}

export interface StakeholderResGroupDto {
  [key: string]: StakeholderResDto[]
}
export type StakeholderResDto = MiscMasterListStakeholderRes & {
  group:{
    "type" : string
  }
}
export interface ExsumIndicationResDto {
  id:number,
  exsum_id:number
  jenis:string
  kejadian: IndicationState[]
  perlakuan:RoDto[]
  stakeholder:StakeholderResDto[]
  groupStakeholder:StakeholderResGroupDto
}

export interface IndicationState {
  keterangan:string
  keyword_swot:ExsumSWOTValuesDto[]
}
export interface OthersEntityState {
  type:string
  entity:MiscMasterListStakeholderRes[]
}
export interface ExsumIndicationState {
  id:number
  jenis:string
  kejadian:IndicationState[]
  perlakuan:RoDto[]
  entity:{
    coordinator:MiscMasterListStakeholderRes|undefined
    main:MiscMasterListStakeholderRes[]
    others:OthersEntityState[]
  }
}

export const initStateExsumIndication:ExsumIndicationState = {
  id: 0,
  jenis: "",
  kejadian: [
    {
      keterangan: "",
      keyword_swot: []
    }
  ],
  entity: {
    coordinator: undefined,
    main: [],
    others: [
      {
        type: "",
        entity: []
      }
    ]
  },
  perlakuan: []
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetIndicationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateIndicationByIdServiceModel = BaseAPIServiceParam & {
  body: ExsumIndicationReqDto;
};

export type DeleteIndicationByIdServiceModel = BaseAPIServiceParam & {
  body: {id:number};
};