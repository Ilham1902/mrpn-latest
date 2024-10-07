import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import {
 GetKriteriaKemungkinanByObjectIdServiceModel,
 PenetapanKriteriaKemungkinanResponseDto,
} from "./cardKemungkinanModel";

export async function doGet(
 param: GetKriteriaKemungkinanByObjectIdServiceModel
) {
 const resp = await post({
  ...param,
  url: "penetapan/kriteriaRisiko/show",
 });
 if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdate(param: PenetapanKriteriaKemungkinanResponseDto) {
 const resp = await put({
  ...param,
  url: "penetapan/kriteriaRisiko/update",
 });
 if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDelete(param: PenetapanKriteriaKemungkinanResponseDto) {
 const resp = await del({
  ...param,
  url: "penetapan/kriteriaRisiko/delete",
 });
 if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
