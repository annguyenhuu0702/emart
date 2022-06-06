export const castToVND = (price : any) => {
  price = price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
return price
}