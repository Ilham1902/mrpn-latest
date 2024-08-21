import { createContext } from "react"

export type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: any;
};

const initalState: GlobalModalContext = {
  showModal: () => { },
  hideModal: () => { },
  store: {},
};

export const GlobalModalContext = createContext(initalState);
