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
import FormSasaran from "./form-sasaran";
import CardItem from "@/components/cardTabItem";
import useCardSasaranUPRVM from "@/app/penetapan/konteks-strategis/cardSasaranKinerjaUPR/vm";
import {useAuthContext} from "@/lib/core/hooks/useHooks";
import {usePathname} from "next/navigation";
import AddButton from "@/components/buttonAdd";
import {hasPrivilege} from "@/lib/core/helpers/authHelpers";
import {IconFA} from "@/components/icons/icon-fa";

export default function CardSasaranKinerjaUPR() {

  const {
    permission
  } = useAuthContext(state => state)
  const pathname = usePathname()

  const {
    rkpState,
    getData,
    state,
    setState,
    optionSasaranIndikator,
    getOptionSasaranIndikator,
    optionIndikatorSasaran,
    setOptionIndikatorSasaran,
    data,
    modal,
    setModal,
    hanldeOpenModal,
    createUpdateDelete,
    optionStakeholder,
    getOptionStakeholder
  } = useCardSasaranUPRVM()

  useEffect(() => {
    if (rkpState !== undefined) {
      getOptionStakeholder()
      getOptionSasaranIndikator()
      getData()
    };
  }, [rkpState]);

  return (
    <>
      <CardItem
        title="Sasaran, Indikator, dan Target Kinerja UPR Lintas Sektor"
        addButton={<AddButton
          filled
          small
          title="Tambah"
          onclick={() => {
            hanldeOpenModal(0)
            setModal({action:"add", isOpen:true})
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
                <TableCell>Peran</TableCell>
                <TableCell>Entitas MRPN</TableCell>
                <TableCell>Sasaran</TableCell>
                <TableCell>Indikator</TableCell>
                <TableCell>Target</TableCell>
                {
                  (hasPrivilege(permission,pathname,"update","penetapan.kriteriaRisiko") || hasPrivilege(permission,pathname,"delete","penetapan.kriteriaRisiko")) &&
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
                  <TableCell>{row.peran}</TableCell>
                  <TableCell>{row.stakeholder_id.value}</TableCell>
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
                                      setModal({action:"update", isOpen:true})
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
                                      setModal({action:"delete", isOpen:true})
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
        dialogClose={() => setModal({action:"add", isOpen:false})}
        title="Tambah Sasaran, Indikator, dan Target Kinerja UPR Linsek"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={() => setModal({action:"add", isOpen:false})}>Batal</Button>
          <Button variant="contained" type="submit" onClick={() => createUpdateDelete()}>
            Simpan
          </Button>
        </DialogActions>}
      >
        <FormSasaran
          state={state}
          setState={setState}
          optionSasaranIndikator={optionSasaranIndikator}
          optionIndikatorSasaran={optionIndikatorSasaran}
          optionStakeholder={optionStakeholder}
          setOptionIndikatorSasaran={setOptionIndikatorSasaran}
        />
      </DialogComponent>

      <DialogComponent
        width={320}
        dialogOpen={modal.action === "delete" && modal.isOpen}
        dialogClose={() => setModal({action:"delete", isOpen:false})}
        title="Tambah Identifkasi Sasaran"
        dialogFooter={<DialogActions sx={{p: 2, px: 3}}>
          <Button onClick={() => setModal({action:"delete", isOpen:false})}>Batal</Button>
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
