import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Breadcrumbs, Divider, Typography } from "@mui/material";
import TableRincianOutput from "./table-ro";
import TablePeraturan from "./table-peraturan";
import Link from "next/link";
import TableKemungkinan from "./table-kriteria-kemungkinan";
import theme from "@/theme";
import TableDampak from "./table-kriteria-dampak";
import { listProvinsi } from "@/app/utils/provinsi";
import TableIdentifikasiSasaran from "./table-identifikasi-sasaran";
import TableRegulation from "./table-regulation";
import TableStakeholderInternal from "./table-stakeholder-internal";
import TableStakeholderEksternal from "./table-stakeholder-eksternal";
import TableSasaran from "./table-sasaran";

export default function FormKonstra({ mode }: { mode?: string }) {
 return (
  <DashboardLayout>
   <ContentPage
    title="Formulir Penetapan Konteks"
    withCard
    heightTitleBreadcrumb
    chipKp
    breadcrumb={
     <Breadcrumbs aria-label="breadcrumb" sx={{ lineHeight: 1 }}>
      <Typography fontSize="12px">Penetapan Konteks</Typography>
      <Link href="/penetapan-konteks/konteks-strategis">
       <Typography fontSize="12px">Konteks Strategis</Typography>
      </Link>
     </Breadcrumbs>
    }
    sxCard={{
     marginTop: 0,
    }}
    sxHeaderCard={{
     [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
     },
    }}
   >
    <TableIdentifikasiSasaran mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableSasaran mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableRegulation mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableStakeholderInternal mode={mode} project="1" />
    <Divider sx={{ my: 3 }} />
    <TableStakeholderEksternal mode={mode} project="1" />
    <Divider sx={{ my: 3 }} />
    <TableRincianOutput mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TablePeraturan mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableKemungkinan mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableDampak mode={mode} />
   </ContentPage>
  </DashboardLayout>
 );
}
