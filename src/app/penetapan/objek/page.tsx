"use client";

import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageTemaView from "@/app/penetapan/objek/pageView";
import {usePermissionChecker} from "@/lib/core/helpers/authHelpers";
import {PenetapanObjectProvider} from "@/lib/core/provider/penetapanObjectProvider";
import {defaultPenetapanObjectState} from "@/lib/core/context/penetapanObjectContext";

export default function PageTema({}) {

 usePermissionChecker("penetapan.objectUpr")

 return <DashboardLayout>
  <PenetapanObjectProvider state={defaultPenetapanObjectState}>
   <PageTemaView />
  </PenetapanObjectProvider>
 </DashboardLayout>
}
