import { BaseAPIServiceParam } from "@/lib/core/api/apiModel"
import { ExsumDto } from "@/lib/core/context/exsumContext";
import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";

export type GetRKPServiceModel = BaseAPIServiceParam & {
    body: {};
};

export type OptionsRKP = ProjectDefaultDto

export type GetExsumServiceModel = BaseAPIServiceParam & {
    body: ExsumDto;
};