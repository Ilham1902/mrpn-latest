import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";
import {createStore} from "zustand/vanilla";
import {createContext} from "react";
import type {StoreApi} from "zustand";

export interface PenetapanObjectDto {
  id:number
  code:string
  topik:string
  tahun:number
  penetapan_object_list: PenetapanObjectListDto[]
}

export interface PenetapanObjectListDto {
  id: number
  penetapan_object_id: number
  level: string
  ref_id: number
  uraian: PenetapanObjectUraianDto[]
}

export interface PenetapanObjectUraianDto {
  id: number
  penetapan_object_rkp_id: number
  level: string
  ref_id: number
  objek: boolean
  approve_profil_risiko: boolean
  rkp : ProjectDefaultDto
  prioritas : PenetapanObjectPrioritas[]
}

export interface PenetapanObjectPrioritas {
  id:number
  uraian_penetapan_objek_id: number
  value: string
}

export type PenetapanObjectState =  {
  objects: PenetapanObjectDto[]
  objectState : PenetapanObjectDto | undefined
  uraianState : PenetapanObjectUraianDto[]
}

export type PenetapanObjectActions = {
  setObjects: (value: PenetapanObjectDto[]) => void
  setObjectState: (value: PenetapanObjectDto|undefined ) => void
  setUraianState: (value: PenetapanObjectUraianDto[] ) => void
}

export type PenetapanObjectStore = PenetapanObjectState & PenetapanObjectActions

export const defaultPenetapanObjectState: PenetapanObjectState = {
  objects: [],
  objectState: undefined,
  uraianState: []
}

export const createPenetapanObjectStore = (
  initState: PenetapanObjectState = defaultPenetapanObjectState,
) => {
  return createStore<PenetapanObjectStore>()((set) => ({
    ...initState,
    setObjects: (params:PenetapanObjectDto[]) => set((state) => state = {...state, objects:params}),
    setObjectState: (params:PenetapanObjectDto|undefined) => set((state) => state = {...state, objectState:params}),
    setUraianState: (params:PenetapanObjectUraianDto[]) => set((state) => state = {...state, uraianState:params}),
  }))
}

export const PenetapanTopicContext = createContext<StoreApi<PenetapanObjectStore> | null>(null);