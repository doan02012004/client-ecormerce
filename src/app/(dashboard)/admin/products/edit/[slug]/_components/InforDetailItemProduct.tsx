
import { setProductAttributes } from '@/redux/features/productSlice'
import { RootState } from '@/redux/store'
import { IbrandDataForm } from '@/types/brand'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

type InforDetailItemProductProps = {
    options: IbrandDataForm
}

const InforDetailItemProduct = ({ options }: InforDetailItemProductProps) => {
    const productAttributes = useSelector((state: RootState) => state.product.productAttributes)
    const dispatch = useDispatch()

    const onSetValueAttribute = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        if(value == ''){
            const newAtb = productAttributes.filter((item) => item.name !== name )
            dispatch(setProductAttributes(newAtb))
            return
        }
        const attribute = productAttributes.find((item) => item.name == name)
        if (attribute) {
            const newAtb = productAttributes.map((item) => item.name == name ? { ...item, value: value } : item)
            dispatch(setProductAttributes(newAtb))
        } else {
            dispatch(setProductAttributes([...productAttributes,{name,value}]))
        }
    }
    return (
        <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
            <label className='flex text-sm gap-1'>  {options?.required && (<span className='text-red-500'>*</span>)} {options?.title}</label>
            <select onChange={(e) => onSetValueAttribute(e)} name={options.name} className='border px-3 py-2 text-sm *:text-sm'>
                <option value="">Chọn...</option>
                {options.options.map((option) => (
                    <option key={option.label} value={option.label}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default InforDetailItemProduct