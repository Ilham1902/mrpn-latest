import React, {useEffect} from "react";
import {
  Button,
  DialogActions,
  Icon,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import theme from "@/theme";
import {AddCircle} from "@mui/icons-material";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import DialogComponent from "@/components/dialog";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import FormIdentifikasi from "./form-identifikasi";
import CardItem from "@/components/cardTabItem";
import useIndikatorSasaranVM from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/vm";
import {hasPrivilege, usePermissionChecker} from "@/lib/core/helpers/authHelpers";
import {IconFA} from "@/components/icons/icon-fa";
import AddButton from "@/components/buttonAdd";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {usePathname} from "next/navigation";
import {PenetapanIndikasiSasaranState} from "@/app/penetapan/konteks-strategis/cardIndikasiSasaran/model";

export default function CardIndikasiSasaran() {

  const {
    permission
  } = useAuthContext(state => state)
  const pathname = usePathname()

  const {
    rkpState,
    optionSasaranIndikator,
    getOptionSasaranIndikator,
    indikatorSasaranData,
    getDataIndikatorSasaran,
    optionIndikatorSasaran,
    setOptionIndikatorSasaran,
    modalOpenAdd,
    setModalOpenAdd,
    state,
    setState,
    updateOrCreate,
    hanldeOpenModal,
    modalOpenDelete,
    setModalOpenDelete,
    deleteData
  } = useIndikatorSasaranVM()

  const handleModalClose = () => {
    setModalOpenAdd(false);
  };

  useEffect(() => {
    if (rkpState !== undefined) {
      getOptionSasaranIndikator()
      getDataIndikatorSasaran()
    };
  }, [rkpState]);

  return (
    <>
      <CardItem
        title="Identifikasi Sasaran dan Indikator Objek MRPN Lintas Sektor"
        addButton={<AddButton
          filled
          small
          title="Tambah"
          onclick={() => {
            hanldeOpenModal(0)
            setModalOpenAdd(true)
          }}
        />}
      >
        {indikatorSasaranData.length == 0 ?

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
                  <TableCell>Uraian</TableCell>
                  <TableCell>Sasaran</TableCell>
                  <TableCell>Indikator</TableCell>
                  <TableCell width={150}>Target</TableCell>
                  {
                    (hasPrivilege(permission,pathname,"update","penetapan.kriteriaRisiko") || hasPrivilege(permission,pathname,"delete","penetapan.kriteriaRisiko")) &&
                    <TableCell width={150}></TableCell>
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {indikatorSasaranData.map((row, indexRow) => (
                  <TableRow
                    key={indexRow}
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell>{row.uraian}</TableCell>
                    <TableCell>{row.sasaran.value}</TableCell>
                    <TableCell>{row.indikator.value}</TableCell>
                    <TableCell align="right">{row.target}</TableCell>
                    {
                      (hasPrivilege(permission,pathname,"update","penetapan.kriteriaRisiko") || hasPrivilege(permission,pathname,"delete","penetapan.kriteriaRisiko")) &&
                        <TableCell width={150}>
                            <Stack gap={"5px"} justifyContent={"center"} direction={"row"}>
                              {hasPrivilege(permission,pathname,"update","penetapan.kriteriaRisiko") &&
                                  <IconFA
                                      name="edit"
                                      size={16}
                                      color={theme.palette.primary.main}
                                      sx={{cursor: "pointer"}}
                                      onclick={() => {
                                        hanldeOpenModal(row.id)
                                        setModalOpenAdd(true)
                                      }}
                                  />
                              }
                              {hasPrivilege(permission,pathname,"delete","penetapan.kriteriaRisiko") &&
                                  <IconFA
                                      name="trash"
                                      size={16}
                                      color={theme.palette.error.main}
                                      sx={{cursor: "pointer"}}
                                      onclick={() => {
                                        hanldeOpenModal(row.id)
                                        setModalOpenDelete(true)
                                      }}
                                  />
                              }
                            </Stack>
                        </TableCell>
                    }
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        }
      </CardItem>

      <DialogComponent
        width={320}
        dialogOpen={modalOpenAdd}
        dialogClose={handleModalClose}
        title="Tambah Identifkasi Sasaran"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={handleModalClose}>Batal</Button>
          <Button variant="contained" type="submit" onClick={() => updateOrCreate()}>
            Simpan
          </Button>
        </DialogActions>}
      >

        <FormIdentifikasi
          state={state}
          setState={setState}
          optionSasaranIndikator={optionSasaranIndikator}
          optionIndikatorSasaran={optionIndikatorSasaran}
          setOptionIndikatorSasaran={setOptionIndikatorSasaran}
        />

      </DialogComponent>

      <DialogComponent
        width={320}
        dialogOpen={modalOpenDelete}
        dialogClose={() => setModalOpenDelete(false)}
        title="Tambah Identifkasi Sasaran"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={() => setModalOpenDelete(false)}>Batal</Button>
          <Button variant="contained" type="submit" onClick={() => deleteData()}>
            Simpan
          </Button>
        </DialogActions>}
      >
        Apakah Anda yakin menghapus data ini?
      </DialogComponent>

    </>
  );
}
