"use client";

import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import PageSeleraRisikoView from "@/app/penetapan/selera-risiko/pageView";

export default function PageSeleraRisiko({}) {

 return (
     <DashboardLayout>
      <PageSeleraRisikoView />
     </DashboardLayout>
 );
}
