'use client'
import { useAppContext } from '@/app/AppProvider'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { LoginSchema, TypeLogin } from '@/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const { toast } = useToast()
  const router = useRouter()
  const { setUser } = useAppContext()
  const { register, handleSubmit, formState: { errors } } = useForm<TypeLogin>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })


  const onSubmit = async (data: TypeLogin) => {
    try {
      const result = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store',
        body: JSON.stringify(data)
      })
      if (result.status == 200) {
        toast({
          title: "Đăng nhập tài khoản",
          description: "Đăng nhập thành công"
        })
        const data = await result.json()
        setUser(data.user)
        setTimeout(() => {
          router.push('/')
        }, 500)
      }
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: "Đăng nhập tài khoản",
        description: "Đăng nhập thất bại"
      })
    }
  }
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
      <div className='w-96 border p-3 rounded bg-white'>
        <h3 className='text-center font-semibold text-lg'>Đăng Nhập</h3>
        <form className='space-y-4 w-full' onSubmit={handleSubmit(onSubmit)}>
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
          <div className='flex justify-center items-center'>
            <Button type='submit'>Đăng Nhập</Button>
          </div>
          <div className='flex justify-between items-center'>
            <a href="/signup" className=' block underline hover:text-blue-500'>Đăng ký</a>
            <a href="/forgot-password" className=' block underline hover:text-blue-500'>Quên mật khẩu</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage