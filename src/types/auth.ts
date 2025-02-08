import { z } from "zod";

export const registerSchema = z.object({
    username:z.string().min(2,{
        message: "Username bắt buộc ít nhất 2 ký tự .",
    }),
    email:z.string().email({
        message:"Không đúng định dạng email ."
    }),
    password:z.string().min(6,{
        message: "Mật khẩu ít nhất 6 ký tự .",
    }),
})
export const loginSchema = z.object({
    email:z.string().email({
        message:"Không đúng định dạng email ."
    }),
    password:z.string().min(6,{
        message: "Mật khẩu ít nhất 6 ký tự .",
    }),
})