export const FormatIDR = (value:number) => {
  return new Intl.NumberFormat('en-ID', { style: 'currency', currency: 'IDR' }).format(value)
}

export const FormatCurrency = (angka:string) => {
  const number_string = angka.replace(/[^,\d]/g, '').toString();
  const split   		= number_string.split(',');
  const mod     		= split[0].length % 3;
  let rupiah     	    = split[0].substring(0,mod)
  const ribuan     	= split[0].substring(mod).match(/\d{3}/gi);

  if(ribuan){
    const separator = mod ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }
  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return rupiah;
}