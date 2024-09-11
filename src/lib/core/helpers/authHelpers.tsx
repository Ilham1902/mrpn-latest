import {usePathname, useRouter} from "next/navigation";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {useEffect} from "react";

export function hasPrivilege(permission:string[], pathName:string, action:string){
  let currentPath = pathName.substring(1)
  if (currentPath == "executive-summary") currentPath = "exsum"

  return permission.filter(x => x === currentPath+"."+action).length > 0
}

export const usePermissionChecker = () => {
  // const router = useRouter()
  // const {
  //   permission
  // } = useAuthContext(state => state)
  // const pathname = usePathname()
  //
  // useEffect(() => {
  //   if (!hasPrivilege(permission,pathname,"list")){
  //     setTimeout(() => {
  //       return router.replace("/login")
  //     },2000)
  //   }
  // }, [permission]);
}