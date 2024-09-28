"use client";

import ContentPage from "@/app/components/contents";
import React, {useEffect} from "react";
import TableNotaDinasViewOnly from "./partials/table-nota-dinas-view-only";
import {usePenetapanTopicContext, useRKPContext} from "@/lib/core/hooks/useHooks";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";
import {Box, Button, DialogActions, FormControl, Stack, TableCell, TableRow} from "@mui/material";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import usePenetapanObjectVM from "@/app/penetapan/objek/pageVM";
import {PenetapanObjectDto} from "@/lib/core/context/penetapanTopicContext";
import DialogComponent from "@/components/dialog";
import FormReject from "@/app/approval/nota-dinas/partials/form-reject";
import {IconFA} from "@/components/icons/icon-fa";
import EmptyState from "@/components/empty";
import {IconEmptyPage} from "@/components/icons";

export default function PageApprovalNotaDinasView({}) {

  const {
    year,
  } = useRKPContext(state => state)

  const {
    objects,
    objectState,
    setObjectState,
    nota
  } = usePenetapanTopicContext(state => state)

  const {
    useEffectGenerateOption,
    useEffectObjectState
  } = usePenetapanObjectVM()

  useEffect(useEffectGenerateOption, [year]);

  useEffect(useEffectObjectState, [year,objectState]);

 return (
   <ContentPage
     title="Nota Dinas Objek MRPN & UPR Lintas Sektor"
     withCard
     chooseObject={(
       <FormControl size="small" sx={{width:"20vw"}}>
         <AutocompleteSelectSingle
           value={objectState}
           options={objects}
           getOptionLabel={opt => `${opt.code} - ${opt.topik}`}
           handleChange={(val:PenetapanObjectDto) => setObjectState(val)}
           placeHolder={"Pilih Topik"}
         />
       </FormControl>
     )}
   >
     {nota !== undefined ?
         <TableNotaDinasViewOnly
             notaDinas={nota}
         />
       :
       <EmptyState
         icon={<IconEmptyPage />}
         title="Halaman Kosong"
         description="Silahkan pilih topik yang tersedia"
       />
     }

     {/*<DialogComponent*/}
     {/*  width={480}*/}
     {/*  dialogOpen={modalOpenAdd}*/}
     {/*  dialogClose={handleModalClose}*/}
     {/*  title="Tuliskan Alasan Reject"*/}
     {/*  dialogFooter={<DialogActions sx={{p: 2, px: 3}}>*/}
     {/*    <Button onClick={handleModalClose}>Batal</Button>*/}
     {/*    <Button*/}
     {/*      variant="contained"*/}
     {/*      type="submit"*/}
     {/*      color="error"*/}
     {/*      onClick={handleRejectLeft}*/}
     {/*    >*/}
     {/*      Reject*/}
     {/*    </Button>*/}
     {/*  </DialogActions>}*/}
     {/*>*/}
     {/*  <FormReject mode="add"/>*/}
     {/*</DialogComponent>*/}
     {/*<DialogComponent*/}
     {/*  width={480}*/}
     {/*  dialogOpen={modalOpenRejectRight}*/}
     {/*  dialogClose={handleModalClose}*/}
     {/*  title="Tuliskan Alasan Reject"*/}
     {/*  dialogFooter={<DialogActions sx={{p: 2, px: 3}}>*/}
     {/*    <Button onClick={handleModalClose}>Batal</Button>*/}
     {/*    <Button*/}
     {/*      variant="contained"*/}
     {/*      type="submit"*/}
     {/*      color="error"*/}
     {/*      onClick={handleRejectRight}*/}
     {/*    >*/}
     {/*      Reject*/}
     {/*    </Button>*/}
     {/*  </DialogActions>}*/}
     {/*>*/}
     {/*  <FormReject mode="add"/>*/}
     {/*</DialogComponent>*/}

     {/*<TableRow>*/}
     {/*  <TableCell align="center">*/}
     {/*    {buttonLeft && (*/}
     {/*      <Stack direction="row" gap={1} justifyContent="center">*/}
     {/*        <Box>*/}
     {/*          <Button*/}
     {/*            color="error"*/}
     {/*            size="small"*/}
     {/*            variant="outlined"*/}
     {/*            sx={{borderRadius: 24, px: 3}}*/}
     {/*            startIcon={<IconFA name="thumbs-down" size={14}/>}*/}
     {/*            onClick={handleModalOpen}*/}
     {/*          >*/}
     {/*            Reject*/}
     {/*          </Button>*/}
     {/*        </Box>*/}
     {/*        <Box>*/}
     {/*          <Button*/}
     {/*            color="success"*/}
     {/*            size="small"*/}
     {/*            variant="contained"*/}
     {/*            sx={{borderRadius: 24, px: 3}}*/}
     {/*            startIcon={<IconFA name="thumbs-up" size={14}/>}*/}
     {/*            onClick={handleApprovalLeft}*/}
     {/*          >*/}
     {/*            Approve*/}
     {/*          </Button>*/}
     {/*        </Box>*/}
     {/*      </Stack>*/}
     {/*    )}*/}
     {/*  </TableCell>*/}
     {/*  <TableCell align="center">*/}
     {/*    {buttonRight && (*/}
     {/*      <Stack direction="row" gap={1} justifyContent="center">*/}
     {/*        <Box>*/}
     {/*          <Button*/}
     {/*            color="error"*/}
     {/*            size="small"*/}
     {/*            variant="outlined"*/}
     {/*            sx={{borderRadius: 24, px: 3}}*/}
     {/*            startIcon={<IconFA name="thumbs-down" size={14}/>}*/}
     {/*            onClick={handleModalOpenRejectRight}*/}
     {/*          >*/}
     {/*            Reject*/}
     {/*          </Button>*/}
     {/*        </Box>*/}
     {/*        <Box>*/}
     {/*          <Button*/}
     {/*            color="success"*/}
     {/*            size="small"*/}
     {/*            variant="contained"*/}
     {/*            sx={{borderRadius: 24, px: 3}}*/}
     {/*            startIcon={<IconFA name="thumbs-up" size={14}/>}*/}
     {/*            onClick={handleApprovalRight}*/}
     {/*          >*/}
     {/*            Approve*/}
     {/*          </Button>*/}
     {/*        </Box>*/}
     {/*      </Stack>*/}
     {/*    )}*/}
     {/*  </TableCell>*/}
     {/*</TableRow>*/}

   </ContentPage>
 );
}
