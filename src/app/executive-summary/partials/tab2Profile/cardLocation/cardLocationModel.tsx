import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";
import {MiscMasterListProvinsiRes} from "@/app/misc/master/masterServiceModel";

export interface ExsumLocationDto {
  id: number
  exsum_id: number
  keterangan:string
  provinsi: MiscMasterListProvinsiRes[]
}

interface ExsumLocationValue {
  keterangan:string
  provinsi:number[]
}
export interface ExsumLocationUpdateDto {
  id:number
  exsum_id: number
  values:ExsumLocationValue[]
}


export const initExsumLocationUpdateDto:ExsumLocationUpdateDto = {
  id:0,
  exsum_id: 0,
  values: []
}

export type GetLocationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: {
    exsum_id: number
  };
};

export type UpdateLocationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumLocationUpdateDto;
};
