import React, { useEffect, useState } from "react";
import { useGlobalModalContext } from "@/lib/core/hooks/useHooks";
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
    const { hideModal, store, } = useGlobalModalContext();
    const { modalProps } = store || {};
    const { code, message, } = modalProps || {};

    const handleModalToggle = () => {
        hideModal();
    };

    // useEffect(() => {
    //     if (code === 401 && !router.asPath.includes("login")) {
    //         window.sessionStorage.clear();
    //         router.push("/login");
    //     }
    // }, [code]);

    return (
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleModalToggle}
        >
            <DialogContent>
                <DialogContentText>
                    {code + " : " + message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalToggle}>Tutup</Button>
            </DialogActions>
        </Dialog>
    )
};