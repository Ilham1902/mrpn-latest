import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ExsumRoadmapDto {
  id:number
  exsum_id:number
  type:string
  year:number
  output:string
}
export const initExsumRoadmapReq:ExsumRoadmapDto = {exsum_id: 0, id: 0, output: "", type: "", year: 0}

export interface GetByExsumId {
  exsum_id: number
}

export type GetRoadmapByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateRoadmapByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumRoadmapDto;
};