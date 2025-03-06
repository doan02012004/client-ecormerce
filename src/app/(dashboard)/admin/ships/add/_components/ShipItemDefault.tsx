import { IshipFormAdd } from '@/types/ship'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type ShipItemDefaultProps ={
    register: UseFormRegister<IshipFormAdd>,
    errors:FieldErrors<IshipFormAdd>
}
const ShipItemDefault = ({register,errors}:ShipItemDefaultProps) => {
  return (
    <div className=' gap-4 w-max py-2 px-3 bg-gray-100'>
    <div className='flex flex-col gap-3'>
        <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span>Mặc định</label>
        <div>
            <div className='size-fit relative'>
                <input type="number" {...register(`fee`,{valueAsNumber:true})} placeholder='giá vận chuyển' className={` 'border-red-500'} max-w-96 w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>vnđ</span>
            </div>
            {errors?.fee && (<p className='text-red-500 text-xs'>{errors.fee.message}</p>)}
        </div>
    </div>
  
</div>
  )
}

export default ShipItemDefault