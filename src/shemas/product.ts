import { IcategoryProduct } from "./categories";

export interface IoptionProduct {
    _id?:string,
    name:string,
    is_show_image:boolean,
    values: IvalueOptionProduct[]
}
export interface IvalueOptionProduct {
    _id?:string,
    label:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image:any
}
export interface Imodel {
    _id?:string,
    name?:string,
    original_price:number,
    price:number,
    discount:number,
    stock:number,
    sku?:string
}


export interface IproductAtrribute {
    name:string,
    value:string
}

export interface Iproduct {
    name:string,
    description:string,
    categories:IcategoryProduct[],
    type:'configurable'|'simple',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images:any[],
    options?: IoptionProduct[]|[],
    models?:Imodel[] | [],
    original_price:number,
    price:number
}
