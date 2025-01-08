import Image from 'next/image'
import React from 'react'
import anh from '@/assets/images/tat-adidas.jpg'
import Rate from '@/components/web/Rate'
import Link from 'next/link'


const Product = () => {
  return (
    <Link href={'/sanpham/1'}>
      <div className=' cursor-pointer min-h-64 max-w-52 w-full rounded-lg border hover:shadow hover:shadow-gray-300'>
        <div className='w-full h-40 overflow-hidden mb-2'>
          <Image src={anh} width={200} height={200} alt='ảnh sản phẩm' className='w-full h-full object-cover' />
        </div>
        <div className='px-2'>
          <h5 className='text-sm line-clamp-2 mb-1'>Tất vớ Adidas - tất chất lượng cao với nhiều loại màu sắc khác nhau</h5>
          <Rate number={4.5} className='mb-2' />
          <div className='flex gap-x-2'>
            <span className='block text-red-600 text-sm'>200.000đ</span>
            <span className='block text-gray-400 text-xs line-through'>300.000đ</span>
          </div>
          <span className='text-xs'>Đã bán:1000</span>
        </div>
      </div>
    </Link>
  )
}

export default Product