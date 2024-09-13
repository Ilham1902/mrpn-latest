import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import {
  GetByRefIdAndLevelServiceModel,
  UpdateServiceModel
} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/model";

export async function doGetIndikasiSasaran(param: GetByRefIdAndLevelServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/konteks/identikasiSasaran/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateIndikasiSasaran(param: UpdateServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/konteks/identikasiSasaran/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateIndikasiSasaran(param: UpdateServiceModel) {
  const resp = await put({
    ...param,
    url: "penetapan/konteks/identikasiSasaran/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteIndikasiSasaran(param: UpdateServiceModel) {
  const resp = await put({
    ...param,
    url: "penetapan/konteks/identikasiSasaran/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}