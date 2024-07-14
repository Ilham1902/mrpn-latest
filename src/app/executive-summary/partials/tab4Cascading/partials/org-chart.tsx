import React from "react";
import OrgChart from "@dabeng/react-orgchart";
import { Box, Divider, Stack } from "@mui/material";
import "@dabeng/react-orgchart/dist/ChartNode.css";
import "@dabeng/react-orgchart/dist/ChartContainer.css";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { styleOrgChart } from "@/app/executive-summary/style";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import { dataTema } from "@/app/executive-summary/dataTema";
import { grey } from "@mui/material/colors";

const NodeTemplate = ({ nodeData }: { nodeData: any }) => {
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
     position="absolute"
     top="50%"
     left={8}
     sx={{ transform: "translateY(-50%)" }}
    >
     {nodeData.children && nodeData.children.length > 0 && (
      <IconFA name="circle-plus" size={14} color="White" />
     )}
    </Box>
    <Box
     px={4}
     py={0.5}
     bgcolor={theme.palette.primary.main}
     borderRadius={2}
     sx={{ borderEndStartRadius: 0, borderEndEndRadius: 0 }}
     color="white"
    >
     {nodeData.name}
    </Box>
   </Box>
   <Divider />
   <Box px={2} py={1} fontWeight={500}>
    {nodeData.title}
   </Box>
  </Stack>
 );
};

const FundSource = ({ value, isYear }: { value: string; isYear?: boolean }) => {
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

export default function CascadingOrgChart({ project }: { project: string }) {
 const ds = {
  name: `Nomenklatur ${project === "5" ? "PN" : "PP"}`,
  title: `Nomenklatur ${project === "5" ? "PN" : "PP"}`,
  children: [
   {
    name: "Nomenklatur KP",
    title: "Nomenklatur KP",
    children: [
     {
      name: "Nomenklatur IKU + KL Pengampu",
      title: "Nomenklatur IKU + KL Pengampu",
      children: [
       { name: "Aspek Proyek/ProP", title: "Proyek/RO" },
       { name: "Aspek Proyek/ProP", title: "Proyek/RO" },
       { name: "Aspek Proyek/ProP", title: "Proyek/RO" },
      ],
     },
    ],
   },
  ],
 };

 return (
  <>
   <Box p={2}>
    {dataTema.map((itemFund) => (
     <>
      {project === itemFund.temaId && (
       <>
        {itemFund.pendanaan.map((listFund) => (
         <>
          {listFund.source.length < 1 ? (
           <EmptyState
            dense
            icon={<IconEmptyData width={70} />}
            title="Data Kosong"
           />
          ) : (
           <>
            {listFund.source.map((itemSource, index) => (
             <FundSource key={index} value={`Rp. ${itemSource.value}`} />
            ))}
           </>
          )}
         </>
        ))}
       </>
      )}
     </>
    ))}
   </Box>
   <Box sx={styleOrgChart}>
    <OrgChart
     datasource={ds}
     NodeTemplate={NodeTemplate}
     containerClass="containerClass"
     chartClass="chartClass"
    />
   </Box>
  </>
 );
}
