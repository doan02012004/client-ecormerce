import { z } from "zod";
import { categoriesSchema } from "./category";

const productOptionValueSchema = z.object({
    id:z.string().optional(),
    label: z.string().min(1),
    image: z.string(),
})

export const productOptionSchema = z.object({
    name: z.string().min(1),
    id:z.string().optional(),
    is_show_image: z.boolean(),
    values: z.array(productOptionValueSchema)
})

export const productModelSchema = z.object({
    name: z.string(),
    image: z.string(),
    product_id:z.string().optional(),
    original_price: z.number().min(1),
    price: z.number().min(1),
    stock: z.number().min(0),
    combinations:z.array(z.object({
        name:z.string(),
        value:z.string()
    })).optional(),
    sku: z.string(),
    discount: z.number().min(0),
    height: z.number().min(0),
    volume: z.number().min(0),
    length: z.number().min(0),
    weight: z.number().min(0),
    width: z.number().min(0),
})

export const productOptionsSchema = z.array(productOptionSchema)

export const productModelsSchema = z.array(productModelSchema)

export const productSchema = z.object({
    name: z.string().min(2, {
        message: "Name bắt buộc ít nhất 2 ký tự .",
    }).max(120,{
        message:"Tên sản phẩm chỉ được nhập tối đa 120 kí tự"
    }),
    description: z.string().min(20, {
        message: "Mô tả bắt buộc ít nhất 20 ký tự .",
    }).max(1000,{
        message:"Mô tả chỉ được nhập tối đa 1000 kí tự"
    }),
    categories: categoriesSchema,
    type: z.string(),
    status:z.boolean(),
    height: z.number().min(0,{
        message:'Không nhập giá trị âm'
    }),
    volume:z.number().min(0,{
        message:'Không nhập giá trị âm'
    }),
    weight: z.number().min(1,{
        message:'Vui lòng nhập giá trị lớn hơn 0'
    }),
    width: z.number().min(0,{
        message:'Không nhập giá trị âm'
    }),
    length: z.number().min(0,{
        message:'Không nhập giá trị âm'
    }),
    images: z.array(z.object({
        url:z.string().min(1)
    })).min(1,{
        message:"Cần ít nhất 2 ảnh"
    }).max(9,{
        message:'Tối đa 9 ảnh'
    }),
    options:productOptionsSchema.optional(),
    models:productModelsSchema,
    attributes:z.array(z.object(
        {
            name:z.string(),
            value:z.string()
        }
    )).optional()
})

export const progressInforProduct = productSchema.pick({name:true})
export type PickedProgressInforProduct = z.infer<typeof progressInforProduct>;
export type TypeProduct = z.infer<typeof productSchema>;
export type TypeProductModel = z.infer<typeof productModelSchema>;
export type TypeProductModels = z.infer<typeof productModelsSchema>;
export type TypeProductOption = z.infer<typeof productOptionSchema>;
export type TypeProductOptions = z.infer<typeof productOptionsSchema>;
export type TypeProductValueOption = z.infer<typeof productOptionValueSchema>;

