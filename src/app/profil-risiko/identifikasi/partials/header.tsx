import React from "react";
import {
 Table,
 TableBody,
 TableCell, TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { IdentificationRiskResDto } from "@/app/profil-risiko/identifikasi/pageModel";
import { InfoTooltip } from "@/app/components/InfoTooltip";
import {grey} from "@mui/material/colors";
import HeaderTable from "@/app/profil-risiko/overview/partials/headerTable";

export default function HeaderIdentifikasi({
 noPadding,
 asTable,
 viewOnly,
 data,
}: {
 noPadding?: boolean;
 asTable?: boolean;
 viewOnly?: boolean;
 data?: IdentificationRiskResDto;
}) {
 return <HeaderTable data={data} />;
}
