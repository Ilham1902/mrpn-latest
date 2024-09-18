import React, { Fragment } from "react";
import {
 Box,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableRow,
 Typography,
 alpha,
} from "@mui/material";
import theme from "@/theme";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import { dataTema } from "@/app/executive-summary/dataTema";
import { blue, green, grey, orange } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";

const TextVertical = ({ title }: { title: string }) => {
 return (
  <>
   <Box
    sx={{
     position: "absolute",
     top: 0,
     bottom: 0,
     left: 20,
     width: "2px",
     backgroundColor: blue[400],
     "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      width: "10px",
      height: "2px",
      backgroundColor: blue[400],
     },
     "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "10px",
      height: "2px",
      backgroundColor: blue[400],
     },
    }}
   >
    <Box
     sx={{
      position: "absolute",
      top: "50%",
      left: 0,
      width: "10px",
      height: "2px",
      transform: "translateY(-50%)",
      backgroundColor: blue[400],
     }}
    />
   </Box>
   <Box
    fontSize={12}
    bgcolor={orange[800]}
    color="white"
    width="68px"
    textAlign="center"
    display="inline-block"
    px={1}
    py={0.5}
    sx={{ transform: "rotate(90deg)" }}
   >
    {title}
   </Box>
  </>
 );
};

export const StrategyTowsContent = () => {
 return (
  <Box bgcolor={alpha(blue[300], 0.3)} py={2}>
   {dataTema.map((itemRow, index) => (
    <Fragment key={index}>
     <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
       "& > div": {
        "& + div": {
         borderTop: `1px solid ${grey[400]}`,
         mt: 1,
         pt: 1,
        },
       },
      }}
     >
      <Box>
       <Typography fontSize={14} fontWeight={600} align="center">
        Strategi SO
       </Typography>
       {itemRow.tows.map((detailTows, index) => (
        <Fragment key={index}>
         {detailTows.factor === "so" && (
          <>
           {detailTows.items.length > 1 ? (
            <ul style={{ textAlign: "center", listStylePosition: "inside" }}>
             {detailTows.items.map((itemTows, index) => (
              <li key={index}>
               <Typography fontSize={14}>{itemTows}</Typography>
              </li>
             ))}
            </ul>
           ) : (
            <>
             {detailTows.items.map((itemTows, index) => (
              <Typography
               fontSize={14}
               align="center"
               key={index}
               display="inline"
              >
               {itemTows}
              </Typography>
             ))}
            </>
           )}
          </>
         )}
        </Fragment>
       ))}
      </Box>
      <Box>
       <Typography fontSize={14} fontWeight={600} align="center">
        Strategi WO
       </Typography>
       {itemRow.tows.map((detailTows, index) => (
        <Fragment key={index}>
         {detailTows.factor === "wo" && (
          <>
           {detailTows.items.length > 1 ? (
            <ul style={{ textAlign: "center", listStylePosition: "inside" }}>
             {detailTows.items.map((itemTows, index) => (
              <li key={index}>
               <Typography fontSize={14}>{itemTows}</Typography>
              </li>
             ))}
            </ul>
           ) : (
            <>
             {detailTows.items.map((itemTows, index) => (
              <Typography
               fontSize={14}
               align="center"
               key={index}
               display="inline"
              >
               {itemTows}
              </Typography>
             ))}
            </>
           )}
          </>
         )}
        </Fragment>
       ))}
      </Box>
      <Box>
       <Typography fontSize={14} fontWeight={600} align="center">
        Strategi ST
       </Typography>
       {itemRow.tows.map((detailTows, index) => (
        <Fragment key={index}>
         {detailTows.factor === "st" && (
          <>
           {detailTows.items.length > 1 ? (
            <ul style={{ textAlign: "center", listStylePosition: "inside" }}>
             {detailTows.items.map((itemTows, index) => (
              <li key={index}>
               <Typography fontSize={14}>{itemTows}</Typography>
              </li>
             ))}
            </ul>
           ) : (
            <>
             {detailTows.items.map((itemTows, index) => (
              <Typography
               fontSize={14}
               align="center"
               key={index}
               display="inline"
              >
               {itemTows}
              </Typography>
             ))}
            </>
           )}
          </>
         )}
        </Fragment>
       ))}
      </Box>
      <Box>
       <Typography fontSize={14} fontWeight={600} align="center">
        Strategi WT
       </Typography>
       {itemRow.tows.map((detailTows, index) => (
        <Fragment key={index}>
         {detailTows.factor === "wt" && (
          <>
           {detailTows.items.length > 1 ? (
            <ul style={{ textAlign: "center", listStylePosition: "inside" }}>
             {detailTows.items.map((itemTows, index) => (
              <li key={index}>
               <Typography fontSize={14}>{itemTows}</Typography>
              </li>
             ))}
            </ul>
           ) : (
            <>
             {detailTows.items.map((itemTows, index) => (
              <Typography
               fontSize={14}
               align="center"
               key={index}
               display="inline"
              >
               {itemTows}
              </Typography>
             ))}
            </>
           )}
          </>
         )}
        </Fragment>
       ))}
      </Box>
     </Stack>
    </Fragment>
   ))}
  </Box>
 );
};

export default function TableDiagram({ project }: { project: string }) {
 return (
  <>
   {dataTema.map((itemRow, index) => (
    <Fragment key={index}>
     {project === itemRow.temaId && (
      <>
       {itemRow.diagram.length < 1 ? (
        <EmptyState
         dense
         icon={<IconEmptyData width={100} />}
         title="Data Kosong"
         description="Silahkan isi konten halaman ini"
        />
       ) : (
        <TableContainer component={Paper} elevation={0}>
         <Table size="small">
          <TableBody>
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
             sx={{
              border: 0,
              bgcolor: alpha(orange[500], 0.5),
             }}
            >
             {itemRow.diagram.map((detailDiagram, index) => (
              <Typography
               key={index}
               variant="body1"
               fontWeight={600}
               align="center"
               maxWidth={920}
               m="0 auto"
               p={1}
              >
               {detailDiagram.nomenklatur}
              </Typography>
             ))}
            </TableCell>
            <TableCell
             rowSpan={2}
             width={50}
             sx={{
              border: 0,
              position: "relative",
             }}
            >
             <TextVertical title="Hasil" />
            </TableCell>
           </TableRow>
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
             sx={{
              border: 0,
              bgcolor: alpha(blue[500], 0.5),
             }}
            >
             {itemRow.diagram.map((detailDiagram, index) => (
              <Typography
               key={index}
               variant="body1"
               fontWeight={600}
               align="center"
               maxWidth={920}
               m="0 auto"
              >
               {detailDiagram.sasaran}
              </Typography>
             ))}
            </TableCell>
           </TableRow>
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
             sx={{
              border: 0,
             }}
            >
             <Table size="small">
              <TableBody>
               <TableRow sx={{ border: 0 }}>
                <TableCell align="center" sx={{ border: 0 }}>
                 <IconFA
                  name="angles-up"
                  size={20}
                  color={theme.palette.primary.main}
                 />
                </TableCell>
                <TableCell align="center" sx={{ border: 0 }}>
                 <IconFA
                  name="angles-up"
                  size={20}
                  color={theme.palette.primary.main}
                 />
                </TableCell>
                <TableCell
                 width={50}
                 sx={{
                  border: 0,
                 }}
                ></TableCell>
               </TableRow>
              </TableBody>
             </Table>
            </TableCell>
           </TableRow>
           <TableRow>
            <TableCell
             sx={{
              p: 1,
              border: `1px dashed ${green[800]}`,
             }}
            >
             {/* <StrategyTowsContent /> */}

             <Box bgcolor={alpha(blue[300], 0.3)} py={2}>
              <Stack
               justifyContent="center"
               alignItems="center"
               sx={{
                "& > div": {
                 "& + div": {
                  borderTop: `1px solid ${grey[400]}`,
                  mt: 1,
                  pt: 1,
                 },
                },
               }}
              >
               <Box>
                <Typography fontSize={14} fontWeight={600} align="center">
                 Strategi SO
                </Typography>
                {itemRow.tows.map((detailTows, index) => (
                 <Fragment key={index}>
                  {detailTows.factor === "so" && (
                   <>
                    {detailTows.items.length > 1 ? (
                     <ul
                      style={{
                       textAlign: "center",
                       listStylePosition: "inside",
                      }}
                     >
                      {detailTows.items.map((itemTows, index) => (
                       <li key={index}>
                        <Typography fontSize={14}>{itemTows}</Typography>
                       </li>
                      ))}
                     </ul>
                    ) : (
                     <>
                      {detailTows.items.map((itemTows, index) => (
                       <Typography
                        fontSize={14}
                        align="center"
                        key={index}
                        display="inline"
                       >
                        {itemTows}
                       </Typography>
                      ))}
                     </>
                    )}
                   </>
                  )}
                 </Fragment>
                ))}
               </Box>
               <Box>
                <Typography fontSize={14} fontWeight={600} align="center">
                 Strategi WO
                </Typography>
                {itemRow.tows.map((detailTows, index) => (
                 <Fragment key={index}>
                  {detailTows.factor === "wo" && (
                   <>
                    {detailTows.items.length > 1 ? (
                     <ul
                      style={{
                       textAlign: "center",
                       listStylePosition: "inside",
                      }}
                     >
                      {detailTows.items.map((itemTows, index) => (
                       <li key={index}>
                        <Typography fontSize={14}>{itemTows}</Typography>
                       </li>
                      ))}
                     </ul>
                    ) : (
                     <>
                      {detailTows.items.map((itemTows, index) => (
                       <Typography
                        fontSize={14}
                        align="center"
                        key={index}
                        display="inline"
                       >
                        {itemTows}
                       </Typography>
                      ))}
                     </>
                    )}
                   </>
                  )}
                 </Fragment>
                ))}
               </Box>
               <Box>
                <Typography fontSize={14} fontWeight={600} align="center">
                 Strategi ST
                </Typography>
                {itemRow.tows.map((detailTows, index) => (
                 <Fragment key={index}>
                  {detailTows.factor === "st" && (
                   <>
                    {detailTows.items.length > 1 ? (
                     <ul
                      style={{
                       textAlign: "center",
                       listStylePosition: "inside",
                      }}
                     >
                      {detailTows.items.map((itemTows, index) => (
                       <li key={index}>
                        <Typography fontSize={14}>{itemTows}</Typography>
                       </li>
                      ))}
                     </ul>
                    ) : (
                     <>
                      {detailTows.items.map((itemTows, index) => (
                       <Typography
                        fontSize={14}
                        align="center"
                        key={index}
                        display="inline"
                       >
                        {itemTows}
                       </Typography>
                      ))}
                     </>
                    )}
                   </>
                  )}
                 </Fragment>
                ))}
               </Box>
               <Box>
                <Typography fontSize={14} fontWeight={600} align="center">
                 Strategi WT
                </Typography>
                {itemRow.tows.map((detailTows, index) => (
                 <Fragment key={index}>
                  {detailTows.factor === "wt" && (
                   <>
                    {detailTows.items.length > 1 ? (
                     <ul
                      style={{
                       textAlign: "center",
                       listStylePosition: "inside",
                      }}
                     >
                      {detailTows.items.map((itemTows, index) => (
                       <li key={index}>
                        <Typography fontSize={14}>{itemTows}</Typography>
                       </li>
                      ))}
                     </ul>
                    ) : (
                     <>
                      {detailTows.items.map((itemTows, index) => (
                       <Typography
                        fontSize={14}
                        align="center"
                        key={index}
                        display="inline"
                       >
                        {itemTows}
                       </Typography>
                      ))}
                     </>
                    )}
                   </>
                  )}
                 </Fragment>
                ))}
               </Box>
              </Stack>
             </Box>
            </TableCell>
            <TableCell
             width={50}
             sx={{
              border: 0,
              position: "relative",
             }}
            >
             <TextVertical title="Proses" />
            </TableCell>
           </TableRow>
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ p: 0 }} className="border-spacing-2">
             <Table size="small">
              <TableBody>
               <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
               >
                <TableCell width="33.33%" align="center" sx={{ border: 0 }}>
                 <IconFA
                  name="angles-up"
                  size={20}
                  color={theme.palette.primary.main}
                 />
                </TableCell>
                <TableCell width="33.33%" align="center" sx={{ border: 0 }}>
                 <IconFA
                  name="angles-up"
                  size={20}
                  color={theme.palette.primary.main}
                 />
                </TableCell>
                <TableCell width="33.33%" align="center" sx={{ border: 0 }}>
                 <IconFA
                  name="angles-up"
                  size={20}
                  color={theme.palette.primary.main}
                 />
                </TableCell>
               </TableRow>
              </TableBody>
             </Table>
            </TableCell>
            <TableCell
             width={50}
             sx={{
              border: 0,
             }}
            ></TableCell>
           </TableRow>
           <TableRow>
            <TableCell sx={{ p: 0 }}>
             <Table size="small">
              <TableBody>
               <TableRow>
                <TableCell
                 width="33.33%"
                 align="center"
                 sx={{
                  m: 1,
                  p: 1,
                  bgcolor: orange[100],
                  border: `1px solid ${orange[600]}`,
                 }}
                >
                 <Typography variant="body1" align="center">
                  Sumber Pendanaan
                 </Typography>
                 <Typography variant="body1" fontWeight={600} align="center">
                  APBN
                 </Typography>
                </TableCell>
                <TableCell
                 align="center"
                 width="33.33%"
                 sx={{
                  p: 1,
                  bgcolor: orange[100],
                  border: `1px solid ${orange[600]}`,
                 }}
                >
                 <Typography variant="body1" align="center">
                  Indikasi K/L/D/Badan Usaha
                 </Typography>
                 <Typography variant="body1" fontWeight={600} align="center">
                  APBN
                 </Typography>
                </TableCell>
                <TableCell
                 align="center"
                 width="33.33%"
                 sx={{
                  m: 9,
                  p: 1,
                  bgcolor: orange[100],
                  border: `1px solid ${orange[600]}`,
                 }}
                >
                 <Typography variant="body1" align="center">
                  Indikasi Lokasi
                 </Typography>
                 <Typography variant="body1" fontWeight={600} align="center">
                  APBN
                 </Typography>
                </TableCell>
               </TableRow>
              </TableBody>
             </Table>
            </TableCell>
            <TableCell
             width={50}
             sx={{
              border: 0,
              position: "relative",
             }}
            >
             <TextVertical title="Masukan" />
            </TableCell>
           </TableRow>
          </TableBody>
         </Table>
        </TableContainer>
       )}
      </>
     )}
    </Fragment>
   ))}
  </>
 );
}
