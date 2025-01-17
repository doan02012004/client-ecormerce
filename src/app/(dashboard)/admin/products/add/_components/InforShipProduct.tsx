'use client'

import { useToast } from '@/hooks/use-toast'
import { setProductShip } from '@/redux/features/productSlice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const InforShipProduct = () => {

    const {register,formState:{errors},reset} = useForm({
        mode:'onChange'
    })
    const productShip = useSelector((state:RootState) => state.product.productShip)
    const dispatch = useDispatch()
    const {toast} = useToast()
    const onChangeFieldProduct = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        if(Object.keys(errors).length > 0){
            toast({
                variant: "destructive",
                title: "Lỗi thêm dữ liệu.",
                description: "Dữ liệu không hợp lệ.",
            })
            reset(productShip)
            return
        }
        dispatch(setProductShip({...productShip,[name]:Number(value)}))
    }
    return (
        <div className='px-2 py-4 rounded-lg bg-white'>
            {/* header  */}
            <h2 className=' uppercase text-base mb-10'>Vận chuyển</h2>
            {/* content  */}
            <div className='px-6 flex flex-col gap-4'>
                <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                    <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Trọng lượng (khi đóng gói)</label>
                    <div className='size-fit relative'>
                        <input type="number" {...register('weight',{required:true,min:0,onBlur:(e) =>onChangeFieldProduct(e)})} className={`${errors?.weight && 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                        <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>gram</span>
                    </div>
                </div>
                <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                    <label className='flex text-sm gap-1'>  Thể tích (khi đóng gói)</label>
                    <div className='px-2 py-3 bg-gray-200 grid grid-cols-3 gap-3'>
                        <div className='size-fit relative'>
                            <input type="number" placeholder='chiều dài' className='w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500' />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>cm</span>
                        </div>
                        <div className='size-fit relative'>
                            <input type="number" placeholder='chiều rộng' className='w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500' />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>cm</span>
                        </div>
                        <div className='size-fit relative'>
                            <input type="number" placeholder='chiều cao' className='w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500' />
                            <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>cm</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InforShipProduct