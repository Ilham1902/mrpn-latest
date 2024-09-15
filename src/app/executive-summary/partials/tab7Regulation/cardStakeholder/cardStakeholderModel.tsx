import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {
  ExsumRegulationDto,
  GetByExsumId
} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";

export interface ExsumStakeholderValueDto {
  type:string
  label:string
  value:string
  stakeholder:MiscMasterListStakeholderRes[]
}

export interface ExsumStakeholderReqDto {
  id:number
  exsum_id:number
  values:ExsumStakeholderValueDto[]
}

export const initExsumStakeholderReqDto:ExsumStakeholderReqDto = {
  id: 0,
  exsum_id: 0,
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

export type ExsumStakeholderResDto = ExsumStakeholderValueDto

export type GetStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumStakeholderReqDto;
};

export type DeleteStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { id:number };
};