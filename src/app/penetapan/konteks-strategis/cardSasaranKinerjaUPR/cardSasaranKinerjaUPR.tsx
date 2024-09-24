import React, {useEffect} from "react";
import {
  Box, Chip,
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
import useCardSasaranUPRVM from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/vm";

export default function CardSasaranKinerjaUPR() {

  const {
    objectState,
    getData,
    data,
  } = useCardSasaranUPRVM()

  useEffect(() => {
    if (objectState !== undefined) {
      getData()
    }
  }, [objectState]);

  return (
    <>
      <CardItem
        title="Sasaran, Indikator, dan Target Kinerja UPR Lintas Sektor"
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
                  <TableCell>Peran</TableCell>
                  <TableCell>Entitas MRPN</TableCell>
                  <TableCell>Sasaran</TableCell>
                  <TableCell>Indikator</TableCell>
                  <TableCell>Target</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, rowIndex) =>
                  row.entitas.map((subItem, subIndex) => (
                    <TableRow key={`${rowIndex}-${subIndex}`}>
                      {subIndex === 0 && (
                        <TableCell
                          rowSpan={row.entitas.length}
                          sx={{ verticalAlign: "top" }}
                        >
                          {row.peran}
                        </TableCell>
                      )}

                      <TableCell sx={{ verticalAlign: "top" }}>{subItem}</TableCell>

                      {subIndex === 0 && (
                        <TableCell
                          rowSpan={row.entitas.length}
                          sx={{ verticalAlign: "top" }}
                        >
                          {row.sasaran}
                        </TableCell>
                      )}
                      {subIndex === 0 && (
                        <TableCell
                          rowSpan={row.entitas.length}
                          sx={{ verticalAlign: "top" }}
                        >
                          {row.indikator}
                        </TableCell>
                      )}
                      {subIndex === 0 && (
                        <TableCell
                          rowSpan={row.entitas.length}
                          sx={{ verticalAlign: "top" }}
                        >
                          {row.target}
                        </TableCell>
                      )}

                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

        }
      </CardItem>

    </>
  );
}
