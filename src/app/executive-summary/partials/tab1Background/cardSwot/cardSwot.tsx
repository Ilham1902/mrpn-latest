import React, { Fragment } from "react";
import {
 Autocomplete,
 Box,
 Button,
 Card,
 CardContent,
 Chip,
 DialogActions,
 Grid,
 Paper,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import DialogComponent from "@/app/components/dialog";
import useCardSWOTVM from "./cardSwotVM";
import { ExsumSWOTRequestDto, LISTSWOT } from "./cardSwotModel";
import { TextareaStyled } from "@/app/components/textarea";
import {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/components/dropdownKp";
import { paramVariantDefault } from "@/utils/constant";

export default function CardSwot({ project }: { project: string }) {
 const { data, modal, setModal, updateData, deleteData, request, setRequest } =
  useCardSWOTVM();

 return (
  <>
   <CardItem
    title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
    setting
    settingDeleteOnclick={() => deleteData()}
    settingEditOnclick={() => setModal(true)}
   >
    {data.opportunity == "" &&
    data.strength == "" &&
    data.threat == "" &&
    data.weakness == "" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <Stack direction="row" gap={2} width={"100%"}>
      <GenerateCard
       title="Faktor Internal"
       sub1="strength"
       sub2="weakness"
       cont1={data.strength}
       cont2={data.weakness}
      />
      <GenerateCard
       title="Faktor Eksternal"
       sub1="opportunity"
       sub2="threat"
       cont1={data.opportunity}
       cont2={data.threat}
      />
     </Stack>
    )}
   </CardItem>
   <DialogComponent
    width={"90%"}
    dialogOpen={modal}
    dialogClose={() => setModal(false)}
    title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={() => setModal(false)}>
       Batal
      </Button>
      <Button variant="contained" type="submit" onClick={() => updateData()}>
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <Grid container spacing={2}>
     {LISTSWOT.map((x, index) => (
      <GetGrid
       request={request}
       setRequest={setRequest}
       title={x}
       key={index}
      />
     ))}
    </Grid>
   </DialogComponent>
  </>
 );
}

const GenerateCard = ({
 title,
 sub1,
 sub2,
 cont1,
 cont2,
}: {
 title: string;
 sub1: string;
 sub2: string;
 cont1: string;
 cont2: string;
}) => {
 return (
  <Stack
   direction="column"
   border={`1px solid ${grey[300]}`}
   borderRadius={2}
   flex={1}
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
     {title}
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
    >
     <CardContent>
      <Typography
       gutterBottom
       fontSize={16}
       fontWeight={500}
       component="div"
       lineHeight={1.3}
       textTransform="capitalize"
      >
       {sub1}
      </Typography>
     </CardContent>
     <CardContent sx={{ pt: 0 }}>
      <Typography variant="body1">{cont1}</Typography>
     </CardContent>
    </Card>
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
    >
     <CardContent>
      <Typography
       gutterBottom
       fontSize={16}
       fontWeight={500}
       component="div"
       lineHeight={1.3}
       textTransform="capitalize"
      >
       {sub2}
      </Typography>
     </CardContent>
     <CardContent sx={{ pt: 0 }}>
      <Typography variant="body1">{cont2}</Typography>
     </CardContent>
    </Card>
   </Stack>
  </Stack>
 );
};

const GetGrid = ({
 request,
 setRequest,
 title,
}: {
 request: ExsumSWOTRequestDto;
 setRequest: any;
 title: string;
}) => {
 const getKeyword = () => {
  const uppercaseTitle = title.toUpperCase();
  const getKey = request.values.find((x) => x.type == uppercaseTitle);
  if (getKey) {
   return getKey.values;
  }
  return [];
 };
 const handleChangeKeyword = (newValue: string[]) => {
  setRequest((prev: ExsumSWOTRequestDto) => {
   const uppercaseTitle = title.toUpperCase();
   const getKeyIndex = prev.values.findIndex((x) => x.type == uppercaseTitle);

   if (getKeyIndex > -1) {
    const values = [...prev.values];
    values[getKeyIndex].values = newValue;
    return {
     ...prev,
     values: values,
    };
   }

   return prev;
  });
 };

 const getDescValue = () => {
  if (title == "Strength") {
   return request.strength;
  }
  if (title == "Weakness") {
   return request.weakness;
  }
  if (title == "Opportunity") {
   return request.opportunity;
  }
  if (title == "Threat") {
   return request.threat;
  }
 };
 const handleChangeDesc = (e: any) => {
  setRequest((prev: ExsumSWOTRequestDto) => {
   if (title == "Strength") {
    return { ...prev, strength: e.target.value };
   }
   if (title == "Weakness") {
    return { ...prev, weakness: e.target.value };
   }
   if (title == "Opportunity") {
    return { ...prev, opportunity: e.target.value };
   }
   if (title == "Threat") {
    return { ...prev, threat: e.target.value };
   }
  });
 };

 return (
  <Grid item lg={6}>
   <Paper
    elevation={0}
    variant="outlined"
    sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
   >
    <Stack direction="column" gap={2}>
     <Typography
      gutterBottom
      variant="h6"
      component="div"
      lineHeight={1.3}
      sx={{ textTransform: "capitalize" }}
     >
      {title}
     </Typography>
     <Autocomplete
      multiple
      size="small"
      freeSolo
      options={[]}
      value={getKeyword()}
      onChange={(event, newValue) => {
       handleChangeKeyword(newValue);
      }}
      renderInput={(params) => (
       <TextField
        {...params}
        InputLabelProps={{
         shrink: true,
        }}
        placeholder={`Tambah kata kunci ${title}`}
        sx={SxAutocompleteTextField(paramVariantDefault)}
       />
      )}
      renderTags={(value, props) =>
       value.map((option, index) => (
        <Fragment key={index}>
         <Chip size="small" label={option} {...props({ index })} />
        </Fragment>
       ))
      }
      sx={{
       ...SxAutocomplete,
       ".MuiInputBase-root": {
        borderRadius: 1,
       },
      }}
     />
     <TextareaStyled
      key={title}
      aria-label={`Deskripsi ${title}`}
      placeholder={`Deskripsi ${title}`}
      value={getDescValue()}
      minRows={3}
      onChange={(e) => {
       handleChangeDesc(e);
      }}
     />
    </Stack>
   </Paper>
  </Grid>
 );
};
