import React, {Fragment, SetStateAction} from "react";
import {
  Box,
  Button,
  DialogActions,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import {TextareaStyled} from "@/components/textarea";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import {MiscMasterListPerpresRes, MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {ExsumRegulationDto} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";
import {listPeraturan} from "@/app/utils/data";
import {AutocompleteSelectMultiple, AutocompleteSelectSingle} from "@/components/autocomplete";
import {IconFA} from "@/app/components/icons/icon-fa";
import DialogComponent from "@/app/components/dialog";

type Option = (typeof listPeraturan)[number];

export default function FormPeraturan(
  {
    options,
    optionStakeholder,
    request,
    setRequest,
    setModalPeraturan
  }: {
    options: MiscMasterListPerpresRes[];
    optionStakeholder: MiscMasterListStakeholderRes[]
    request: ExsumRegulationDto;
    setRequest: (value: SetStateAction<ExsumRegulationDto>) => void;
    setModalPeraturan:any
  }
) {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Entitas"/>
            <AutocompleteSelectSingle
              key={request.stakeholder_id}
              value={request.stakeholder}
              options={optionStakeholder}
              getOptionLabel={(opt) => opt.value}
              handleChange={(e: MiscMasterListStakeholderRes) =>
                setRequest((prevState) => {
                  return {
                    ...prevState,
                    stakeholder: e,
                    stakeholder_id: e?.id ?? 0
                  };
                })
              }
              placeHolder={"Pilih entitas"}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Peraturan Terkait"/>
            <AutocompleteSelectSingle
              key={request.perpres_state?.id ?? 0}
              value={request.perpres_state}
              options={options}
              getOptionLabel={(opt) => opt.title}
              handleChange={(e: MiscMasterListPerpresRes) =>
                setRequest((prevState) => {
                  return {
                    ...prevState,
                    perpres_state: e,
                    amanat: e?.value ?? "",
                    perpres: [{id:e?.id ?? 0}]
                  };
                })
              }
              placeHolder={"Pilih peraturan terkait"}
              actionButton={
                <Box onMouseDown={(e) => e.preventDefault()}>
                  <Button
                    startIcon={<IconFA name="circle-plus" size={14}/>}
                    fullWidth
                    onClick={(e) => {
                      e.preventDefault();
                      setModalPeraturan(true);
                    }}
                  >
                    Tambah Peraturan
                  </Button>
                </Box>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Amanat Peraturan yang Terkait"/>
            <TextareaStyled
              aria-label="Amanat Peraturan yang Terkait"
              placeholder="Amanat Peraturan yang Terkait"
              minRows={3}
              value={request.amanat}
              disabled
              // onChange={(e) =>
              //   setRequest((prev: ExsumRegulationDto) => {
              //     return {
              //       ...prev,
              //       amanat: e.target.value,
              //     };
              //   })
              // }
            />
          </FormControl>
        </Grid>
      </Grid>

    </>
  );
}
