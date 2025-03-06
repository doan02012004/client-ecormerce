

import { IbrandDataForm } from '@/types/brand'
import React from 'react'


type InforDetailItemProductProps = {
    options: IbrandDataForm
}

const InforDetailItemProduct = ({ options }: InforDetailItemProductProps) => {
   
    return (
        <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
            <label className='flex text-sm gap-1'>  {options?.required && (<span className='text-red-500'>*</span>)} {options?.title}</label>
            <select name={options.name} className='border px-3 py-2 text-sm *:text-sm'>
                <option value="">Chọn...</option>
                {options.options.map((option) => (
                    <option key={option.label} value={option.label}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default InforDetailItemProduct