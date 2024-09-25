import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetRiskAnalysisServiceModel,
  UpdateOrCreateRiskAnalysisServiceModel
} from "@/app/profil-risiko/analisis-evaluasi/pageModel";

export async function doGetRiskAnalysis(param: GetRiskAnalysisServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/analisisRisiko/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateRiskAnalysis(param: UpdateOrCreateRiskAnalysisServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/analisisRisiko/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateRiskAnalysis(param: UpdateOrCreateRiskAnalysisServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/analisisRisiko/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteRiskAnalysis(param: UpdateOrCreateRiskAnalysisServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/analisisRisiko/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
