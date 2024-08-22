import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import {
  GetRelatedByExsumIdServiceModel, UpdateRelatedByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab2Profile/cardRelated/cardRelatedModel";

export async function doGet(param: GetRelatedByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/kebijakan/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateRelatedByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/kebijakan/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateRelatedByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/kebijakan/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: UpdateRelatedByExsumIdServiceModel) {
  const resp = await del({
    ...param,
    url: "exsum/kebijakan/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}