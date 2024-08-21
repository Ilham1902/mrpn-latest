import { createContext } from "react";
import { ResponseBaseDto } from "../api/apiModel";

export type ErrorModalContextProps = {
  isModalShow: boolean;
  setModalShow: (value: boolean) => void;
  responseBaseDto: ResponseBaseDto;
  setResponseBaseDto: (value: ResponseBaseDto) => void;
};

export const modalDefault: ErrorModalContextProps = {
  isModalShow: false,
  setModalShow: () => { },
  responseBaseDto: { code: 0, message: "", result: () => { } },
  setResponseBaseDto: () => { },
};

export const ModalContext = createContext(modalDefault);
