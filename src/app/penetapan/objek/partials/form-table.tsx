import React, { Fragment } from "react";
import {
 Button,
 Card,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 FormLabel,
 Grid,
 IconButton,
 Paper,
 Radio,
 RadioGroup,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";
import useThemes from "../hooks/useTheme";
import SearchKP from "./search";

const ItemKP = ({ full, type }: { full?: boolean; type: string }) => {
 return (
  <>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography>Kode {type === "pp" ? "PP" : "KP"}</Typography>
     <TextField
      variant="outlined"
      size="small"
      placeholder={`Kode ${type === "pp" ? "PP" : "KP"}`}
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
   <Grid item lg={full ? 8 : 6}>
    <FormControl fullWidth>
     <Typography>Nama {type === "pp" ? "PP" : "KP"}</Typography>
     <TextField
      variant="outlined"
      size="small"
      placeholder={`Nama ${type === "pp" ? "PP" : "KP"}`}
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
  </>
 );
};

export default function FormTable({ mode }: { mode?: string }) {
 const [itemsPP, setItemPP] = React.useState([{ id: 1 }]);
 const [itemsKP, setItemKP] = React.useState([{ id: 1 }]);

 const addPP = () => {
  let arr = [...itemsPP];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItemPP(newItem);
 };

 const minusPP = (nowId: any) => {
  let arr = [...itemsPP];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItemPP(newArr);
 };

 const addKP = () => {
  let arr = [...itemsKP];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItemKP(newItem);
 };

 const minusKP = (nowId: any) => {
  let arr = [...itemsKP];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItemKP(newArr);
 };

 const { activeTab, listDataAp, handleSearchTermUpdate, searchTab } =
  useThemes();

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kode Topik</Typography>
      <TextField
       variant="outlined"
       size="small"
       placeholder="Kode Topik"
       InputLabelProps={{
        shrink: true,
       }}
      />
     </FormControl>
    </Grid>
    <Grid item lg={8}>
     <FormControl fullWidth>
      <Typography gutterBottom>Topik</Typography>
      <TextField
       variant="outlined"
       size="small"
       placeholder="Topik"
       InputLabelProps={{
        shrink: true,
       }}
      />
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Paper variant="outlined" sx={{ minWidth: "100% !important", p: 2 }}>
      <SearchKP
       addTheme
       activeTab={activeTab}
       listData={listDataAp}
       handleSearchTermUpdate={handleSearchTermUpdate}
       searchTerm={searchTab}
      />
     </Paper>
    </Grid>
   </Grid>
  </>
 );
}
