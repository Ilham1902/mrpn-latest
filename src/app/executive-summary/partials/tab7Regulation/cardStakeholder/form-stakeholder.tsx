import React, { Fragment, useEffect, useState } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { TextareaStyled } from "@/app/components/textarea";
import { MiscMasterListStakeholderRes } from "@/app/misc/master/masterServiceModel";
import SearchBar from "@/app/executive-summary/partials/tab2Profile/partials/imageSearch/searchBar";
import { grey } from "@mui/material/colors";
import StakeholderOptionsForm from "@/app/components/cardStakeholder";
import { InfoTooltip } from "@/app/components/InfoTooltip";

export default function FormStakeholder({
 title,
 listStakeholder,
 selectedStakeholder,
 setSelectedStakeholder,
 description,
 setDescription,
}: {
 title: string;
 listStakeholder: MiscMasterListStakeholderRes[];
 selectedStakeholder: MiscMasterListStakeholderRes[];
 setSelectedStakeholder: (item: number[]) => void;
 description: string;
 setDescription: (item: string) => void;
}) {
 const [filteredImages, setFilteredImages] = useState<
  MiscMasterListStakeholderRes[]
 >([]);
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearch = (query: any) => {
  setSearchTerm(query);
  if (query) {
   const lowercasedQuery = query.toLowerCase();
   setFilteredImages(
    listStakeholder.filter((row) =>
     row.value.toLowerCase().includes(lowercasedQuery)
    )
   );
  } else {
   setFilteredImages(listStakeholder);
  }
 };

 useEffect(() => {
  setFilteredImages(listStakeholder);
 }, [listStakeholder]);

 const convertToCheckedImage = () => {
  let checked: number[] = [];
  selectedStakeholder.map((x) => {
   checked.push(x.id);
  });
  return checked;
 };

 return (
  <Grid item xs={12} md={6}>
   <Paper
    elevation={0}
    variant="outlined"
    sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
   >
    <Stack direction="column">
     <Stack direction="row" alignItems="center" gap={0.5} mb={1}>
      <Typography variant="h6" component="div" lineHeight={1.3}>
       {title}
      </Typography>
      {title !== "Kementerian Koordinator" && (
       <InfoTooltip
        titleSection
        title={
         title === "Entitas Sektor Utama"
          ? "Kementerian negara atau lembaga yang mempunyai tanggung jawab utama dalam mengelola risiko pada program, kegiatan, proyek, prioritas pembangunan, dan/atau jenis risiko tertentu yang bersifat lintas sektor"
          : title === "Entitas Pendukung"
          ? "Entitas MRPN Pendukung adalah K/L/P/BU/BL yang turut mendukung pelaksanaan Objek MRPN Lintas Sektor termasuk yang menjadi penanggung jawab atas suatu perlakuan risiko"
          : null
        }
       />
      )}
     </Stack>
     <Stack>
      <SearchBar onSearch={handleSearch} />
      <Typography
       mt={1}
       variant="caption"
       component="span"
       color={grey[600]}
       fontStyle="italic"
      >
       Klik logo untuk pilih multi-anggota stakeholder
      </Typography>

      <StakeholderOptionsForm
       images={filteredImages}
       searchTerm={searchTerm}
       checkedImage={convertToCheckedImage()}
       handleCheckImage={setSelectedStakeholder}
      />
     </Stack>

     <Typography gutterBottom>Keterangan</Typography>
     <TextareaStyled
      aira-label={`Deskripsi ${title}`}
      placeholder={`Deskripsi ${title}`}
      minRows={3}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
     />
    </Stack>
   </Paper>
  </Grid>
 );
}
