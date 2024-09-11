import React, {SetStateAction, useMemo} from "react";
import OrgChart from "@dabeng/react-orgchart";
import {
  Box,
  Button,
  DialogActions,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";
import "@dabeng/react-orgchart/dist/ChartNode.css";
import "@dabeng/react-orgchart/dist/ChartContainer.css";
import theme from "@/theme";
import {IconFA} from "@/app/components/icons/icon-fa";
import {styleList, styleOrgChart} from "@/app/executive-summary/style";
import EmptyState from "@/app/components/empty";
import {IconEmptyData} from "@/app/components/icons";
import {dataTema} from "@/app/executive-summary/dataTema";
import {grey, orange} from "@mui/material/colors";
import DialogComponent from "@/app/components/dialog";
import FormNomenklatur from "./form-nomenklatur";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {ProPDto} from "@/app/misc/rkp/rkpServiceModel";
import {
  ExsumCascadingStateDto,
  RKPCascadingDto
} from "@/app/executive-summary/partials/tab4Cascading/cardDiagram/cardDiagramModel";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {usePathname} from "next/navigation";
import {hasPrivilege} from "@/lib/core/helpers/authHelpers";

const NodeTemplate = ({nodeData}: { nodeData: any }) => {
  const isAssistant = nodeData.isAssistant === true;
  const nodeClass = isAssistant ? "has-assistant" : "";

  return (
    <Stack
      mt={0.5}
      border={`1px solid ${theme.palette.primary.main}`}
      borderRadius={2}
      className={nodeClass}
    >
      <Box position="relative">
        <Box
          display="none"
          position="absolute"
          top="50%"
          left={8}
          sx={{transform: "translateY(-50%)"}}
        >
          {nodeData.children && nodeData.children.length > 0 && (
            <IconFA name="circle-plus" size={14} color="White"/>
          )}
        </Box>
        <Box
          px={4}
          py={0.5}
          bgcolor={theme.palette.primary.main}
          borderRadius={2}
          sx={{borderEndStartRadius: 0, borderEndEndRadius: 0}}
          color="white"
        >
          {nodeData.name}
        </Box>
      </Box>
      <Divider/>
      <Box px={2} py={1} fontWeight={500}>
        {nodeData.title}
      </Box>
    </Stack>
  );
};

const FundSource = ({value, isYear}: { value: string; isYear?: boolean }) => {
  return (
    <Stack
      display="inline-flex"
      direction="row"
      alignItems="center"
      boxSizing="border-box"
      border={`2px solid ${grey[300]}`}
      borderRadius="8px"
    >
      <Box
        color={theme.palette.primary.dark}
        bgcolor={grey[300]}
        border={`2px solid ${grey[300]}`}
        p="8px 16px"
        fontWeight={500}
        letterSpacing={0.2}
        fontSize={14}
        minWidth={isYear ? 0 : 120}
      >
        Total Kebutuhan Pendanaan
      </Box>
      <Box
        p="8px 16px"
        fontWeight={700}
        fontSize={14}
        flexGrow={1}
        textAlign="right"
      >
        {value}
      </Box>
    </Stack>
  );
};

const ItemProP = ({
                    isKey,
                    description,
                  }: {
  isKey?: boolean;
  description: string;
}) => {
  return (
    <ListItem sx={{p: 0, alignItems: "flex-start"}}>
      <ListItemIcon sx={{minWidth: 0, position: "relative", top: 5, width: 10}}>
        {isKey ? (
          <IconFA name="key" size={12} color={orange[800]}/>
        ) : (
          <IconFA name="circle" size={6}/>
        )}
      </ListItemIcon>
      <Tooltip title={isKey ? "Intervensi Kunci" : null} followCursor>
        <ListItemText
          primary={description}
          sx={{
            m: 0,
            color: isKey ? orange[800] : "inherit",
          }}
        />
      </Tooltip>
    </ListItem>
  );
};

type OrgDto = {
  name:string|React.ReactElement
  title:string|React.ReactElement
  children:OrgDto[] | undefined
}

export default function CascadingOrgChart(
  {
    setModal,
    data,
    setState,
    deleteData
  }: {
    setModal: any,
    data:RKPCascadingDto
    setState: (value: (SetStateAction<ExsumCascadingStateDto>)) => void
    deleteData:any
  }
) {

  const {
    permission
  } = useAuthContext(state => state)
  const pathname = usePathname()

  const GenerateData = () => useMemo(
    () => {
      let result:OrgDto = {
        name: `PN - ${data.code}`,
        title: data.value,
        children: []
      }
      data.pp.map(pp => {
        const ppData:OrgDto = {
          name: `PP - ${pp.code}`,
          title: pp.value,
          children: []
        }
        pp.kp.map(kp => {
          const kpData:OrgDto = {
            name: `KP - ${kp.code}`,
            title: kp.value,
            children: []
          }
          kp.sasaran.map(ssrKP => {
            const ssrKPData:OrgDto = {
              name: `SASARAN - ${ssrKP.code}`,
              title: ssrKP.value,
              children: []
            }
            ssrKP.indikator.map(ind => {
              const indData:OrgDto = {
                name: (
                  <Stack justifyContent="center" direction="row" alignItems="center">
                    {`INDIKATOR - ${ind.code}`}
                    {hasPrivilege(permission,pathname,"add") &&
                      <IconButton onClick={() => {
                        setState(prevState => {
                          return {
                            ...prevState,
                            src_rkp_kp_indikator_id:ind.id
                          }
                        })
                        setModal(true)
                      }} size="small">
                        <IconFA name="circle-plus" size={16} color="white"/>
                      </IconButton>
                    }
                  </Stack>
                ),
                title: ind.value,
                children: []
              }
              ind.kl_pengampu.map(kl => {
                const klData:OrgDto = {
                  name: (
                    <Stack justifyContent="center" direction="row" alignItems="center">
                      {`KL PENGAMPU`}
                      {hasPrivilege(permission,pathname,"delete") &&
                        <IconButton onClick={() => deleteData(kl.id)} size="small">
                          <IconFA name="trash" size={16} color="white"/>
                        </IconButton>
                      }
                    </Stack>
                  ),
                  title: kl.kementrian.value,
                  children: []
                }
                kl.prop.map(prop => {
                  const propData:OrgDto = {
                    name: prop.value,
                    title: (
                      <List dense sx={styleList}>
                        {prop.ro.map(ros =>
                          <ItemProP
                            isKey={ros.intervention}
                            description={ros.value}
                          />
                        )}
                      </List>
                    ),
                    children: undefined
                  }
                  klData.children?.push(propData)
                })
                indData.children?.push(klData)
              })
              ssrKPData.children?.push(indData)
            })
            kpData.children?.push(ssrKPData)
          })
          ppData.children?.push(kpData)
        })
        result.children?.push(ppData)
      })
      return result
    },
    [data]
  )

  const ds = {
    name: `Nomenklatur PN`,
    title: `Sasaran & Indikator`,
    children: [
      {
        name: `Nomenklatur PP`,
        title: `Sasaran & Indikator`,
        children: [
          {
            name: "Nomenklatur KP",
            title: "Nomenklatur KP",
            children: [
              {
                name: "Sasaran",
                title: "Sasaran",
                children: [
                  {
                    name: (
                      <Stack justifyContent="center" direction="row" alignItems="center">
                        Nomenklatur IKU
                        <IconButton onClick={() => setModal(true)} size="small">
                          <IconFA name="circle-plus" size={16} color="white"/>
                        </IconButton>
                      </Stack>
                    ),
                    title: "Nomenklatur IKU",
                    children: [
                      {
                        name: "KL Pengampu",
                        title: "KL Pengampu",
                        children: [
                          {
                            name: "Nomenklatur ProP",
                            title: (
                              <List dense sx={styleList}>
                                <ItemProP
                                  description="Penyediaan PMT bagi balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/ (weight faltering)"/>
                                <ItemProP
                                  isKey
                                  description="Pendampingan balita dengan permasalahan gizi"
                                />
                                <ItemProP description="Pelayanan gizi masyarakat di kab/kota"/>
                              </List>
                            ),
                          },
                          {
                            name: "Nomenklatur ProP",
                            title: (
                              <List dense sx={styleList}>
                                <ItemProP
                                  isKey
                                  description="Penyediaan PMT bagi balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/ (weight faltering)"
                                />
                                <ItemProP description="Pendampingan balita dengan permasalahan gizi"/>
                                <ItemProP description="Pelayanan gizi masyarakat di kab/kota"/>
                              </List>
                            ),
                          },
                          {
                            name: "Nomenklatur ProP",
                            title: (
                              <List dense sx={styleList}>
                                <ItemProP
                                  description="Penyediaan PMT bagi balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/ (weight faltering)"/>
                                <ItemProP description="Pendampingan balita dengan permasalahan gizi"/>
                                <ItemProP
                                  isKey
                                  description="Pelayanan gizi masyarakat di kab/kota"
                                />
                              </List>
                            ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <Stack gap={2} direction="row">
        <FundSource value={`Rp. N/A`}/>
        {/*<Box>*/}
        {/*  <Button*/}
        {/*    variant="contained"*/}
        {/*    color="primary"*/}
        {/*    startIcon={<IconFA name="magnifying-glass-plus" size={14}/>}*/}
        {/*    sx={{height: 45, px: 3, borderRadius: 2}}*/}
        {/*    onClick={handleModalImg}*/}
        {/*  >*/}
        {/*    Perbesar Chart*/}
        {/*  </Button>*/}
        {/*</Box>*/}
      </Stack>
      <Box sx={styleOrgChart} mt={4}>
        <OrgChart
          datasource={GenerateData()}
          NodeTemplate={NodeTemplate}
          containerClass="containerClass"
          chartClass="chartClass"
        />
      </Box>
      {/*<DialogComponent*/}
      {/*  width="80%"*/}
      {/*  dialogOpen={modalOpenImg}*/}
      {/*  dialogClose={handleModalClose}*/}
      {/*>*/}
      {/*  <Box sx={styleOrgChart}>*/}
      {/*    <OrgChart*/}
      {/*      datasource={ds}*/}
      {/*      NodeTemplate={NodeTemplate}*/}
      {/*      containerClass="containerClass"*/}
      {/*      chartClass="chartClass"*/}
      {/*    />*/}
      {/*  </Box>*/}
      {/*</DialogComponent>*/}

    </>
  );
}
