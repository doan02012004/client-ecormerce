import { Icombinations, Imodel, Iproductbase } from "./product"
type newCombinations = Icombinations & {_id:string}
export type IvariantCart = Omit<Imodel,"_id"|"sku"|"combinations"> & {_id:string,sku:string,combinations:newCombinations[]}
export interface IcartItem {
    _id:string,
    total:number,
    quantity:number,
    product_id: Iproductbase|null,
    variant_id: IvariantCart|null,
    url_path:string
}

export interface Icart {
    _id:string,
    user_id:string,
    items:IcartItem[],
    total:number
}