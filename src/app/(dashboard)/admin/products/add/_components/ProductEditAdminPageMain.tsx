'use client'

// library
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form'
import { IproductFromAdd } from '@/types/product'

//components
import InforbaseProduct from './InforbaseProduct'
import CreateProduct from './CreateProduct'
import { productFormAddSchema } from '@/schemas/product';
import ConfigurationProduct from './ConfigurationProduct';
import { discount } from '@/utils/main';
// import InforDetailProduct from './InforDetailProduct';
import InforShipProduct from './InforShipProduct';

import { useCreateProduct } from '@/hooks/api/product';
import { CustomLoading } from '@/components/web';


const ProductEditAdminPageMain = () => {
    const method = useForm<IproductFromAdd>({
        resolver: zodResolver(productFormAddSchema),
        mode: 'onBlur',
        defaultValues: {
            name: '',
            images: [],
            categories: [],
            description: '',
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
                    sku: '',
                    weight: 0,
                    tiers_index: [],
                    ship: {
                        height: 0,
                        length: 0,
                        width: 0
                    },
                    is_default:true,
                    sold:0,
                }
            ],
            attributes: [],
            weight: 0,
            ship: {
                height: 0,
                length: 0,
                width: 0
            }
        }
    })

    const createProductMutation = useCreateProduct()

    const onSubmit = (data: IproductFromAdd) => {
        createProductMutation.mutate(data)
    }
    return (
        <div>
            {createProductMutation.isPending && (
                <div className='fixed z-40 inset-0 bg-white/40 flex justify-center items-center'>
                    <CustomLoading size={32} />
                </div>
            )}
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-9 *:mb-4'>
                            <h1 className=' uppercase text-base '>Thêm sản phẩm</h1>
                            <InforbaseProduct />
                            <ConfigurationProduct />
                            {/* <InforDetailProduct /> */}
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

export default ProductEditAdminPageMain