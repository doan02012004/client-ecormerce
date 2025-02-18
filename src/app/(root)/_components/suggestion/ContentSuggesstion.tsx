'use client'
import React from 'react'
import Product from '../../../../components/web/product/Product'
import { Button } from '@/components/ui/button'
import { useGetAllProductQuickView } from '@/hooks/api/product'

const ContentSuggesstion = () => {
  const {products} = useGetAllProductQuickView({type_view:'web'})
  return (
    <>
    <div className='grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:mb-6'>
        {products.map((product) => (
          <Product product={product} key={product?._id} />
        ))}
    </div>
    <div className='flex justify-center items-center'>
        <Button variant={'outline'} className='px-5 py-1'>Xem Thêm</Button>
    </div>
    </>
  )
}

export default ContentSuggesstion