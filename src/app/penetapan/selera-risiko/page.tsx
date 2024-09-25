"use client";

import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageSeleraRisikoView from "@/app/penetapan/selera-risiko/pageView";
import {defaultKonstraState} from "@/app/penetapan/konteks-strategis/provider/konstraContext";
import {KonstraProvider} from "@/app/penetapan/konteks-strategis/provider/konstraProvider";

export default function PageSeleraRisiko({}) {

 return (
   <KonstraProvider state={defaultKonstraState}>
     <DashboardLayout>
      <PageSeleraRisikoView />
     </DashboardLayout>
   </KonstraProvider>
 );
}
