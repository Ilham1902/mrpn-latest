import React, { Fragment } from "react";
import {
 Box,
 Button,
 Card,
 CardContent,
 DialogActions,
 Stack,
 Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { dataTema } from "../../dataTema";
import theme from "@/theme";
import { grey } from "@mui/material/colors";

export default function CardSwot({ project }: { project: string }) {
 const [modalOpenFact, setModalOpenFact] = React.useState(false);

 const handleModalOpenFact = () => {
  setModalOpenFact(true);
 };

 const handleModalClose = () => {
  setModalOpenFact(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
   setting
   settingEditOnclick={handleModalOpenFact}
  >
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <Stack direction="row" flexWrap="wrap" gap={2}>
     {dataTema.map((itemSwot, index) => (
      <Fragment key={index}>
       {project === itemSwot.temaId && (
        <Stack direction="row" gap={2}>
         {itemSwot.swot.map((detailSwot, index) => (
          <Stack
           key={index}
           direction="column"
           border={`1px solid ${grey[300]}`}
           borderRadius={2}
          >
           <Box
            bgcolor={grey[200]}
            textAlign="center"
            p={1.5}
            borderRadius={2}
            borderBottom={`1px solid ${grey[300]}`}
            sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
           >
            <Typography fontSize={16} fontWeight={500}>
             Faktor {detailSwot.factor}
            </Typography>
           </Box>
           <Stack
            direction="row"
            height="100%"
            sx={{
             "& > div": {
              "& + div": {
               borderLeft: `1px solid ${grey[300]}`,
              },
             },
            }}
           >
            {detailSwot.item.map((detailSwot, index) => (
             <Card
              sx={{
               border: 0,
               maxWidth: 345,
               bgcolor: "transparent",
               flex: "0 0 50%",
               [theme.breakpoints.down("lg")]: {
                flex: "0 0 calc(50% - 12px)",
               },
               [theme.breakpoints.down("sm")]: {
                flex: "0 0 100%",
                maxWidth: "100%",
               },
              }}
              variant="outlined"
              key={index}
             >
              {itemSwot.temaId ? (
               <CardContent>
                <Typography
                 gutterBottom
                 fontSize={16}
                 fontWeight={500}
                 component="div"
                 lineHeight={1.3}
                 textTransform="capitalize"
                >
                 {detailSwot.label}
                </Typography>
               </CardContent>
              ) : null}
              <CardContent sx={{ pt: 0 }}>
               {detailSwot.item.length > 1 ? (
                <ul>
                 {detailSwot.item.map((itemSwot, index) => (
                  <li key={index}>
                   <Typography variant="body1">{itemSwot}</Typography>
                  </li>
                 ))}
                </ul>
               ) : (
                <>
                 {detailSwot.item.map((itemSwot, index) => (
                  <Typography variant="body1" key={index}>
                   {itemSwot}
                  </Typography>
                 ))}
                </>
               )}
              </CardContent>
             </Card>
            ))}
           </Stack>
          </Stack>
         ))}
        </Stack>
       )}
      </Fragment>
     ))}
    </Stack>
   )}
  </CardItem>
 );
}
