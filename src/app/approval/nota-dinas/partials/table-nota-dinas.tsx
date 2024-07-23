import React from "react";
import {
 Box,
 Button,
 Divider,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableRow,
 Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";
import Image from "next/image";

export default function TableNotaDinas() {
 const [approvalLeft, setApprovalLeft] = React.useState(false);
 const [rejectLeft, setRejectLeft] = React.useState(false);
 const [buttonLeft, setButtonLeft] = React.useState(true);

 const [approvalRight, setApprovalRight] = React.useState(false);
 const [rejectRight, setRejectRight] = React.useState(false);
 const [buttonRight, setButtonRight] = React.useState(true);

 const handleApprovalLeft = () => {
  setApprovalLeft(true);
  setButtonLeft(false);
 };

 const handleRejectLeft = () => {
  setButtonLeft(false);
  setRejectLeft(true);
 };

 const handleApprovalRight = () => {
  setApprovalRight(true);
  setButtonRight(false);
 };

 const handleRejectRight = () => {
  setButtonRight(false);
  setRejectRight(true);
 };

 return (
  <>
   <Stack gap={2}>
    <Paper elevation={0} variant="outlined">
     <TableContainer sx={{ py: 1 }}>
      <Table sx={{ minWidth: 650, td: { border: 0 } }} size="small">
       <TableBody>
        <TableRow>
         <TableCell width={300}>
          <Typography color={grey[600]}>Topik</Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0 }}>
          :
         </TableCell>
         <TableCell>
          <Typography>Penurunan Stunting</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell>
          <Typography color={grey[600]}>Periode</Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0 }}>
          :
         </TableCell>
         <TableCell>
          <Typography>2025-2029</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell>
          <Typography color={grey[600]}>
           Usulan Objek MRPN Lintas Sektor
          </Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0 }}>
          :
         </TableCell>
         <TableCell>
          <Typography>Kementerian Sosial</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell sx={{ verticalAlign: "top" }}>
          <Typography gutterBottom color={grey[600]}>
           Justifikasi & Penjelasan
          </Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0, verticalAlign: "top" }}>
          :
         </TableCell>
         <TableCell sx={{ verticalAlign: "top" }}>
          <Typography>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
           ipsa tempora ab consequatur autem corrupti amet consectetur iusto
           placeat, voluptas praesentium suscipit dignissimos saepe cumque modi,
           ex officia repellendus sed?
          </Typography>
         </TableCell>
        </TableRow>
       </TableBody>
      </Table>
     </TableContainer>
    </Paper>
    <Typography fontWeight={600} mt={1}>
     Usulan UPR Lintas Sektor
    </Typography>
    <Paper elevation={0} variant="outlined">
     <TableContainer sx={{ py: 1 }}>
      <Table sx={{ minWidth: 650, td: { border: 0 } }} size="small">
       <TableBody>
        <TableRow>
         <TableCell width={300}>
          <Typography color={grey[600]}>1. Kementerian Koordinasi</Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0 }}>
          :
         </TableCell>
         <TableCell>
          <Typography>Kementerian PPN</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell>
          <Typography color={grey[600]}>
           2. Entitas MRPN Sektor Utama
          </Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0 }}>
          :
         </TableCell>
         <TableCell>
          <Typography>Kementerian Keuangan</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell>
          <Typography color={grey[600]}>3. Entitas MRPN Pendukung</Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0 }}>
          :
         </TableCell>
         <TableCell>
          <Typography>Kementerian Lingkungan Hidup & Kehutanan</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell sx={{ verticalAlign: "top" }}>
          <Typography gutterBottom color={grey[600]}>
           Justifikasi & Penjelasan
          </Typography>
         </TableCell>
         <TableCell width={2} sx={{ px: 0, verticalAlign: "top" }}>
          :
         </TableCell>
         <TableCell sx={{ verticalAlign: "top" }}>
          <Typography>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
           autem porro tempore eveniet cumque corporis, sed eius quia laboriosam
           fuga ipsam. Voluptatum aliquid, expedita dicta voluptatem maxime
           facere iure distinctio.
          </Typography>
         </TableCell>
        </TableRow>
       </TableBody>
      </Table>
     </TableContainer>
    </Paper>
    <Paper elevation={0} variant="outlined">
     <TableContainer sx={{ py: 1 }}>
      <Table sx={{ minWidth: 650, td: { border: 0 } }} size="small">
       <TableBody>
        <TableRow>
         <TableCell colSpan={2} sx={{ pb: 4 }}>
          <Typography textAlign="center">Jakarta, 16 Juli 2024</Typography>
          <Typography textAlign="center">
           Direktorat Tata Ruang, Pertanahan, dan Penanggulangan Bencana
          </Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell>
          <Typography textAlign="center">Dibuat oleh,</Typography>
         </TableCell>
         <TableCell>
          <Typography textAlign="center">Disetujui oleh,</Typography>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell align="center">
          <Box position="relative" width="auto" display="inline-block">
           <Box position="relative" zIndex={1}>
            <Image
             alt="Dibuat oleh"
             src="https://res.cloudinary.com/caturteguh/image/upload/v1721259946/mrpn/ttd/ttd_nzdfmi.png"
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: "auto", height: "100px" }}
            />
           </Box>
           <Box position="absolute" top={-70} left={-70} zIndex={0}>
            {rejectLeft && (
             <Image
              alt="Dibuat oleh"
              src="https://res.cloudinary.com/caturteguh/image/upload/v1721703228/mrpn/ttd/stamp-rejected_gdzucv.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "200px", opacity: 0.3 }}
             />
            )}
            {approvalLeft && (
             <Image
              alt="Dibuat oleh"
              src="https://res.cloudinary.com/caturteguh/image/upload/v1721703223/mrpn/ttd/stamp-approved_dduusw.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "200px", opacity: 0.3 }}
             />
            )}
           </Box>
          </Box>
         </TableCell>
         <TableCell align="center">
          <Box position="relative" width="auto" display="inline-block">
           <Box position="relative" zIndex={1}>
            <Image
             alt="Disetujui oleh"
             src="https://res.cloudinary.com/caturteguh/image/upload/v1721259946/mrpn/ttd/ttd-stempel_sxlgr4.png"
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: "auto", height: "120px" }}
            />
           </Box>
           <Box position="absolute" top={-70} left={-70} zIndex={0}>
            {rejectRight && (
             <Image
              alt="Disetujui oleh"
              src="https://res.cloudinary.com/caturteguh/image/upload/v1721703228/mrpn/ttd/stamp-rejected_gdzucv.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "200px", opacity: 0.3 }}
             />
            )}
            {approvalRight && (
             <Image
              alt="Disetujui oleh"
              src="https://res.cloudinary.com/caturteguh/image/upload/v1721703223/mrpn/ttd/stamp-approved_dduusw.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "200px", opacity: 0.3 }}
             />
            )}
           </Box>
          </Box>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell sx={{ verticalAlign: "top" }}>
          <Stack gap="4px" maxWidth={300} m="0 auto">
           <Typography textAlign="center" fontWeight={500}>
            Ari Prasetyo, SH, MA, MPA
           </Typography>
           <Divider />
           <Typography textAlign="center" fontSize={14} color={grey[700]}>
            Kepala Biro Hukum
           </Typography>
          </Stack>
         </TableCell>
         <TableCell sx={{ verticalAlign: "top" }}>
          <Stack gap="4px" maxWidth={300} m="0 auto">
           <Typography textAlign="center" fontWeight={500}>
            Dr. Agung Indrajit, ST, M.Sc
           </Typography>
           <Divider />
           <Typography textAlign="center" fontSize={14} color={grey[700]}>
            Kepala Pusat Data dan Informasi Perencanaan Pembangunan
           </Typography>
          </Stack>
         </TableCell>
        </TableRow>
        <TableRow>
         <TableCell align="center">
          {buttonLeft && (
           <Stack direction="row" gap={1} justifyContent="center">
            <Box>
             <Button
              color="error"
              size="small"
              variant="outlined"
              sx={{ borderRadius: 24, px: 3 }}
              startIcon={<IconFA name="thumbs-down" size={14} />}
              onClick={handleRejectLeft}
             >
              Reject
             </Button>
            </Box>
            <Box>
             <Button
              color="success"
              size="small"
              variant="contained"
              sx={{ borderRadius: 24, px: 3 }}
              startIcon={<IconFA name="thumbs-up" size={14} />}
              onClick={handleApprovalLeft}
             >
              Approve
             </Button>
            </Box>
           </Stack>
          )}
         </TableCell>
         <TableCell align="center">
          {buttonRight && (
           <Stack direction="row" gap={1} justifyContent="center">
            <Box>
             <Button
              color="error"
              size="small"
              variant="outlined"
              sx={{ borderRadius: 24, px: 3 }}
              startIcon={<IconFA name="thumbs-down" size={14} />}
              onClick={handleRejectRight}
             >
              Reject
             </Button>
            </Box>
            <Box>
             <Button
              color="success"
              size="small"
              variant="contained"
              sx={{ borderRadius: 24, px: 3 }}
              startIcon={<IconFA name="thumbs-up" size={14} />}
              onClick={handleApprovalRight}
             >
              Approve
             </Button>
            </Box>
           </Stack>
          )}
         </TableCell>
        </TableRow>
       </TableBody>
      </Table>
     </TableContainer>
    </Paper>
   </Stack>
  </>
 );
}
