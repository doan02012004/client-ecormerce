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

export interface Icombinations {
    name:string,
    value:string
} 
export interface Imodel {
    _id?:string,
    name:string,
    combinations:Icombinations[]
    original_price:number,
    discount:number,
    price:number,
    image:string,
    stock:number,
    weight:number,
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

export interface Iproductbase {
    _id:string,
    name:string,
    description:string,
    categories:Icategory[],
    type:'configurable'|'simple',
    status:boolean,
    images:{url:string}[],
    weight:number,

} 
export interface Iproduct extends Iproductbase  {
    options?: IoptionProduct[]|[],
    models?:Imodel[] | [],
    attributes:Iattribute[]|[],
    weight:number,
}

