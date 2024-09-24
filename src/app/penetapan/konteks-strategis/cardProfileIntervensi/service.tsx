import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetDataProfileKunciServiceModel} from "@/app/penetapan/konteks-strategis/cardProfileIntervensi/model";

export async function doGetDataProfileKunci(param: GetDataProfileKunciServiceModel) {
  const resp = await post({
    ...param,
    url: "penetapan/konteks/intervensi/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}
