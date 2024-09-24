import { del, post, put } from "@/lib/core/api/apiBase";
import { ResponseBaseDto } from "@/lib/core/api/apiModel";
import {
  GetByRefIdAndLevelServiceModel,
} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/model";

export async function doGetIndikasiSasaran(param: GetByRefIdAndLevelServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/konteks/identikasiSasaran/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}