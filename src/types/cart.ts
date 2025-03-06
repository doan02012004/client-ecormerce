import { ImodelProductData, Iproductbase } from "./product"


export interface IcartItem {
    _id:string,
    total:number,
    quantity:number,
    product_id: Iproductbase,
    variant_id: ImodelProductData,
    url_path:string
}

export interface Icart {
    _id:string,
    user_id:string,
    items:IcartItem[],
    total:number
}