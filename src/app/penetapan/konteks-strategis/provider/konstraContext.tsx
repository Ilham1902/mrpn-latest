import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import {createStore} from "zustand/vanilla";
import {createContext} from "react";
import type {StoreApi} from "zustand";

export type KonstraState =  {
  objects: MasterListObjectRes[]
  objectState : MasterListObjectRes | undefined
}

export type KonstraActions = {
  setObjects: (value: MasterListObjectRes[]) => void
  setObjectState: (value: MasterListObjectRes|undefined ) => void
}

export type KonstraStore = KonstraState & KonstraActions

export const defaultKonstraState: KonstraState = {
  objects: [],
  objectState: undefined,
}

export const createKonstraStore = (
  initState: KonstraState = defaultKonstraState,
) => {
  return createStore<KonstraStore>()((set) => ({
    ...initState,
    setObjects: (params:MasterListObjectRes[]) => set((state) => state = {...state, objects:params}),
    setObjectState: (params:MasterListObjectRes|undefined) => set((state) => state = {...state, objectState:params}),
  }))
}

export const KonstraContext = createContext<StoreApi<KonstraStore> | null>(null);