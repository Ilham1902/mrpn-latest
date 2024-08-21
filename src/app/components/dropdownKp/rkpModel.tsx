import { BaseAPIServiceParam } from "@/lib/core/api/apiModel"
import { ExsumDto } from "@/lib/core/context/exsumContext";

export type GetRKPServiceModel = BaseAPIServiceParam & {
    body: {};
};

export type OptionsRKP = {
    id: number
    level: string
    code: string
    name: string
}

export type GetExsumServiceModel = BaseAPIServiceParam & {
    body: ExsumDto;
};