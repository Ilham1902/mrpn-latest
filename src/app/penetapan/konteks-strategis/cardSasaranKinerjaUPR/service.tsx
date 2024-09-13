import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import {
  CreateUpdateDeleteServiceModel,
  GetByRefIdAndLevelServiceModel
} from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/model";

export async function doGetIndikasiSasaran(param: GetByRefIdAndLevelServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/konteks/sasaranIndikator/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateIndikasiSasaran(param: CreateUpdateDeleteServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/konteks/sasaranIndikator/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateIndikasiSasaran(param: CreateUpdateDeleteServiceModel) {
  const resp = await put({
    ...param,
    url: "penetapan/konteks/sasaranIndikator/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteIndikasiSasaran(param: CreateUpdateDeleteServiceModel) {
  const resp = await del({
    ...param,
    url: "penetapan/konteks/sasaranIndikator/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}