import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export const LISTSWOT = ["Strength","Weakness","Opportunity","Threat"];

export interface ExsumSWOTRequestDto {
    id: number
    exsum_id: number
    values: ExsumSWOTValuesDto[]
}
export interface ExsumSWOTValuesDto {
    id:number
    type:string
    value:string
    desc:string
}
export interface ExsumSWOTResponseDto {
    id: number
    exsum_id: number
    values: ExsumSWOTValuesDto[]
}

export const initExsumSWOTRequestDto:ExsumSWOTRequestDto = {
    id: 0,
    exsum_id: 0,
    values:[
        {
            id:0,
            type:"STRENGTH",
            value:"",
            desc:""
        },
        {
            id:0,
            type:"WEAKNESS",
            value:"",
            desc:""
        },
        {
            id:0,
            type:"OPPORTUNITY",
            value:"",
            desc:""
        },
        {
            id:0,
            type:"THREAT",
            value:"",
            desc:""
        }
    ]
}
export const initExsumSWOTResponseDto:ExsumSWOTResponseDto = {
    id: 0,
    exsum_id: 0,
    values:[]
}

export interface GetByExsumId {
    exsum_id: number
}

export type GetSWOTByExsumIdServiceModel = BaseAPIServiceParam & {
    body: GetByExsumId;
};

export type UpdateSWOTByExsumIdServiceModel = BaseAPIServiceParam & {
    body: ExsumSWOTRequestDto;
};
