'use client'

import React from 'react'
import InforDetailItemProduct from './InforDetailItemProduct';

const optionDetails = [
    {
        title: 'Thương hiệu',
        name: 'brand',
        multiple: false,
        required: true,
        options: [
            {
                value: 'djhfjdfh',
                label: "Không có thương hiệu"
            }
        ]
    },
    {
        title: 'Phong cách',
        name: 'style',
        multiple: true,
        required: true,
        options: [
            {
                value: 'djhfjdfh',
                label: "Đường phố"
            },
            {
                value: 'djhfjdfdfh',
                label: "Đơn giản"
            },
            {
                value: 'djhfjdfdfdfh',
                label: "Lễ tiệc"
            },
        ]
    }
]
const InforDetailProduct = () => {
    
    return (
        <div className='px-2 py-4 rounded-lg bg-white'>
            {/* header  */}
            <h2 className=' uppercase text-base mb-10'>Thông tin chi tiết</h2>
            {/* content  */}
            <div className='px-6'>
                <div className='grid grid-cols-[100px_auto] gap-3 mb-4'>
                    <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span>Chọn thông tin</label>
                    <div className='flex gap-4 flex-wrap p-3 bg-gray-200 h-60 w-full'>
                       {optionDetails.map((detail) => (
                         <button key={detail.name} type='button' className='bg-white px-2 py-1 flex items-center gap-2 size-fit text-sm hover:bg-gray-300'>{detail.title}</button>
                       ))}
                    </div>
                </div>
                <div className=' flex flex-col gap-4'>
                    {optionDetails.map((options) => (
                        <InforDetailItemProduct key={options.name} options={options} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InforDetailProduct