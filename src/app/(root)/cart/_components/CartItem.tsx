import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CartItem = () => {
    return (
        <div className=' grid-cart *:text-sm'>
            <div className='grid grid-cols-[20px_auto] gap-2.5 items-center'>
                <input type="checkbox" className='size-5' />
                <div className='grid grid-cols-[64px_auto] gap-4'>
                    <div className='h-20 w-full'>
                        <Image src={'/assets/images/ao-len.jpg'} width={100} height={120} className='h-full w-full object-cover' alt='image product' />
                    </div>
                    <div>
                        <h4 className=' line-clamp-2 text-sm mb-3'>Áo Thun 3 Lỗ Nữ 2 Chiếc Lá Vải Cotton Co Giãn 4 Chiều Mặc Đẹp Tôn Dáng, Đa Nặng Mặc Tập GYM, Dạo Phố, Tập Thể Dục SN121 Sally Boutique</h4>
                        <p className=' line-clamp-1 text-xs text-gray-500'>Trắng, XL</p>
                    </div>
                </div>
            </div>
            <div className=' relative w-fit py-3 hidden md:block'>
                <span className='text-xs font-semibold lg:text-sm'>29.200.000đ</span>
                <span className='text-xs text-gray-400 line-through absolute left-full top-0'>32.250.000đ</span>
            </div>
            <div className=' gap-1 items-center hidden md:flex'>
                <button className='border size-6 flex justify-center items-center rounded hover:bg-gray-200'><Minus size={20} /></button>
                <input className='border h-6 w-10 flex justify-center items-center text-center rounded hover:bg-gray-200' type="number" min={1} defaultValue={1} />
                <button className='border size-6 flex justify-center items-center rounded hover:bg-gray-200'><Plus /></button>
            </div>
            <div className='hidden md:block '>
                <span className='text-red-500 text-xs font-semibold lg:text-sm'>30.000.000đ</span>
            </div>
            <button className='hover:text-red-500'><Trash /></button>
        </div>
    )
}

export default CartItem