import { IshipFormEdit, IshipItemFormAdd } from '@/types/ship'
import { Trash } from 'lucide-react'
import React from 'react'
import { FieldErrors, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'

type ShipItemFormEditProps = {
    register: UseFormRegister<IshipFormEdit>,
    remove: UseFieldArrayRemove,
    onChangeMaxWeight: (value: number, index: number) => void,
    items: IshipItemFormAdd[],
    errors: FieldErrors<IshipFormEdit>,
    index: number
}
const ShipItemFormEdit = ({ register, remove, index, onChangeMaxWeight, items, errors }: ShipItemFormEditProps) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='grid grid-cols-3 gap-4 max-w-3xl py-2 px-1 bg-gray-100'>
                <div className='flex flex-col gap-3'>
                    <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Từ</label>
                    <div>
                        <div className='size-fit relative'>
                            <input disabled type="number" {...register(`items.${index}.min_weight`, { valueAsNumber: true })} placeholder='trọng lượng' className={`${errors.items && errors.items[index] && errors.items[index].min_weight && 'border-red-500'}  w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>gram</span>
                        </div>
                        {errors.items && errors.items[index] && errors.items[index].min_weight && (<p className='text-red-500 text-xs'>{errors.items[index].min_weight.message}</p>)}
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Đến</label>
                    <div>
                        <div className='size-fit relative'>
                            <input type="number" {...register(`items.${index}.max_weight`, { valueAsNumber: true, onChange: (event) => onChangeMaxWeight(Number(event.target.value), index) })} placeholder='trọng lượng' className={` ${errors.items && errors.items[index] && errors.items[index].max_weight && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>gram</span>
                        </div>
                        {errors.items && errors.items[index] && errors.items[index].max_weight && (<p className='text-red-500 text-xs'>{errors.items[index].max_weight.message}</p>)}
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Giá</label>
                    <div>
                        <div className='size-fit relative'>
                            <input type="number" {...register(`items.${index}.fee`, { valueAsNumber: true })} placeholder='giá vận chuyển' className={` ${errors.items && errors.items[index] && errors.items[index].fee && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>vnđ</span>
                        </div>
                        {errors.items && errors.items[index] && errors.items[index].fee && (<p className='text-red-500 text-xs'>{errors.items[index].fee.message}</p>)}
                    </div>
                </div>
            </div>
            {items.length - 1 == index && (<Trash onClick={() => remove(index)} className=' cursor-pointer hover:text-red-500' />)}
        </div>
    )
}

export default ShipItemFormEdit