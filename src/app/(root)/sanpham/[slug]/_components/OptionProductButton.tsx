import Image from 'next/image'
import React from 'react'
import ao from '@/assets/images/ao-len.jpg'
import { SelectedTick } from '@/components/web'

const OptionProductButton = () => {
    return (
        <button className='selected-tick-border border rounded-md flex items-center gap-x-2 min-h-11 p-2'>
            <div className='overflow-hidden size-9 rounded-md'>
                <Image src={ao} width={100} height={100} alt='option' className='w-full h-full object-cover' />
            </div>
            <span className='block text-sm font-medium text-black'>Trắng</span>
            <SelectedTick />
        </button>
    )
}

export default OptionProductButton