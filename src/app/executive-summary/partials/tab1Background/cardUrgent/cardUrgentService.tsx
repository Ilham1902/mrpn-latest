import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import { GetUrgentByExsumIdServiceModel, UpdateUrgentByExsumIdServiceModel } from "./cardUrgentModel";

export async function doGetUrgent(param: GetUrgentByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/urgensiProyek/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateUrgent(param: UpdateUrgentByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/urgensiProyek/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateUrgent(param: UpdateUrgentByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/urgensiProyek/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteUrgent(param: UpdateUrgentByExsumIdServiceModel) {
  const resp = await del({
    ...param,
    url: "exsum/urgensiProyek/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}