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
            <div className='px-6 flex flex-col gap-4'>
                {optionDetails.map((options) => (
                    <InforDetailItemProduct key={options.name} options={options} />
                ))}

            </div>
        </div>
    )
}

export default InforDetailProduct