
import React from 'react'
import { useToast } from '@/hooks/use-toast'
import { IoptionProductFromAdd, IproductFormEdit } from '@/types/product'
import { Plus, Trash, X } from 'lucide-react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { genarateId } from '@/utils/main'





const ClassifyProductEdit = () => {
    const { register, control, formState: { errors } } = useFormContext<IproductFormEdit>()
    const optionsWatch = useWatch({
        name: "options",
        control
    })

    const { fields: options, remove, append, update } = useFieldArray({
        name: 'options',
        control
    })

    const controlledFields = options.map((field, index) => {
        return {
            ...field,
            ...optionsWatch[index],
        };
    });

    const { toast } = useToast()

    // hàm thêm option cho sản phẩm
    const onAddOption = () => {
        append({
            id: genarateId(),
            name: '',
            is_show_image: options.length == 0 ? true : false,
            values: [
                {
                    id: genarateId(),
                    image: '',
                    label: '',
                }
            ]
        })

    }

    // hàm xóa giá trị
    const onRemoveValue = (indexOption: number, indexValue: number, option: IoptionProductFromAdd) => {
        if (option.values.length == 1) {
            toast({
                variant: "destructive",
                title: "Xóa giá trị thất bại",
                description: "Bạn cần ít nhất 1 giá trị",
                duration: 3000
            })
            return
        }
        update(indexOption, {
            ...option,
            values: option.values.filter((_, i) => i !== indexValue)
        })
    }

    // hàm thêm giá trị
    const onAddValue = (indexOption: number, option: IoptionProductFromAdd) => {
        option.values.push({
            image: '',
            label: '',
            id: genarateId()
        })
        update(indexOption, option)
    }
    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Phân loại
            </div>
            <div className='*:mb-8'>
                {controlledFields?.map((item: IoptionProductFromAdd, index: number) => {
                    return (
                        <div key={item.id} className='bg-gray-200 rounded border px-3 pt-8 pb-4 relative *:mb-4'>
                            <X onClick={() => remove(index)} className=' absolute right-1 top-1 cursor-pointer hover:text-red-500' />
                            <div className='grid grid-cols-[100px_auto] gap-3 '>
                                <label className=' text-sm block'> Tên phân loại</label>
                                <div className='min-w-[500px]'>
                                    <div className={`relative w-max`}>
                                        <input className={`bg-white pl-2 py-2 pr-10 border rounded outline-0 text-sm transition-colors duration-300 w-full ${item.name.length > 14 && 'border-red-500'} focus:border-gray-600 hover:border-gray-600`} {...register(`options.${index}.name` as const)} placeholder='Màu sắc, size,...' />
                                        <span className={` absolute right-1 top-1/2 -translate-y-1/2 text-xs border-l border-gray-500 pl-1  ${item.name.length > 14 && 'text-red-500'}`}>{item.name.length}/14</span>
                                    </div>
                                    {errors?.options && errors?.options[index]?.name && (<p className='text-red-500 text-xs'>{errors?.options[index].name.message}</p>)}
                                </div>
                            </div>
                            <div className='grid grid-cols-[100px_auto] gap-3'>
                                <label className=' text-sm block'> Giá trị </label>
                                <div className='flex items-center gap-6 flex-wrap'>
                                    {item.values.map((valueItem, indexValue) => {
                                        return (
                                            <div key={valueItem.id} className=' min-w-44 flex items-center gap-2'>
                                                <div className='w-max'>
                                                    <div className=' relative w-full'>
                                                        <input className={`bg-white rounded pl-2 py-2 pr-10 border outline-0 text-sm transition-colors duration-300 w-full ${valueItem.label.length > 20 && 'border-red-500'} focus:border-gray-600 hover:border-gray-600`} {...register(`options.${index}.values.${indexValue}.label`)} placeholder='Xanh,M,...' />
                                                        <span className={` absolute right-1 top-1/2 -translate-y-1/2 text-xs border-l border-gray-500 pl-1  ${valueItem.label.length > 20 && 'text-red-500'}`}>{valueItem.label.length}/20</span>
                                                    </div>
                                                    {errors?.options && errors?.options[index]?.values && errors?.options[index]?.values[indexValue]?.label && (<p className='text-red-500 text-xs'>{errors?.options[index]?.values[indexValue]?.label.message}</p>)}
                                                </div>
                                                <Trash onClick={() => onRemoveValue(index, indexValue, item)} className=' cursor-pointer block hover:text-red-500' size={20} />
                                            </div>
                                        )
                                    })}
                                    <button type='button' onClick={() => onAddValue(index, item)} className='px-3 py-1 border border-black flex items-center text-xs hover:bg-white  '> <Plus size={16} /> Giá trị</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
                <button type='button' disabled={options?.length === 2 ? true : false} onClick={() => onAddOption()} className=' flex items-center gap-2 px-4 py-2 border text-sm hover:bg-black hover:text-white'><Plus /> Thêm phân loại</button>
            </div>
        </div>
    )
}

export default ClassifyProductEdit