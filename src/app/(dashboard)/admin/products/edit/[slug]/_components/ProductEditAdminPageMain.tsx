'use client'

// library
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form'

//components
import CreateProduct from './CreateProduct'
import { productEditAdminShema, TypeProductEdit } from '@/schemas/product';
import ConfigurationProduct from './ConfigurationProduct';
import InforDetailProduct from './InforDetailProduct';
import InforShipProduct from './InforShipProduct';
import { z } from 'zod';
import { useUpdateProduct } from '@/hooks/api/product';
import { CustomLoading } from '@/components/web';
import InforbaseProductEdit from './InforbaseProductEdit';
// import { useToast } from '@/hooks/use-toast';

type ProductEditAdminPageMainProps = {
    product:TypeProductEdit
}
const ProductEditAdminPageMain = ({product}:ProductEditAdminPageMainProps) => {
    const method = useForm<TypeProductEdit>({
        resolver: zodResolver(productEditAdminShema),
        mode: 'onBlur',
        defaultValues: product
    })
    // const {toast} = useToast()
    const updateProductMutation = useUpdateProduct()

    const onSubmit = (data: z.infer<typeof productEditAdminShema>) => {
    //     console.log(method.formState.isDirty)
    //    if(!method.formState.isDirty){
    //     toast({
    //         variant: "destructive",
    //         title: "Cập nhật sản phẩm",
    //         description: "Bạn chưa có thay đổi nào !",
    //         duration: 3000
    //     })
    //     return
    //    }
       updateProductMutation.mutate(data)
    }
    
    return (
        <div>
            {updateProductMutation.isPending && (
                <div className='fixed z-40 inset-0 bg-white/40 flex justify-center items-center'>
                        <CustomLoading size={32} />
                </div>
            )}

            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-9 *:mb-4'>
                            <h1 className=' uppercase text-base '>Cập nhật sản phẩm</h1>
                            <InforbaseProductEdit />
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

export default ProductEditAdminPageMain