import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";
import {SasaranDto} from "@/app/misc/rkp/rkpServiceModel";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";


export interface PenetapanIndikasiSasaranResDto {
    id:number
    level:string
    ref_id:number
    objek:boolean
    rkp:ProjectDefaultDto & {
        sasaran:SasaranDto[]
    }
}

export interface GetByRefIdAndLevel {
    id: number
}

export type GetByRefIdAndLevelServiceModel = BaseAPIServiceParam & {
    body: GetByRefIdAndLevel;
};