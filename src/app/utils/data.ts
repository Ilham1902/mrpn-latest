export const listKemungkinan = [
 { id: "1", value: "1", label: "Kemungkinan 1" },
 { id: "2", value: "2", label: "Kemungkinan 2" },
 { id: "3", value: "3", label: "Kemungkinan 3" },
 { id: "4", value: "4", label: "Kemungkinan 4" },
 { id: "5", value: "5", label: "Kemungkinan 5" },
];

export const listDampak = [
 { id: "1", value: "1", label: "Dampak 1" },
 { id: "2", value: "2", label: "Dampak 2" },
 { id: "3", value: "3", label: "Dampak 3" },
 { id: "4", value: "4", label: "Dampak 4" },
 { id: "5", value: "5", label: "Dampak 5" },
];

export const listTriwulan = [
 "Triwulan 1 (Jan - Mar)",
 "Triwulan 2 (Apr - Mei)",
 "Triwulan 3 (Jul - Sep)",
 "Triwulan 4 (Okt - Des)",
 "Tahun 2025",
 "Tahun 2026",
 "Tahun 2027",
 "Tahun 2028",
 "Tahun 2029",
];

export const listRisiko = [
 "Risiko Lingkungan",
 "Risiko Sosial",
 "Risiko Geopolitik",
 "Risiko Ekonomi",
 "Risiko Teknologi",
];

export const listEntitasUtama = [
 "Kementerian Kesehatan",
 "Kementerian PUPR",
 "Kementerian Perindustrian",
];

export const listEntitasPendukung = ["Kementerian Pertanian", "BPOM", "Simas"];

export const listTahun = ["2025", "2026", "2027", "2028", "2029"];

export const listLevelKemungkinan = [
 "1 - Sangat rendah",
 "2 - Rendah",
 "3 - Sedang",
 "4 - Tinggi",
 "5 - Sangat Tinggi",
];

export interface OptionKebijakan {
 id: string;
 value: string;
 label: string;
}

export const listKebijakan: OptionKebijakan[] = [
 { id: "1", value: "1", label: "Janpres" },
 { id: "2", value: "2", label: "SDGs" },
 { id: "3", value: "3", label: "Dekon" },
 { id: "4", value: "4", label: "DAK" },
 { id: "5", value: "5", label: "PEN" },
 { id: "6", value: "6", label: "RPJPN" },
 { id: "7", value: "7", label: "RPJMN" },
 { id: "8", value: "8", label: "RKP" },
 { id: "9", value: "9", label: "Major Project" },
 { id: "10", value: "10", label: "Astacita" },
 { id: "11", value: "11", label: "Renstra" },
 { id: "12", value: "12", label: "RKPD" },
 { id: "13", value: "13", label: "8 Quick Wins" },
 { id: "14", value: "14", label: "10 Game Changer" },
 { id: "15", value: "15", label: "45 Indikator Utama Pembangunan" },
];
