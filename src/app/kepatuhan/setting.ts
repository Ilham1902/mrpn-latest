export const listMaturity = [
 { id: "1", value: "1", label: "Tingkat 1", desc: "Belum sadar risiko" },
 { id: "2", value: "2", label: "Tingkat 2", desc: "Sudah mulai sadar risiko" },
 {
  id: "3",
  value: "3",
  label: "Tingkat 3",
  desc: "Sadar risiko dan risiko terdefinisi",
 },
 {
  id: "4",
  value: "4",
  label: "Tingkat 4",
  desc: "Budaya sadar risiko tercipta dan risiko terkelola",
 },
 {
  id: "5",
  value: "5",
  label: "Tingkat 5",
  desc: "Budaya sadar risiko optimal",
 },
];

export type PemantauanType = {
 peristiwa: string;
 kl_utama: string;
 nr_sebelum: string;
 nr_sesudah: string;
 maturitas: string;
 saran: string;
};

export const data: PemantauanType[] = [
 {
  peristiwa: "Peristiwa risiko 1",
  kl_utama: "Kementerian PPN",
  nr_sebelum: "1",
  nr_sesudah: "3",
  maturitas: "Tingkat 4 - Budaya sadar risiko tercipta",
  saran: "-",
 },
];
