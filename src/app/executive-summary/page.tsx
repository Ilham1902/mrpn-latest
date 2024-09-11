"use client";

import DashboardLayout from "@/components/layouts/layout";
import PageExecutiveSummaryView from "./pageView";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {usePathname, useRouter} from "next/navigation";
import {useEffect} from "react";
import {hasPrivilege, usePermissionChecker} from "@/lib/core/helpers/authHelpers";

export default function PageExecutiveSummary({ }) {

  usePermissionChecker()

  return (
    <DashboardLayout>
      <PageExecutiveSummaryView />
    </DashboardLayout>
  );
}
