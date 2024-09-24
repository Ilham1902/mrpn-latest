import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {IndikatorDto, SasaranDto} from "@/app/misc/rkp/rkpServiceModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";

export interface SasaranIndikatorTargetUPRData {
  peran: string
  entitas : string[]
  sasaran : string
  indikator : string
  target: string
}

export interface SasaranIndikatorTargetUPREntityDto {
  type: string
  value: string
  stakeholder:MiscMasterListStakeholderRes[]
}

export interface SasaranIndikatorTargetUPRExsumDto {
  id:number,
  kelembagaan: SasaranIndikatorTargetUPREntityDto[]
}

export interface SasaranIndikatorTargetUPRResDto {
  id:number
  level:string
  ref_id:number
  objek:boolean
  rkp:ProjectDefaultDto & {
    sasaran:SasaranDto[]
  }
  exsum:SasaranIndikatorTargetUPRExsumDto
}

export interface GetByRefIdAndLevel {
  id: number
}

export type GetByRefIdAndLevelServiceModel = BaseAPIServiceParam & {
  body: GetByRefIdAndLevel;
};

