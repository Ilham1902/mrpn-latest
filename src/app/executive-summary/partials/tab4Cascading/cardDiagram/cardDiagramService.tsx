import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetExsumCascadingDiagramByExsumIdServiceModel, UpdateExsumCascadingDiagramByExsumIdServiceModel
} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramModel";

export async function doGetCascadingDiagram(param: GetExsumCascadingDiagramByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/casecadingDiagram/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateCascadingDiagram(param: UpdateExsumCascadingDiagramByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/casecadingDiagram/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}