import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export interface ExsumSWOTDto {
    id: number
    exsum_id: number
    strength: string   
    weakness: string   
    opportunity: string
    thread: string     
}

export const initExsumSWOTDto:ExsumSWOTDto = {
    id: 0,
    exsum_id: 0,
    strength: "",
    weakness: "",
    opportunity: "",
    thread: "",
}

export interface GetByExsumId {
    exsum_id: number
}

export type GetSWOTByExsumIdServiceModel = BaseAPIServiceParam & {
    body: GetByExsumId;
};

export type UpdateSWOTByExsumIdServiceModel = BaseAPIServiceParam & {
    body: ExsumSWOTDto;
};
