import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";

export interface ProjectDefaultDto {
  id: number
  level: string
  code: string
  value: string
}

export interface SasaranDto {

}

export type RODto = ProjectDefaultDto & {
  ro: ProjectDefaultDto[]
}

export type KPDto = ProjectDefaultDto & {
  sasaran: RODto[]
}

export type PPDto = ProjectDefaultDto & {
  kp: KPDto[]
}

export type PNDto = ProjectDefaultDto & {
  pp: PPDto[]
}

export type RKPCascadingDto = PNDto[]


export type GetExsumCascadingDiagramByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { exsum_id : number };
};

export type UpdateExsumCascadingDiagramByExsumIdServiceModel = BaseAPIServiceParam & {
  body: {  };
};