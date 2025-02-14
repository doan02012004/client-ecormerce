'use client'
import React from 'react'
import { Product } from '@/app/(root)/_components'
import { useGetAllProductQuickView } from '@/hooks/api/product'
import Link from 'next/link'
import { CustomLoading } from '@/components/web'


const ContentProductAdminPage = () => {
    const { products, isLoading } = useGetAllProductQuickView({ type_view: 'admin' })
    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-96'>
                <CustomLoading size={30} />
            </div>
        )
    }
    return (
        <div className='min-h-screen px-2 grid grid-cols-6 gap-4 auto-rows-max'>
            {products?.length > 0 && products?.map((product) => (
                <Product key={product?._id} product={product} />
            ))}
            {products?.length == 0 && (
                <div className='w-full col-span-6 *:text-center'>
                    <p className='w-full'>Chưa có sản phẩm nào ! Vui lòng thêm mới <Link href={'/admin/products/add'} className='text-blue-500 hover:underline'>Tại đây</Link></p>
                </div>
            )}
        </div>
    )
}

export default ContentProductAdminPage