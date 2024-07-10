import React from "react";
import { FormControl, List, Stack } from "@mui/material";
import theme from "@/theme";

export default function FormatKL({
 listItem,
 form,
}: {
 listItem: React.ReactNode;
 form: React.ReactNode;
}) {
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
}
