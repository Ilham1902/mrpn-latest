import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import {useAuthContext, useGlobalModalContext} from "@/lib/core/hooks/useHooks";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  
export const IErrorModal = () => {
    const router = useRouter()
    const {
        setUser
    } = useAuthContext(state => state)
    const { hideModal, store, } = useGlobalModalContext();
    const { modalProps } = store || {};
    const { code, message, } = modalProps || {};

    const handleModalToggle = () => {
        if (code == 401 || code == 500){
            setUser(undefined)
            return router.replace("/login");
        }
        return hideModal();
    };

    return (
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleModalToggle}
        >
            <DialogContent>
                {code === 401 || code === 500 && <DialogContentText>
                    Sesi Anda telah berakhir, silahkan login kembali
                </DialogContentText>}
                {code !== 401 && code !== 500 && <DialogContentText>
                    {`${message} (${code})`}
                </DialogContentText>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalToggle}>
                    {code === 401 || code === 500 && 'OK'}
                    {code !== 401 && code !== 500 && 'Tutup'}
                </Button>
            </DialogActions>
        </Dialog>
    )
};