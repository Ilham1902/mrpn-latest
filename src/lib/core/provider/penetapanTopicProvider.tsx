"use client"

import React, {ReactNode, useRef} from 'react';
import {
    createPenetapanObjectStore, PenetapanTopicContext,
    PenetapanObjectState,
    PenetapanObjectStore
} from "@/lib/core/context/penetapanTopicContext";
import {StoreApi} from "zustand";

export const PenetapanTopicProvider = (
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
        <PenetapanTopicContext.Provider value={storeRef.current}>
            {children}
        </PenetapanTopicContext.Provider>
    );
}