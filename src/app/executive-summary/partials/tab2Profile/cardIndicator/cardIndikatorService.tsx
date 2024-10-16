import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetIndikatorKP} from "@/app/executive-summary/partials/tab2Profile/cardIndicator/cardIndikatorModel";

export async function doGetIndikatorKP(param: GetIndikatorKP) {
  const resp = await post({
    ...param,
    url: "exsum/indikatorKp",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}