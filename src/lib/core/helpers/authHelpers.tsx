import {usePathname, useRouter} from "next/navigation";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {useEffect} from "react";

export function hasPrivilege(permission:string[], pathName:string, action:string, endpoint?:string){
  let currentPath0 = pathName.substring(1)
  let explodePath = currentPath0.split("/")
  let currentPath = explodePath.join(".")

  if (currentPath == "executive-summary") currentPath = "exsum"

  currentPath = endpoint != undefined ? endpoint : currentPath

  return permission.filter(x => x === currentPath+"."+action).length > 0
}

export const usePermissionChecker = (endpoint?:string) => {
  const router = useRouter()
  const {
    permission
  } = useAuthContext(state => state)
  const pathname = usePathname()

  useEffect(() => {
    if (!hasPrivilege(permission,pathname,"list", endpoint)){
      setTimeout(() => {
        return router.replace("/login")
      },2000)
    }
  }, [permission]);
}