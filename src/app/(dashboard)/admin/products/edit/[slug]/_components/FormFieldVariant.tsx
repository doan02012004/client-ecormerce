'use client'
import { useToast } from '@/hooks/use-toast'
import { TypeProductEdit, TypeProductModelsEdit } from '@/schemas/product'
import { discount } from '@/utils/client/main'
import React, { useCallback, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { z } from 'zod'

interface dataForm {
    original_price: number, price: number, stock: number, sku: string
}

type FormFieldVariantProps = {
    setValue: UseFormSetValue<TypeProductEdit>,
    models: TypeProductModelsEdit
}

const modelValueShema = z.object({
    original_price: z.number().min(1),
    price: z.number().min(1),
    stock: z.number().min(0),
    sku: z.string(),
})

const validateModelValue = (data: dataForm) => {
    const result = modelValueShema.safeParse(data);
    if (!result.success) {
        return false
    }
    return true

}
const FormFieldVariant = ({ models, setValue }: FormFieldVariantProps) => {
    const [modelValue, setModelValue] = useState<dataForm>({
        original_price: 0,
        price: 0,
        stock: 0,
        sku: ''
    })
    const { toast } = useToast()

    const fieldAllDataVariant = useCallback((data: dataForm, models: TypeProductModelsEdit) => {
        const newModels = models.map((model) => {
            return {
                ...model,
                original_price: Number(data.original_price),
                price: Number(data.price),
                stock: Number(data.stock),
                discount: discount(Number(data.original_price), Number(data.price)),
                sku: data?.sku ?? ''
            }

        })
        return newModels
    }, [])
    const onSubmit = () => {
        const check = validateModelValue(modelValue)
        if (!check) {
            toast({
                variant: "destructive",
                title: "Lỗi thêm dữ liệu.",
                description: "Dữ liệu bạn nhập chưa phù hợp.",
            })
            return
        }
        const newVariants = fieldAllDataVariant(modelValue, models)
        setValue('models', newVariants)
    }

    const onChangeFieldInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkName = ['original_price', 'price', 'stock']
        const { name, value } = e.target
        if (checkName.includes(name)) {
            setModelValue({ ...modelValue, [name]: Number(value) })
        } else {
            setModelValue({ ...modelValue, [name]: value })
        }
    }
    return (
        <div className='grid grid-cols-5 gap-3 mb-4'>
            <div>
                <span className='block text-sm'>Giá niêm yết</span>
                <div className={` bg-white border p-1 `}>
                    <input onChange={(e) => onChangeFieldInput(e)} name='original_price' type='number' className={` w-full h-full outline-0 text-sm`} placeholder='Giá niêm yết...' />
                </div>
            </div>
            <div>
                <span className='block text-sm'>Giá bán</span>
                <div className={`bg-white border p-1 `}>
                    <input onChange={(e) => onChangeFieldInput(e)} name='price' type='number' className='w-full h-full outline-0 text-sm' placeholder='Giá bán...' />
                </div>
            </div>
            <div>
                <span className='block text-sm'>SL Kho</span>
                <div className={` bg-white border p-1 `}>
                    <input onChange={(e) => onChangeFieldInput(e)} name='stock' type='number' className='w-full h-full outline-0 text-sm' placeholder='Số lượng...' />
                </div>
            </div>

            <div>
                <span className='block text-sm'>Sku</span>
                <div className={` bg-white border p-1`}>
                    <input onChange={(e) => onChangeFieldInput(e)} name='sku' type='text' className='w-full h-full outline-0 text-sm' placeholder='Sku phân loại...' />
                </div>
            </div>

            <div className='bg-transparent'>
                <button onClick={() => onSubmit()} type='button' className='w-full h-full bg-black text-white'>Thêm dữ liệu</button>
            </div>
        </div>
    )
}

export default FormFieldVariant