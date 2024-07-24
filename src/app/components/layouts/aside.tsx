import React from "react";
import { usePathname } from "next/navigation";
import { Typography, Box, Stack, Collapse } from "@mui/material";
import Image from "next/image";
import { MenuItem } from "./partials/menu";
import { MenuGroup } from "./partials/menu-group";
import { SubmenuItem } from "./partials/submenu";
import {
 IconAnalisis,
 IconDashboard,
 IconEvaluasi,
 IconExecutive,
 IconKeluar,
 IconManajemen,
 IconPemantauan,
 IconPenetapan,
 IconProfil,
} from "../icons";
import { IconFA } from "../icons/icon-fa";
import { IconSupport } from "../icons/support";
import { IconApproval } from "../icons/approval";

export default function Aside({
 isExpanded,
 isMobile,
}: {
 isExpanded?: boolean;
 isMobile?: boolean;
}) {
 const CompanyIcon = (
  <Stack
   width="100%"
   height="120px"
   alignItems="center"
   justifyContent="center"
   direction="row"
  >
   <Collapse in={isExpanded}>
    <Stack
     width="100%"
     height="120px"
     alignItems="center"
     justifyContent="center"
     direction="row"
     gap={2}
    >
     <Box
      sx={{
       transition: "all 300ms ease",
      }}
     >
      <Image
       width={64}
       height={68}
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
       alt="MRPN 2024"
       priority
      />
     </Box>
     <Typography
      color="white"
      fontSize="14px"
      fontWeight={600}
      variant="caption"
      textTransform="uppercase"
      lineHeight={1.3}
      maxWidth="136px"
     >
      Manajemen Risiko Pembangunan Nasional
     </Typography>
    </Stack>
   </Collapse>
  </Stack>
 );

 const subMenuKonteks = "penetapan";
 const subMenuProfil = "profil-risiko";
 const subMenuPemantauan = "pemantauan";
 const subMenuSupport = "support";
 const subMenuApproval = "approval";

 const Sidemenu = (
  <Stack
   direction="column"
   justifyContent="space-between"
   height={isMobile ? "calc(100% + 16px)" : "calc(100% - 120px)"}
   maxHeight={isMobile ? "calc(100% + 16px)" : "calc(100% - 120px)"}
   overflow="auto"
   sx={{
    pt: isMobile ? 3 : 0,
    "&::-webkit-scrollbar": {
     width: "3px",
    },
   }}
  >
   <Stack gap="40px" direction="column">
    <MenuGroup isExpanded={isExpanded} label="menu">
     <Stack direction="column" gap={1}>
      <MenuItem
       isExpanded={isExpanded}
       label="Dashboard"
       icon={<IconDashboard />}
       url="dashboard"
      />
      <MenuItem
       isExpanded={isExpanded}
       label="Executive Summary"
       icon={<IconExecutive />}
       url="executive-summary"
      />
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Penetapan"
       icon={<IconPenetapan />}
       url={subMenuKonteks}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuKonteks)
         : false
       }
      >
       <SubmenuItem label="Objek & UPR" url={subMenuKonteks} urlLv2="objek" />
       <SubmenuItem
        label="Eksplorasi Konteks"
        url={subMenuKonteks}
        urlLv2="konteks-strategis"
       />
       <SubmenuItem
        label="Selera Risiko"
        url={subMenuKonteks}
        urlLv2="selera-risiko"
       />
       <SubmenuItem label="Kriteria" url={subMenuKonteks} urlLv2="kriteria" />
      </MenuItem>
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Profil Risiko"
       icon={<IconProfil />}
       url={subMenuProfil}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuProfil)
         : false
       }
      >
       <SubmenuItem
        label="Identifikasi Risiko"
        url={subMenuProfil}
        urlLv2="identifikasi"
       />
       <SubmenuItem
        label="Analisis & Evaluasi"
        url={subMenuProfil}
        urlLv2="analisis-evaluasi"
       />
       <SubmenuItem
        label="Perlakuan Risiko"
        url={subMenuProfil}
        urlLv2="perlakuan"
       />
       <SubmenuItem
        label="Overview Profil"
        url={subMenuProfil}
        urlLv2="overview"
       />
      </MenuItem>
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Approval"
       icon={<IconApproval />}
       url={subMenuApproval}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuApproval)
         : false
       }
      >
       <SubmenuItem
        label="Nota Dinas"
        url={subMenuApproval}
        urlLv2="nota-dinas"
       />
       <SubmenuItem
        label="Selera Risiko"
        url={subMenuApproval}
        urlLv2="selera"
       />
       <SubmenuItem
        label="Profil Risiko"
        url={subMenuApproval}
        urlLv2="profil"
       />
      </MenuItem>
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Pemantauan MRPN"
       icon={<IconPemantauan />}
       url={subMenuPemantauan}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuPemantauan)
         : false
       }
      >
       <SubmenuItem
        label="Peringatan Dini"
        url={subMenuPemantauan}
        urlLv2="peringatan-dini"
       />
       <SubmenuItem
        label="Pemantauan"
        url={subMenuPemantauan}
        urlLv2="pemantauan"
       />
       <SubmenuItem
        label="Pelaporan"
        url={subMenuPemantauan}
        urlLv2="pelaporan"
       />
       <SubmenuItem
        label="Kepatuhan"
        url={subMenuPemantauan}
        urlLv2="kepatuhan"
       />
       <SubmenuItem
        label="Lost Event Database"
        url={subMenuPemantauan}
        urlLv2="led"
       />
      </MenuItem>
      <MenuItem
       isExpanded={isExpanded}
       label="Maturitas"
       icon={<IconFA name="seedling" size={18} />}
       url="maturitas"
      />
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Support"
       icon={<IconSupport />}
       url={subMenuSupport}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuSupport)
         : false
       }
      >
       <SubmenuItem label="Peraturan" url={subMenuSupport} urlLv2="peraturan" />
       <SubmenuItem label="FAQ" url={subMenuSupport} urlLv2="faq" />
       <SubmenuItem label="Helpdesk" url={subMenuSupport} urlLv2="helpdesk" />
      </MenuItem>
     </Stack>
    </MenuGroup>
    <MenuGroup isExpanded={isExpanded} label="administrator">
     <Stack direction="column" gap={1}>
      <MenuItem
       isExpanded={isExpanded}
       label="manajemen user"
       icon={<IconManajemen />}
       url="manajemen-user"
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes("manajemen-user")
         : false
       }
      />
     </Stack>
    </MenuGroup>
   </Stack>
   <MenuItem
    isExpanded={isExpanded}
    reflect
    label="keluar sistem"
    icon={<IconKeluar />}
    url="/"
   />
  </Stack>
 );

 return (
  <Box color="white" px="0" height="100vh" pb={4}>
   {isMobile ? null : CompanyIcon}
   {Sidemenu}
  </Box>
 );
}
