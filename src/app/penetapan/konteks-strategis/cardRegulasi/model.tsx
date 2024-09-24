import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {MiscMasterListPerpresRes} from "@/app/misc/master/masterServiceModel";

export interface RegulasiValueDto {
  id:number
  amanat:string
  perpres:MiscMasterListPerpresRes[]
}

export interface RegulasiExsumDto {
  id:number
  regulasi:RegulasiValueDto[]
}

export interface RegulasiResDto {
  exsum: RegulasiExsumDto
}

export type RegulasiData = RegulasiResDto

export type RegulasiState = RegulasiResDto

// export const initRegulasiState: RegulasiState = {
//   exsum: undefined
// }

export interface GetByRefIdAndLevel {
  id: number
}

export type GetByRefIdAndLevelServiceModel = BaseAPIServiceParam & {
  body: GetByRefIdAndLevel;
};

export type CreateUpdateDeleteServiceModel = BaseAPIServiceParam & {
  body: RegulasiValueDto;
};
