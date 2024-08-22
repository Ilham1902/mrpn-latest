import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export interface ExsumUrgentDto {
    id: number
    exsum_id: number
    value: string
}

export const initExsumUrgentDto:ExsumUrgentDto = {
    id: 0,
    exsum_id: 0,
    value: ""
}

export interface GetByExsumId {
    exsum_id: number
}

export type GetUrgentByExsumIdServiceModel = BaseAPIServiceParam & {
    body: GetByExsumId;
};

export type UpdateUrgentByExsumIdServiceModel = BaseAPIServiceParam & {
    body: ExsumUrgentDto;
};
