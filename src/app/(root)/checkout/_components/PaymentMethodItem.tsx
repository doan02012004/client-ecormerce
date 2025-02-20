import { defaultImage } from '@/utils/main'
import Image from 'next/image'
import React from 'react'

const PaymentMethodItem = () => {
    return (
        <button className='basis-1/3 py-2 px-4 rounded border bg-blue-50 hover:shadow '>
            <div className='flex gap-4'>
                <div className='w-max'>
                    <Image src={defaultImage()} width={48} height={48} className='object-cover w-full h-full' alt='vnpay' />
                </div>
                <span className='text-start text-sm'>Thanh toán khi nhận hàng</span>
            </div>
        </button>
    )
}

export default PaymentMethodItem