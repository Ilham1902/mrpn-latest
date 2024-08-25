import {post, put} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetStakeholderByExsumIdServiceModel, UpdateStakeholderByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab7Regulation/cardStakeholder/cardStakeholderModel";

export async function doGet(param: GetStakeholderByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/stakeholder/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateStakeholderByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/stakeholder/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateStakeholderByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/stakeholder/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
