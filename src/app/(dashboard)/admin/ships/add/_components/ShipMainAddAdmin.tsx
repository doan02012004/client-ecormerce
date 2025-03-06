'use client'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { shipAddFormSchema } from '@/schemas/ship'
import { IshipFormAdd } from '@/types/ship'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import ShipItemFormAdd from './ShipItemFormAdd'
import { Plus } from 'lucide-react'
import { genarateId } from '@/utils/main'
import ShipItemDefault from './ShipItemDefault'
import { useShipCreate } from '@/hooks/api/ship'

const ShipMainAddAdmin = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue, control } = useForm<IshipFormAdd>({
        resolver: zodResolver(shipAddFormSchema),
        mode:'onChange',
        defaultValues: {
            name: "",
            estimated_time: 0,
            is_default: false,
            items: [],
            fee: 0,
            status: true
        }
    })
    const shipCreateMutation = useShipCreate()

    const watchItems = watch("items");
    const { fields: itemsFieldArray, append, remove, update } = useFieldArray({
        name: "items",
        control
    })
    const items = itemsFieldArray.map((field, index) => {
        return {
            ...watchItems[index],
            ...field,
        };
    });

    const onAddShipItem = () => {
        if (items.length > 0) {
            append({
                fee: 0,
                max_weight: 0,
                min_weight: Number(watchItems[Number(watchItems.length - 1)].max_weight + 1),
                id: genarateId()
            })
        } else {
            append({
                fee: 0,
                max_weight: 0,
                min_weight: 0,
                id: genarateId()
            })
        }
    }
    const onChangeMaxWeight = (value: number, index: number) => {
        if (index < items.length - 1) {
            update(index + 1, { ...items[index + 1], min_weight: Number(value + 1) })
        }
    }

    const onSubmit = (data:IshipFormAdd) => {
        shipCreateMutation.mutate(data)
    }

    return (
        <div>
            <div>
                <form className='bg-white  p-4 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-xl font-bold'>Thông tin cơ bản</h2>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Tên nhà vận chuyển</label>
                        <div className='w-full'>
                            <input type="text" {...register('name')} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.name && (<p className='text-red-500 text-xs'>{errors.name.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Thời gian giao hàng ước tính (ngày)</label>
                        <div className='w-full'>
                            <input type="number" {...register('estimated_time',{valueAsNumber:true})} className={` text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                            {errors?.estimated_time && (<p className='text-red-500 text-xs'>{errors.estimated_time.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm gap-1' htmlFor='status'>  <span className='text-red-500'>*</span> Trạng thái</label>
                        <div className='w-full'>
                            <Switch id="status" onCheckedChange={(value: boolean) => setValue('status', value)} />
                            {errors?.status && (<p className='text-red-500 text-xs'>{errors.status.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm gap-1' htmlFor='is_default'>  <span className='text-red-500'>*</span> Mặc định</label>
                        <div className='w-full'>
                            <Switch id="is_default" onCheckedChange={(value: boolean) => setValue('is_default', value)} />
                            {errors?.is_default && (<p className='text-red-500 text-xs'>{errors.is_default.message}</p>)}
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_auto] gap-3 '>
                        <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Khoảng giá</label>
                        <div className='space-y-4'>
                            {items.map((item, index) => (
                                <ShipItemFormAdd key={item.id} items={items} errors={errors} register={register} remove={remove} index={index} onChangeMaxWeight={onChangeMaxWeight} />
                            ))}
                            {errors.items && errors.items.root && (<p className='text-red-500 text-xs'>{errors.items.root.message}</p>)}
                            <ShipItemDefault  register={register} errors={errors} />
                            <Button type='button' onClick={() => onAddShipItem()}>Thêm khoảng giá <Plus /></Button>
                        </div>
                    </div>
                    <div className='text-end'>
                        <Button type='submit'>Hoàn tất</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShipMainAddAdmin