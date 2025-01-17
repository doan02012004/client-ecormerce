
import React from 'react'
import FormFieldVariant from './FormFieldVariant'
import VariantItem from './VariantItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'


const VariantsProduct = () => {

    const productModels = useSelector((state:RootState) => state.product.productModels)

    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Các thuộc tính
            </div>
            <div className=' px-2 py-4 bg-gray-200'>
                <FormFieldVariant />
                {
                    productModels.map((model,index:number) => (
                        <VariantItem key={model?.name} index={index} model={model} />
                    ))
                }
            </div>

        </div>
    )
}

export default VariantsProduct