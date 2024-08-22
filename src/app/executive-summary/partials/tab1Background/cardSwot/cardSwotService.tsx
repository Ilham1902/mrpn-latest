import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import { GetSWOTByExsumIdServiceModel, UpdateSWOTByExsumIdServiceModel } from "./cardSwotModel";

export async function doGet(param: GetSWOTByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/swot/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateSWOTByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/swot/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateSWOTByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/swot/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: UpdateSWOTByExsumIdServiceModel) {
  const resp = await del({
    ...param,
    url: "exsum/swot/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}