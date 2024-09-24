import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface KonstraStakeholderInternalValueDto {
  type_stakeholder:string
  label:string
  value:string
  stakeholder:MiscMasterListStakeholderRes[]
}

export interface KonstraStakeholderInternalStateDto {
  uraian_penetapan_objek_id:number
  type_stakeholder:string
  values:KonstraStakeholderInternalValueDto[]
}

export const initKonstraStakeholderInternalStateReqDto:KonstraStakeholderInternalStateDto = {
  uraian_penetapan_objek_id: 0,
  type_stakeholder:"INTERNAL",
  values: [
    {
      type_stakeholder: "INTERNAL",
      label: "Stakeholder Internal",
      value:"",
      stakeholder: []
    }
  ]
}

export interface KonstraStakeholderInternalReqDto {
  uraian_penetapan_objek_id:number
  type_stakeholder:string
  values:{
    src_stakeholder_id:number
  }[]
}

export type KonstraStakeholderInternalResDto = {
  type_stakeholder:string
  stakeholder:MiscMasterListStakeholderRes
}

export interface GetByRefIdAndLevel {
  type_stakeholder: string
  uraian_penetapan_objek_id: number
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