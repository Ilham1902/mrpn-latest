import { createContext } from "react";

export type ExsumDto = {
  id: number
  level: string
  ref_id: number
};

export type ExsumContextProps = {
  exsum: ExsumDto;
  setExsum: (value: ExsumDto) => void;
};

export const exsumDefault: ExsumContextProps = {
    exsum: {
      id:0,
      level:"PP",
      ref_id:0
    },
    setExsum: () => { },
};

export const ExsumContext = createContext(exsumDefault);
