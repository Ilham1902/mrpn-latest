import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {RKPSasaranDto} from "@/app/misc/rkp/rkpServiceModel";

export type ExsumSupportProjectRes = RKPSasaranDto

export type ExsumSupportProjectReq = {
  level: string
  ref_id: number
};

export type GetSupportServiceModel = BaseAPIServiceParam & {
  body: ExsumSupportProjectReq;
};