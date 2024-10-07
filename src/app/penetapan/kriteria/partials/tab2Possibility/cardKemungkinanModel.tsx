import { BaseAPIServiceParam } from "@/lib/core/api/apiModel";

export interface PenetapanKriteriaKemungkinanValuesDto {
 id: number;
 level_kemungkinan: string;
 probabilitas: string;
 jumlah_frekuensi: string;
 low_frekuensi: string;
}

export interface PenetapanKriteriaKemungkinanResponseDto {
 id: number;
 uraian_penetapan_objek_id: number;
 values: PenetapanKriteriaKemungkinanValuesDto[];
}

export interface GetByObjectId {
 uraian_penetapan_objek_id: number;
}

export type GetKriteriaKemungkinanByObjectIdServiceModel =
 BaseAPIServiceParam & {
  body: GetByObjectId;
 };
