
export interface IcouponBase {
    name: string,
    code: string,
    type: 'ship'|'product',
    discount_type: 'percent'|'fixed',
    min_price:number,
    value_percent: number,
    value_fixed: number,
    quantity:number,
    max: number,
    start_date: string|number ,
    end_date: string|number
}

export interface Icoupon extends IcouponBase {
    _id:string
}