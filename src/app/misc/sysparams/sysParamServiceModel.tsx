import { BaseAPIServiceParam } from "@/lib/core/api/apiModel"

export type GetSysParamsServiceReqModel = BaseAPIServiceParam & {
    body: {
        module:string
        name:string
    };
};

export interface GetSysParamsServiceResModel {
    id:number
    module:string
    name:string
    value:string
}
