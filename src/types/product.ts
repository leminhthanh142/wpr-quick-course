export type ProductData = {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
  productSold: number,
  discount: number
}
export interface CartItemTypes{
  id:string;
  image:string;
  price:number;
  title:string;
  isChecked:boolean;
  onDelete:any;
  onCheck:any
}
