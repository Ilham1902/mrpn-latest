import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetRiskOverviewServiceModel} from "@/app/profil-risiko/overview/pageModel";

export async function doGetRiskOverview(param: GetRiskOverviewServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/overview/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}