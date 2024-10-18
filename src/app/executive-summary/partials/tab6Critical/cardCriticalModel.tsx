// 'exsum_id'              => "required",
//   'ro_id'                 => "required",
//   'start_date'            => "required",
//   'end_date'              => "required",
//   'kategori_proyek_id'    => "required",
//   'values'                => 'required|array|min:1',
//   'values.*.tagging'      => 'required',

import {RoDto} from "@/app/misc/rkp/rkpServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {MiscMasterListKategoriProyekRes} from "@/app/misc/master/masterServiceModel";

export interface ExsumCriticalState {
  id: number
  exsum_id:number
  ro:RoDto|undefined
  start_date:string
  end_date:string
  kategori_proyek_id:number
  strategy:string[]
  keterangan_kegiatan:string
}

export const initExsumCriticalReqDto:ExsumCriticalState = {
  id: 0,
  exsum_id: 0,
  ro: undefined,
  start_date: "",
  end_date: "",
  kategori_proyek_id: 0,
  strategy: [],
  keterangan_kegiatan:""
}

export interface ExsumCriticalReqDto {
  id: number
  exsum_id:number
  ro_id:number
  start_date:string
  end_date:string
  kategori_proyek_id:number
  keterangan_kegiatan:string
  values:{
    tagging:string
  }[]
}

export interface TaskAdditionalData {
  penanggungjawab:string
  sumber_anggaran:string
  keterangan_kegiatan:string
}

export interface ExsumCriticalData {
  id:number
  kategori_proyek_id:number
  keterangan_kegiatan:string
  kategori_proyek:MiscMasterListKategoriProyekRes
  ro:RoDto
  start_date:string
  end_date:string
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetCriticalPathByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateCriticalPathByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumCriticalReqDto;
};