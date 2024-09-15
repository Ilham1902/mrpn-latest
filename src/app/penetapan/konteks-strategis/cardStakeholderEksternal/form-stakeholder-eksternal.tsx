import React, {Fragment, useEffect, useState} from "react";
import {Grid, Paper, Stack, Typography} from "@mui/material";
import {TextareaStyled} from "@/app/components/textarea";
import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import SearchBar from "@/app/executive-summary/partials/tab2Profile/partials/imageSearch/searchBar";
import {grey} from "@mui/material/colors";
import StakeholderOptionsForm from "@/app/components/cardStakeholder";

export default function FormStakeholderEksternal(
  {
    title,
    listStakeholder,
    selectedStakeholder,
    setSelectedStakeholder,
    description,
    setDescription
  }: {
    title:string
    listStakeholder: MiscMasterListStakeholderRes[]
    selectedStakeholder:MiscMasterListStakeholderRes[]
    setSelectedStakeholder: (item:number[]) => void
    description:string
    setDescription:(item:string) => void
  }
) {

  const [filteredImages, setFilteredImages] = useState<MiscMasterListStakeholderRes[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query: any) => {
    setSearchTerm(query);
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      setFilteredImages(
        listStakeholder.filter((row) => row.value.toLowerCase().includes(lowercasedQuery))
      );
    } else {
      setFilteredImages(listStakeholder);
    }
  };

  useEffect(() => {
    setFilteredImages(listStakeholder)
  }, [listStakeholder]);

  const convertToCheckedImage = () => {
    let checked:number[] = []
    selectedStakeholder.map(x => {
      checked.push(x.id)
    })
    return checked;
  }

  return (
    <Grid item xs={12} md={6}>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{minWidth: "0 !important", p: 2, height: "100%"}}
      >
        <Stack direction="column">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            lineHeight={1.3}
            sx={{minHeight: 54}}
          >
            {title}
          </Typography>

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

          <Typography gutterBottom>
            Keterangan
          </Typography>
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
