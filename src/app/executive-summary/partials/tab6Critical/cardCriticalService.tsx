import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetCriticalPathByExsumIdServiceModel,
  UpdateCriticalPathByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab6Critical/cardCriticalModel";

export async function doGetCriticalPath(param: GetCriticalPathByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/criticalPath/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateCriticalPath(param: UpdateCriticalPathByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/criticalPath/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}