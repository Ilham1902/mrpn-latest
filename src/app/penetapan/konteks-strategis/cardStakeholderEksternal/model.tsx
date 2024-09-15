import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface KonstraStakeholderEksternalValueDto {
  type:string
  label:string
  value:string
  stakeholder:MiscMasterListStakeholderRes[]
}

export interface KonstraStakeholderEksternalReqDto {
  id:number
  level:string
  ref_id:number
  values:KonstraStakeholderEksternalValueDto[]
}

export const initKonstraStakeholderEksternalReqDto:KonstraStakeholderEksternalReqDto = {
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

export type KonstraStakeholderEksternalResDto = KonstraStakeholderEksternalValueDto

export interface GetByRefIdAndLevel {
  level: string
  ref_id: number
}

export type GetKonstraStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByRefIdAndLevel;
};

export type UpdateKonstraStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: KonstraStakeholderEksternalReqDto;
};

export type DeleteKonstraStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { id:number };
};