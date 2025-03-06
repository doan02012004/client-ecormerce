import { z } from "zod";

export const ShipItemFormSchema = z.object({
    min_weight:  z.number({message:"Phải là số"}).min(0,"Nhỏ nhất là gram"),
    max_weight: z.number({message:"Phải là số"}).min(1,"Nhỏ nhất là 1 gram"),
    fee: z.number({message:"Phải là số"}).min(1000,"Nhỏ nhất là 1.000 vnđ"),
})

const ShipItemsFormSchema = z.array(ShipItemFormSchema).superRefine((data,ctx) => {
    if(data.length> 0){
        for(let i = 0 ; i < data.length; i++){
            if(data[i].max_weight <= data[i].min_weight){
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Khoảng giá không hợp lệ"
                })
            }
        }
    }
})
export const shipAddFormSchema = z.object({
    name:z.string().min(5,"Ít nhất 5 ký tự").max(30,"Nhiều nhất 30 ký tự"),
    is_default: z.boolean(),
    estimated_time:z.number({message:"Phải là số"}).min(0,"Nhỏ nhất là 0"),
    status:z.boolean(),
    fee: z.number({message:"Phải là số"}).min(1000,"Nhỏ nhất là 1.000 vnđ"),
    items:ShipItemsFormSchema
})

// form edit
const ShipItemsFormEditSchema = z.array(ShipItemFormSchema.extend({
    _id:z.string().optional(),
    ship_id:z.string().optional()
})).superRefine((data,ctx) => {
    if(data.length> 0){
        for(let i = 0 ; i < data.length; i++){
            if(data[i].max_weight <= data[i].min_weight){
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Khoảng giá không hợp lệ"
                })
            }
        }
    }
})
export const shipEditFormSchema = shipAddFormSchema.omit({items:true}).extend({
    _id:z.string(),
    items:ShipItemsFormEditSchema
})