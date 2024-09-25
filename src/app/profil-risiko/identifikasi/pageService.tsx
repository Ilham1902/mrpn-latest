import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {
  GetIdentificationRiskServiceModel,
  UpdateOrCreateIdentificationRiskServiceModel
} from "@/app/profil-risiko/identifikasi/pageModel";

export async function doGetIdentificationRisk(param: GetIdentificationRiskServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/identifikasiRisiko/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateIdentificationRisk(param: UpdateOrCreateIdentificationRiskServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/identifikasiRisiko/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateIdentificationRisk(param: UpdateOrCreateIdentificationRiskServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/identifikasiRisiko/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteIdentificationRisk(param: UpdateOrCreateIdentificationRiskServiceModel) {
  const resp = await post({
    ...param,
    url: "profilRisiko/identifikasiRisiko/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}