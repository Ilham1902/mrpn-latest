import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface RegulasiReqDto {
  id: number
  level: string
  ref_id: number
  regulasi: string
  keterangan: string
}

export interface RegulasiResDto {
  id: number
  regulasi: string
  keterangan: string
}

export type RegulasiData = RegulasiResDto

export type RegulasiState = RegulasiResDto

export const initRegulasiState: RegulasiState = {
  id: 0,
  regulasi: "",
  keterangan: ""
}

export interface GetByRefIdAndLevel {
  level: string
  ref_id: number
}

export type GetByRefIdAndLevelServiceModel = BaseAPIServiceParam & {
  body: GetByRefIdAndLevel;
};

export type CreateUpdateDeleteServiceModel = BaseAPIServiceParam & {
  body: RegulasiReqDto;
};
