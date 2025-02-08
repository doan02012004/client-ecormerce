import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Imodel, Iproduct } from '@/types/product'



type VariantItemProps  ={
    model:Imodel,
    index:number,
    register:UseFormRegister<Iproduct>,
    errors:FieldErrors<Iproduct>
}

const VariantItem = ({model,index,register,errors}:VariantItemProps) => {

  
  return (
    <div className='grid grid-cols-5 border  group  focus-within:border-blue-500 *:p-1 *:bg-white *:border'>
        <div className='text-sm' >
            {model?.name!==''? model.name: 'Mặc định'}
        </div>
        <div className={`${ errors.models && errors.models[index] && errors.models[index].original_price && 'border-red-500'} `}>
            <input {...register(`models.${index}.original_price`,{valueAsNumber:true})} type='number' className='w-full h-full outline-0 text-xs' placeholder='Giá niêm yết...' />
        </div>
        <div className={`${ errors.models && errors.models[index] && errors.models[index].price && 'border-red-500'} `}>
            <input  {...register(`models.${index}.price`,{valueAsNumber:true})} type='number' className='w-full h-full outline-0 text-xs' placeholder='Giá bán...' />
        </div>
        <div className={`${ errors.models && errors.models[index] && errors.models[index].stock && 'border-red-500'} `}>
            <input {...register(`models.${index}.stock`,{valueAsNumber:true})} type='number' className='w-full h-full outline-0 text-xs' placeholder='Số lượng...' />
        </div>
        <div>
            <input  {...register(`models.${index}.sku`)}  type='text' className='w-full h-full outline-0 text-xs' placeholder='Sku phân loại...' />
        </div>
        
    </div>
  )
}

export default VariantItem