"use client"

import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import {createStore} from "zustand/vanilla";
import {createContext} from "react";
import type {StoreApi} from "zustand";

export type PenetapanState =  {
  objects: MasterListObjectRes[]
  objectState : MasterListObjectRes | undefined
}

export type PenetapanActions = {
  setObjects: (value: MasterListObjectRes[]) => void
  setObjectState: (value: MasterListObjectRes|undefined ) => void
}

export type PenetapanStore = PenetapanState & PenetapanActions

export const defaultPenetapanState: PenetapanState = {
  objects: [],
  objectState: undefined,
}

export const createKonstraStore = (
  initState: PenetapanState = defaultPenetapanState,
) => {
  return createStore<PenetapanStore>()((set) => ({
    ...initState,
    setObjects: (params:MasterListObjectRes[]) => set((state) => state = {...state, objects:params}),
    setObjectState: (params:MasterListObjectRes|undefined) => set((state) => state = {...state, objectState:params}),
  }))
}

export const PenetapanContext = createContext<StoreApi<PenetapanStore> | null>(null);