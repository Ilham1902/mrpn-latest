"use client";

import ContentPage from "@/app/components/contents";
import React, {useState} from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 ToggleButtonGroup,
 Typography,
 alpha,
 Box,
 Button,
 DialogActions,
 Collapse,
 Chip,
 Stack,
} from "@mui/material";
import theme from "@/theme";
import { green, grey, orange, red } from "@mui/material/colors";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import SearchKP from "./partials/search";
import useThemes from "./hooks/useTheme";
import LoadingPage from "@/app/components/loadingPage";
import ThemeToggleButton from "@/app/components/toggleButton/theme";
import TabObject from "./partials/tab";
import { IconFA } from "@/app/components/icons/icon-fa";
import usePenetapanObjectVM from "@/app/penetapan/objek/pageVM";
import {useAuthContext, useRKPContext} from "@/lib/core/hooks/useHooks";
import {usePathname} from "next/navigation";
import {hasPrivilege} from "@/lib/core/helpers/authHelpers";
import {PenetapanObjectResDto} from "@/app/penetapan/objek/pageModel";

const styleToggleButton = [
 {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 1,
  mt: 2,
  mb: 2,
  p: "1px",
  button: {
   //  bgcolor: "white",
   transition: "all 500ms ease-in-out",
   border: `1px solid ${theme.palette.primary.main}`,
   span: {
    //   lineHeight: 1.2,
    py: 2,
    height: "100%",
    //   display: "inline-flex",
    //   alignItems: "center",
   },
   "&:hover": {
    //   bgcolor: alpha(theme.palette.primary.main, 0.1),
    color: alpha(theme.palette.secondary.dark, 0.8),
    background: `linear-gradient(135deg, ${alpha(
      theme.palette.primary.main,
      0.3
    )} 100%, rgba(255, 255, 255, 0.2) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)`,
    //   backgroundSize: "140%",
    //   backgroundPosition: "-240px -125px",
    backgroundSize: "100%",
    backgroundPosition: "right 45.5%",
   },
   "&.Mui-selected": {
    // bgcolor: theme.palette.primary.main,
    // color: "white",
    color: "white",
    background: `linear-gradient(135deg, ${alpha(
      theme.palette.primary.main,
      1
    )} 40%, rgba(255, 255, 255, 0.2) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)`,
    backgroundSize: "120%",
    backgroundPosition: "right center",
    border: `1px solid ${theme.palette.primary.main}`,
    borderLeftColor: `${theme.palette.primary.main} !important`,
    ".MuiBox-root": {
     bgcolor: theme.palette.primary.main,
     color: "white",
     borderRight: "1px solid white",
    },
    "&:hover": {
     bgcolor: theme.palette.primary.main,
     color: "white",
    },
   },
  },
  [theme.breakpoints.down("md")]: {
   gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
   gridTemplateColumns: "1fr",
  },
 },
];

export default function PageTemaView({}) {

 const {
  permission
 } = useAuthContext(state => state)
 const pathname = usePathname()

 const {year} = useRKPContext(state => state)

 const {
  topic,
  setTopic,
  modalAdd,
  setModalAdd,
  dataPenetapanObject,
  optionPN,
  state,
  setState,
   updateOrCreate
 } = usePenetapanObjectVM()

 const dialogActionFooterAdd = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={() => setModalAdd(false)}>Batal</Button>
   <Button
    variant="contained"
    onClick={() => updateOrCreate()}
    sx={{
     color: "white !important",
    }}
   >
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
    <ContentPage
     title={`Objek MRPN & UPR Linsek Tahun ${year}`}
     noMinusMargin
     heightNoSet
     withCard={false}
     selectedTopic={
      <Collapse in={topic !== undefined}>
       <Chip
        variant="outlined"
        label={
         <Stack direction="row" alignItems="center">
          <Stack
           direction="row"
           bgcolor={theme.palette.primary.main}
           px={2}
           alignItems="center"
           height="34px"
           sx={{
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            [theme.breakpoints.down("sm")]: {
             minWidth: 133,
            },
           }}
          >
           <Typography
            fontSize={14}
            color="white"
            fontWeight={600}
            lineHeight={1}
           >
            Topik Terpilih
           </Typography>
          </Stack>
          <Typography px={2} fontSize={16} fontWeight={600}>
           {topic?.topik}
          </Typography>
         </Stack>
        }
        sx={{
         height: "34px",
         bgcolor: "white",
         fontWeight: 600,
         lineHeight: 1,
         cursor: "default",
         ".MuiChip-label": {
          px: 0,
         },
        }}
       />
      </Collapse>
     }
     addButton={
       <>
        <Collapse in={topic !== undefined}>
          <AddButton
           title="Ganti Topik"
           filled
           noMargin
           startIcon={<IconFA name="refresh" size={14} />}
           onclick={() => setTopic(undefined)}
          />
        </Collapse>
        {(topic == undefined) && (
          hasPrivilege(permission, pathname,"add", "penetapan.objectUpr") &&
           <AddButton
            title="Tambah Topik"
            filled
            noMargin
            onclick={() => setModalAdd(true)}
           />
        )}
       </>
     }
    >
     {dataPenetapanObject.length == 0 ? (
      <EmptyState
       icon={<IconEmptyPage />}
       title="Halaman Topik Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <>
       {topic === undefined &&
         <>
         <Typography color={grey[600]} fontSize={14} fontStyle="italic">
             Pilih salah satu objek
         </Typography>
         <Box>
             <ToggleButtonGroup
                 value={topic}
                 exclusive
                 onChange={(event: React.MouseEvent<HTMLElement>,     value: PenetapanObjectResDto|undefined) => {
                   if (value !== undefined) setTopic(value)
                 }}
                 aria-label="text alignment"
                 sx={styleToggleButton}
             >
               {dataPenetapanObject.map((x, indexPntp) =>
                 <ThemeToggleButton
                   key={indexPntp}
                   value={x}
                   label={x.topik}
                 />
               )}
             </ToggleButtonGroup>
          </Box>
         </>
       }
       <Collapse in={topic !== undefined}>
        <TabObject />
       </Collapse>
      </>
     )}
    </ContentPage>

   <DialogComponent
    width={1000}
    dialogOpen={modalAdd}
    dialogClose={() => setModalAdd(false)}
    title="Tambah Topik"
    dialogFooter={dialogActionFooterAdd}
   >
    <FormTable state={state} setState={setState} optionPN={optionPN}/>
   </DialogComponent>

   {/*<DialogComponent*/}
   {/* noDivider={true}*/}
   {/* width={1000}*/}
   {/* dialogOpen={modalOpenCollapse}*/}
   {/* dialogClose={handleModalClose}*/}
   {/* dialogFooter={dialogActionFooter}*/}
   {/*>*/}
   {/* <SearchKP*/}
   {/*  activeTab={activeTab}*/}
   {/*  listData={listData}*/}
   {/*  handleSearchTermUpdate={handleSearchTermUpdate}*/}
   {/*  searchTerm={searchTab}*/}
   {/* />*/}
   {/*</DialogComponent>*/}
  </>
 );
}
