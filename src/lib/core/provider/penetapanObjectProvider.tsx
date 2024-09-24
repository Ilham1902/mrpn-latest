"use client"

import React, {ReactNode, useRef} from 'react';
import {
    createPenetapanObjectStore, PenetapanObjectContext,
    PenetapanObjectState,
    PenetapanObjectStore
} from "@/lib/core/context/penetapanObjectContext";
import {StoreApi} from "zustand";

export const PenetapanObjectProvider = (
    {
        children,
        state
    }: {
        children: ReactNode,
        state: PenetapanObjectState
    }
) => {

    const storeRef = useRef<StoreApi<PenetapanObjectStore>>()
    if (!storeRef.current) {
        storeRef.current = createPenetapanObjectStore(state)
    }

    return (
        <PenetapanObjectContext.Provider value={storeRef.current}>
            {children}
        </PenetapanObjectContext.Provider>
    );
}