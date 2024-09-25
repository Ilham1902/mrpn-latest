"use client";

import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageIdentifikasiView from "@/app/profil-risiko/identifikasi/pageView";
import {defaultKonstraState} from "@/app/penetapan/konteks-strategis/provider/konstraContext";
import {KonstraProvider} from "@/app/penetapan/konteks-strategis/provider/konstraProvider";
import {usePermissionChecker} from "@/lib/core/helpers/authHelpers";

export default function PageIdentifikasi({}) {
  usePermissionChecker("profilRisiko.identifikasiRisiko")
 return (
   <KonstraProvider state={defaultKonstraState}>
     <DashboardLayout>
       <PageIdentifikasiView />
     </DashboardLayout>
   </KonstraProvider>
 );
}
