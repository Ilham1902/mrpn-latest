import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export const LISTSWOT = ["Strength","Weakness","Opportunity","Threat"];

export interface ExsumSWOTRequestDto {
    id: number
    exsum_id: number
    strength: string   
    weakness: string   
    opportunity: string
    threat: string
    values: {
        type:string
        values:string[]
    }[]
}
export interface ExsumSWOTValuesDto {
    id:number
    type:string
    value:string
}
export interface ExsumSWOTResponseDto {
    id: number
    exsum_id: number
    strength: string
    weakness: string
    opportunity: string
    threat: string
    values: ExsumSWOTValuesDto[]
}

export const initExsumSWOTRequestDto:ExsumSWOTRequestDto = {
    id: 0,
    exsum_id: 0,
    strength: "",
    weakness: "",
    opportunity: "",
    threat: "",
    values:[
        {
            type:"STRENGTH",
            values:[]
        },
        {
            type:"WEAKNESS",
            values:[]
        },
        {
            type:"OPPORTUNITY",
            values:[]
        },
        {
            type:"THREAT",
            values:[]
        }
    ]
}
export const initExsumSWOTResponseDto:ExsumSWOTResponseDto = {
    id: 0,
    exsum_id: 0,
    strength: "",
    weakness: "",
    opportunity: "",
    threat: "",
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
