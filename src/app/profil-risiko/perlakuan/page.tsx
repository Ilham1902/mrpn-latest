"use client";

import DashboardLayout from "@/app/components/layouts/layout";
import PagePerlakuanView from "@/app/profil-risiko/perlakuan/pageView";
import {usePermissionChecker} from "@/lib/core/helpers/authHelpers";

export default function PagePerlakuan({}) {
  usePermissionChecker("profilRisiko.perlakuanRisiko")
  return (
    <DashboardLayout>
      <PagePerlakuanView />
    </DashboardLayout>
  );
}
