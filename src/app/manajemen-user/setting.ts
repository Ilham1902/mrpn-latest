import { type MRT_ColumnDef } from "material-react-table";

export type Person = {
 id: number;
 name: string;
 classification: {
  firstName: string;
  lastName: string;
 };
};

export const columns: MRT_ColumnDef<Person>[] = [
 {
  accessorKey: "id",
  header: "No.",
  size: 120,
  grow: false,
 },
 {
  accessorKey: "name",
  header: "Nama User",
  size: 300,
  grow: false,
 },
 {
  accessorFn: (row) =>
   `${row.classification.firstName} ${row.classification.lastName}`,
  header: "Klasifikasi User",
  grow: true,
 },
];

export const data: Person[] = [
 {
  id: 1,
  name: "-",
  classification: {
   firstName: "L1:",
   lastName: "Entitas Utama Unit Pemilik Risiko (UPR)",
  },
 },
 {
  id: 2,
  name: "-",
  classification: {
   firstName: "L1:",
   lastName: "Entitas Pendukung Unit Pemilik Risiko (UPR)",
  },
 },
 {
  id: 3,
  name: "-",
  classification: {
   firstName: "L1:",
   lastName: "Kemenko Unit Pemilik Risiko (UPR)",
  },
 },
 {
  id: 4,
  name: "-",
  classification: {
   firstName: "L1:",
   lastName: "Unit Pengelola Risiko",
  },
 },
 {
  id: 5,
  name: "-",
  classification: {
   firstName: "L2:",
   lastName: "Sekretariat Komite",
  },
 },
 {
  id: 6,
  name: "-",
  classification: {
   firstName: "L2:",
   lastName: "Komite MRPN",
  },
 },
 {
  id: 7,
  name: "-",
  classification: {
   firstName: "L3:",
   lastName: "BPKP",
  },
 },
];

export const dataEmpty = [];
