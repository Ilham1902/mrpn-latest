import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export interface ExsumSegmentDto {
    id: number
    exsum_id: number
    value: string
}

export const initExsumSegmentDto:ExsumSegmentDto = {
    id: 0,
    exsum_id: 0,
    value: ""
}

export interface GetByExsumId {
    exsum_id: number
}

export type GetSegmentByExsumIdServiceModel = BaseAPIServiceParam & {
    body: GetByExsumId;
};

export type UpdateSegmentByExsumIdServiceModel = BaseAPIServiceParam & {
    body: ExsumSegmentDto;
};
