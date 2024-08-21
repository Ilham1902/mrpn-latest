import { createContext } from "react";

export interface ProjectDefaultDto {
  id: number
  level: string
  code: string
  name: string
}

export type PPDto = ProjectDefaultDto & {
  p : ProjectDefaultDto[]
}

export type PNDto = ProjectDefaultDto & {
  pp : PPDto[]
}

export type RKPDto = PNDto[]

export type RKProps = {
  rkp: RKPDto;
  setRkp: (value: RKPDto) => void;
};

export const rkpDefault: RKProps = {
    rkp: [],
    setRkp: () => { },
};

export const RKPContext = createContext(rkpDefault);
