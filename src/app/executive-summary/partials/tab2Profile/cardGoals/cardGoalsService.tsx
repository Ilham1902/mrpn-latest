import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import { GetGoalsByExsumIdServiceModel, UpdateGoalsByExsumIdServiceModel } from "./cardGoalsModel";

export async function doGet(param: GetGoalsByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/goals/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateGoalsByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/goals/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateGoalsByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/goals/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: UpdateGoalsByExsumIdServiceModel) {
  const resp = await del({
    ...param,
    url: "exsum/goals/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}