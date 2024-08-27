import { get, post } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import {GetSysParamsServiceReqModel} from "@/app/misc/sysparams/sysParamServiceModel";

export async function doGetSystemParamByModuleAndName(params: GetSysParamsServiceReqModel) {
  const resp = await post({
    ...params,
    url: "misc/systemParam/getByModuleAndName",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
