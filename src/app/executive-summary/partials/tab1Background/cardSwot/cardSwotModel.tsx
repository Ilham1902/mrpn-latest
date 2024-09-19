import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export const LISTSWOT = ["Strength","Weakness","Opportunity","Threat"];

export interface ExsumSWOTRequestDto {
    id: number
    exsum_id: number
    values: ExsumSWOTValuesDto[]
}
export interface ExsumSWOTValuesDto {
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
            type:"STRENGTH",
            value:"",
            desc:""
        },
        {
            type:"WEAKNESS",
            value:"",
            desc:""
        },
        {
            type:"OPPORTUNITY",
            value:"",
            desc:""
        },
        {
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
