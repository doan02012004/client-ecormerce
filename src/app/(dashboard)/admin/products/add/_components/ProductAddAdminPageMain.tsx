'use client'

// library
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, FieldErrors, FormProvider, useForm, UseFormRegister, UseFormSetValue, WatchInternal } from 'react-hook-form'
import { Iproduct } from '@/types/product'

//components
import InforbaseProduct from './InforbaseProduct'
import CreateProduct from './CreateProduct'
import { productSchema, TypeProduct } from '@/schemas/product';
import ConfigurationProduct from './ConfigurationProduct';
import { discount } from '@/utils/client/main';
import InforDetailProduct from './InforDetailProduct';
import InforShipProduct from './InforShipProduct';
import { z } from 'zod';
import { useCreateProduct } from '@/hooks/api/product';
import { CustomLoading } from '@/components/web';


export type RegisterTypeCreateProduct = UseFormRegister<Iproduct>
export type ErrorsTypeCreateProduct = FieldErrors<Iproduct>
export type WatchTypeCreateProduct = WatchInternal<Iproduct>
export type SetValueTypeCreateProduct = UseFormSetValue<Iproduct>
export type ControlTypeCreateProduct = Control<Iproduct>
const ProductAddAdminPageMain = () => {
    const method = useForm<TypeProduct>({
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
                    discount: discount(0, 0),
                    price: 0,
                    stock: 0,
                    sku: ''
                }
            ],
            attributes: [],
            weight: 0
        }
    })

    const createProductMutation = useCreateProduct()

    const onSubmit = (data: z.infer<typeof productSchema>) => {
        createProductMutation.mutate(data)
    }

    return (
        <div>
            {createProductMutation.isPending && (
                <div className='fixed z-40 inset-0 bg-white/40 flex justify-center items-center'>
                        <CustomLoading size={32} />
                </div>
            )}
            {/* <button onClick={() =>createProductMutation.mutate({name:"hello"}) }>Submit</button> */}
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-9 *:mb-4'>
                            <h1 className=' uppercase text-base '>Thêm sản phẩm</h1>
                            <InforbaseProduct />
                            <ConfigurationProduct />
                            <InforDetailProduct />
                            <InforShipProduct />
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
        </div>
    )
}

export default ProductAddAdminPageMain