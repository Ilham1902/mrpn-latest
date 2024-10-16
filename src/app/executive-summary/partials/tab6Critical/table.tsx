import React from "react";
import {
  alpha,
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "@/theme";
import { grey, red } from "@mui/material/colors";
import { ExsumIndicationResDto } from "@/app/executive-summary/partials/tab9Indication/cardIndicationModel";
import { useAuthContext } from "@/lib/core/hooks/useHooks";
import { usePathname } from "next/navigation";
import ActionColumn from "@/app/components/actions/action";

const data = [
  {
    id: 1,
    kegiatan: "Suplementasi gizi mikro pada balita",
    status: "FS",
    penanggungjawab: "Perusahaan patungan",
    sumberAnggaran: "PMN kepada PT KIW",
    waktuMulai: "25 Desember 2024",
    waktuSelesai: "6 Juni 2028",
  },
  {
    id: 2,
    kegiatan: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
    status: "SS",
    penanggungjawab: "Perusahaan patungan",
    sumberAnggaran: "PMN kepada PT KIW",
    waktuMulai: "25 Desember 2024",
    waktuSelesai: "6 Juni 2028",
  },
];

export default function TableCritical({
  handleEdit,
  handleDelete,
}: {
  handleEdit?: any;
  handleDelete?: any;
}) {
  const { permission } = useAuthContext((state) => state);
  const pathname = usePathname();

  return (
    <>
      <Table
        sx={{
          minWidth: 650,
          "th, td": {
            p: {
              fontSize: "14px !important",
            },
          },
        }}
        size="small"
      >
        <TableHead sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight={600}>
                Kegiatan
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight={600}>
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight={600}>
                Penanggungjawab
              </Typography>
            </TableCell>
            <TableCell width={180}>
              <Typography variant="body2" fontWeight={600}>
                Sumber Anggaran
              </Typography>
            </TableCell>
            <TableCell width={160}>
              <Typography variant="body2" fontWeight={600}>
                Waktu Mulai
              </Typography>
            </TableCell>
            <TableCell width={160}>
              <Typography variant="body2" fontWeight={600}>
                Waktu Selesai
              </Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography variant="body2">{item.kegiatan}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Chip
                  label={
                    item.status === "FS" ? "Finish to Start" : "Start to Start"
                  }
                  size="small"
                  sx={{
                    bgcolor:
                      item.status === "FS"
                        ? red[700]
                        : theme.palette.primary.main,
                    color: "white",
                  }}
                />
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography variant="body2">{item.penanggungjawab}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography variant="body2">{item.sumberAnggaran}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography variant="body2">{item.waktuMulai}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography variant="body2">{item.waktuSelesai}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top" }}>
                <ActionColumn
                  editClick={handleEdit}
                  deleteClick={handleDelete}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
