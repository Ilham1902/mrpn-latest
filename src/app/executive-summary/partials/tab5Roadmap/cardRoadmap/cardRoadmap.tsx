import React from "react";
import {
  Typography,
  Stack,
  Button,
  DialogActions,
  Box,
  Card,
  CardContent,
  alpha,
} from "@mui/material";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import DialogComponent from "@/components/dialog";
import {orange} from "@mui/material/colors";
import theme from "@/theme";
import {dataTema} from "../../../dataTema";
import FormRoadmap from "./form-roadmap";
import useCardRoadmapVM from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapVM";
import {ExsumRoadmapDto} from "@/app/executive-summary/partials/tab5Roadmap/cardRoadmap/cardRoadmapModel";

export default function CardRoadmap({project}: { project: string }) {

  const {
    dataBusiness,
    dataOutput,
    rpjmn,
    request,
    setRequest,
    modal,
    handleOpenModal,
    updateData,
  } = useCardRoadmapVM()

  return (
    <CardItem
      title="Project Roadmap"
      setting
      multiEdit
      settingEditOutputClick={() => handleOpenModal(true, "OUTPUT")}
      settingEditBisnisClick={() => handleOpenModal(true, "BISNIS")}
    >
      <Box width="100%" textAlign="center">
        <BusinessTable data={dataBusiness} />
        <OutputTable data={dataOutput} />
      </Box>

      <DialogComponent
        width={800}
        dialogOpen={modal.open}
        dialogClose={() => handleOpenModal(false, "")}
        title={modal.title}
        dialogFooter={
          <DialogActions sx={{p: 2, px: 3}}>
            <Button variant="outlined" onClick={() => handleOpenModal(false, "")}>
              Batal
            </Button>
            <Button variant="contained" type="submit" onClick={() => updateData()}>
              Simpan
            </Button>
          </DialogActions>
        }
      >
        {rpjmn && <FormRoadmap rpjmn={rpjmn} request={request} setRequest={setRequest}/>}
      </DialogComponent>

    </CardItem>
  );
}

const BusinessTable = (
  {
    data
  }:{
    data:ExsumRoadmapDto[]
  }
) => {
  return (
    <Box marginBottom={"30px"}>
      <Typography
        component="h2"
        fontSize="1em"
        fontWeight={600}
        textAlign="left"
      >
        Proses Bisnis
      </Typography>
      <Stack
        direction="row"
        gap={2}
        width="100%"
        mt={1}
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          },
          [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 2,
          },
        }}
      >
        {data.length == 0 ? (
          <EmptyState
            dense
            icon={<IconEmptyData width={100}/>}
            title="Data Kosong"
            description="Silahkan isi konten halaman ini"
          />
        ) : data.map((itemOutput, index) => (
          <Card
            variant="outlined"
            key={index}
            sx={{
              flex: "0 0 calc(20% - 12px)",
              borderRadius: "10px",
            }}
          >
            <CardContent
              sx={{
                bgcolor:
                  index === 0
                    ? alpha(orange[700], 1)
                    : index === 1
                      ? alpha(orange[700], 0.9)
                      : index === 2
                        ? alpha(orange[700], 0.8)
                        : index === 3
                          ? alpha(orange[700], 0.7)
                          : index === 4
                            ? alpha(orange[700], 0.6)
                            : index === 5
                              ? alpha(orange[700], 0.5)
                              : alpha(orange[700], 0.4),

                color: "white",
                borderRadius: "10px 10px 0 0",
                py: 1,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                lineHeight={1}
                textTransform="capitalize"
                fontWeight={600}
                fontSize="1.1em"
              >
                {itemOutput.year}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="p" textAlign="left">
                <Typography
                  component="strong"
                  fontWeight={500}
                  textAlign="left"
                >
                </Typography>
                {itemOutput.output}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

const OutputTable = (
  {
    data
  }:{
    data:ExsumRoadmapDto[]
  }
) => {
  return (
    <Box marginBottom={"20px"}>
      <Typography
        component="h2"
        fontSize="1em"
        fontWeight={600}
        textAlign="left"
      >
        Expected Output
      </Typography>
      <Stack
        direction="row"
        gap={2}
        width="100%"
        mt={1}
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          },
          [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 2,
          },
        }}
      >
        {data.length == 0 ? (
        <EmptyState
          dense
          icon={<IconEmptyData width={100}/>}
          title="Data Kosong"
          description="Silahkan isi konten halaman ini"
        />
        ) : data.map((itemOutput, index) => (
          <Card
            variant="outlined"
            key={index}
            sx={{
              flex: "0 0 calc(20% - 12px)",
              //  borderRadius: "10px 10px 0 0",
              borderRadius: "10px",
            }}
          >
            <CardContent
              sx={{
                bgcolor:
                  index === 0
                    ? alpha(theme.palette.primary.main, 1)
                    : index === 1
                      ? alpha(theme.palette.primary.main, 0.9)
                      : index === 2
                        ? alpha(theme.palette.primary.main, 0.8)
                        : index === 3
                          ? alpha(theme.palette.primary.main, 0.7)
                          : index === 4
                            ? alpha(theme.palette.primary.main, 0.6)
                            : index === 5
                              ? alpha(theme.palette.primary.main, 0.5)
                              : alpha(theme.palette.primary.main, 0.4),
                color: "white",
                borderRadius: "10px 10px 0 0",
                py: 1,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                lineHeight={1}
                textTransform="capitalize"
                fontWeight={600}
                fontSize="1.1em"
              >
                {itemOutput.year}
              </Typography>
            </CardContent>
            <CardContent>
              <>
                <Typography component="p" textAlign="left">
                  {itemOutput.output}
                </Typography>
              </>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
