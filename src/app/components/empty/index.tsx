import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function EmptyState({
 title,
 description,
 icon,
 dense,
 button,
}: {
 title?: string;
 description?: React.ReactNode;
 icon?: React.ReactNode;
 dense?: boolean;
 button?: React.ReactNode;
}) {
 return (
  <Stack
   width="100%"
   minHeight={dense ? "200px" : "300px"}
   justifyContent="center"
   alignItems="center"
  >
   <Stack alignItems="center">
    {icon}
    <Typography
     component="h2"
     fontWeight="600"
     fontSize="16px"
     textTransform="capitalize"
     mt={2}
    >
     {title}
    </Typography>
    <Typography component="p" fontSize="14px" mt={1}>
     {description}
    </Typography>
   </Stack>
   <Box mt={2}>{button && button}</Box>
  </Stack>
 );
}
