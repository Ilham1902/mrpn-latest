import {ProPDto, RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";

export interface ProjectTargetAnggaranDto {
  tahun:number
  target:string
  satuan:string
  anggaran:string
  sumber_anggaran:string
}
export interface ExsumInterventionProjectReqDto {
  id:number
  exsum_id:number
  type:string
  code:string
  pj_id:number
  nomenklatur:string
  indikator:string
  list:ProjectTargetAnggaranDto[]
  prop:number[]
  ro:number[]
}

export interface ExsumInterventionState {
  id:number
  exsum_id:number
  type:string
  code:string
  pj_id:MiscMasterListStakeholderRes|undefined
  nomenklatur:string
  indikator:string
  list:ProjectTargetAnggaranDto[]
  isIntervensiKunci:boolean,
  prop:ProPDto[]
  ro:RoDto[]
}

export const initExsumInterventionState:ExsumInterventionState = {
  code: "", exsum_id: 0, id: 0, indikator: "", list: [], nomenklatur: "", pj_id: undefined, prop: [], ro: [], type: "", isIntervensiKunci:false
}