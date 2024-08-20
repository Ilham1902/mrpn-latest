import React from "react";
import {
 Box,
 Button,
 Collapse,
 FormControlLabel,
 Grid,
 IconButton,
 Paper,
 Stack,
 Switch,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { blue, green, grey, red } from "@mui/material/colors";
import { dataTema } from "../../dataTema";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";

function createData(aspectRo: string) {
 return {
  aspectRo,
  fund: [
   {
    keyRO: true,
    ro: "Penyediaan PMT bagi balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/ (weight faltering)",
    indicator:
     "Balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/(weight faltering) mendapat PMT",
    target1: 75,
    target2: 80,
    target3: 85,
    target4: 87,
    target5: 90,
    alocation: 200,
    fundSource: "-",
    instance: "Kemkes",
    location: "Seluruh provinsi",
   },
   {
    keyRO: false,
    ro: "Pendampingan balita dengan permasalahan gizi",
    indicator: "Balita dengan permasalahan gizi mendapatkan pendampingan",
    target1: 75,
    target2: 80,
    target3: 85,
    target4: 87,
    target5: 90,
    alocation: 200,
    fundSource: "-",
    instance: "Kemkes",
    location: "Seluruh provinsi",
   },
   {
    keyRO: false,
    ro: "Pelayanan gizi masyarakat di kab/kota",
    indicator: "Kab/kota yg menyelenggarakan pelayanan gizi masyarakat",
    target1: 75,
    target2: 80,
    target3: 85,
    target4: 87,
    target5: 90,
    alocation: 200,
    fundSource: "-",
    instance: "Kemkes",
    location: "Seluruh provinsi",
   },
  ],
 };
}

const ChevronBtn = ({ name }: { name: string }) => {
 return (
  <Button
   variant={name === "up" ? "contained" : "outlined"}
   sx={{ width: "auto", p: 1, minWidth: 0 }}
  >
   <IconFA name={`chevron-${name}`} size={12} />
  </Button>
 );
};

const FundSource = ({ value, isYear }: { value: string; isYear?: boolean }) => {
 return (
  <Stack
   display="inline-flex"
   direction="row"
   alignItems="center"
   boxSizing="border-box"
   border={`2px solid ${grey[300]}`}
   borderRadius="8px"
  >
   <Box
    color={theme.palette.primary.dark}
    bgcolor={grey[300]}
    border={`2px solid ${grey[300]}`}
    p="8px 16px"
    fontWeight={500}
    letterSpacing={0.2}
    fontSize={14}
    minWidth={isYear ? 0 : 120}
   >
    Estimasi Kebutuhan Pendanaan
   </Box>
   <Box
    p="8px 16px"
    fontWeight={700}
    fontSize={14}
    flexGrow={1}
    textAlign="right"
   >
    {value}
   </Box>
  </Stack>
 );
};

const TableFundPPKP = (props: {
 row?: ReturnType<typeof createData>;
 project: string;
}) => {
 const { row, project } = props;

 return (
  <Table size="small">
   <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
    <TableRow>
     <TableCell rowSpan={2}>
      {project === "KP" ? "Intervensi Kunci" : "Kegiatan Prioritas"}
     </TableCell>
     <TableCell rowSpan={2}>
      Indikator {project === "KP" ? "RO" : "Kegiatan Prioritas"}
     </TableCell>
     <TableCell colSpan={5} align="center">
      Target
     </TableCell>
     <TableCell rowSpan={2}>
      Indikasi Alokasi Tahun Rencana
      <br />
      (Rp Miliar)
     </TableCell>
     <TableCell rowSpan={2}>
      Sumber Pendanaan
      <br />
      (Belanja KL/DAK/BUMN/Swasta)
     </TableCell>
     {project === "KP" ? (
      <>
       <TableCell rowSpan={2}>Instansi Pelaksana RO</TableCell>
       <TableCell rowSpan={2}>
        Lokasi RO
        <br />
        (Prov./Kab./Kota)
       </TableCell>
      </>
     ) : null}
    </TableRow>
    <TableRow>
     <TableCell>2025</TableCell>
     <TableCell>2026</TableCell>
     <TableCell>2027</TableCell>
     <TableCell>2028</TableCell>
     <TableCell>2029</TableCell>
    </TableRow>
   </TableHead>
   <TableBody>
    {row?.fund.map((fundRow, index) => (
     <TableRow key={index}>
      {/* {project === "KP" ? (
       <TableCell>
        {fundRow.keyRO ? (
         <Tooltip title="RO Kunci" followCursor sx={{ cursor: "help" }}>
          <Typography fontSize={14} color={theme.palette.primary.main}>
           {fundRow.ro}
          </Typography>
         </Tooltip>
        ) : (
         fundRow.ro
        )}
       </TableCell>
      ) : (
       <TableCell>{fundRow.ro}</TableCell>
      )} */}
      <TableCell>{fundRow.ro}</TableCell>
      <TableCell>{fundRow.indicator}</TableCell>
      <TableCell align="right">{fundRow.target1}</TableCell>
      <TableCell align="right">{fundRow.target2}</TableCell>
      <TableCell align="right">{fundRow.target3}</TableCell>
      <TableCell align="right">{fundRow.target4}</TableCell>
      <TableCell align="right">{fundRow.target5}</TableCell>
      <TableCell align="right">{fundRow.alocation}</TableCell>
      <TableCell>{fundRow.fundSource}</TableCell>
      {project === "KP" ? (
       <>
        <TableCell>{fundRow.instance}</TableCell>
        <TableCell>{fundRow.location}</TableCell>
       </>
      ) : null}
     </TableRow>
    ))}
   </TableBody>
  </Table>
 );
};

function Row(props: { row: ReturnType<typeof createData>; project: string }) {
 const { row, project } = props;
 const [open, setOpen] = React.useState(false);

 return (
  <React.Fragment>
   {project === "PP" ? (
    <TableFundPPKP row={row} project="PP" />
   ) : (
    <>
     <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell width={70} sx={{ py: 0.5 }}>
       <IconButton
        aria-label="expand row"
        size="small"
        onClick={() => setOpen(!open)}
       >
        {open ? <ChevronBtn name="up" /> : <ChevronBtn name="down" />}
       </IconButton>
      </TableCell>
      <TableCell component="th" scope="row" sx={{ py: 0.5, pl: 0 }}>
       <Typography component="span" color={grey[600]}>
        Aspek Rincian Output:
       </Typography>{" "}
       <Typography component="span">{row.aspectRo}</Typography>
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell colSpan={2} sx={{ p: 0 }}>
       <Collapse in={open} timeout="auto" unmountOnExit>
        <TableFundPPKP row={row} project="KP" />
       </Collapse>
      </TableCell>
     </TableRow>
    </>
   )}
  </React.Fragment>
 );
}

const rowPP = [createData("Penguatan intervensi spesifik stunting")];

const rows = [
 createData("Penguatan intervensi spesifik stunting"),
 createData("Pelayanan gizi masyarakat di kab/kota"),
];

export default function TableFund({ project }: { project: string }) {
 const [checkedSwitch, setCheckedSwitch] = React.useState(true);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setCheckedSwitch(event.target.checked);
 };

 return (
  <>
   <Box p={2}>
    <FormControlLabel
     control={
      <Switch
       size="small"
       checked={checkedSwitch}
       onChange={handleChange}
       inputProps={{ "aria-label": "controlled" }}
      />
     }
     label={checkedSwitch ? "KP" : "PP"}
    />
   </Box>
   {dataTema.map((itemRow) => (
    <>
     {project === itemRow.temaId && (
      <>
       {itemRow.overallRisk.length < 1 ? (
        <EmptyState
         dense
         icon={<IconEmptyData width={100} />}
         title="Data Kosong"
         description="Silahkan isi konten halaman ini"
        />
       ) : (
        <>
         {checkedSwitch ? (
          <TableContainer component={Paper} elevation={0}>
           <Table aria-label="collapsible table">
            <TableBody>
             {rows.map((row, index) => (
              <Row key={index} row={row} project="KP" />
             ))}
            </TableBody>
           </Table>
          </TableContainer>
         ) : (
          <Box p={2}>
           <TableContainer component={Paper} elevation={0}>
            {rowPP.map((row, index) => (
             <Row key={index} row={row} project="PP" />
            ))}
           </TableContainer>
          </Box>
         )}
         {checkedSwitch && (
          <Box p={2}>
           {dataTema.map((itemFund) => (
            <>
             {project === itemFund.temaId && (
              <>
               {itemFund.pendanaan.map((listFund) => (
                <>
                 {listFund.source.length < 1 ? (
                  <EmptyState
                   dense
                   icon={<IconEmptyData width={70} />}
                   title="Data Kosong"
                  />
                 ) : (
                  <>
                   {listFund.source.map((itemSource, index) => (
                    <FundSource key={index} value={`Rp. ${itemSource.value}`} />
                   ))}
                  </>
                 )}
                </>
               ))}
              </>
             )}
            </>
           ))}
          </Box>
         )}
        </>
       )}
      </>
     )}
    </>
   ))}
  </>
 );
}
