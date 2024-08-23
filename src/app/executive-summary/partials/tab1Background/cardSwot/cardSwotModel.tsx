import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

// {
//     "code": 200,
//   "message": "success",
//   "result": {
//     "id": 3,
//       "exsum_id": 4,
//       "strength": "Desc Strength",
//       "weakness": "Desc Weakness",
//       "opportunity": "Desc Opportunity",
//       "threat": "Desc Threat",
//       "exsum_swot_list": [
//         {
//             "id": 5,
//             "exsum_swot_id": 3,
//             "type": "STRENGTH",
//             "value": "Strength2"
//         },
//         {
//             "id": 6,
//             "exsum_swot_id": 3,
//             "type": "WEAKNESS",
//             "value": "Weakness1"
//         },
//         {
//             "id": 7,
//             "exsum_swot_id": 3,
//             "type": "OPPORTUNITY",
//             "value": "Opportunity2"
//         },
//         {
//             "id": 8,
//             "exsum_swot_id": 3,
//             "type": "THREAT",
//             "value": "Threat2"
//         }
//     ]
// }
// }

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

export interface ExsumSWOTResponseDto {
    id: number
    exsum_id: number
    strength: string
    weakness: string
    opportunity: string
    threat: string
    values: {
        type:string
        value:string
    }[]
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
