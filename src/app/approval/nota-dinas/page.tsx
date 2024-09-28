"use client";

import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageApprovalNotaDinasView from "@/app/approval/nota-dinas/pageView";
import {defaultPenetapanObjectState} from "@/lib/core/context/penetapanTopicContext";
import {PenetapanTopicProvider} from "@/lib/core/provider/penetapanTopicProvider";

export default function PageApprovalNotaDinas({}) {

 return (
   <PenetapanTopicProvider state={defaultPenetapanObjectState}>
    <DashboardLayout>
     <PageApprovalNotaDinasView />
    </DashboardLayout>
   </PenetapanTopicProvider>
 );
}
