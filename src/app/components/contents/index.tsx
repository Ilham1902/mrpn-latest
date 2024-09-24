import React from "react";
import {
 Box,
 Chip,
 FormControl,
 Grow,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Stack,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import SelectCustomTheme from "../select";
import DropdownRkp from "@/components/dropdown/dropdownRkp";
import { grey } from "@mui/material/colors";
import { listSelectKp } from "@/app/executive-summary/data";
import { listTriwulan } from "@/app/utils/data";
import DateRangePicker from "@/components/dateRange";

export default function ContentPage({
 title,
 children,
 withCard,
 chooseKonteks,
 chooseProject,
 chooseRo,
 chooseObject,
 chipRo,
 chooseProjectPage,
 titleChild,
 breadcrumb,
 noPadding,
 heightTitleBreadcrumb,
 overflowHidden,
 addButton,
 project,
 handleChangeProject,
 dowloadAttachmentFile,
 triWulan,
 hasAlert,
 chipKp,
 sxCard,
 dateRangeDropdown,
 noMinusMargin,
 sxHeaderCard,
 heightNoSet,
 selectedTopic,
 identificationInfo,
 tabStep,
 noMarginBotttom,
 tabArrow,
 darkTheme,
 ref,
}: {
 children: React.ReactNode;
 title?: string;
 withCard?: boolean;
 noPadding?: boolean;
 chooseProject?: React.ReactNode;
 chooseProjectPage?: React.ReactNode;
 chooseKonteks?: boolean;
 chooseRo?: boolean;
 chooseObject?: React.JSX.Element;
 chipRo?: boolean;
 heightTitleBreadcrumb?: boolean;
 titleChild?: React.ReactNode;
 breadcrumb?: React.ReactNode;
 overflowHidden?: boolean;
 addButton?: React.ReactNode;
 project?: any;
 handleChangeProject?: any;
 dowloadAttachmentFile?: React.ReactNode;
 triWulan?: boolean;
 hasAlert?: React.ReactNode;
 chipKp?: boolean;
 sxCard?: React.CSSProperties;
 dateRangeDropdown?: boolean;
 noMinusMargin?: boolean;
 sxHeaderCard?: React.CSSProperties;
 heightNoSet?: boolean;
 selectedTopic?: React.ReactNode | boolean;
 identificationInfo?: React.ReactNode;
 tabStep?: React.ReactNode;
 noMarginBotttom?: boolean;
 tabArrow?: React.ReactNode;
 darkTheme?: boolean;
 ref?: any;
}) {
 const [konteks, setKonteks] = React.useState("");
 const [roDropdown, setRoDropdown] = React.useState("");
 const [triwulanDropdown, setTriwulanDropdown] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const handleChangeKonteks = (event: SelectChangeEvent) => {
  setKonteks(event.target.value);
 };
 const handleChangeRo = (event: SelectChangeEvent) => {
  setRoDropdown(event.target.value);
 };
 const handleChangeTriwulan = (event: SelectChangeEvent) => {
  setTriwulanDropdown(event.target.value);
 };

 const konteksLabel =
  "Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri";

 const listRo = [
  "Pemantauan tumbuh kembang balita",
  "Peningkatan sanitasi",
  "Peningkatan ketersediaan pangan keluarga 1000 HPK",
 ];

 const labelChipRo = "Peningkatan ketersediaan pangan keluarga 1000 HPK";

 const nameOfKp = listSelectKp[2].name;

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 return (
  <Box position="relative">
   <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    mb={noMarginBotttom ? 0 : "1.25rem"}
    // mt={flagPathnameTheme ? "-180px" : 0}
    sx={{
     [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1,
      flexWrap: "wrap",
     },
    }}
   >
    <Stack
     direction="row"
     justifyContent="space-between"
     alignItems="center"
     gap={1}
     width="100%"
    >
     <Stack
      direction="row"
      alignItems="center"
      gap={2}
      sx={{
       [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
       },
       ...sxHeaderCard,
      }}
     >
      {title && (
       <Stack direction="column">
        {breadcrumb}
        {title && (
         <Typography
          component="h2"
          fontWeight="600"
          fontSize="1.25rem"
          textTransform="capitalize"
         >
          {title}
         </Typography>
        )}
       </Stack>
      )}
      {titleChild}
      {chipKp && (
       <Chip
        color="primary"
        variant="outlined"
        label={
         <>
          <Stack direction="row" alignItems="center">
           <Stack
            direction="row"
            bgcolor={theme.palette.primary.main}
            px={2}
            alignItems="center"
            height="34px"
            sx={{
             borderTopLeftRadius: 24,
             borderBottomLeftRadius: 24,
            }}
           >
            <Typography
             fontSize={13}
             color="white"
             fontWeight={600}
             lineHeight={1}
            >
             KP
            </Typography>
           </Stack>
           <Box
            sx={{
             [theme.breakpoints.up("sm")]: {
              display: "none",
             },
             [theme.breakpoints.down("sm")]: {
              display: "block",
             },
            }}
           >
            {nameOfKp.length >= 35 ? (
             <Tooltip title={nameOfKp} followCursor TransitionComponent={Grow}>
              <Typography
               aria-owns={open ? "mouse-over-popover" : undefined}
               aria-haspopup="true"
               onMouseEnter={handlePopoverOpen}
               onMouseLeave={handlePopoverClose}
               px={1.5}
               fontSize={13}
               fontWeight={600}
              >
               {nameOfKp.substring(0, 35) + "..."}
              </Typography>
             </Tooltip>
            ) : (
             <Typography px={1.5} fontSize={13} fontWeight={600}>
              {nameOfKp}
             </Typography>
            )}
           </Box>
           <Box
            sx={{
             [theme.breakpoints.up("sm")]: {
              display: "block",
             },
             [theme.breakpoints.down("sm")]: {
              display: "none",
             },
            }}
           >
            <Typography px={1.5} fontSize={13} fontWeight={600}>
             {nameOfKp}
            </Typography>
           </Box>
          </Stack>
         </>
        }
        sx={{
         height: "34px",
         bgcolor: "white",
         fontWeight: 600,
         lineHeight: 1,
         cursor: "default",

         ".MuiChip-label": {
          px: 0,
         },
        }}
       />
      )}
      {selectedTopic}
     </Stack>
    </Stack>
    <Stack direction="row" alignItems="center" gap={1}>
     {tabArrow}
     {chooseProjectPage}
     {dowloadAttachmentFile}
     {chooseProject && <DropdownRkp handleChangeProject={handleChangeProject} />}
     {chooseObject && chooseObject }
     {chooseRo && (
      <FormControl size="small">
       <SelectCustomTheme
        rounded
        small
        anchorRight
        value={roDropdown}
        onChange={handleChangeRo}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih rincian output
         </Typography>
        </MenuItem>
        {listRo.map((roLabel, index) => (
         <MenuItem key={index} value={roLabel}>
          {roLabel.length >= 35 ? (
           <Tooltip title={roLabel} followCursor TransitionComponent={Grow}>
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {roLabel.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           roLabel
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      </FormControl>
     )}
     {chipRo && (
      <Chip
       color="primary"
       variant="outlined"
       label={
        labelChipRo.length >= 40 ? (
         <>
          <Stack direction="row" alignItems="center">
           <Stack
            direction="row"
            bgcolor={theme.palette.primary.main}
            px={2}
            alignItems="center"
            height="34px"
            sx={{
             borderTopLeftRadius: 24,
             borderBottomLeftRadius: 24,
            }}
           >
            <Typography
             fontSize={14}
             color="white"
             fontWeight={600}
             lineHeight={1}
            >
             Rincian Output
            </Typography>
           </Stack>
           <Tooltip title={labelChipRo} followCursor TransitionComponent={Grow}>
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             px={1.5}
             fontSize={14}
             fontWeight={600}
            >
             {labelChipRo.substring(0, 40) + "..."}
            </Typography>
           </Tooltip>
          </Stack>
         </>
        ) : (
         labelChipRo
        )
       }
       sx={{
        height: "34px",
        bgcolor: "white",
        fontWeight: 600,
        lineHeight: 1,
        cursor: "default",

        ".MuiChip-label": {
         px: 0,
        },
       }}
      />
     )}
     {/* {chipKp && (
      <Chip
       color="primary"
       variant="outlined"
       label={
        <>
         <Stack direction="row" alignItems="center">
          <Stack
           direction="row"
           bgcolor={theme.palette.primary.main}
           px={2}
           alignItems="center"
           height="34px"
           sx={{
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
           }}
          >
           <Typography
            fontSize={13}
            color="white"
            fontWeight={600}
            lineHeight={1}
           >
            KP
           </Typography>
          </Stack>
          <Tooltip title={nameOfKp} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            px={1.5}
            fontSize={12}
            fontWeight={600}
           >
            {nameOfKp.length >= 40
             ? nameOfKp.substring(0, 40) + "..."
             : nameOfKp}
            {nameOfKp}
           </Typography>
          </Tooltip>
         </Stack>
        </>
       }
       sx={{
        height: "34px",
        bgcolor: "white",
        fontWeight: 600,
        lineHeight: 1,
        cursor: "default",

        ".MuiChip-label": {
         px: 0,
        },
       }}
      />
     )} */}
     {chooseKonteks && (
      <FormControl size="small">
       <SelectCustomTheme
        rounded
        small
        anchorRight
        value={konteks}
        onChange={handleChangeKonteks}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih konteks strategis
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         {konteksLabel.length >= 35 ? (
          <Tooltip title={konteksLabel} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ fontSize: 14 }}
           >
            {konteksLabel.substring(0, 35) + "..."}
           </Typography>
          </Tooltip>
         ) : (
          konteksLabel
         )}
        </MenuItem>
       </SelectCustomTheme>
      </FormControl>
     )}
     {triWulan && (
      <FormControl size="small">
       <SelectCustomTheme
        rounded
        small
        anchorRight
        value={triwulanDropdown}
        onChange={handleChangeTriwulan}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih periode
         </Typography>
        </MenuItem>
        {listTriwulan.map((triwulanLabel, index) => (
         <MenuItem key={index} value={triwulanLabel}>
          {triwulanLabel.length >= 35 ? (
           <Tooltip
            title={triwulanLabel}
            followCursor
            TransitionComponent={Grow}
           >
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {triwulanLabel.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           triwulanLabel
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      </FormControl>
     )}
     {dateRangeDropdown && (
      <DateRangePicker
       small
       placeholder="Pilih periode"
       rounded
       sxInput={{
        backgroundColor: "red",
       }}
      />
     )}
     {addButton && addButton}
     {identificationInfo && identificationInfo}
    </Stack>
   </Stack>
   {hasAlert && hasAlert}
   <Box
    ref={ref}
    height={
     heightTitleBreadcrumb
      ? "calc(100vh - 258px)"
      : overflowHidden
      ? "calc(100vh - 240px)"
      : heightNoSet
      ? "auto"
      : darkTheme
      ? "calc(100vh - 180px)"
      : "calc(100vh - 240px)"
    }
    overflow={overflowHidden ? "hidden" : "auto"}
    margin={noMinusMargin ? 0 : -1}
    sx={{
     overflowX: "hidden",
     "&::-webkit-scrollbar": {
      width: "3px",
     },
     [theme.breakpoints.down("sm")]: { height: "auto" },
    }}
   >
    {tabStep && tabStep}
    {withCard ? (
     <Paper
      elevation={2}
      sx={{
       borderRadius: "1.25rem",
       p: noPadding ? 0 : "1.5rem",
       m: 1,
       ...sxCard,
      }}
     >
      {children}
     </Paper>
    ) : (
     children
    )}
   </Box>
  </Box>
 );
}
