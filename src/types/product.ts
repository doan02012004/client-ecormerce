import { Icategory } from "./categories";

// base
export interface IOptionProductValueBase {
    label: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any
}

export interface IoptionProductBase {
    name: string,
    is_show_image: boolean,
    values: IOptionProductValueBase[]
}

export interface IcombinationsBase {
    name: string,
    value: string
}
export interface ImodelProductBase {
    name: string,
    tiers_index: number[]
    original_price: number,
    discount: number,
    price: number,
    image: string,
    stock: number,
    weight: number,
    sku: string,
    ship: {
        height: number,
        length: number,
        width: number,
    },
    sold:number,
    is_default:boolean
}


export interface IproductAtrribute {
    name: string,
    value: string
}

export interface Iattribute {
    id?: string,
    name: string,
    value: string,
}

export interface Iproductbase {
    name: string,
    description: string,
    categories: Icategory[],
    status: boolean,
    images: { url: string }[],
    ship: {
        height: number,
        length: number,
        width: number,
    },
    weight: number,
    sku:string
}
export interface Iproduct extends Iproductbase {
    options: IoptionProductBase[] | [],
    models: ImodelProductBase[] | [],
    attributes: Iattribute[] | [],
    weight: number,
}

// form add
export interface IOptionProductValueFormAdd extends IOptionProductValueBase {
    id: string
}
export type IoptionProductFromAdd = Omit<IoptionProductBase, "values"> & {
    id: string,
    values: IOptionProductValueFormAdd[]
}
export interface ImodelProductFormAdd extends ImodelProductBase {
    id: string
}
export interface IproductFromAdd extends Iproductbase {
    options: IoptionProductFromAdd[] | [],
    models: ImodelProductFormAdd[] | [],
    attributes: Iattribute[] | [],
}

// form edit
export interface IproductFormEdit extends IproductFromAdd {
    _id:string,
}

// data mongo
export interface IOptionProductValueData extends IOptionProductValueBase {
    _id:string
}

export type IoptionProductData = Omit<IoptionProductBase, "values"> & {
    _id: string,
    values: IOptionProductValueData[]
}

export interface ImodelProductData extends ImodelProductBase {
    _id:string
}

// components

export interface IproductDetail extends Iproductbase {
    _id:string,
    options: IoptionProductData[] | [],
    models: ImodelProductData[] | [],
    attributes: Iattribute[] | [],
    price: number,
    original_price:number,
    discount:number,
    rate:number
} 
