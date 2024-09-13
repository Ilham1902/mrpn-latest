import React from "react";
import {
 Button,
 DialogActions,
 Icon,
 IconButton,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { AddCircle } from "@mui/icons-material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./form-table";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import FormRegulation from "./form-regulasi";
import CardItem from "@/app/components/cardTabItem";

export default function TableRegulation({
 variant,
 mode,
}: {
 variant?: string;
 mode?: string;
}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
 };

 function createData(id: number, regulasi: string, keterangan: string) {
  return { id, regulasi, keterangan };
 }

 const rows = [createData(1, "-", "-")];

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 return (
  <>
   <CardItem
    title="Daftar Regulasi, Kebijakan, Peraturan, Prosedur Terkait"
    setting
    settingEditOnclick={handleModalOpenAdd}
   >
    <TableContainer component={Paper} elevation={0} variant="outlined">
     <Table size="small">
      <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
       <TableRow>
        {/* <TableCell width="70px"></TableCell> */}
        <TableCell>
         Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait
        </TableCell>
        <TableCell>Keterangan</TableCell>
       </TableRow>
      </TableHead>
      <TableBody>
       {mode === "add" ? (
        <TableRow>
         <TableCell colSpan={4}>
          <EmptyState
           icon={<IconEmptyData />}
           title="Data Kosong"
           description="Silahkan isi konten tabel ini"
          />
         </TableCell>
        </TableRow>
       ) : (
        <>
         {rows.map((row) => (
          <TableRow
           key={row.id}
           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
           {/* <TableCell sx={{ textAlign: "center" }}>
            <Tooltip title="Delete" placement="top">
             <IconButton
              aria-label="delete"
              color="error"
              disabled={mode === "view"}
             >
              <Icon
               baseClassName="fas"
               className={`fa-trash-alt`}
               sx={{
                fontSize: "14px",
               }}
              />
             </IconButton>
            </Tooltip>
           </TableCell> */}
           <TableCell>{row.regulasi}</TableCell>
           <TableCell>{row.keterangan}</TableCell>
          </TableRow>
         ))}
        </>
       )}
      </TableBody>
     </Table>
    </TableContainer>
   </CardItem>
   <DialogComponent
    width={320}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Regulasi, Kebijakan, Peraturan, Prosedur Terkait"
    dialogFooter={dialogActionFooter}
   >
    <FormRegulation mode="add" />
   </DialogComponent>
  </>
 );
}
