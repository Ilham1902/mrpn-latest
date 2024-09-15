import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface KonstraStakeholderInternalValueDto {
  type:string
  label:string
  value:string
  stakeholder:MiscMasterListStakeholderRes[]
}

export interface KonstraStakeholderInternalReqDto {
  id:number
  level:string
  ref_id:number
  values:KonstraStakeholderInternalValueDto[]
}

export const initKonstraStakeholderInternalReqDto:KonstraStakeholderInternalReqDto = {
  id: 0,
  level:"",
  ref_id: 0,
  values: [
    {
      type: "COORDINATION",
      label: "Kementarian Koordinator",
      value:"",
      stakeholder: []
    },
    {
      type: "MAIN_ENTITY",
      label: "Entitas Sektor Utama",
      value:"",
      stakeholder: []
    },
    {
      type: "SUPPORT",
      label: "Entitas Pendukung",
      value:"",
      stakeholder: []
    }
  ]
}

export type KonstraStakeholderInternalResDto = KonstraStakeholderInternalValueDto

export interface GetByRefIdAndLevel {
  level: string
  ref_id: number
}

export type GetKonstraStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByRefIdAndLevel;
};

export type UpdateKonstraStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: KonstraStakeholderInternalReqDto;
};

export type DeleteKonstraStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { id:number };
};