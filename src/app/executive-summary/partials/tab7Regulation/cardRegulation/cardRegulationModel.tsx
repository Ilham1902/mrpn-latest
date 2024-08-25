import {MiscMasterListPerpresRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ExsumRegulationDto {
  id:number
  exsum_id:number
  amanat:string
  perpres:MiscMasterListPerpresRes[]
}
export const initExsumRegulationDto:ExsumRegulationDto = {
  amanat: "", exsum_id: 0, id: 0, perpres: []
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetRegulationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type CreateRegulationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumRegulationDto;
};

export type DeleteRegulationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { id:number };
};