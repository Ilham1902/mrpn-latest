import React, {useEffect} from "react";
import {
  Button,
  DialogActions,
  Paper, Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import theme from "@/theme";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import useCardRegulasi from "@/app/penetapan/konteks-strategis/cardRegulasi/vm";

export default function CardRegulation() {

  const {
    objectState,
    getData,
    data,
  } = useCardRegulasi()

  useEffect(() => {
    if (objectState !== undefined) {
      getData()
    }
  }, [objectState]);

  return (
    <>
      <CardItem
        title="Daftar Regulasi, Kebijakan, Peraturan, Prosedur Terkait"
      >
        {data.length == 0 ?

          <EmptyState
            dense
            icon={<IconEmptyData width={100}/>}
            title="Data Kosong"
            description="Silahkan isi konten halaman ini"
          />

          :

          <TableContainer component={Paper} elevation={0} variant="outlined">
            <Table size="small">
              <TableHead sx={{bgcolor: theme.palette.primary.light}}>
                <TableRow>
                  <TableCell>
                    Regulasi, Kebijakan, Peraturan, dan Prosedur Terkait
                  </TableCell>
                  <TableCell>Keterangan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        }
      </CardItem>

    </>
  );
}
