import { MapPin } from 'lucide-react'
import React from 'react'

const ShippingAddress = () => {
    return (
        <div className='p-4 rounded bg-white mb-4'>
            {/* header  */}
            <div className='flex items-center gap-3 mb-3'>
                <MapPin size={24} className='text-red-500' />
                <h3 className='font-medium text-lg '>Địa chỉ giao hàng</h3>
            </div>
            {/* content  */}
            <div className='flex justify-between '>
                <div>
                    <h5 className='font-semibold flex items-center gap-8'>Bùi Văn Đoàn - 0345908973 <div className='text-xs px-2 py-1 border font-normal text-red-500 border-red-500'>Mặc định</div></h5>
                    <p>Thôn 1, xã Tiến Xuân, huyện Thạch Thất, Hà Nội</p>
                </div>
                <button className='text-blue-500 hover:text-red-500'>Thay đổi</button>
            </div>
        </div>
    )
}

export default ShippingAddress