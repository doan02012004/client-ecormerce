'use client'

import React from 'react'

const ProgressProduct = () => {
   
    return (
        <>
            <h2 className=' uppercase text-base mb-4'>Tiến độ</h2>
            <div className='mb-4'>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-green-500'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                    <span className='text-xs text-green-500'>Hoàn thành</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-green-500'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                    <span className='text-xs text-green-500'>Hoàn thành</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-green-500'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                    <span className='text-xs text-green-500'>Hoàn thành</span>
                </div>
            </div>
        </>
    )
}

export default ProgressProduct