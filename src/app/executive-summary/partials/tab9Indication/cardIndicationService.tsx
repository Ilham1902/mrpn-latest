import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetIndicationByExsumIdServiceModel} from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";

export async function doGetIndication(param: GetIndicationByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/indikasiRisiko/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
