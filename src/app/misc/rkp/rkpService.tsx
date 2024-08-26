import { get, post } from "@/lib/core/api/apiBase";
import {
  GetExsumServiceModel,
  GetRkpLocationServiceModel,
  GetRKPServiceModel
} from "./rkpServiceModel";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";

export async function doGetRKP(params: GetRKPServiceModel) {
  const resp = await get({
    ...params,
    url: "misc/rkp/list",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doGetExsum(params: GetExsumServiceModel) {
  const resp = await post({
    ...params,
    url: "exsum/getExsum",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doGetRkpLocation(params: GetRkpLocationServiceModel) {
  const resp = await post({
    ...params,
    url: "misc/rkp/lokasi",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}