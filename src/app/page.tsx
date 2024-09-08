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
      router.replace(menu[0].route)
    } else {
      doCheckSSO()
    }
  }, [user,token,menu]);

  return <></>

}