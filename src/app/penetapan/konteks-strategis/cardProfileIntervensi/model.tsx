import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export type GetDataProfileKunciServiceModel = BaseAPIServiceParam & {
  body:{id:number}
}