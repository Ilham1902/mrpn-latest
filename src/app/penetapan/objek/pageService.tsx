import {get, post, put} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetPenetapanObjectIdServiceModel} from "@/app/penetapan/objek/pageModel";

export async function doGetPenetapanObject(param: GetPenetapanObjectIdServiceModel) {
  const resp = await get({
    ...param,
    url: "penetapan/object/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreatePenetapanObject(param: GetPenetapanObjectIdServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/object/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdatePenetapanObject(param: GetPenetapanObjectIdServiceModel) {
  const resp = await put({
    ...param,
    url: "penetapan/object/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}