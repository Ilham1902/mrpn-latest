import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export type GetIndikatorKP = BaseAPIServiceParam & {
  body: {
    id:number
  };
};