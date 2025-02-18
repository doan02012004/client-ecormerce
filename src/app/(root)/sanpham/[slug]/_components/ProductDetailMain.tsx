'use client'
import React from 'react'
import GalleryProduct from './GalleryProduct'
import InforProduct from './InforProduct'
import { TypeProductDetail } from '@/schemas/product'

type ProductDetailMainProps = {
    product: TypeProductDetail
}

const ProductDetailMain = ({ product }: ProductDetailMainProps) => {
    return (
        <div>
            {/* Gallery and Information  */}
            <div className='w-full flex flex-col gap-4 h-auto mb-4 md:gap-8 md:flex-row'>
                {/* left  */}
                <GalleryProduct product={product} />
                {/* center  */}
                <InforProduct product={product} />
            </div>
            {/* Information Shop  */}
            {/* Comment  */}
            <div className='h-96 w-full bg-white rounded-lg p-3'>
            </div>
        </div>
    )
}

export default ProductDetailMain