/* eslint-disable @next/next/no-img-element */
"use client";

import React, {useMemo} from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageKonteksStrategisView from "@/app/penetapan/konteks-strategis/pageView";
import {usePermissionChecker} from "@/lib/core/helpers/authHelpers";
import {KonstraProvider} from "@/app/penetapan/konteks-strategis/provider/konstraProvider";
import {defaultKonstraState} from "@/app/penetapan/konteks-strategis/provider/konstraContext";

export default function PageKonteksStrategis({}) {

  usePermissionChecker("penetapan.kriteriaRisiko")

  return (
    <KonstraProvider state={defaultKonstraState}>
      <DashboardLayout>
        <PageKonteksStrategisView/>
      </DashboardLayout>
    </KonstraProvider>
  );
}
