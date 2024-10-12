import {post} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetFundByExsumIdServiceModel} from "@/app/executive-summary/partials/tab8Fund/cardFundModel";

export async function doGetExsumFund(param: GetFundByExsumIdServiceModel) {
  const resp = await post({
    ...param,
    url: "exsum/pendanaan",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}