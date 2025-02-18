import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string({ message: 'Bắt buộc nhập' }).email({ message: 'Không đúng định dạng email' }),
    username: z.string({ message: 'Bắt buộc nhập' }).min(6, 'Tên ít nhất 6 ký tự'),
    password: z.string({ message: 'Bắt buộc nhập' }).min(6, 'Mật khẩu ít nhất 6 ký tự'),
    phone: z.string().regex(/^(0[3|5|7|8|9])([0-9]{8})$/, {
        message: "Số điện thoại không hợp lệ",
    })
})

export const LoginSchema = RegisterSchema.pick({email:true,password:true})

export type TypeRegister  = z.infer<typeof RegisterSchema> 
export type TypeLogin  = z.infer<typeof LoginSchema> 