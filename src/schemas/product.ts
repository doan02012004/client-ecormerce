import { z } from "zod";

export const productOptionsSchema = z.array(z.object({
    name: z.string().min(1),
    is_show_image: z.boolean(),
    values: z.array(z.object({
        label: z.string().min(1),
        image: z.string(),
    }))
}))


export const productModelsSchema = z.array(z.object({
    name: z.string(),
    image: z.string(),
    original_price: z.number().min(1),
    price: z.number().min(1),
    stock: z.number().min(0),
    sku: z.string(),
}))

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
    categories: z.array(z.object({
        _id: z.string(),
        name: z.string(),
        parent_id: z.string().nullable(),
    })).optional(),
    type: z.string(),
    images: z.array(z.object({
        url:z.string().min(1)
    })).min(2,{
        message:"Cần ít nhất 2 ảnh"
    }).max(9,{
        message:'Tối đa 9 ảnh'
    }),
    options:productOptionsSchema.optional(),
    models:productModelsSchema
})

