
import React from 'react'

const ShippingMethodItem = () => {
    return (
        <div className=' cursor-pointer px-4 p-2 border rounded-md bg-blue-50 hover:shadow hover:shadow-blue-100'>
            <div className='mb-1 flex items-center justify-between'>
                <h5 className='text-base'>Giao hàng tiết kiệm</h5>
                <div className='w-fit px-2 py-1 border bg-white text-xs'>
                    25.000đ
                </div>
            </div>
            <div className='flex items-center gap-2 *:text-sm'>
                <span>Dự kiến nhận hàng:</span>
                <span className='text-green-600'>Thứ 3 - ngày 02/01</span>
            </div>
        </div>
    )
}

export default ShippingMethodItem