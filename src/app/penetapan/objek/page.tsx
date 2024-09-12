"use client";

import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageTemaView from "@/app/penetapan/objek/pageView";
import {usePermissionChecker} from "@/lib/core/helpers/authHelpers";

export default function PageTema({}) {

 usePermissionChecker("penetapan.objectUpr")

 return <DashboardLayout>
  <PageTemaView />
 </DashboardLayout>
}
