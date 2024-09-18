import React, { Fragment } from "react";
import {
 Box,
 Button,
 Chip,
 DialogActions,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
 alpha,
} from "@mui/material";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { grey } from "@mui/material/colors";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormIndication from "./form";
import { dataTema } from "@/app/executive-summary/dataTema";

const TitleTableContent = ({ title }: { title: string }) => {
 return (
  <Typography
   variant="body1"
   fontWeight={600}
   sx={{ textDecoration: "underline" }}
  >
   {title}
  </Typography>
 );
};

export default function TableTows({ project }: { project: string }) {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 return (
  <>
   {dataTema.map((itemRow, index) => (
    <Fragment key={index}>
     {project === itemRow.temaId && (
      <>
       {itemRow.tows.length < 1 ? (
        <EmptyState
         dense
         icon={<IconEmptyData width={100} />}
         title="Data Kosong"
         description="Silahkan isi konten halaman ini"
        />
       ) : (
        <TableContainer component={Paper} elevation={0}>
         <Table size="small">
          <TableHead sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
           <TableRow>
            <TableCell>
             <Typography variant="body1" fontWeight={600}>
              Faktor Eksternal/Internal
             </Typography>
            </TableCell>
            <TableCell width="40%">
             <Typography variant="body1" fontWeight={600}>
              Strength (S)
             </Typography>
             <Typography variant="caption" fontWeight={600}>
              Tentukan Faktor Kekuatan Internal
             </Typography>
            </TableCell>
            <TableCell width="40%">
             <Typography variant="body1" fontWeight={600}>
              Weakness (W)
             </Typography>
             <Typography variant="caption" fontWeight={600}>
              Tentukan Faktor Kelemahan Internal
             </Typography>
            </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
             sx={{
              verticalAlign: "top",
              bgcolor: alpha(theme.palette.primary.main, 0.1),
             }}
            >
             <Typography variant="body1" fontWeight={600}>
              Opportunity (O)
             </Typography>
             <Typography variant="caption" fontWeight={600}>
              Tentukan Faktor Peluang Eksternal
             </Typography>
            </TableCell>
            <TableCell sx={{ verticalAlign: "top" }}>
             <TitleTableContent title="Strategi SO" />
             {itemRow.tows.map((detailTows, index) => (
              <Fragment key={index}>
               {detailTows.factor === "so" && (
                <>
                 {detailTows.items.length > 1 ? (
                  <ul>
                   {detailTows.items.map((itemTows, index) => (
                    <li key={index}>
                     <Typography variant="body1">{itemTows}</Typography>
                    </li>
                   ))}
                  </ul>
                 ) : (
                  <>
                   {detailTows.items.map((itemTows, index) => (
                    <Typography variant="body1" key={index}>
                     {itemTows}
                    </Typography>
                   ))}
                  </>
                 )}
                </>
               )}
              </Fragment>
             ))}
            </TableCell>
            <TableCell sx={{ verticalAlign: "top" }}>
             <TitleTableContent title="Strategi WO" />
             {itemRow.tows.map((detailTows, index) => (
              <Fragment key={index}>
               {detailTows.factor === "wo" && (
                <>
                 {detailTows.items.length > 1 ? (
                  <ul>
                   {detailTows.items.map((itemTows, index) => (
                    <li key={index}>
                     <Typography variant="body1">{itemTows}</Typography>
                    </li>
                   ))}
                  </ul>
                 ) : (
                  <>
                   {detailTows.items.map((itemTows, index) => (
                    <Typography variant="body1" key={index}>
                     {itemTows}
                    </Typography>
                   ))}
                  </>
                 )}
                </>
               )}
              </Fragment>
             ))}
            </TableCell>
           </TableRow>
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell
             sx={{
              verticalAlign: "top",
              bgcolor: alpha(theme.palette.primary.main, 0.1),
             }}
            >
             <Typography variant="body1" fontWeight={600}>
              Threats (T)
             </Typography>
             <Typography variant="caption" fontWeight={600}>
              Tentukan Faktor Ancaman Eksternal
             </Typography>
            </TableCell>
            <TableCell sx={{ verticalAlign: "top" }}>
             <TitleTableContent title="Strategi ST" />
             {itemRow.tows.map((detailTows, index) => (
              <Fragment key={index}>
               {detailTows.factor === "st" && (
                <>
                 {detailTows.items.length > 1 ? (
                  <ul>
                   {detailTows.items.map((itemTows, index) => (
                    <li key={index}>
                     <Typography variant="body1">{itemTows}</Typography>
                    </li>
                   ))}
                  </ul>
                 ) : (
                  <>
                   {detailTows.items.map((itemTows, index) => (
                    <Typography variant="body1" key={index}>
                     {itemTows}
                    </Typography>
                   ))}
                  </>
                 )}
                </>
               )}
              </Fragment>
             ))}
            </TableCell>
            <TableCell sx={{ verticalAlign: "top" }}>
             <TitleTableContent title="Strategi WT" />
             {itemRow.tows.map((detailTows, index) => (
              <Fragment key={index}>
               {detailTows.factor === "wt" && (
                <>
                 {detailTows.items.length > 1 ? (
                  <ul>
                   {detailTows.items.map((itemTows, index) => (
                    <li key={index}>
                     <Typography variant="body1">{itemTows}</Typography>
                    </li>
                   ))}
                  </ul>
                 ) : (
                  <>
                   {detailTows.items.map((itemTows, index) => (
                    <Typography variant="body1" key={index}>
                     {itemTows}
                    </Typography>
                   ))}
                  </>
                 )}
                </>
               )}
              </Fragment>
             ))}
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
   <DialogComponent
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah Indikasi Risiko Strategis"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit">
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormIndication mode="add" project={project} />
   </DialogComponent>
  </>
 );
}
