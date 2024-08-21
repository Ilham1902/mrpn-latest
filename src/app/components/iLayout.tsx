import React from "react";
import { LoadingProvider } from "@/lib/core/provider/loadingProvider";
import { GlobalModalProvider } from "@/lib/core/provider/globalmodalProvider";
import { RKPProvider } from "@/lib/core/provider/rkpProvider";
import { ExsumProvider } from "@/lib/core/provider/exsumProvider";

export const ILayout = ({ children }: {children: React.ReactNode}) =>  {

 return (
  <LoadingProvider>
    <GlobalModalProvider>
      <RKPProvider>
        <ExsumProvider>
          { children }
        </ExsumProvider>
      </RKPProvider>
    </GlobalModalProvider>
  </LoadingProvider>
 );
}
