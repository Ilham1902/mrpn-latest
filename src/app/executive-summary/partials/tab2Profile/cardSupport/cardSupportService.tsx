import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetSupportServiceModel} from "@/app/executive-summary/partials/tab2Profile/cardSupport/cardSupportModel";

export async function doGetRKPSasaranIndikator(param: GetSupportServiceModel) {
  const resp = await post({
    ...param,
    url: "misc/rkp/sasaranIndikator",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}