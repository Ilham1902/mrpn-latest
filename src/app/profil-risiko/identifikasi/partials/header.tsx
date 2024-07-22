import React from "react";
import {
 Autocomplete,
 Button,
 Checkbox,
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Icon,
 IconButton,
 MenuItem,
 Paper,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import theme from "@/theme";
import {
 SxAutocompleteTextField,
 SxAutocomplete,
} from "@/app/components/dropdownKp";
import EmptyState from "@/app/components/empty";
import FieldLabelInfo from "@/app/components/fieldLabelInfo";
import { IconEmptyData } from "@/app/components/icons";
import SelectCustomTheme from "@/app/components/select";
import TextareaComponent from "@/app/components/textarea";
import { red } from "@mui/material/colors";
import { riskCategory, listPeristiwaRisiko } from "../setting";

export default function HeaderIdentifikasi({
 noPadding,
 asTable,
}: {
 noPadding?: boolean;
 asTable?: boolean;
}) {
 return (
  <>
   {asTable ? (
    <Table size="small" sx={{ td: { py: noPadding ? 0.5 : 1.5 } }}>
     <TableBody>
      <TableRow>
       <TableCell width={250} sx={{ bgcolor: theme.palette.primary.light }}>
        Topik MRPN
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         Sistem Persampahan
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell sx={{ bgcolor: theme.palette.primary.light }}>
        Objek MRPN Lintas Sektor
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         KP: Reformasi Tata Kelola Pengelolaan Sampah
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell sx={{ bgcolor: theme.palette.primary.light }}>
        Sasaran
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         Terciptanya reformasi sistem pengelolaan sampah dalam hal perencanaan,
         kelembagaan, dan pendanaan
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell sx={{ bgcolor: theme.palette.primary.light }}>
        Indikator
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         Indeks Kinerja Pengelolaan Sampah (IKPS)
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell sx={{ bgcolor: theme.palette.primary.light }}>
        Target
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         55
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell sx={{ bgcolor: theme.palette.primary.light }}>
        Periode
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         2025
        </Typography>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell sx={{ bgcolor: theme.palette.primary.light }}>
        Direktorat
       </TableCell>
       <TableCell>
        <Typography fontWeight={500} fontSize={14}>
         Dit. LH
        </Typography>
       </TableCell>
      </TableRow>
     </TableBody>
    </Table>
   ) : (
    <Grid container spacing={2}>
     <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Topik MRPN" />
       <Typography fontWeight={600} maxWidth={600}>
        Sistem Persampahan
       </Typography>
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
       <FieldLabelInfo
        title="Objek MRPN Lintas Sektor"
        information="Objek MRPN Lintas Sektor"
       />
       <Typography fontWeight={600} maxWidth={600}>
        KP: Reformasi Tata Kelola Pengelolaan Sampah
       </Typography>
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={12}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Sasaran" information="Sasaran" />
       <Typography fontWeight={600} maxWidth={600}>
        Terciptanya reformasi sistem pengelolaan sampah dalam hal perencanaan,
        kelembagaan, dan pendanaan
       </Typography>
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Indikator" information="Indikator" />
       <Typography fontWeight={600} maxWidth={600}>
        Indeks Kinerja Pengelolaan Sampah (IKPS)
       </Typography>
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Target" information="Target" />
       <Typography fontWeight={600} maxWidth={600}>
        55
       </Typography>
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Periode" information="Periode" />
       <Typography fontWeight={600} maxWidth={600}>
        2025
       </Typography>
      </FormControl>
     </Grid>
     <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
       <FieldLabelInfo title="Direktorat" information="Direktorat" />
       <Typography fontWeight={600} maxWidth={600}>
        Dit. LH
       </Typography>
      </FormControl>
     </Grid>
    </Grid>
   )}
  </>
 );
}
