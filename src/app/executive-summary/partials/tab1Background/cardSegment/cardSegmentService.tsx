import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import { GetSegmentByExsumIdServiceModel, UpdateSegmentByExsumIdServiceModel } from "./cardSegmentModel";

export async function doGet(param: GetSegmentByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/penerimaManfaat/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateSegmentByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/penerimaManfaat/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateSegmentByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/penerimaManfaat/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: UpdateSegmentByExsumIdServiceModel) {
  const resp = await del({
    ...param,
    url: "exsum/penerimaManfaat/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}