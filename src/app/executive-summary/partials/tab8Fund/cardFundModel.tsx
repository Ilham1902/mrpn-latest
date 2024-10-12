import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {RODto} from "@/lib/core/context/rkpContext";
import {RoDto} from "@/app/misc/rkp/rkpServiceModel";

export interface ExsumFundRes {
  prop:string
  intervensi:RoDto[]
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetFundByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};