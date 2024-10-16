import React, { Fragment, SetStateAction } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  DialogActions,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import TextareaComponent, { TextareaStyled } from "@/components/textarea";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import { MiscMasterListPerpresRes } from "@/app/misc/master/masterServiceModel";
import { ExsumRegulationDto } from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";
import { listPeraturan } from "@/app/utils/data";
import {
  SxAutocomplete,
  SxAutocompleteTextField,
} from "@/app/components/dropdown/dropdownRkp";
import { paramVariantDefault } from "@/app/utils/constant";
import { AutocompleteSelectMultiple } from "@/components/autocomplete";
import { IconFA } from "@/app/components/icons/icon-fa";
import DialogComponent from "@/app/components/dialog";

type Option = (typeof listPeraturan)[number];

export default function FormPeraturan({
  options,
  request,
  setRequest,
}: {
  options: MiscMasterListPerpresRes[];
  request: ExsumRegulationDto;
  setRequest: (value: SetStateAction<ExsumRegulationDto>) => void;
}) {
  const [modalPeraturan, setModalPeraturan] = React.useState(false);

  const handleModalPeraturan = () => {
    setModalPeraturan(true);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Entitas" />
            <AutocompleteSelectMultiple
              value={request.perpres}
              options={options}
              getOptionLabel={(opt) => opt.title}
              handleChange={(e: MiscMasterListPerpresRes[]) =>
                setRequest((prevState) => {
                  return {
                    ...prevState,
                    perpres: e,
                  };
                })
              }
              placeHolder={"Pilih entitas"}
              labelSelectAll={"Pilih semua entitas"}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FieldLabelInfo title="Peraturan Terkait" />
            <AutocompleteSelectMultiple
              value={request.perpres}
              options={options}
              getOptionLabel={(opt) => opt.title}
              handleChange={(e: MiscMasterListPerpresRes[]) =>
                setRequest((prevState) => {
                  return {
                    ...prevState,
                    perpres: e,
                  };
                })
              }
              placeHolder={"Pilih peraturan terkait"}
              labelSelectAll={"Pilih semua peraturan terkait"}
              actionButton={
                <Box onMouseDown={(e) => e.preventDefault()}>
                  <Button
                    startIcon={<IconFA name="circle-plus" size={14} />}
                    fullWidth
                    onClick={(e) => {
                      e.preventDefault();
                      handleModalPeraturan();
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
            <FieldLabelInfo title="Amanat Peraturan yang Terkait" />
            <TextareaStyled
              aria-label="Amanat Peraturan yang Terkait"
              placeholder="Amanat Peraturan yang Terkait"
              minRows={3}
              value={request.amanat}
              onChange={(e) =>
                setRequest((prev: ExsumRegulationDto) => {
                  return {
                    ...prev,
                    amanat: e.target.value,
                  };
                })
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <DialogComponent
        width={480}
        dialogOpen={modalPeraturan}
        dialogClose={() => setModalPeraturan(false)}
        title="Tambah Peraturan"
        dialogFooter={
          <DialogActions sx={{ p: 2, px: 3 }}>
            <Button onClick={() => setModalPeraturan(false)}>Batal</Button>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={() => setModalPeraturan(false)}
            >
              Simpan
            </Button>
          </DialogActions>
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Peraturan Baru"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </DialogComponent>
    </>
  );
}
