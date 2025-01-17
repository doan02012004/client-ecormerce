'use client'

import React from 'react'
import ClassifyProduct from './ClassifyProduct'
import VariantsProduct from './VariantsProduct'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const ConfigurationProduct = () => {
    const productInfor = useSelector((state:RootState) => state.product.productInfor)
    return (
        <div className='px-2 py-4 rounded-lg bg-white'>
            {/* header  */}
            <h2 className=' uppercase text-base mb-10'>Cấu hình sản phẩm</h2>
            <div className='px-6 flex flex-col gap-8'>
                {/* Phân loại  */}
               {productInfor.type =='configurable' && (
                <ClassifyProduct />
               )}
                {/* Các thuộc tính  */}
               <VariantsProduct />
            </div>
        </div>
    )
}

export default ConfigurationProduct