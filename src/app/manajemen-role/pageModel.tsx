import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface PermissionRoleDto {
  id:number
  name:string
  isChecked:boolean
}
export interface MenuConfigDto {
  id:number
  name:string
  submenu:MenuConfigDto[]
  permission:PermissionRoleDto[]
}

export interface ManagementRoleDto {
  id:number
  name:string
  permission:number[]
}

export interface ManagementRoleReqDto {
  id:number
  name:string
  permission_list:number[]
}


export type GetManagementRoleServiceModel = BaseAPIServiceParam & {
  body: {};
};

export type UpdateManagementRoleServiceModel = BaseAPIServiceParam & {
  body: ManagementRoleReqDto;
};