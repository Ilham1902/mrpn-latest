import {get, post} from "@/lib/core/api/apiBase";
import {API_CODE, API_CONSTANT, ResponseBaseDto} from "@/lib/core/api/apiModel";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useAuthContext, useGlobalModalContext, useLoading} from "@/lib/core/hooks/useHooks";
import {SelectChangeEvent} from "@mui/material";
import {AuthResDto, Menu, UserDto} from "@/lib/core/context/authContext";

const useAuthorizationVM = () => {

  const {
    setUser,
    setToken,
    menu,
    setMenu,
    setPermission
  } = useAuthContext(state => state)

  const URL_SSO = process.env.NEXT_PUBLIC_SSO_URL_API
  const router = useRouter()
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();

  const [credential, setCredential] = useState<{
    email: string
    password: string
  }>({
    email: "",
    password: ""
  })
  const [userDropdown, setUserDropdown] = React.useState("");

  const handleChangeUser = (event: SelectChangeEvent) => {
    const userDropdownId = event.target.value
    setUserDropdown(userDropdownId);
  };

  async function doCheckSSO() {
    const resp = await get({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
      url: "auth/sso",
    });
    if (resp) {
      Object.assign(new ResponseBaseDto(), resp)
      if (resp.code == API_CODE.success) {
        let result: AuthResDto = resp.result
        return processStoreUserAuthentication(result)
      }
    }
    return router.replace("/login");
  }

  async function doLogin(){

    if (userDropdown === "1"){
      return router.replace(URL_SSO ?? "");
    }

    const response = await post({
      body: {
        email:credential.email,
        password:credential.password
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
      url: "auth/login",
    });
    if (response) {
      Object.assign(new ResponseBaseDto(), response)
      if (response.code == API_CODE.success){
        let result:AuthResDto = response.result
        return processStoreUserAuthentication(result)
      }
    }
  }

  async function doLogout(){
    const response = await get({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
      url: "auth/logout",
    });
    if (response) {
      Object.assign(new ResponseBaseDto(), response)
      if (response.code == API_CODE.success){

        sessionStorage.clear()
        setUser(undefined)
        setToken(undefined)
        setMenu([])
        setPermission([])
        router.replace("/login");
      }
    }
  }

  async function getMenuConfig(){
    const response = await get({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
      url: "auth/menuConfig",
    });
    if (response) {
      Object.assign(new ResponseBaseDto(), response)
      if (response.code == API_CODE.success){
        let result:Menu[] = response.result
        return result;
      }
    }
    return []
  }

  async function getPermission(){
    const response = await get({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
      url: "auth/permission",
    });
    if (response) {
      Object.assign(new ResponseBaseDto(), response)
      if (response.code == API_CODE.success){
        let result:string[] = response.result
        return result;
      }
    }
    return []
  }

  async function getCurrentUserData(){
    const response = await get({
      body: {},
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
      url: "auth/me",
    });
    if (response) {
      Object.assign(new ResponseBaseDto(), response)
      if (response.code == API_CODE.success){
        let result:UserDto = response.result
        if (result == null){
          return router.replace("/login");
        }else{
          setUser(result)
        }
      }
    }

    const menu = await getMenuConfig()
    setMenu(menu)

    const permission = await getPermission()
    setPermission(permission)

  }

  async function processStoreUserAuthentication(authResponse:AuthResDto){

    sessionStorage.setItem(API_CONSTANT.token, authResponse.access_token.token)

    setUser(authResponse.user)
    setToken(authResponse.access_token)

    const menu = await getMenuConfig()
    setMenu(menu)

    const permission = await getPermission()
    setPermission(permission)

    router.replace(menu[0].route);
  }

  useEffect(() => {
    if (sessionStorage.getItem(API_CONSTANT.token)) {
      if (menu.length == 0) getCurrentUserData();
    }
  }, []);

  return {
    userDropdown,
    setUserDropdown,
    handleChangeUser,
    credential,
    setCredential,
    doCheckSSO,
    doLogin,
    doLogout
  }
}

export default useAuthorizationVM;
