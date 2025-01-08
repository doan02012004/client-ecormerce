import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MinusIcon, PlusIcon } from 'lucide-react'
import tat from '@/assets/images/tat-adidas.jpg'
const ProductCartItem = () => {
    return (
        <div className='pb-3 border-b h-auto flex gap-x-2'>
            <div className='w-16 h-20 flex-shrink-0'>
                <Image src={tat} width={80} height={80} alt='sản phẩm' className=' object-cover w-full h-full' />
            </div>
            <div>
                <Link href={'/'} className='block overflow-hidden text-ellipsis whitespace-nowrap w-64 text-sm font-semibold mb-1 hover:text-blue-500 hover:underline'>Tất vớ Adidas</Link>
                <p className='text-gray-500 text-xs mb-2'>Size: <span className='font-semibold'>40</span></p>
                <div className='w-full relative'>
                    <div className='flex items-center border px-2 py-1 w-max rounded-lg'>
                        <button className='text-gray-500 hover:text-blue-500'><MinusIcon className='w-4' /></button>
                        <span className='px-3 text-sm'>2</span>
                        <button className='text-gray-500 hover:text-blue-500'><PlusIcon className='w-4' /></button>
                    </div>
                    <span className='block absolute bottom-0 right-0 text-sm font-semibold'>200.000đ</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCartItem