import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ExsumKeyword {
  id:number
  value:string
}
export interface ExsumTWOSOptions {
  so:ExsumKeyword[],
  wo:ExsumKeyword[],
  st:ExsumKeyword[],
  wt:ExsumKeyword[]
}
export interface ExsumTWOSDto {
  id:number
  exsum_id:number
  so:string
  so_keyword:ExsumKeyword[]
  wo:string
  wo_keyword:ExsumKeyword[]
  st:string
  st_keyword:ExsumKeyword[]
  wt:string
  wt_keyword:ExsumKeyword[]
}
export interface ExsumTWOSResDto {
  tows?:ExsumTWOSDto,
  options:ExsumTWOSOptions
}

export type ExsumTWOSReqDto = ExsumTWOSDto
export const initExsumTWOSRequestDto:ExsumTWOSReqDto = {
  id: 0,
  exsum_id: 0,
  so:"",
  so_keyword: [],
  wo:"",
  wo_keyword: [],
  st:"",
  st_keyword: [],
  wt:"",
  wt_keyword: []
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetTOWSByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateTOWSByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumTWOSReqDto;
};