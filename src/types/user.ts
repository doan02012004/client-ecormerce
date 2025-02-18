import { z } from "zod";

export const userSchema = z.object({
    username:z.string(),
    email:z.string(),
    phone:z.string(),
    _id:z.string()
})

export type TypeUser = z.infer<typeof userSchema>