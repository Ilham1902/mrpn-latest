"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Button,
 Collapse,
 DialogActions,
 ListItem,
 SelectChangeEvent,
 Stack,
 TextField,
 ToggleButton,
 ToggleButtonGroup,
 Typography,
 alpha,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import theme from "@/theme";
import CustomToggleButton from "@/app/components/toggleButton";
import DialogComponent from "@/app/components/dialog";
import TextareaComponent from "@/app/components/textarea";
import FormatBP from "./partials/formatBp";
import FormatKL from "./partials/formatKl";
import { LabelRadio } from "@/app/components/labelRadio";

export default function PageSeleraRisiko({}) {
 const [value, setValue] = React.useState("");
 const [valueTheme, setValueTheme] = React.useState<string | null>("");
 const [project, setProject] = React.useState("");
 const [modalOpenSave, setModalOpenSave] = React.useState(false);
 const [userLevel, setUserLevel] = React.useState<string | null>("left");

 const handleUserLevel = (
  event: React.MouseEvent<HTMLElement>,
  newUserLevel: string | null
 ) => {
  setUserLevel(newUserLevel);
 };

 const handleModalOpenSave = () => {
  setModalOpenSave(true);
 };
 const handleModalClose = () => {
  setModalOpenSave(false);
  setValueTheme("");
 };

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | null
 ) => {
  setValueTheme(newAlignment);
 };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue((event.target as HTMLInputElement).value);
 };

 const saveButton = (
  <Button
   variant="contained"
   onClick={handleModalOpenSave}
   sx={{
    minWidth: 160,
    mt: 2,
    borderRadius: 50,
    color: "white !important",
   }}
  >
   Simpan
  </Button>
 );

 const rangeValue = userLevel === "bappenas" ? "3" : "1-6";

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Selera Risiko"
     withCard
     chipKp
     project={project}
     handleChangeProject={handleChangeProject}
    >
     <Box mb={2} p={2} bgcolor={theme.palette.primary.light} borderRadius={3}>
      <Typography component="p">
       Selera risiko adalah jenis/jumlah (nilai absolut) dari risiko yang siap
       diambil dalam proses pencapaian sasaran PKPPR, dengan pilihan sebagai
       berikut.
      </Typography>
     </Box>
     <ToggleButtonGroup
      value={userLevel}
      exclusive
      onChange={handleUserLevel}
      sx={{
       mb: 2,
      }}
     >
      <ToggleButton value="bappenas">User Bappenas</ToggleButton>
      <ToggleButton value="kl">User KL</ToggleButton>
     </ToggleButtonGroup>
     <Typography color={grey[600]} fontSize={14} fontStyle="italic">
      Pilih salah satu untuk memberikan{" "}
      {userLevel === "bappenas" ? "deskripsi" : "nilai"}
     </Typography>
     <ToggleButtonGroup
      value={valueTheme}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
       display: "grid",
       gridTemplateColumns: "1fr 1fr 1fr 1fr",
       [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr 1fr",
       },
       [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
       },
       gap: 2,
       mt: 2,
       button: {
        "&:hover": {
         bgcolor: alpha(theme.palette.primary.main, 0.1),
        },
        "&.Mui-selected": {
         bgcolor: theme.palette.primary.main,
         color: "white",
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
      }}
     >
      <CustomToggleButton
       //    variant="danger"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="1"
       //    valueLabel="1-6"
       label="Rendah"
       minheight={60}
      />
      <CustomToggleButton
       //    variant="warning"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="2"
       //    valueLabel="7-12"
       label="Konservatif"
       minheight={60}
      />
      <CustomToggleButton
       //    variant="success"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="3"
       //    valueLabel="13-18"
       label="Moderat"
       minheight={60}
      />
      <CustomToggleButton
       //    variant="primary"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="4"
       //    valueLabel="19-25"
       label="Tinggi"
       minheight={60}
      />
     </ToggleButtonGroup>
     <Collapse in={valueTheme === "1"}>
      <Box mt={2}>
       <LabelRadio
        heading="RENDAH"
        rangeValue={userLevel === "bappenas" ? null : "1-6"}
        // value={userLevel === "bappenas" ? 3 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
            levelId={1}
            form={
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi rendah"
              width="100%"
             />
            }
           />
          ) : (
           <FormatKL
            listItem={
             <>
              <ListItem sx={{ display: "list-item" }}>
               Sangat berhati-hati dalam mengambil risiko dan lebih memilih
               menjaga stabilitas dan konsistensi dalam Pembangunan Nasional.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
               Sangat tidak ingin risiko ini terjadi, cenderung memilih opsi
               teraman untuk menghindari dampak kritikal dan melaksanakan
               perlakuan risiko untuk mempertahankan keberlangsungan Pembangunan
               Nasional.
              </ListItem>
             </>
            }
            form={
             <TextField
              type="number"
              variant="outlined"
              size="small"
              placeholder="Isi nilai rendah"
              InputLabelProps={{
               shrink: true,
              }}
              helperText="Isi dengan angka"
             />
            }
           />
          )}
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "2"}>
      <Box mt={2}>
       <LabelRadio
        heading="KONSERVATIF"
        rangeValue={userLevel === "bappenas" ? null : "7-12"}
        // value={userLevel === "bappenas" ? 8 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
            levelId={2}
            form={
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi konservatif"
              width="100%"
             />
            }
           />
          ) : (
           <FormatKL
            listItem={
             <>
              <ListItem sx={{ display: "list-item" }}>
               Toleransi terbatas atas hasil yang tidak pasti dalam pencapaian
               visi, misi, atau tujuan strategis Pembangunan Nasional.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
               Akan menerima risiko jika pencapaian hasil sangat penting untuk
               visi, misi, atau tujuan strategis Pembangunan Nasional.
              </ListItem>
             </>
            }
            form={
             <TextField
              type="number"
              variant="outlined"
              size="small"
              placeholder="Isi nilai konservatif"
              InputLabelProps={{
               shrink: true,
              }}
              helperText="Isi dengan angka"
             />
            }
           />
          )}
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "3"}>
      <Box mt={2}>
       <LabelRadio
        heading="MODERAT"
        rangeValue={userLevel === "bappenas" ? null : "13-18"}
        // value={userLevel === "bappenas" ? 15 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
            levelId={3}
            form={
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi moderat"
              width="100%"
             />
            }
           />
          ) : (
           <FormatKL
            listItem={
             <>
              <ListItem sx={{ display: "list-item" }}>
               Bersedia mengambil risiko dalam batas tertentu untuk mencapai
               sasaran, tetapi tetap memperhatikan perlindungan terhadap risiko.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
               Perlakuan risiko dengan mempertimbangkan cost dan benefit.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
               Tingkat toleransi atas hasil yang tidak pasti bersifat relatif
               terhadap visi, misi, atau tujuan Pembangunan Nasional.
              </ListItem>
             </>
            }
            form={
             <TextField
              type="number"
              variant="outlined"
              size="small"
              placeholder="Isi nilai moderat"
              InputLabelProps={{
               shrink: true,
              }}
              helperText="Isi dengan angka"
             />
            }
           />
          )}
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "4"}>
      <Box mt={2}>
       <LabelRadio
        heading="TINGGI"
        rangeValue={userLevel === "bappenas" ? null : "19-25"}
        // value={userLevel === "bappenas" ? 25 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
            levelId={4}
            form={
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi tinggi"
              width="100%"
             />
            }
           />
          ) : (
           <FormatKL
            listItem={
             <ListItem sx={{ display: "list-item" }}>
              Secara aktif menerapkan strategi yang melibatkan pengelolaan
              risiko sebagai bagian integral dari rencana kegiatan, mengambil
              risiko lebih tinggi dalam rangka mencapai peluang dan inovasi yang
              lebih besar
             </ListItem>
            }
            form={
             <TextField
              type="number"
              variant="outlined"
              size="small"
              placeholder="Isi nilai tinggi"
              InputLabelProps={{
               shrink: true,
              }}
              helperText="Isi dengan angka"
             />
            }
           />
          )}
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    noDivider={false}
    width={300}
    dialogOpen={modalOpenSave}
    dialogClose={handleModalClose}
    title="Simpan Data"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Keluar
      </Button>
     </DialogActions>
    }
   >
    Data Selera Risiko sudah tersimpan
   </DialogComponent>
  </>
 );
}
