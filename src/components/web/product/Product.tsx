import Image from 'next/image'
import React from 'react'
import Rate from '@/components/web/Rate'
import Link from 'next/link'
import { TypeProductComponent } from '@/schemas/product'
import { formatPrice } from '@/utils/main'

type ProductProps = {
  product:TypeProductComponent
}

const Product = ({product}:ProductProps) => {
  return (
    <Link className='block' href={product?.url_path??''}>
      <div className='bg-white cursor-pointer h-full max-w-52 w-full rounded border hover:shadow hover:shadow-gray-300'>
        <div className='w-full h-40 overflow-hidden mb-2'>
          <Image src={product?.images[0]?.url} width={200} height={200} alt={product?.name} className='w-full h-full object-cover' />
        </div>
        <div className='px-2'>
          <h5 className='text-sm line-clamp-2 mb-1'>{product?.name}</h5>
          <Rate number={3} className='mb-2' />
          <div className='flex gap-x-2'>
            <span className='block text-red-600 text-sm'>{formatPrice(product?.price)}</span>
            <span className='block text-gray-400 text-xs line-through'>{formatPrice(product?.original_price)}</span>
          </div>
          <span className='text-xs'>{product?.infor_sold?.text}</span>
        </div>
      </div>
    </Link>
  )
}

export default Product