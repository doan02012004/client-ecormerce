'use client'
import { Button } from '@/components/ui/button'
import { useCouponUpdate } from '@/hooks/api/coupon'
import { useToast } from '@/hooks/use-toast'
import { couponSchema } from '@/schemas/coupon'
import { Icoupon } from '@/types/coupon'
import { zodResolver } from '@hookform/resolvers/zod'
import React  from 'react'
import { useForm } from 'react-hook-form'

type CouponEditPageMainProps = {
    coupon: Icoupon
}
const CouponEditPageMain = ({coupon}:CouponEditPageMainProps) => {
  
    const {register,handleSubmit,formState:{errors},watch} = useForm<Icoupon>({
        resolver:zodResolver(couponSchema),
        defaultValues: {
            code:coupon.code,
            discount_type:coupon.discount_type,
            name:coupon.name,
            type:coupon.type,
            value_fixed:coupon.value_fixed,
            quantity:coupon.quantity,
            value_percent:coupon.value_percent,
            max:coupon.max,
            min_price:coupon.min_price,
            start_date:coupon.start_date,
            end_date:coupon.end_date
        }
    })
    const updateCouponMutation = useCouponUpdate()
    const {toast} = useToast() 
    const discount_typeWatch = watch('discount_type')
    const onSubmit = (data:Icoupon) => {
        const newStartDate = new Date(data.start_date).getTime()
        const newEndDate = new Date(data.end_date).getTime()
        if(newStartDate > newEndDate || newEndDate< Date.now() ){
            return toast({
                variant:'destructive',
                title:'Thêm mã giảm giá',
                description:"Ngày kết thúc không hợp lý"
            })
        }
        const newData = {
            ...data,
            end_date:newEndDate,
            start_date:newStartDate
        } as Icoupon
        console.log(newData)
        updateCouponMutation.mutate(newData)
    }
    return (
        <div>
            <div className=' grid grid-cols-[auto_300px] gap-6'>
                <form className='bg-white  p-4 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Mã code</label>
                        <div className='w-full'>
                            <input disabled type="text" {...register('code')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.code && (<p className='text-red-500 text-xs'>{errors.code.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Loại mã</label>
                        <div className='w-full'>
                            <select  {...register('type')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`}>
                                <option value="ship">Mã vận chuyển</option>
                                <option value="product">Mã sản phẩm</option>
                            </select>
                            {errors?.type && (<p className='text-red-500 text-xs'>{errors.type.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Loại giảm giá</label>
                        <div className='w-full'>
                            <select {...register('discount_type')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`}>
                                <option value="percent">Phần trăm (%)</option>
                                <option value="fixed">Cố định (vnd)</option>
                            </select>
                            {errors?.discount_type && (<p className='text-red-500 text-xs'>{errors.discount_type.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'><span className='text-red-500'>*</span> Tên mã</label>
                        <div className='w-full'>
                            <input type="text" {...register('name')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.name && (<p className='text-red-500 text-xs'>{errors.name.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Phần trăm giảm(%)</label>
                        <div className='w-full'>
                            <input disabled={discount_typeWatch =='fixed'?true:false} type="number"  {...register('value_percent',{valueAsNumber:true})} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.value_percent && (<p className='text-red-500 text-xs'>{errors.value_percent.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Số tiền giảm(vnd)</label>
                        <div className='w-full'>
                            <input type="number" disabled={discount_typeWatch =='percent'?true:false}  {...register('value_fixed',{valueAsNumber:true})} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.value_fixed && (<p className='text-red-500 text-xs'>{errors.value_fixed.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Số tiền giảm tối đa(vnd)</label>
                        <div className='w-full'>
                            <input disabled={discount_typeWatch =='fixed'?true:false} type="number" {...register('max',{valueAsNumber:true})} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.max && (<p className='text-red-500 text-xs'>{errors.max.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Số tiền tối thiểu đủ điều kiện dùng mã(vnd)</label>
                        <div className='w-full'>
                            <input type="number" {...register('min_price',{valueAsNumber:true})} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.min_price && (<p className='text-red-500 text-xs'>{errors.min_price.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Số lượng</label>
                        <div className='w-full'>
                            <input type="number" {...register('quantity',{valueAsNumber:true})}  className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.quantity && (<p className='text-red-500 text-xs'>{errors.quantity.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Ngày bắt đầu</label>
                        <div className='w-full'>
                            <input type="date" {...register('start_date')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.start_date && (<p className='text-red-500 text-xs'>{errors.start_date.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm'>  <span className='text-red-500'>*</span> Ngày kết thúc</label>
                        <div className='w-full'>
                            <input type="date"   {...register('end_date')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.end_date && (<p className='text-red-500 text-xs'>{errors.end_date.message}</p>)}
                        </div>
                    </div>
                    <div className='text-end'>
                        <Button type='submit'>Cập nhật</Button>
                    </div>
                </form>
                <div>
                    <div className='bg-white p-2'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CouponEditPageMain