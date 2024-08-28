import {
  MiscMasterListProvinsiRes,
  MiscMasterListStakeholderRes,
  MiscMasterListSumberPendanaanRes
} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ExsumDiagramReqDto {
  id:number
  exsum_id:number
  sumber_pendanaan:number[]
  stakeholder:number[]
  lokasi:number[]
}

export interface ExsumDiagramState {
  id:number
  exsum_id:number
  sumber_pendanaan:MiscMasterListSumberPendanaanRes[]
  stakeholder:MiscMasterListStakeholderRes[]
  lokasi:MiscMasterListProvinsiRes[]
}

export const initExsumDiagramState:ExsumDiagramState = {
  exsum_id: 0, id: 0, lokasi: [], stakeholder: [], sumber_pendanaan: []
}

export interface GetByExsumId {
  exsum_id: number
}

export type GetExsumDiagramByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateExsumDiagramByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumDiagramReqDto;
};