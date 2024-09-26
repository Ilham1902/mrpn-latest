import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetRiskTreatmentServiceModel,
  UpdateOrCreateRiskTreatmentServiceModel
} from "@/app/profil-risiko/perlakuan/pageModel";

export async function doGetRiskTreatment(param: GetRiskTreatmentServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/perlakuanRisiko/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateRiskTreatment(param: UpdateOrCreateRiskTreatmentServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/perlakuanRisiko/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateRiskTreatment(param: UpdateOrCreateRiskTreatmentServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/perlakuanRisiko/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteRiskTreatment(param: UpdateOrCreateRiskTreatmentServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/perlakuanRisiko/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}