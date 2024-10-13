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
  type:string
  value:string
  keywords:ExsumKeyword[]
}

export interface ExsumTWOSResDto {
  tows:ExsumTWOSDto[],
  options:ExsumTWOSOptions
}
export const initExsumTWOSResDto:ExsumTWOSResDto = {
  tows: [],
  options: {
    so:[],
    wo:[],
    st:[],
    wt:[]
  }
}

export interface ExsumTWOSReqDto {
  exsum_id:number
  values:ExsumTWOSDto[]
}
export const initExsumTWOSRequestDto:ExsumTWOSReqDto = {
  exsum_id: 0,
  values:[
    {
      id:0,
      type:"SO",
      value:"",
      keywords:[]
    },
    {
      id:0,
      type:"WO",
      value:"",
      keywords:[]
    },
    {
      id:0,
      type:"ST",
      value:"",
      keywords:[]
    },
    {
      id:0,
      type:"WT",
      value:"",
      keywords:[]
    }
  ]
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