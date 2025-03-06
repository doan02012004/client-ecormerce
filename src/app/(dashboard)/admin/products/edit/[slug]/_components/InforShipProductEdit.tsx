'use client'
import { IproductFormEdit } from '@/types/product'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const InforShipProductEdit = () => {

    const { register, formState: { errors } } = useFormContext<IproductFormEdit>()
    return (
        <div className='px-2 py-4 rounded-lg bg-white'>
            {/* header  */}
            <h2 className=' uppercase text-base mb-10'>Vận chuyển</h2>
            {/* content  */}
            <div className='px-6 flex flex-col gap-4'>
                <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                    <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Trọng lượng (khi đóng gói)</label>
                    <div>
                        <div className='size-fit relative'>
                            <input type="number" {...register('weight' as const, { valueAsNumber: true })} placeholder='trọng lượng' className={` ${errors?.weight && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>gram</span>
                        </div>
                        {errors?.weight && <p className='text-xs text-red-500'>{errors?.weight?.message}</p>}
                    </div>
                </div>
                <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                    <label className='flex text-sm gap-1'>  Thể tích (khi đóng gói)</label>
                    <div className='px-2 py-3 bg-gray-200 grid grid-cols-3 gap-3'>
                        <div>
                            <div className='size-fit relative'>
                                <input type="number" {...register('ship.length' as const, { valueAsNumber: true })} placeholder='chiều dài' className={` ${errors?.ship?.length && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                                <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>cm</span>
                            </div>
                            {errors?.ship?.length && <p className='text-xs text-red-500'>{errors?.ship.length?.message}</p>}
                        </div>
                        <div>
                            <div className='size-fit relative'>
                                <input type="number" {...register('ship.width' as const, { valueAsNumber: true })} placeholder='chiều rộng' className={` ${errors?.ship?.width && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                                <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>cm</span>
                            </div>
                            {errors?.ship?.width && <p className='text-xs text-red-500'>{errors?.ship.width?.message}</p>}
                        </div>
                        <div>
                            <div className='size-fit relative'>
                                <input type="number" {...register('ship.height' as const, { valueAsNumber: true })} placeholder='chiều cao' className={` ${errors?.ship?.height && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                                <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>cm</span>
                            </div>
                            {errors?.ship?.height && <p className='text-xs text-red-500'>{errors?.ship.height?.message}</p>}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-[100px_auto] gap-3 '>
                    <label className='flex text-sm gap-1'> Sku sản phẩm</label>
                    <div>
                        <input type="text" {...register('sku')} placeholder='Sku...' className={` ${errors?.sku && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                        {errors?.sku && <p className='text-xs text-red-500'>{errors?.sku?.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InforShipProductEdit