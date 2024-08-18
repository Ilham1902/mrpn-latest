export type KpType = {
 kode_kp: string;
 kp: string;
};

export type TemaType = {
 kode_tema: string;
 namaTema: string;
 list_kp: [
  {
   kode_kp: string;
   kp: string;
  }
 ];
};

export type ExsumType = {
 kp: string;
 bg_fakta: React.ReactNode;
 bg_goals: React.ReactNode;
 bg_tagging: {
  kebijakan: string;
  keterangan: string;
 };
 bg_segment: React.ReactNode;
 profil_cascading: [
  {
   outcome: string;
   sasaran: string;
   highlight: boolean;
  }
 ];
 profil_ro: [
  {
   kl: string;
   ro: string;
   target: string;
   anggaran: string;
  }
 ];
 profil_stakeholder: React.ReactNode;
 profil_pendanaan: [
  {
   jumlahPerTahun: [
    {
     tahun: string;
     jumlah: string;
    }
   ];
   sumber_dana_apbn: string;
   sumber_dana_non_apbn: string;
   kesiapan_pendanaan: React.ReactNode;
  }
 ];
 policy_roadmap: React.ReactNode;
 policy_profil_ro_kunci: [
  {
   kl_utama: string;
   kl_kontributor: string;
   nomenklatur: string;
   target: string;
   anggaran: string;
   sumberAnggaran: string;
  }
 ];
 policy_critical_path: React.ReactNode;
};

export const data: ExsumType[] = [
 {
  kp: "string",
  bg_fakta: "<>makan</>",
  bg_goals: " {<>Tes</>}",
  bg_tagging: {
   kebijakan: "string",
   keterangan: "string",
  },
  bg_segment: " {<>Tes</>}",
  profil_cascading: [
   {
    outcome: "string",
    sasaran: "string",
    highlight: true,
   },
  ],
  profil_ro: [
   {
    kl: "string",
    ro: "string",
    target: "string",
    anggaran: "string",
   },
  ],
  profil_stakeholder: " {<>Tes</>}",
  profil_pendanaan: [
   {
    jumlahPerTahun: [
     {
      tahun: "string",
      jumlah: "string",
     },
    ],
    sumber_dana_apbn: "string",
    sumber_dana_non_apbn: "string",
    kesiapan_pendanaan: " {<>Tes</>}",
   },
  ],
  policy_roadmap: " {<>Tes</>}",
  policy_profil_ro_kunci: [
   {
    kl_utama: "string",
    kl_kontributor: "string",
    nomenklatur: "string",
    target: "string",
    anggaran: "string",
    sumberAnggaran: "string",
   },
  ],
  policy_critical_path: " {<>Tes</>}",
 },
];

export const stakeholderPendukung = [
 {
  id: 1,
  value: "BPOM",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955901/mrpn/company_logo/logo_bpom_ktik6o.png",
 },
 {
  id: 2,
  value: "Kementan",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956186/mrpn/company_logo/logo_kementan_de8q7e.png",
 },
];

export const stakeholderUtama = [
 {
  id: 1,
  value: "Kemenkes",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956185/mrpn/company_logo/logo_kemenkes_k99chv.png",
 },
 {
  id: 2,
  value: "Kemenpupr",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725384/mrpn/company_logo/logo_pu_iz386d.png",
 },
];

export const stakeholderMonitoring = [
 {
  id: 1,
  value: "Kemenppn",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711964917/mrpn/company_logo/logo_bappenas_gwhnut.png",
 },
 {
  id: 2,
  value: "Puskesmas",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956111/mrpn/company_logo/logo_puskesmas_ckdzmi.png",
 },
];

export const stakeholderKoordinasi = [
 {
  id: 1,
  value: "Gemah",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725536/mrpn/company_logo/logo_gemah_ueqink.png",
 },
 {
  id: 2,
  value: "Jaya Raya",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725384/mrpn/company_logo/logo_jaya_p7hnyk.png",
 },
 {
  id: 3,
  value: "Swatantra",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725384/mrpn/company_logo/logo_swatantra_jq1s4e.png",
 },
];

export const listSelectKp = [
 {
  id: "4",
  value: "4",
  name: "01 - Transformasi Sosial",
  group: "AP",
 },
 {
  id: "5",
  value: "5",
  name: "01.01 - Peningkatan Kesehatan dan Gizi Masyarakat",
  group: "PP",
 },
 {
  id: "1",
  value: "1",
  name: "01.01.01.01.01 - Penurunan Stunting",
  group: "KP",
 },
 {
  id: "2",
  value: "2",
  name: "01.01.01.01.02 - Penyelesaian Destinasi Pariwisata",
  group: "KP",
 },
 {
  id: "3",
  value: "3",
  name: "01.01.01.01.03 - Kawasan Sentra Produksi Pangan Kalimantan Tengah",
  group: "KP",
 },
 {
  id: "7",
  value: "7",
  name: "01.01.01.01.04 - Reformasi Tata Kelola Persampahan",
  group: "KP",
 },
];

export const newListSelectKp = [
 {
  id: "4",
  value: "4",
  name: "AP.01 - Transformasi Sosial",
  group: "AP",
 },
 {
  id: "5",
  value: "5",
  name: "PP.01.01 - Peningkatan Kesehatan dan Gizi Masyarakat",
  group: "PP",
 },
 {
  id: "1",
  value: "1",
  name: "KP.01.01.01 - Penurunan Stunting",
  group: "KP",
 },
 {
  id: "2",
  value: "2",
  name: "KP.01.01.02 - Penyelesaian Destinasi Pariwisata",
  group: "KP",
 },
 {
  id: "3",
  value: "3",
  name: "KP.01.01.03 - Kawasan Sentra Produksi Pangan Kalimantan Tengah",
  group: "KP",
 },
 {
  id: "7",
  value: "7",
  name: "KP.01.01.04 - Reformasi Tata Kelola Persampahan",
  group: "KP",
 },
];

export const dataRowCritical = [
 { type: "string", label: "Task ID" },
 { type: "string", label: "Task Name" },
 { type: "string", label: "Resource" },
 { type: "date", label: "Start Date" },
 { type: "date", label: "End Date" },
 { type: "number", label: "Duration" },
 { type: "number", label: "Percent Complete" },
 { type: "string", label: "Dependencies" },
 { type: "string", role: "tooltip", p: { html: true } }, // Tooltip column
];

export const dataCritical1 = [
 [
  "2014Spring",
  "2014 Spring",
  "spring",
  new Date(2025, 1, 1),
  new Date(2029, 1, 1),
  null,
  100,
  null,
  '<div style="padding:50px;"><strong>Project 2014-2016</strong><br><b>Start:</b> 2014<br><b>End:</b> 2016</div>',
 ],
 [
  "2014Summer",
  "Summer 2014",
  "summer",
  new Date(2025, 1, 1),
  new Date(2029, 1, 1),
  null,
  100,
  null,
  '<div style="padding:10px;"><strong>Project 2014-2016</strong><br><b>Start:</b> 2014<br><b>End:</b> 2016</div>',
 ],
 [
  "2014Autumn",
  "Autumn 2014",
  "autumn",
  new Date(2025, 1, 1),
  new Date(2029, 1, 1),
  null,
  100,
  null,
  '<div style="padding:10px;"><strong>Project 2014-2016</strong><br><b>Start:</b> 2014<br><b>End:</b> 2016</div>',
 ],
 [
  "2014Winter",
  "Winter 2014",
  "winter",
  new Date(2025, 1, 1),
  new Date(2029, 1, 1),
  null,
  100,
  null,
  '<div style="padding:10px;"><strong>Project 2014-2016</strong><br><b>Start:</b> 2014<br><b>End:</b> 2016</div>',
 ],
];

export const listSwotSo = [
 // Strength
 {
  id: "1",
  description:
   "Komitmen global dalam percepatan perbaikan gizi, termasuk penurunan stunting",
 },
 {
  id: "2",
  description:
   "Komitmen nasional: Perpres 72/2021 tentang percepatan penurunan stunting",
 },
 //  Opportunity
 {
  id: "3",
  description:
   "Prevalensi stunting merupakan salah satu indikator dalam Human Capital Index (HCI) atau Indeks Modal Manusia sehingga penurunan stunting akan berpengaruh positif terhadap produktivitas SDM di masa mendatang",
 },
];

export const listSwotSt = [
 // Strength
 {
  id: "1",
  description:
   "Komitmen global dalam percepatan perbaikan gizi, termasuk penurunan stunting",
 },
 {
  id: "2",
  description:
   "Komitmen nasional: Perpres 72/2021 tentang percepatan penurunan stunting",
 },
 //  Threats
 {
  id: "3",
  description: "Pemahaman di lapangan yang bervariasi",
 },
];

export const listSwotWo = [
 // Weakness
 {
  id: "1",
  description:
   "Capaian indikator intervensi spesifik dan sensitif belum mencapai target",
 },
 {
  id: "2",
  description:
   "Pemahaman intervensi stunting belum fokus pada upaya pencegahan",
 },
 {
  id: "3",
  description: "Tata kelola program belum berjalan optimal",
 },
 //  Opportunity
 {
  id: "4",
  description:
   "Prevalensi stunting merupakan salah satu indikator dalam Human Capital Index (HCI) atau Indeks Modal Manusia sehingga penurunan stunting akan berpengaruh positif terhadap produktivitas SDM di masa mendatang",
 },
];

export const listSwotWt = [
 // Weakness
 {
  id: "1",
  description:
   "Capaian indikator intervensi spesifik dan sensitif belum mencapai target",
 },
 {
  id: "2",
  description:
   "Pemahaman intervensi stunting belum fokus pada upaya pencegahan",
 },
 {
  id: "3",
  description: "Tata kelola program belum berjalan optimal",
 },
 //  Threats
 {
  id: "4",
  description: "Pemahaman di lapangan yang bervariasi",
 },
];

export const listTagProP = [
 {
  id: "1",
  description:
   "Pembinaan dan penyadartahuan masyarakat terkait pengelolaan sampah",
 },
 {
  id: "2",
  description: "Peningkatan Kapasitas Bank Sampah dan Mitra 3R",
 },
 {
  id: "3",
  description: "Pengumpulan sampah terpilah dan terjadwal",
 },
 {
  id: "4",
  description:
   "Pembangunan Fasilitas Pengolahan Sampah berbasis 3R oleh Pemerintah Pusat",
 },
 {
  id: "5",
  description:
   "Pembangunan Fasilitas Pengolahan Sampah Berbasis 3R oleh Pemerintah Daerah",
 },
 {
  id: "6",
  description:
   "Peningkatan kapasitas pengelolaan sampah oleh pemerintah daerah",
 },
];

export const listEntity = [
 {
  id: "1",
  instance: "Kementerian KKP",
 },
 {
  id: "2",
  instance: "Kementerian PPN/Bappenas",
 },
 {
  id: "3",
  instance: "Kementerian Keuangan",
 },
 {
  id: "4",
  instance: "Kementerian PUPR",
 },
 {
  id: "6",
  instance: "Kementerian Sosial",
 },
];
