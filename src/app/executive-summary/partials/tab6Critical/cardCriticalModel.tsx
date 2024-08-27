// $validate = [
//   'exsum_id'              => "required",
//   'ro_id'                 => "required",
//   'start_date'            => "required",
//   'end_date'              => "required",
//   'kategori_proyek_id'    => "required",
//   'values'                => 'required|array|min:1',
//   'values.*.tagging'      => 'required',
// ];

export interface ExsumCriticalReqDto {
  id:number
  exsum_id:number
  ro_id:number
  start_date:string
  end_date:string
  kategori_proyek_id:number
  values:string
}