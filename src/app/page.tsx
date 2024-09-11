"use client"

import useAuthorizationVM from "@/app/authorizationVM";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuthContext} from "@/lib/core/hooks/useHooks";

export default function Home() {

  const router = useRouter()
  const {
    user,
    token,
    menu,
  } = useAuthContext(state => state)
  const {
    doCheckSSO
  } = useAuthorizationVM()

  useEffect(() => {
    if (user !== undefined && token !== undefined && menu.length > 0){
      let route = menu[0].route
      if (menu[0].submenu.length > 0){
        route = menu[0].submenu[0].route
      }
      router.replace(route)
    } else {
      doCheckSSO().then(r => {
        if (r == false){
          router.replace("/login")
        }
      })
    }
  }, [user,token,menu]);

  return <></>

}