import { z } from "zod";

export const categorySchema = z.object({
    _id: z.string().optional(),
    id:z.string().optional(),
    name: z.string(),
    url_thumbnail:z.string(),
    url_path:z.string(),
    parent_id: z.string().nullable(),
    display_name:z.string(),
    children_count:z.number().optional(),
    slug: z.string(),
})

export const categoriesSchema = z.array(categorySchema)



export type TypeCategory = z.infer<typeof categorySchema>
export type TypeCategories = z.infer<typeof categoriesSchema>
