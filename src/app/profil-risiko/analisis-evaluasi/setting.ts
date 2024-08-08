export type IdentifikasiType = {
 id: number;
 peristiwa: string;
 kategori: string;
 penyebab: string;
 dampak: string;
 lk: number;
 ld: number;
 br: number;
 level: string;
 prioritas: number;
};

export const data: IdentifikasiType[] = [
 {
  id: 1,
  peristiwa: "Rendahnya alokasi anggaran untuk pengelolaan sampah ",
  kategori: "Risiko Ekonomi",
  penyebab:
   "Komitmen kepala daerah berkaitan dengan anggaran yang rendah terhadap sektor pengelolaan persampahan (Jakstranas tidak dipatuhi oleh Pemda)",
  dampak:
   "1. Anggaran dalam pengelolaan sampah di Pemda rata-rata dibawah 1%, 2. Pengelolaan sampah belum menjadi prioritas karena merupakan urusan wajib non layanan dasar, 3. penyelenggaraan pengelolaan sampah tidak optimal, 4. fasilitas pengelolaan sampah tidak optimal, 5. opsi teknologi pengelolaan sampah yang advance tidak bisa diimplmentasikan",
  lk: 5,
  ld: 4,
  br: 22,
  level: "Sangat Tinggi",
  prioritas: 1,
 },
 {
  id: 2,
  peristiwa:
   "Rendahnya pengawasan dan penegakan hukum terhadap penyelenggaraan pengelolaan sampah",
  kategori: "Risiko Tata Kelola",
  penyebab:
   "1. Belum adanya pihak yang bertanggungjawab dalam pengawasan, 2. belum optimalnya fungsi penegakan hukum di sektor persampahan",
  dampak: "Perbaikan kebijakan tidak dapat dilakukan dengan optimal",
  lk: 4,
  ld: 4,
  br: 19,
  level: "Tinggi",
  prioritas: 3,
 },
];

export const riskCategory = [
 "Risiko Lingkungan",
 "Risiko Sosial",
 "Risiko Geopolitik",
 "Risiko Ekonomi",
 "Risiko Teknologi",
];

export const listPeristiwaRisiko = [
 { id: "1", risk: "Potensi peningkatan suku bunga pinjaman" },
 {
  id: "2",
  risk:
   "Potensi keterlambatan Pembangunan 56 Sabo Dam di Merapi melebihi tahun 2026",
 },
 {
  id: "3",
  risk:
   "Pembiayaan APBN dan dukungan pemerintah pusat yang terbatas untuk proyek Sabo Dam di Merapi",
 },
 {
  id: "4",
  risk: "Potensi terjadinya inflasi dan kenaikan harga-harga barang",
 },
 {
  id: "5",
  risk:
   "Perbedaan arahan Presiden terpilih yang tidak ingin melanjutkan proyek Sabo Dam",
 },
 { id: "6", risk: "Sentimen terhadap Pembangunan proyek Sabo Dam Merapi" },
 { id: "7", risk: "Tanah sepanjang Kawasan lereng Merapi dan 3 DAS" },
];

export const listSasaran = [
 { id: "1", target: "Kesehatan untuk Semua" },
 {
  id: "2",
  target: "Meningkatnya kesehatan dan gizi masyarakat",
 },
 {
  id: "3",
  target:
   "Pengeluaran Wisatawan Mancanegara (average spending per arrival) USD 1.600 /kunjungan",
 },
 {
  id: "4",
  target:
   "Produktivitas Tenaga Kerja (di sektor akmamin) Rp 32.648 (Ribu/Orang/Tahun)",
 },
 {
  id: "5",
  target: "Peningkatan Ketersediaan Pangan Nasional",
 },
 {
  id: "6",
  target:
   "Ketahanan Sosial Budaya dan Ekologi (Berketahanan Energi, Air dan Pangan)",
 },
 {
  id: "7",
  target:
   "Ketahanan Sosial Budaya dan Ekologi (IE 15 Lingkungan Hidup Berkualitas) & Meningkatnya timbulan sampah terolah di fasilitas pengolahan sampah",
 },
 {
  id: "8",
  target:
   "Penanganan sampah rumah tangga dan sampah sejenis sampah rumah tangga (hilir) & Berkurangnya jumlah sampah yang diangkut ke Landfill",
 },
];

export const dataSub = [
 {
  id: 1,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
  fisik: "Kemen PUPR",
 },
 {
  id: 2,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
  fisik: "Kemen PPN",
 },
 {
  id: 3,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
  fisik: "Kemenkeu",
 },
 {
  id: 4,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
  fisik: "Kemen PUPR",
 },
 {
  id: 5,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
  fisik: "Kemen PPN",
 },
 {
  id: 6,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
  fisik: "Kemenkeu",
 },
 {
  id: 7,
  ro: "Suplementasi gizi mikro pada balita",
  target: "72,42",
  satuan: "poin",
  anggaran: "Kemen PUPR",
 },
 {
  id: 8,
  ro: "	Tata laksana balita gizi buruk",
  target: "33",
  satuan: "%",
  anggaran: "Kemen PPN",
  fisik: "Kemen PPN",
 },
 {
  id: 9,
  ro: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
  target: "moderat",
  satuan: "indeks",
  anggaran: "Kemenkeu",
  fisik: "Kemenkeu",
 },
];
