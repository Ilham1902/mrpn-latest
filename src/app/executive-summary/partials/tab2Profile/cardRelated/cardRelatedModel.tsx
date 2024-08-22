import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export interface ExsumRelatedDto {
  id: number
  exsum_id: number
  kebijakan:string
  value: string
}

export const initExsumRelatedDto:ExsumRelatedDto = {
  id: 0,
  exsum_id: 0,
  kebijakan: "",
  value: ""
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetRelatedByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateRelatedByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumRelatedDto;
};
