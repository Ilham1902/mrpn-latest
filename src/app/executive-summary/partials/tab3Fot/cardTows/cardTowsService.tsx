import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetTOWSByExsumIdServiceModel,
  UpdateTOWSByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab3Fot/cardTows/cardTowsModel";

export async function doGet(param: GetTOWSByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/matriksTows/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateTOWSByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/matriksTows/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}