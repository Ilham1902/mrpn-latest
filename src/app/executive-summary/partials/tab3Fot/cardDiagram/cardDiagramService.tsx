import {post, put} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetExsumDiagramByExsumIdServiceModel, UpdateExsumDiagramByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab3Fot/cardDiagram/cardDiagramModel";

export async function doGet(param: GetExsumDiagramByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/kerangkaPikir/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreate(param: UpdateExsumDiagramByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/kerangkaPikir/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: UpdateExsumDiagramByExsumIdServiceModel) {
  const resp = await put({
    ...param,
    url: "exsum/kerangkaPikir/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}