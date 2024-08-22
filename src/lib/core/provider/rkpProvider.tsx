"use client"

import React, {ReactNode, useRef} from 'react';
import {createRkpStore, RKPContext, RkpState, RkpStore} from '../context/rkpContext';
import {StoreApi} from "zustand";

export const RKPProvider = (
    {
        children,
        state
    }: {
        children: ReactNode,
        state: RkpState
    }
) => {

    const storeRef = useRef<StoreApi<RkpStore>>()
    if (!storeRef.current) {
        storeRef.current = createRkpStore(state)
    }

    return (
        <RKPContext.Provider value={storeRef.current}>
            {children}
        </RKPContext.Provider>
    );
}