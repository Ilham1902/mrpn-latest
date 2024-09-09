import {del, get, post, put} from "@/lib/core/api/apiBase";
import {ResponseBaseDto} from "@/lib/core/api/apiModel";
import {GetManagementRoleServiceModel, UpdateManagementRoleServiceModel} from "@/app/manajemen-role/pageModel";

export async function doGetAllAvailableMenu(param: GetManagementRoleServiceModel) {
  const resp = await get({
    ...param,
    url: "config/menu/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doGetManagementRoleData(param: GetManagementRoleServiceModel) {
  const resp = await get({
    ...param,
    url: "config/role/show",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doCreateManagementRole(param: UpdateManagementRoleServiceModel) {
  const resp = await post({
    ...param,
    url: "config/role/add",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doUpdateManagementRole(param: UpdateManagementRoleServiceModel) {
  const resp = await put({
    ...param,
    url: "config/role/update",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}

export async function doDeleteManagementRole(param: UpdateManagementRoleServiceModel) {
  const resp = await del({
    ...param,
    url: "config/role/delete",
  });
  if (resp) return Object.assign(new ResponseBaseDto(), resp);
}