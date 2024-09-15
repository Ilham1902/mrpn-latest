import {post, put} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetKonstraStakeholderByExsumIdServiceModel, UpdateKonstraStakeholderByExsumIdServiceModel
} from "@/app/penetapan/konteks-strategis/cardStakeholderInternal/model";

export async function doGet(param: GetKonstraStakeholderByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/stakeholder/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateKonstraStakeholderByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/stakeholder/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateKonstraStakeholderByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/stakeholder/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
