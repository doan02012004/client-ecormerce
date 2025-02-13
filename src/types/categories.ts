export interface Icategory {
    _id?: string,
    name: string,
    url_thumbnail:string,
    url_path:string,
    display_name:string,
    parent_id: string | null,
    children_count?:number,
    slug: string,
    children?: Icategory[]
}
export interface IcategoryForm {
    _id?: string,
    name: string,
    url_thumbnail:string,
    url_path:string,
    display_name:string,
    parent_id: string | null
}
export interface IcategoryProduct {
    name:string,
    slug:string,
    _id?:string
}