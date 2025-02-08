export interface Ibrand {
    _id?:string,
    title:string,
    name:string,
    options:IoptionBrand[]
}

export interface IoptionBrand {
    value:string,
    label:string
}

export interface IbrandDataForm extends Ibrand {
    multiple:boolean,
    required:boolean
}