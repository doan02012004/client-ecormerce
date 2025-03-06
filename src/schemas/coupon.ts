import { z } from "zod";

export const couponSchema = z.object({
    name:z.string().min(1),
    code:z.string().min(1),
    type:z.enum(['ship','product']),
    discount_type:z.enum(['percent','fixed']),
    value_percent:z.number().min(0),
    value_fixed:z.number().min(0),
    max:z.number().min(0),
    quantity:z.number().min(0),
    min_price:z.number().min(0),
    start_date:z.string().min(1),
    end_date:z.string().min(1)
})

