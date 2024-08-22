import {MiscMasterListKebijakanReq} from "@/app/misc/master/masterServiceModel";
import {get, post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetLocationByExsumIdServiceModel,
  UpdateLocationByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab2Profile/cardLocation/cardLocationModel";

export async function doGet(param: GetLocationByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/lokasi/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateLocationByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/lokasi/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}