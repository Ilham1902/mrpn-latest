import React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { grey, orange, yellow } from "@mui/material/colors";
import theme from "@/theme";

export default function SectionCheckbox({
 hasChild,
 noChild,
 children,
 menuLabel,
}: {
 menuLabel: string;
 hasChild?: boolean;
 noChild?: boolean;
 children?: React.ReactNode;
}) {
 const [checked, setChecked] = React.useState([
  false,
  false,
  false,
  false,
  false,
 ]);

 const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([
   event.target.checked,
   checked[1],
   checked[2],
   checked[3],
   checked[4],
  ]);
 };

 const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([
   checked[0],
   event.target.checked,
   checked[2],
   checked[3],
   checked[4],
  ]);
 };

 const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([
   checked[0],
   checked[1],
   event.target.checked,
   checked[3],
   checked[4],
  ]);
 };

 const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([
   checked[0],
   checked[1],
   checked[2],
   event.target.checked,
   checked[4],
  ]);
 };

 const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([
   checked[0],
   checked[1],
   checked[2],
   checked[3],
   event.target.checked,
  ]);
 };

 const determineIndeterminate = () => {
  return checked.some((item) => item) && !checked.every((item) => item);
 };

 return (
  <Paper
   elevation={hasChild || noChild ? 2 : 0}
   sx={{
    p: 2,
    borderRadius: "6px",
    border: "1px solid",
    borderColor: grey[300],
   }}
  >
   <Stack gap="10px">
    <Stack
     direction="row"
     alignItems="flex-start"
     justifyContent="space-between"
    >
     <Box>
      <Typography fontWeight={700} lineHeight={1} textTransform="capitalize">
       {menuLabel}
      </Typography>
      <Typography variant="caption" color={grey[600]}>
       Atur izin akses halaman{" "}
       <Box component="span" textTransform="lowercase">
        {menuLabel}
       </Box>
      </Typography>
     </Box>
     {hasChild ? null : (
      <FormControlLabel
       value="start"
       control={
        <Checkbox
         checked={checked.every((i) => i)}
         indeterminate={determineIndeterminate()}
         onChange={(e) =>
          setChecked([
           e.target.checked,
           e.target.checked,
           e.target.checked,
           e.target.checked,
           e.target.checked,
          ])
         }
         sx={{
          "&.Mui-checked": {
           color: grey[800],
          },
         }}
        />
       }
       label="Full Control"
       labelPlacement="start"
       sx={{
        gap: 1,
        m: 0,
        span: {
         p: 0,
         fontSize: "12px",
        },
       }}
      />
     )}
    </Stack>
    {hasChild ? (
     children
    ) : (
     <Stack
      bgcolor={theme.palette.primary.light}
      direction="row"
      px="16px"
      py="8px"
      borderRadius="4px"
      gap={2}
     >
      <FormControlLabel
       value="start"
       control={
        <Checkbox
         color="success"
         checked={checked[0]}
         onChange={handleChange1}
        />
       }
       label="Approve"
       sx={{
        gap: 1,
        m: 0,
        span: {
         p: 0,
         fontSize: "12px",
        },
       }}
      />
      <FormControlLabel
       value="start"
       control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
       label="Create"
       sx={{
        gap: 1,
        m: 0,
        span: {
         p: 0,
         fontSize: "12px",
        },
       }}
      />
      <FormControlLabel
       value="start"
       control={
        <Checkbox
         checked={checked[2]}
         onChange={handleChange3}
         sx={{
          "&.Mui-checked": {
           color: yellow[700],
          },
         }}
        />
       }
       label="Read"
       sx={{
        gap: 1,
        m: 0,
        span: {
         p: 0,
         fontSize: "12px",
        },
       }}
      />
      <FormControlLabel
       value="start"
       control={
        <Checkbox
         checked={checked[3]}
         onChange={handleChange4}
         sx={{
          "&.Mui-checked": {
           color: orange[700],
          },
         }}
        />
       }
       label="Update"
       sx={{
        gap: 1,
        m: 0,
        span: {
         p: 0,
         fontSize: "12px",
        },
       }}
      />
      <FormControlLabel
       value="start"
       control={
        <Checkbox checked={checked[4]} onChange={handleChange5} color="error" />
       }
       label="Delete"
       sx={{
        gap: 1,
        m: 0,
        span: {
         p: 0,
         fontSize: "12px",
        },
       }}
      />
     </Stack>
    )}
   </Stack>
  </Paper>
 );
}
