"use client"

import React, {ReactNode, useRef} from 'react';
import {AuthContext, AuthState, AuthStore, createAuthStore,} from '../context/authContext';
import {StoreApi} from "zustand";

export const AuthProvider = (
    {
        children,
        state
    }: {
        children: ReactNode,
        state: AuthState
    }
) => {

    const storeRef = useRef<StoreApi<AuthStore>>()
    if (!storeRef.current) {
        storeRef.current = createAuthStore(state)
    }

    return (
        <AuthContext.Provider value={storeRef.current}>
            {children}
        </AuthContext.Provider>
    );
}