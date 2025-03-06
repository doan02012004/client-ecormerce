import { z } from "zod";
import { categoriesSchema } from "./category";

export const productBaseSchema = z.object({
    name: z.string().min(2, {
        message: "Name bắt buộc ít nhất 2 ký tự .",
    }).max(120, {
        message: "Tên sản phẩm chỉ được nhập tối đa 120 kí tự"
    }).regex(/^\S.*\S$|^\S$/, {
        message: "Không được có khoảng trắng ở đầu hoặc cuối",
      }),
    description: z.string().min(20, {
        message: "Mô tả bắt buộc ít nhất 20 ký tự .",
    }).max(1000, {
        message: "Mô tả chỉ được nhập tối đa 1000 kí tự"
    }),
    categories: categoriesSchema,
    status: z.boolean(),
    weight: z.number().min(1, {
        message: 'Vui lòng nhập giá trị lớn hơn 0'
    }),
    ship: z.object({
        width: z.number().min(0, {
            message: 'Không nhập giá trị âm'
        }),
        length: z.number().min(0, {
            message: 'Không nhập giá trị âm'
        }),
        height: z.number().min(0, {
            message: 'Không nhập giá trị âm'
        })
    }),
    sku: z.string().optional(),
    images: z.array(z.object({
        url: z.string().min(1)
    })).min(1, {
        message: "Cần ít nhất 2 ảnh"
    }).max(9, {
        message: 'Tối đa 9 ảnh'
    }),
})
const productOptionValueBaseSchema = z.object({
    label: z.string().min(1, "Vui lòng không để trống").max(20,"Tối đa 20 ký tự").regex(/^\S.*\S$|^\S$/, {
        message: "Không được có khoảng trắng ở đầu hoặc cuối",
      }),
    image: z.string(),
})
export const productOptionBaseSchema = z.object({
    name: z.string().min(1, "Vui lòng không để trống").max(14,"Tối đa 14 ký tự").regex(/^\S.*\S$|^\S$/, {
        message: "Không được có khoảng trắng ở đầu hoặc cuối",
      }),
    is_show_image: z.boolean(),
    values: z.array(productOptionValueBaseSchema)
})

const productOptionFormAddSchema = productOptionBaseSchema.superRefine((data, ctx) => {
    if (data.is_show_image == true) {
        const check = data.values.some((val) => val.image == '')
        if (check) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Bạn chưa chọn ảnh"
            })
        }
    }
})
export const productModelBaseSchema = z.object({
    name: z.string(),
    image: z.string(),
    product_id: z.string().optional(),
    original_price: z.number().min(1),
    price: z.number().min(1),
    stock: z.number().min(0),
    tiers_index: z.array(z.number()),
    sku: z.string(),
    discount: z.number().min(0),
    ship: z.object({
        width: z.number().min(0, {
            message: 'Không nhập giá trị âm'
        }),
        length: z.number().min(0, {
            message: 'Không nhập giá trị âm'
        }),
        height: z.number().min(0, {
            message: 'Không nhập giá trị âm'
        })
    }),
    is_default:z.boolean(),
    weight: z.number().min(0)
})


// schema form add product
export const productFormAddSchema = productBaseSchema.extend({
    options: z.array(productOptionFormAddSchema),
    models: z.array(productModelBaseSchema)
})



// schema form edit product
const productOptionValueFormEditSchema = productOptionValueBaseSchema.extend({
    _id:z.string().optional()
})
const productOptionFormEditSchema = productOptionBaseSchema.omit({values:true}).extend({
    _id:z.string().optional(),
    values:z.array(productOptionValueFormEditSchema)
}).superRefine((data, ctx) => {
    if (data.is_show_image == true) {
        const check = data.values.some((val) => val.image == '')
        if (check) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Bạn chưa chọn ảnh"
            })
        }
    }
})
//188239655015 188239655015 188239655016
const productModelFormEditSchema = productModelBaseSchema.extend({
    _id:z.string().optional()
})
export const productFormEditSchema = productBaseSchema.omit({images:true}).extend({
    _id:z.string(),
    options: z.array(productOptionFormEditSchema),
    models: z.array(productModelFormEditSchema),
    images:z.array(z.object({
        _id:z.string().optional(),
        url: z.string().min(1)
    }))
})





