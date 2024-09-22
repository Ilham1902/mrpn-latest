import React, { Fragment } from "react";
import {
 Grid,
 IconButton,
 Paper,
 Stack,
 TextField,
 Typography,
} from "@mui/material";
import { dataTema } from "../../../dataTema";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";

const FieldGroup = ({
 detailItem,
 addField,
 onclick,
}: {
 detailItem: any;
 addField?: boolean;
 onclick?: () => void;
}) => {
 return (
  <>
   <Grid item xs={12} md={6}>
    <TextField
     size="small"
     fullWidth
     InputLabelProps={{
      shrink: true,
     }}
     placeholder={`Deskripsi ${detailItem.label}`}
    />
   </Grid>
   <Grid item xs={12} md={addField ? 5 : 6}>
    <TextField
     size="small"
     fullWidth
     InputLabelProps={{
      shrink: true,
     }}
     placeholder={`Kata kunci ${detailItem.label}`}
    />
   </Grid>
   {addField && (
    <Grid item xs={12} md={1}>
     <Stack justifyContent="center" alignItems="center" height="40px">
      <IconButton
       aria-label="delete"
       color="error"
       onClick={onclick}
       sx={{ p: 0 }}
      >
       <IconFA size={18} name="trash-can" />
      </IconButton>
     </Stack>
    </Grid>
   )}
  </>
 );
};

export default function FormSwot({
 mode,
 project,
}: {
 mode?: string;
 project?: string;
}) {
 const [itemFactor, setItemFactor] = React.useState([{ id: 0 }]);

 const addFactor = () => {
  let arr = [...itemFactor];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItemFactor(newItem);
 };

 const minusFactor = (nowId: any) => {
  let arr = [...itemFactor];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItemFactor(newArr);
 };

 return (
  <Grid container spacing={2}>
   {dataTema.map((itemSwot, index) => (
    <Fragment key={index}>
     {project === itemSwot.temaId && (
      <>
       {itemSwot.swot?.map((detailSwot, index) => (
        <Fragment key={index}>
         {detailSwot.item.map((detailItem, index) => (
          <Grid item xs={12} key={index}>
           <Paper
            elevation={0}
            variant="outlined"
            sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
           >
            <Stack direction="column">
             <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography
               gutterBottom
               variant="h6"
               component="div"
               lineHeight={1.3}
               sx={{ textTransform: "capitalize" }}
              >
               {detailItem.label}
              </Typography>
              <AddButton
               title={`Tambah ${detailItem.label}`}
               small
               noMargin
               onclick={addFactor}
              />
             </Stack>
             <Grid container spacing={1}>
              <FieldGroup detailItem={detailItem} />
              {itemFactor.map((tags: any) => (
               <Fragment key={`${tags.id}`}>
                <FieldGroup
                 addField
                 detailItem={detailItem}
                 onclick={() => minusFactor(tags.id)}
                />
               </Fragment>
              ))}
             </Grid>
            </Stack>
           </Paper>
          </Grid>
         ))}
        </Fragment>
       ))}
      </>
     )}
    </Fragment>
   ))}
  </Grid>
 );
}
