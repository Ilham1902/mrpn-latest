import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import theme from "@/theme";
import { IconFA } from "@/components/icons/icon-fa";
import { styleTab } from "@/app/executive-summary/style";
import CardItem from "@/app/components/cardTabItem";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import TableShortlist from "./table-short";
import TableProfile from "./table-profile";

interface TabPanelProps {
 children?: React.ReactNode;
 index: number;
 value: number;
 project?: string;
}

function a11yProps(index: number) {
 return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
 };
}

function CustomTabPanel(props: TabPanelProps) {
 const { children, value, index, project, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
   style={{ display: project === "5" ? "none" : "block" }}
  >
   {value === index && (
    <Box
     sx={{
      p: 0,
      mt: 2,
      //   height: "calc(100vh - 344px)",
      height: "calc(100vh - 562px)",
      overflow: "auto",
      "&::-webkit-scrollbar": {
       width: "3px",
      },
      [theme.breakpoints.down("sm")]: {
       height: "calc(100vh - 366px)",
      },
     }}
    >
     {children}
    </Box>
   )}
  </div>
 );
}

export default function TabObject({}) {
 const [value, setValue] = React.useState(0);

 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };

 const isEmpty = false;

 return (
  <Box width="100%" mt={4}>
   <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    <Tabs value={value} onChange={handleChange} sx={styleTab}>
     <Tab
      label="Shortlist"
      {...a11yProps(0)}
      iconPosition="start"
      icon={<IconFA size={16} name="arrow-down-wide-short" />}
     />
     <Tab
      label="Profil Usulan Objek MRPN"
      {...a11yProps(1)}
      iconPosition="start"
      icon={<IconFA size={16} name="address-card" sx={{ width: "auto" }} />}
     />
    </Tabs>
   </Box>
   <CustomTabPanel value={value} index={0}>
    <CardItem title="Shortlist">
     {isEmpty ? (
      <EmptyState
       dense
       icon={<IconEmptyData width={100} />}
       title="Data Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <TableShortlist />
     )}
    </CardItem>
   </CustomTabPanel>
   <CustomTabPanel value={value} index={1}>
    <CardItem title="Profil Usulan Objek MRPN">
     {isEmpty ? (
      <EmptyState
       dense
       icon={<IconEmptyData width={100} />}
       title="Data Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <TableProfile />
     )}
    </CardItem>
   </CustomTabPanel>
  </Box>
 );
}
