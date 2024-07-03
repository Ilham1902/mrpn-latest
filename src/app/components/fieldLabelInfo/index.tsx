import React from "react";
import { Button, Grow, Stack, Tooltip, Typography } from "@mui/material";
import { IconFA } from "../icons/icon-fa";

export default function FieldLabelInfo({
 title,
 information,
 titleSection,
 iconOnly,
 buttonInfo,
 buttonInfoOnclick,
}: {
 title?: string;
 information?: React.ReactNode;
 titleSection?: boolean;
 iconOnly?: boolean;
 buttonInfo?: boolean;
 buttonInfoOnclick?: () => void;
}) {
 const tooltipContent = (
  <Tooltip title={information} followCursor TransitionComponent={Grow}>
   <Typography
    sx={{
     span: {
      position: "relative",
      top: titleSection ? 2 : -2,
     },
    }}
   >
    <IconFA name="circle-info" size={14} />
   </Typography>
  </Tooltip>
 );

 const buttonInfoContent = (
  <Button
   size="small"
   variant="outlined"
   sx={{ py: 0, position: "relative", top: -2 }}
   onClick={buttonInfoOnclick}
  >
   Lihat Matriks
  </Button>
 );

 return (
  <>
   {iconOnly ? (
    tooltipContent
   ) : (
    <Stack direction="row" alignItems="center" gap={1}>
     {titleSection ? (
      <Typography fontWeight={600}>{title}</Typography>
     ) : (
      <Typography gutterBottom>{title}</Typography>
     )}
     {buttonInfo ? buttonInfoContent : tooltipContent}
    </Stack>
   )}
  </>
 );
}
