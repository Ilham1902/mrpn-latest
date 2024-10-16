import React, { Fragment } from "react";
import { Button, DialogActions, styled } from "@mui/material";
import EmptyState from "@/components/empty";
import { IconEmptyData } from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import { IconFA } from "@/components/icons/icon-fa";
import Image from "next/image";
import { dataTema } from "../../../dataTema";
import { VisuallyHiddenInput } from "@/utils/constant";
import TablePeraturan from "./table-peraturan";
import useCardRegulationVM from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationVM";
import AddButton from "@/components/buttonAdd";
import FormPeraturan from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/form-peraturan";
import DialogComponent from "@/components/dialog";

export default function CardRegulation({ project }: { project: string }) {
  const {
    data,
    perpres,
    modalOpen,
    setModalOpen,
    request,
    setRequest,
    createData,
    deleteData,
  } = useCardRegulationVM();

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const isEmpty = false;

  return (
    <CardItem
      title="Kerangka Regulasi"
      addButton={
        <AddButton
          filled
          small
          title="Tambah Peraturan"
          onclick={() => handleModalOpen()}
        />
      }
    >
      {data.length == 0 ? (
        <EmptyState
          dense
          icon={<IconEmptyData width={100} />}
          title="Data Kosong"
          description="Silahkan isi konten halaman ini"
        />
      ) : (
        <TablePeraturan data={data} deleteData={deleteData} />
      )}

      <DialogComponent
        width={520}
        dialogOpen={modalOpen}
        dialogClose={handleModalClose}
        title="Tambah Peraturan"
        dialogFooter={
          <DialogActions sx={{ p: 2, px: 3 }}>
            <Button onClick={handleModalClose}>Batal</Button>
            <Button
              variant="contained"
              type="submit"
              onClick={() => createData()}
            >
              Simpan
            </Button>
          </DialogActions>
        }
      >
        <FormPeraturan
          request={request}
          setRequest={setRequest}
          options={perpres}
        />
      </DialogComponent>
    </CardItem>
  );
}
