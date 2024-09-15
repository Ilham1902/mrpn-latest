import { Paper, Typography, Grid, alpha, Stack, Icon } from "@mui/material";

type ICard = {
 iconName: string;
 color: string;
 value: string;
 total?: string;
 title: string;
};

export const BlockCard = ({
 title,
 children,
 bgcolor,
}: {
 title?: string;
 children?: React.ReactNode;
 bgcolor?: string;
}) => {
 return (
  <Paper
   elevation={2}
   sx={{
    borderRadius: "1.25rem",
    p: "1.5rem",
    m: 1,
    bgcolor: bgcolor ? bgcolor : "rgba(31, 41, 55, 0.5)",
    backdropFilter: "blur(7.8px)",
    border: "1px solid rgba(31, 41, 55, 0.37)",
   }}
  >
   {title ? (
    <>
     <Typography fontSize={18} fontWeight={600} mb={2} color="white">
      {title}
     </Typography>
     {children}
    </>
   ) : (
    children
   )}
  </Paper>
 );
};

export const CardValue = ({ iconName, color, value, total, title }: ICard) => {
 return (
  <Grid item xs={12} md={3}>
   <Stack
    direction="column"
    justifyContent="space-between"
    height="100%"
    p="1.25rem"
    borderRadius="16px"
    bgcolor={alpha(color, 0.2)}
    border={`1px solid ${color}`}
    sx={{
     height: "140px",
    }}
   >
    <Stack direction="row" alignItems="center" justifyContent="space-between">
     <Stack
      //   bgcolor={color}
      //   width="40px"
      //   height="40px"
      //   borderRadius="50%"
      alignItems="center"
      justifyContent="center"
     >
      <Icon
       baseClassName="fas"
       className={`fa-${iconName}`}
       sx={{ fontSize: "32px", color: color }}
      />
     </Stack>
     <Typography
      component="span"
      fontSize="2rem"
      fontWeight={800}
      color={color}
     >
      {value}
     </Typography>
    </Stack>
    <Stack direction="column">
     {total ? (
      <Typography color={color} fontSize="12px" fontWeight="500">
       {total}
      </Typography>
     ) : null}
     <Typography
      fontSize="18px"
      textTransform="capitalize"
      fontWeight={700}
      color="white"
     >
      {title}
     </Typography>
    </Stack>
   </Stack>
  </Grid>
 );
};
