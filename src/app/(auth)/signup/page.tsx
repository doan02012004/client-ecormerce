'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { RegisterSchema, TypeRegister } from '@/schemas/auth'
import { instance } from '@/utils/config'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'



const SignupPage = () => {
  const { toast } = useToast()
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<TypeRegister>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      phone: '',
      username: ''
    }
  })


  const onSubmit = async (data: TypeRegister) => {
    try {
    const result = await instance.post('/users/register', data)
    if(result.status == 201){
      toast({
        title: "Đăng ký tài khoản",
        description: "Đăng ký tài khoản thành công"
      })
      setTimeout(()=>{
        router.push('/login')
      },500)
    }
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: "Đăng ký tài khoản",
        description: "Đăng ký tài khoản thất bại"
      })
    }
  }
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
      <div className='w-96 border p-3 rounded bg-white'>
        <h3 className='text-center font-semibold text-lg'>Đăng ký</h3>
        <form className='space-y-4 w-full' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className='block text-sm'>Họ và tên</label>
            <input type="text" {...register('username')} id='username' placeholder='Họ và tên...' className='text-sm w-full p-2 border' />
            {errors?.username && (<p className='text-red-500 text-xs'>{errors.username.message}</p>)}
          </div>
          <div>
            <label htmlFor="email" className='block text-sm'>Email</label>
            <input type="text" {...register('email')} id='email' placeholder='Email...' className='text-sm w-full p-2 border' />
            {errors?.email && (<p className='text-red-500 text-xs'>{errors.email.message}</p>)}
          </div>
          <div>
            <label htmlFor="password" className='block text-sm'>Mật khẩu</label>
            <input type="text" {...register('password')} id='password' placeholder='Mật khẩu...' className='text-sm w-full p-2 border' />
            {errors?.password && (<p className='text-red-500 text-xs'>{errors.password.message}</p>)}
          </div>
          <div>
            <label htmlFor="phone" className='block text-sm'>Số điện thoại</label>
            <input type="text" {...register('phone')} id='phone' placeholder='Số điện thoại...' className='text-sm w-full p-2 border' />
            {errors?.phone && (<p className='text-red-500 text-xs'>{errors.phone.message}</p>)}
          </div>
          <div className='flex justify-center items-center'>
            <Button type='submit'>Đăng ký</Button>
          </div>
          <div className='flex justify-between items-center'>
            <a href="/login" className=' block underline hover:text-blue-500'>Đăng Nhập</a>
            <a href="/forgot-password" className=' block underline hover:text-blue-500'>Quên mật khẩu</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage