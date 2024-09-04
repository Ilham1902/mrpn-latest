import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ExsumIndicationDto {
  id:number
  exsum_id:number
}

export const initExsumIndicationDto:ExsumIndicationDto = {
  id: 0,
  exsum_id: 0
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetIndicationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateIndicationByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumIndicationDto;
};