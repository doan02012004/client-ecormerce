import { Icategory } from "./categories";

export interface IoptionProduct {
    _id?:string,
    id?:string,
    name:string,
    is_show_image:boolean,
    values: IvalueOptionProduct[]
}
export interface IvalueOptionProduct {
    _id?:string,
    id?:string,
    label:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image:any
}
export interface Imodel {
    _id?:string,
    name:string,
    original_price:number,
    discount:number,
    price:number,
    image:string,
    stock:number,
    volume:number,
    weight:number,
    height:number,
    width:number,
    length:number,
    sku?:string
}


export interface IproductAtrribute {
    name:string,
    value:string
}

export interface Iattribute {
    id?:string,
    name:string,
    value:string,
}
export interface Iproduct {
    name:string,
    description:string,
    categories:Icategory[],
    type:'configurable'|'simple',
    status:boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images:{url:string}[],
    options?: IoptionProduct[]|[],
    models?:Imodel[] | [],
    attributes:Iattribute[]|[],
    volume:number,
    weight:number,
    height:number,
    width:number,
    length:number,
}

