'use client'

import { useValidateProductconfigurable, useValidateProductInfor } from '@/hooks/web/product'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const ProgressProduct = () => {
    const productInfor = useSelector((state: RootState) => state.product.productInfor)
    const productModels = useSelector((state: RootState) => state.product.productModels)
    const productOptions = useSelector((state: RootState) => state.product.productOptions)
    const checkInfor = useValidateProductInfor(productInfor)
    const checkModels = useValidateProductconfigurable(productInfor,productOptions,productModels)
    return (
        <>
            <h2 className=' uppercase text-base mb-4'>Tiến độ</h2>
            <div className='mb-4'>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-black'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                   {checkInfor? (
                     <span className='text-xs text-green-500'>Hoàn thành</span>
                   ): (
                    <span className='text-xs text-red-500'>Chưa xong</span>
                   )}
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-black'></div>
                    <span className='text-sm'>Cấu hình sản phẩm</span>
                    -
                    {checkModels? (
                     <span className='text-xs text-green-500'>Hoàn thành</span>
                   ): (
                    <span className='text-xs text-red-500'>Chưa xong</span>
                   )}
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-black'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                    <span className='text-xs text-green-500'>Hoàn thành</span>
                </div>
            </div>
        </>
    )
}

export default ProgressProduct