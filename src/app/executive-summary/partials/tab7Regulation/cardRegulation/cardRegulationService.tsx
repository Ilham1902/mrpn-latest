import {del, post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  CreateRegulationByExsumIdServiceModel, DeleteRegulationByExsumIdServiceModel, GetRegulationByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";

export async function doGet(param: GetRegulationByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/kerangkaRegulasi/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: CreateRegulationByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/kerangkaRegulasi/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: DeleteRegulationByExsumIdServiceModel) {
  const resp = await del({
    ...param,
    url: "exsum/kerangkaRegulasi/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}