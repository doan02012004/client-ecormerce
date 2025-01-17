
import React from 'react'

import Rate from '@/components/web/Rate'

import { CustomCard } from '@/app/(root)/_components'
import DescriptionProduct from './DescriptionProduct'
import { Button } from '@/components/ui/button'
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import OptionsProduct from './OptionsProduct'
const InforProduct = () => {
    return (
        <div className=' basis-[60%] '>
            <div className='p-3 bg-white rounded-lg w-full mb-4'>
                {/* name  */}
                <h2 className='text-lg font-medium text-black mb-2'>Áo Thun 3 Lỗ Nữ 2 Chiếc Lá Vải Cotton Co Giãn 4 Chiều Mặc Đẹp Tôn Dáng, Đa Nặng Mặc Tập GYM, Dạo Phố, Tập Thể Dục SN121 Sally Boutique</h2>
                {/* rate  */}
                <div className='flex items-center gap-x-2 mb-2'>
                    <span className='block text-sm text-black'>5.0</span>
                    <Rate number={5} />
                    <span className='block text-sm text-gray-500'>(100)</span>
                    <div className='w-px h-3 bg-gray-500'></div>
                    <span className='block text-sm text-gray-500'>Đã bán 20</span>
                </div>
                {/* price  */}
                <div className='flex gap-x-3 mb-2'>
                    <span className='block text-lg font-semibold text-black'>220.000đ</span>
                    <span className='block text-base text-gray-400 line-through'>220.000đ</span>
                </div>
                {/* option  */}
                <div className='mb-6'>
                    <OptionsProduct />
                </div>
                <div className=' flex gap-2 items-center mb-6'>
                    <button className='border size-9 flex justify-center items-center rounded-lg hover:bg-gray-200'><Minus size={20} /></button>
                    <input className='border h-9 w-11 flex justify-center items-center text-center rounded-lg hover:bg-gray-200' type="number" min={1} defaultValue={1} />
                    <button className='border size-9 flex justify-center items-center rounded-lg hover:bg-gray-200'><Plus /></button>
                </div>
                <div className='flex items-center gap-4 mb-6'>
                    <Button>Thêm giỏ hàng <ShoppingCart /></Button>
                    <Button>Mua ngay</Button>
                    <Button className='text-red-500 bg-white hover:bg-blue-100'><Heart /></Button>
                </div>
            </div>
            <CustomCard
                title='Thông tin chi tiết'
                className='mb-4'
            >
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
            </CustomCard>
            <DescriptionProduct />
        </div>
    )
}

export default InforProduct