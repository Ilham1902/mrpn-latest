import React, { Fragment } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    DialogActions,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import { dataTema } from "../../../dataTema";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import DialogComponent from "@/app/components/dialog";
import useCardSWOTVM from "./cardSwotVM";
import { ExsumSWOTDto } from "./cardSwotModel";
import {TextareaStyled} from "@/app/components/textarea";

export default function CardSwot({ project }: { project: string }) {
    const { data, modal, setModal, updateData, deleteData, request, setRequest } = useCardSWOTVM()

    return (
        <>
            <CardItem
                title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
                setting
                settingDeleteOnclick={() => deleteData()}
                settingEditOnclick={() => setModal(true)}
            >
                {data.opportunity == ""
                    && data.strength == ""
                    && data.thread == ""
                    && data.weakness == ""
                    ? (
                        <EmptyState
                            dense
                            icon={<IconEmptyData width={100} />}
                            title="Data Kosong"
                            description="Silahkan isi konten halaman ini"
                        />
                    ) : (
                        <Stack direction="row" gap={2} width={"100%"}>
                            <GenerateCard title="Faktor Internal" sub1="strength" sub2="weakness" cont1={data.strength} cont2={data.weakness}/>
                            <GenerateCard title="Faktor Eksternal" sub1="opportunity" sub2="threat" cont1={data.opportunity} cont2={data.thread} />
                        </Stack>
                    )}
            </CardItem>
            <DialogComponent
                dialogOpen={modal}
                dialogClose={() => setModal(false)}
                title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
                dialogFooter={
                    <DialogActions sx={{ p: 2, px: 3 }}>
                        <Button variant="outlined" onClick={() => setModal(false)}>
                            Batal
                        </Button>
                        <Button variant="contained" type="submit" onClick={() => updateData()}>
                            Simpan
                        </Button>
                    </DialogActions>
                }
            >
                <FormSwot request={request} setRequest={setRequest} />
            </DialogComponent>
        </>
    );
}

const GenerateCard = ({ title, sub1, sub2, cont1, cont2 }: { title: string, sub1: string, sub2: string, cont1: string, cont2: string }) => {
    return (
        <Stack
            direction="column"
            border={`1px solid ${grey[300]}`}
            borderRadius={2}
            flex={1}
        >
            <Box
                bgcolor={grey[200]}
                textAlign="center"
                p={1.5}
                borderRadius={2}
                borderBottom={`1px solid ${grey[300]}`}
                sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
                <Typography fontSize={16} fontWeight={500}>
                    {title}
                </Typography>
            </Box>
            <Stack
                direction="row"
                height="100%"
                sx={{
                    "& > div": {
                        "& + div": {
                            borderLeft: `1px solid ${grey[300]}`,
                        },
                    },
                }}
            >
                <Card
                    sx={{
                        border: 0,
                        maxWidth: 345,
                        bgcolor: "transparent",
                        flex: "0 0 50%",
                        [theme.breakpoints.down("lg")]: {
                            flex: "0 0 calc(50% - 12px)",
                        },
                        [theme.breakpoints.down("sm")]: {
                            flex: "0 0 100%",
                            maxWidth: "100%",
                        },
                    }}
                    variant="outlined"
                >
                    <CardContent>
                        <Typography
                            gutterBottom
                            fontSize={16}
                            fontWeight={500}
                            component="div"
                            lineHeight={1.3}
                            textTransform="capitalize"
                        >
                            {sub1}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography variant="body1">
                            {cont1}
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        border: 0,
                        maxWidth: 345,
                        bgcolor: "transparent",
                        flex: "0 0 50%",
                        [theme.breakpoints.down("lg")]: {
                            flex: "0 0 calc(50% - 12px)",
                        },
                        [theme.breakpoints.down("sm")]: {
                            flex: "0 0 100%",
                            maxWidth: "100%",
                        },
                    }}
                    variant="outlined"
                >
                    <CardContent>
                        <Typography
                            gutterBottom
                            fontSize={16}
                            fontWeight={500}
                            component="div"
                            lineHeight={1.3}
                            textTransform="capitalize"
                        >
                            {sub2}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography variant="body1">
                            {cont2}
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    )
}

const FormSwot = ({request, setRequest}: {request:ExsumSWOTDto, setRequest:any}) => {
    return (<Grid container spacing={2}>
        <Grid item lg={6}>
            <Paper
                elevation={0}
                variant="outlined"
                sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
            >
                <Stack direction="column">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        lineHeight={1.3}
                        sx={{ textTransform: "capitalize" }}
                    >
                        Strength
                    </Typography>
                    <TextareaStyled
                        aria-label={`Deskripsi Strength`}
                        placeholder={`Deskripsi Strength`}
                        value={request.strength}
                        onChange={(e) => {
                            setRequest((prev:ExsumSWOTDto) => {
                                return {...prev, strength:e.target.value}
                            })
                        }}
                    />
                </Stack>
            </Paper>
        </Grid>
        <Grid item lg={6}>
            <Paper
                elevation={0}
                variant="outlined"
                sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
            >
                <Stack direction="column">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        lineHeight={1.3}
                        sx={{ textTransform: "capitalize" }}
                    >
                        Weakness
                    </Typography>
                    <TextareaStyled
                        aria-label={`Deskripsi Weakness`}
                        placeholder={`Deskripsi Weakness`}
                        value={request.weakness}
                        onChange={(e) => {
                            setRequest((prev:ExsumSWOTDto) => {
                                return {...prev, weakness:e.target.value}
                            })
                        }}
                    />
                </Stack>
            </Paper>
        </Grid>
        <Grid item lg={6}>
            <Paper
                elevation={0}
                variant="outlined"
                sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
            >
                <Stack direction="column">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        lineHeight={1.3}
                        sx={{ textTransform: "capitalize" }}
                    >
                        Opportunity
                    </Typography>
                    <TextareaStyled
                        aria-label={`Deskripsi Opportunity`}
                        placeholder={`Deskripsi Opportunity`}
                        value={request.opportunity}
                        onChange={(e) => {
                            setRequest((prev:ExsumSWOTDto) => {
                                return {...prev, opportunity:e.target.value}
                            })
                        }}
                    />
                </Stack>
            </Paper>
        </Grid>
        <Grid item lg={6}>
            <Paper
                elevation={0}
                variant="outlined"
                sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
            >
                <Stack direction="column">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        lineHeight={1.3}
                        sx={{ textTransform: "capitalize" }}
                    >
                        Threat
                    </Typography>
                    <TextareaStyled
                        aria-label={`Deskripsi Threat`}
                        placeholder={`Deskripsi Threat`}
                        value={request.thread}
                        onChange={(e) => {
                            setRequest((prev:ExsumSWOTDto) => {
                                return {...prev, thread:e.target.value}
                            })
                        }}
                    />
                </Stack>
            </Paper>
        </Grid>
    </Grid>)
}
