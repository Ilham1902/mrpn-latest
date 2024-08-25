import {MiscMasterListStakeholderRes} from "@/app/misc/master/masterServiceModel";
import {BaseAPIServiceParam} from "@/lib/core/api/apiModel";
import {
  ExsumRegulationDto,
  GetByExsumId
} from "@/app/executive-summary/partials/tab7Regulation/cardRegulation/cardRegulationModel";

export interface ExsumStakeholderValueDto {
  type:string
  label:string
  value:string
  stakeholder:MiscMasterListStakeholderRes[]
}

export interface ExsumStakeholderReqDto {
  id:number
  exsum_id:number
  values:ExsumStakeholderValueDto[]
}

export const initExsumStakeholderReqDto:ExsumStakeholderReqDto = {
  id: 0,
  exsum_id: 0,
  values: [
    {
      type: "COORDINATION",
      label: "Kementarian Koordinator",
      value:"",
      stakeholder: []
    },
    {
      type: "MAIN_ENTITY",
      label: "Entitas Sektor Utama",
      value:"",
      stakeholder: []
    },
    {
      type: "SUPPORT",
      label: "Entitas Pendukung",
      value:"",
      stakeholder: []
    }
  ]
}

export type ExsumStakeholderResDto = ExsumStakeholderValueDto

  // [
  // {
  //   "id": 2,
  //   "exsum_id": 4,
  //   "type": "COORDINATION",
  //   "value": "Test Koordinator",
  //   "stakeholder": [
  //     {
  //       "id": 1,
  //       "short": "BPOM",
  //       "code": "000",
  //       "value": "Badan Pengawas Obat dan Makanan",
  //       "icon": "https:\/\/res.cloudinary.com\/caturteguh\/image\/upload\/v1711955901\/mrpn\/company_logo\/logo_bpom_ktik6o.png",
  //       "laravel_through_key": 2
  //     }
  //   ]
  // },
  //   {
  //     "id": 3,
  //     "exsum_id": 4,
  //     "type": "MAIN_ENTITY",
  //     "value": "Test Sektor Utama",
  //     "stakeholder": [
  //       {
  //         "id": 2,
  //         "short": "Kementan",
  //         "code": "001",
  //         "value": "Kementerian Pertanian",
  //         "icon": "https:\/\/res.cloudinary.com\/caturteguh\/image\/upload\/v1711956186\/mrpn\/company_logo\/logo_kementan_de8q7e.png",
  //         "laravel_through_key": 3
  //       }
  //     ]
  //   },
  //   {
  //     "id": 4,
  //     "exsum_id": 4,
  //     "type": "SUPPORT",
  //     "value": "Test Pendukung",
  //     "stakeholder": [
  //       {
  //         "id": 3,
  //         "short": "Kementerian LHK",
  //         "code": "002",
  //         "value": "Kementerian Kehutanan & Lingkungan Hidup",
  //         "icon": "https:\/\/res.cloudinary.com\/caturteguh\/image\/upload\/v1711955830\/mrpn\/company_logo\/logo_klhk_wplagd.png",
  //         "laravel_through_key": 4
  //       }
  //     ]
  //   }
  // ]

export type GetStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: GetByExsumId;
};

export type UpdateStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: ExsumStakeholderReqDto;
};

export type DeleteStakeholderByExsumIdServiceModel = BaseAPIServiceParam & {
  body: { id:number };
};