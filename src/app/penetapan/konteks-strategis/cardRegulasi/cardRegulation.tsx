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
import DialogComponent from "@/components/dialog";
import FormRegulation from "./form-regulasi";
import CardItem from "@/components/cardTabItem";
import useCardRegulasi from "@/app/penetapan/konteks-strategis/cardRegulasi/vm";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {usePathname} from "next/navigation";
import AddButton from "@/components/buttonAdd";
import {hasPrivilege} from "@/lib/core/helpers/authHelpers";
import {IconFA} from "@/components/icons/icon-fa";

export default function CardRegulation() {

  const {
    permission
  } = useAuthContext(state => state)
  const pathname = usePathname()

  const {
    rkpState,
    getData,
    state,
    setState,
    data,
    modal,
    setModal,
    hanldeOpenModal,
    createUpdateDelete
  } = useCardRegulasi()

  useEffect(() => {
    if (rkpState !== undefined) {
      getData()
    }
  }, [rkpState]);

  return (
    <>
      <CardItem
        title="Daftar Regulasi, Kebijakan, Peraturan, Prosedur Terkait"
        addButton={<AddButton
          filled
          small
          title="Tambah"
          onclick={() => {
            hanldeOpenModal(0)
            setModal({action: "add", isOpen: true})
          }}
        />}
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
                  {
                    (hasPrivilege(permission, pathname, "update", "penetapan.kriteriaRisiko") || hasPrivilege(permission, pathname, "delete", "penetapan.kriteriaRisiko")) &&
                      <TableCell width={150}></TableCell>
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell>{row.regulasi}</TableCell>
                    <TableCell>{row.keterangan}</TableCell>
                    {
                      (hasPrivilege(permission, pathname, "update", "penetapan.kriteriaRisiko") || hasPrivilege(permission, pathname, "delete", "penetapan.kriteriaRisiko")) &&
                        <TableCell width={150}>
                            <Stack gap={"5px"} justifyContent={"center"} direction={"row"}>
                              {hasPrivilege(permission, pathname, "update", "penetapan.kriteriaRisiko") &&
                                  <IconFA
                                      name="edit"
                                      size={16}
                                      color={theme.palette.primary.main}
                                      sx={{cursor: "pointer"}}
                                      onclick={() => {
                                        hanldeOpenModal(row.id)
                                        setModal({action: "update", isOpen: true})
                                      }}
                                  />
                              }
                              {hasPrivilege(permission, pathname, "delete", "penetapan.kriteriaRisiko") &&
                                  <IconFA
                                      name="trash"
                                      size={16}
                                      color={theme.palette.error.main}
                                      sx={{cursor: "pointer"}}
                                      onclick={() => {
                                        hanldeOpenModal(row.id)
                                        setModal({action: "delete", isOpen: true})
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
        dialogOpen={modal.action !== "delete" && modal.isOpen}
        dialogClose={() => setModal({action: "add", isOpen: false})}
        title="Tambah Regulasi, Kebijakan, Peraturan, Prosedur Terkait"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={() => setModal({action: "add", isOpen: false})}>Batal</Button>
          <Button variant="contained" type="submit" onClick={() => createUpdateDelete()}>
            Simpan
          </Button>
        </DialogActions>}
      >
        <FormRegulation
          state={state}
          setState={setState}
        />
      </DialogComponent>

      <DialogComponent
        width={320}
        dialogOpen={modal.action === "delete" && modal.isOpen}
        dialogClose={() => setModal({action: "delete", isOpen: false})}
        title="Tambah Identifkasi Sasaran"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={() => setModal({action: "delete", isOpen: false})}>Batal</Button>
          <Button variant="contained" type="submit" onClick={() => createUpdateDelete()}>
            Simpan
          </Button>
        </DialogActions>}
      >
        Apakah Anda yakin menghapus data ini?
      </DialogComponent>

    </>
  );
}
