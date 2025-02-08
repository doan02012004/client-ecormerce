'use client'

// library
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, FieldErrors, FormProvider, useForm, UseFormRegister, UseFormSetValue, WatchInternal } from 'react-hook-form'
import { Iproduct } from '@/types/product'

//components
import InforbaseProduct from './InforbaseProduct'
import CreateProduct from './CreateProduct'
import { productSchema } from '@/schemas/product';
import ConfigurationProduct from './ConfigurationProduct';


export type RegisterTypeCreateProduct = UseFormRegister<Iproduct>
export type ErrorsTypeCreateProduct = FieldErrors<Iproduct>
export type WatchTypeCreateProduct = WatchInternal<Iproduct>
export type SetValueTypeCreateProduct = UseFormSetValue<Iproduct>
export type ControlTypeCreateProduct = Control<Iproduct>
const ProductAddAdminPageMain = () => {
    const method = useForm<Iproduct>({
        resolver: zodResolver(productSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            images: [],
            categories: [],
            description: '',
            type: 'simple',
            status: true,
            options: [],
            models: [
                {
                    image: '',
                    name: '',
                    original_price: 0,
                    price: 0,
                    stock: 0,
                    sku: ''
                }
            ]
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(onSubmit)}>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-9 *:mb-4'>
                        <h1 className=' uppercase text-base '>Thêm sản phẩm</h1>
                        <InforbaseProduct />
                        <ConfigurationProduct />
                        {/* 
                    <InforDetailProduct />
                    <InforShipProduct /> */}
                    </div>
                    <div className='sticky top-20 h-max col-span-3 flex flex-col'>
                        <div className=' p-2 rounded-lg bg-white min-h-32'>
                            {/* <ProgressProduct /> */}
                            <CreateProduct />
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default ProductAddAdminPageMain