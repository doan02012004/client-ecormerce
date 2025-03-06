export interface IshipItemFormAdd {
    id: string,
    min_weight: number,
    max_weight: number,
    fee: number,
}

export interface IshipFormAdd {
    name: string,
    is_default: boolean,
    estimated_time: number,
    status: boolean,
    fee: number,
    items: IshipItemFormAdd[]
}

export type IshipInfo  = Omit<IshipFormAdd,'items'> & {
    _id:string
}

export interface IshipFormEdit extends IshipFormAdd {
    _id:string
}