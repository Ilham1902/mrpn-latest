import {Menu} from "@/lib/core/context/authContext";

export function hasPrivilege(permission:string[], pathName:string, action:string){
  let currentPath = pathName.substring(1)
  if (currentPath == "executive-summary") currentPath = "exsum"

  return permission.filter(x => x === currentPath+"."+action).length > 0
}

// import { API_CONSTANT } from "../api/apiModel";
// import { MenuAppProps } from "../components/iLayout";
// import { isEmpty } from "./valueHelpers";

// export function hasPrivilege(privileges: Array<string>) {
//     let result = false;
//     if (typeof window !== "undefined") {
//         let stringPrivilege: string | null = window.sessionStorage.getItem(API_CONSTANT.functionList);
//         if (!isEmpty(stringPrivilege)) {
//             let privilegeList = JSON.parse(stringPrivilege!);
//             for (let privilegeItem of privileges) {
//                 if ((privilegeList.indexOf(privilegeItem) != -1) || (privilegeList.indexOf(privilegeItem + "-list") != -1) || (privilegeList.indexOf(privilegeItem + "-listApproval") != -1)) {
//                     result = true;
//                 }
//             }
//         }
//     } else {
//         result = true;
//     }
//     return result;
// }

// export function menuHasPrivilege(nav: MenuAppProps) {
//     return hasPrivilege(collectNavPrivilege(nav));
// }

// function collectNavPrivilege(nav: MenuAppProps) {
//     let result: Array<string> = [];
//     if (nav.children != null && nav.children.length > 0) {
//         for (let cItem of nav.children) {
//             let cPrivilege = collectNavPrivilege(cItem);
//             result = result.concat(cPrivilege);
//         }
//     } else if (nav.privilege != null) {
//         result.push(nav.privilege);
//     }
//     return result;
// };