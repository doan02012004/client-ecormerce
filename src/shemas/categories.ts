export interface Icategory {
    name:string,
    slug:string,
    _id?:string,
    children:Icategory[]
}
export interface IcategoryProduct {
    name:string,
    slug:string,
    _id?:string
}