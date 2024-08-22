import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export interface ExsumGoalsDto {
    id: number
    exsum_id: number
    value: string
}

export const initExsumGoalsDto:ExsumGoalsDto = {
    id: 0,
    exsum_id: 0,
    value: ""
}

export interface GetByExsumId {
    exsum_id: number
}

export type GetGoalsByExsumIdServiceModel = BaseAPIServiceParam & {
    body: GetByExsumId;
};

export type UpdateGoalsByExsumIdServiceModel = BaseAPIServiceParam & {
    body: ExsumGoalsDto;
};
