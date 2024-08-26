"use client"

import {createContext} from 'react';
import {createStore} from 'zustand/vanilla'
import {type StoreApi, useStore} from 'zustand'

export const AllowSelect = ["PP","P"];
export interface ProjectDefaultDto {
    id: number
    level: string
    code: string
    value: string
}

export type RODto = ProjectDefaultDto & {
    ro: ProjectDefaultDto[]
}

export type KPDto = ProjectDefaultDto & {
    prop: RODto[]
}

export type PPDto = ProjectDefaultDto & {
    kp: KPDto[]
}

export type PNDto = ProjectDefaultDto & {
    pp: PPDto[]
}

export type RKPDto = PNDto[]

export type RkpState = {
    rkp: RKPDto;
    rkpOption: ProjectDefaultDto[]
    rkpState: ProjectDefaultDto | undefined;
};

export type RkpActions = {
    setRkp: (value: RKPDto) => void;
    setRkpOption: (value: ProjectDefaultDto[]) => void;
    setRkpState: (value: ProjectDefaultDto|undefined) => void;
}

export type RkpStore = RkpState & RkpActions

export const defaultInitRkpState: RkpState = {
    rkp: [],
    rkpOption: [],
    rkpState: undefined,
};

export const createRkpStore = (
    initState: RkpState = defaultInitRkpState,
) => {
    return createStore<RkpStore>()((set) => ({
        ...initState,
        setRkp: (params: RKPDto) => set((state) => state = {...state, rkp:params}),
        setRkpOption: (params: ProjectDefaultDto[]) => set((state) => state = {...state, rkpOption:params}),
        setRkpState: (params: ProjectDefaultDto|undefined) => set((state) => state = {...state, rkpState:params})
    }))
}

export const RKPContext = createContext<StoreApi<RkpStore> | null>(null);
