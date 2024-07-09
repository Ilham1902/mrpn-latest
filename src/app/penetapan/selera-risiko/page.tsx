"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Button,
 Collapse,
 DialogActions,
 FormControl,
 List,
 ListItem,
 Paper,
 SelectChangeEvent,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 TextField,
 ToggleButton,
 ToggleButtonGroup,
 Typography,
 alpha,
} from "@mui/material";
import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";
import theme from "@/theme";
import CustomToggleButton from "@/app/components/toggleButton";
import DialogComponent from "@/app/components/dialog";
import TextareaComponent from "@/app/components/textarea";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";

const LabelRadio = ({
 heading,
 description,
 value,
 rangeValue,
}: {
 heading: string;
 description: any;
 value: string | any;
 rangeValue: string | any;
}) => {
 return (
  <Stack direction="column" justifyContent="flex-start">
   <Stack direction="row" alignItems="center" gap={1}>
    <Typography
     component="h2"
     fontSize="18px"
     fontWeight={600}
     textTransform="none"
    >
     {heading} {value && `(Nilai ${value})`}{" "}
     {rangeValue && `(Rentang Nilai ${rangeValue})`}
    </Typography>
    <FieldLabelInfo
     iconOnly
     titleSection
     title={heading}
     information={heading}
    />
   </Stack>
   <Typography
    component="div"
    color={grey[700]}
    textTransform="none"
    fontSize={15}
    mt={1}
   >
    {description}
   </Typography>
  </Stack>
 );
};

const FormatKL = ({
 listItem,
 form,
}: {
 listItem: React.ReactNode;
 form: React.ReactNode;
}) => {
 return (
  <>
   <Stack
    display="grid"
    gridTemplateColumns="repeat(2, 1fr)"
    sx={{
     [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
     },
    }}
   >
    <List
     sx={{
      listStyleType: "number",
      py: 0,
      pl: 2,
      ml: 1,
      li: {
       pl: 0,
       py: "2px",
      },
     }}
    >
     {listItem}
    </List>
   </Stack>
   <Stack display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
    <FormControl sx={{ mt: 1 }}>{form}</FormControl>
   </Stack>
  </>
 );
};

const FormatBP = ({ form }: { form: React.ReactNode }) => {
 const matriksFive = (
  <Table>
   <TableHead>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell colSpan={3} rowSpan={3} align="center" sx={{ p: 1 }}>
      Matriks Analisis Risiko 3 X 3
     </TableCell>
     <TableCell colSpan={5} align="center" sx={{ p: 1 }}>
      Level Dampak
     </TableCell>
    </TableRow>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell align="center" sx={{ p: 1 }}>
      1
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      2
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      3
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      4
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      5
     </TableCell>
    </TableRow>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell align="center" sx={{ p: 1 }}>
      Sangat Rendah
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Rendah
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Sedang
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Tinggi
     </TableCell>
     <TableCell align="center" sx={{ p: 1 }}>
      Sangat Tinggi
     </TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    <TableRow>
     <TableCell
      width={70}
      rowSpan={5}
      align="center"
      sx={{
       p: 1,
       transform: "rotate(270deg)",
      }}
     >
      Kemungkinan Terjadinya Risiko
     </TableCell>
     <TableCell align="center">5</TableCell>
     <TableCell>Hampir Pasti Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      7
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      12
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      17
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      22
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      25
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">4</TableCell>
     <TableCell>Sering Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      4
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      9
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      14
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: orange[400] }}>
      19
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      24
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">3</TableCell>
     <TableCell>Jarang Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      3
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      8
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      13
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: orange[400] }}>
      18
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      23
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">2</TableCell>
     <TableCell>Kadang Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      2
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      6
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      11
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      16
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: red[400] }}>
      21
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell>Hampir Tidak Terjadi</TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      1
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: blue[400] }}>
      5
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: green[400] }}>
      10
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: yellow[400] }}>
      15
     </TableCell>
     <TableCell align="center" sx={{ fontWeight: 700, bgcolor: orange[400] }}>
      20
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 );

 const levelMatriks = (
  <Table>
   <TableHead>
    <TableRow sx={{ bgcolor: grey[200] }}>
     <TableCell>Level Risiko</TableCell>
     <TableCell align="center">Besaran Risiko </TableCell>
     <TableCell align="center">Warna</TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    <TableRow>
     <TableCell>Sangat Tinggi (5)</TableCell>
     <TableCell align="center">21 - 25</TableCell>
     <TableCell align="center" sx={{ bgcolor: red[400] }}>
      Merah
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Tinggi (4)</TableCell>
     <TableCell align="center">18 - 20</TableCell>
     <TableCell align="center" sx={{ bgcolor: orange[400] }}>
      Oranye
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Sedang (3)</TableCell>
     <TableCell align="center">12 - 15</TableCell>
     <TableCell align="center" sx={{ bgcolor: yellow[400] }}>
      Kuning
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Rendah (2)</TableCell>
     <TableCell align="center">7 - 11</TableCell>
     <TableCell align="center" sx={{ bgcolor: green[400] }}>
      Hijau
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Sangat Rendah (1)</TableCell>
     <TableCell align="center">1 - 6</TableCell>
     <TableCell align="center" sx={{ bgcolor: blue[400] }}>
      Biru
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 );

 return (
  <Stack gap={2}>
   <Typography fontStyle="italic">Tuliskan pernyataan selera risiko</Typography>
   <Box>
    <FormControl fullWidth>{form}</FormControl>
   </Box>
   <Stack display="grid" gridTemplateColumns="2.75fr 1.25fr" gap={2}>
    {matriksFive}
    {levelMatriks}
   </Stack>
  </Stack>
 );
};

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
       label="Tidak Toleran"
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
       label="Agresif"
       minheight={60}
      />
     </ToggleButtonGroup>
     <Collapse in={valueTheme === "1"}>
      <Box mt={2}>
       <LabelRadio
        heading="Tidak Toleran"
        rangeValue={userLevel === "bappenas" ? null : "1-6"}
        value={userLevel === "bappenas" ? 3 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
            form={
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi Tidak Toleran"
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
              placeholder="Isi nilai Tidak Toleran"
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
        value={userLevel === "bappenas" ? 8 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
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
        value={userLevel === "bappenas" ? 15 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
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
        heading="AGRESIF"
        rangeValue={userLevel === "bappenas" ? null : "19-25"}
        value={userLevel === "bappenas" ? 25 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <FormatBP
            form={
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi agresif"
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
              placeholder="Isi nilai agresif"
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
