import {useEffect, useState} from "react";
import {AuthenticationDto} from "@/app/login/loginModel";
import { redirect } from 'next/navigation'

const useLoginVM = () => {

  const [auth, setAuth] = useState<AuthenticationDto>({
    username:"",
    password:""
  })

  function doLogin(){
    if (auth.username == "admin" && auth.password == "admin654321"){
      sessionStorage.setItem("temp", "temp")
      return true
    }

    sessionStorage.clear()
    return true
  }

  function doLogout(){
    sessionStorage.clear()
    redirect('/login')
  }

  useEffect(() => {
    if (sessionStorage.getItem("temp")){
      redirect('/executive-summary')
    }
  }, []);

  return {
    auth,
    setAuth,
    doLogin,
    doLogout
  }

}

export default useLoginVM;