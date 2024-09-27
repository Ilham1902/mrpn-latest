import {post, put} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  DeleteRoadmapByExsumIdServiceModel,
  GetRoadmapByExsumIdServiceModel, UpdateRoadmapByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapModel";

export async function doGet(param: GetRoadmapByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/roadmap/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateRoadmapByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/roadmap/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateRoadmapByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/roadmap/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: DeleteRoadmapByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/roadmap/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}