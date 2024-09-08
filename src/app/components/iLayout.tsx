import React from "react";
import { LoadingProvider } from "@/lib/core/provider/loadingProvider";
import { GlobalModalProvider } from "@/lib/core/provider/globalmodalProvider";
import { ExsumProvider } from "@/lib/core/provider/exsumProvider";

export const ILayout = ({ children }: {children: React.ReactNode}) =>  {

 return (
        <ExsumProvider>
            <LoadingProvider>
                <GlobalModalProvider>
                    { children }
                </GlobalModalProvider>
            </LoadingProvider>
        </ExsumProvider>
 );

}
