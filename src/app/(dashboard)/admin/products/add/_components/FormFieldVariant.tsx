'use client'
import { useToast } from '@/hooks/use-toast'
import { setProductModels } from '@/redux/features/productSlice'
import { RootState } from '@/redux/store'
import { Imodel } from '@/shemas/product'
import { discount } from '@/utils/client/main'
import React, { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

interface dataForm {
    original_price:number,price:number,stock:number,sku:string
}
const FormFieldVariant = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<dataForm>()
    const productModels = useSelector((state:RootState) => state.product.productModels)
    const dispatch = useDispatch()
    const {toast} = useToast()

    const fieldAllDataVariant = useCallback((data:dataForm,models:Imodel[]) =>{
        const newModels = models.map((model) => {
            
           return {
            ...model,
            original_price:Number(data.original_price),
            price:Number(data.price),
            discount:discount(data.original_price,data.price),
            stock:Number(data.stock),
           }

        })
        return newModels
    },[])
    const onSubmit: SubmitHandler<dataForm>= (data:dataForm) =>{
        if(productModels.length === 0)   return toast({
            variant: "destructive",
            title: "Lỗi thêm dữ liệu.",
            description: "Bạn chưa tạo thuộc tính nào.",
        })
        const newVariants = fieldAllDataVariant(data,productModels)
        dispatch(setProductModels(newVariants))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-5 *:p-1 *:bg-white gap-3 *:border  mb-4' action=''>
            <div className={`${errors?.original_price && 'border-red-500'} `}>
                <input {...register('original_price',{required:true,min:0})} type='number' className={` w-full h-full outline-0 text-sm`} placeholder='Giá niêm yết...' />
            </div>
            <div className={`${errors?.price && 'border-red-500'} `}>
                <input  {...register('price',{required:true,min:0})}  type='number' className='w-full h-full outline-0 text-sm' placeholder='Giá bán...' />
            </div>
            <div className={`${errors?.stock && 'border-red-500'} `}>
                <input  {...register('stock',{required:true,min:0})}  type='number' className='w-full h-full outline-0 text-sm' placeholder='Số lượng...' />
            </div>
            <div className={`${errors?.sku && 'border-red-500'} `}>
                <input  {...register('sku')}  type='text' className='w-full h-full outline-0 text-sm' placeholder='Sku phân loại...' />
            </div>
            <div className='bg-transparent'>
                <button className='w-full h-full bg-black text-white'>Thêm dữ liệu</button>
            </div>
        </form>
    )
}

export default FormFieldVariant