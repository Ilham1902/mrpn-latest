"use client";

import ContentPage from "@/app/components/contents";
import React, {useEffect} from "react";
import {Box, FormControl, Paper, Stack, Typography} from "@mui/material";
import MRTPerlakuanComplete from "../perlakuan/partials/mrt-complete";
import {useRKPContext} from "@/lib/core/hooks/useHooks";
import usePenetapanGlobalVM from "@/app/penetapan/penetapanGlobalVM";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {MasterListObjectRes} from "@/app/misc/master/masterServiceModel";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import HeaderIdentifikasi from "@/app/profil-risiko/identifikasi/partials/header";
import useRiskOverviewVM from "@/app/profil-risiko/overview/pageVM";

export default function PageOverviewView() {

  const {
    year
  } = useRKPContext(state => state)

  const {
    objects,
    objectState,
    setObjectState,
    getMasterListObject
  } = usePenetapanGlobalVM()

  useEffect(() => {
    if (year > 0) getMasterListObject();
  }, [year]);

  const {
    dataRiskOverview,
    getRiskOverviewData,
  } = useRiskOverviewVM()

  useEffect(() => {
    if (objectState !== undefined) getRiskOverviewData()
  }, [objectState]);


  return (
    <ContentPage
      title="Overview Risiko"
      chooseObject={(
        <FormControl size="small" sx={{width: "20vw"}}>
          <AutocompleteSelectSingle
            value={objectState}
            options={objects}
            getOptionLabel={opt => `${opt.rkp.code} - ${opt.rkp.value}`}
            handleChange={(val: MasterListObjectRes) => setObjectState(val)}
            placeHolder={"Pilih RKP"}
          />
        </FormControl>
      )}
    >
      <Stack gap={1}>

        {objectState === undefined ?
          <EmptyState
            dense
            icon={<IconEmptyData width={100}/>}
            title="Pilih RKP"
            description="Silahkan pilih rkp terlebih dulu"
          />
          :
          <>

            <Paper elevation={2} sx={{borderRadius: "1.25rem", p: 0, m: 1,}}>
              <HeaderIdentifikasi asTable viewOnly data={dataRiskOverview?.object}/>
            </Paper>

            <Box className="table-sticky-horizontal">
              <MRTPerlakuanComplete
                dataTable={dataRiskOverview?.overviews}
                viewOnly
                renderCaption={
                  <Typography fontWeight={600} fontSize={17} px={1}>
                    Perlakuan Risiko
                  </Typography>
                }
              />
            </Box>
          </>
        }

      </Stack>
    </ContentPage>
  );
}
