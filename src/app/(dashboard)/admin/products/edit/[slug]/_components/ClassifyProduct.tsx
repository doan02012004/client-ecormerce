
import { useToast } from '@/hooks/use-toast'
import { Plus, X } from 'lucide-react'
import React, { useMemo } from 'react'

import ImageValueOption from './ImageValueOption'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { genarateId } from '@/utils/client/main'
import { TypeProductEdit, TypeProductOptionEdit, TypeProductOptionsEdit } from '@/schemas/product'



const ClassifyProduct = () => {
    const { register, watch, control,setValue } = useFormContext<TypeProductEdit>()
    const type = watch('type')
    const optionsWatch = useWatch({
        name: "options",
        control
      }) as TypeProductOptionsEdit
    const { fields: options, remove, append, update } = useFieldArray({
        name: 'options',
        control
    })
    
    const controlledFields = useMemo(() => {
        return options.map((field, index) => ({
          ...field,
          ...optionsWatch[index],
        }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [optionsWatch]);

    const { toast } = useToast()

    // hàm thêm option cho sản phẩm
    const onAddOption = () => {
        if(options.length == 0){
            append({
                _id: genarateId(),
                name: '',
                is_show_image: true,
                values: [
                    {
                        _id: genarateId(),
                        image: '',
                        label: '',
                    }
                ]
            })
        }else{
            append({
                _id: genarateId(),
                name: '',
                is_show_image: false,
                values: [
                    {
                        _id: genarateId(),
                        image: '',
                        label: '',
                    }
                ]
            })
        }
    }

    // hàm xóa giá trị
    const onRemoveValue = (indexOption: number, indexValue: number, option: TypeProductOptionEdit) => {
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
    const onAddValue = (indexOption: number, option: TypeProductOptionEdit) =>{
       option.values.push({
            image:'',
            label:'',
            _id:genarateId()
        })
        update(indexOption, option)
    }

    const onRemoveOption = (index:number) => {
        remove(index); setValue('options',optionsWatch.filter((_,i) => i !== index))
    }

    if (type == 'simple') return null

    // console.log('rerender')
    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Phân loại
            </div>
            <div className='*:mb-8'>
                {controlledFields?.map((item: TypeProductOptionEdit, index: number) => {
                    return (
                        <div key={item._id} className='bg-gray-200 border px-3 pt-8 pb-4 relative *:mb-4'>
                            {index > 0 && (<X onClick={() =>onRemoveOption(index) } className=' absolute right-1 top-1 cursor-pointer hover:text-red-500' />)}
                            <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                                <label className=' text-sm block'> Tên phân loại</label>
                                <input className='bg-white p-1 border text-sm' {...register(`options.${index}.name` as const)} placeholder='Màu sắc, size,...' />
                            </div>
                            <div className='grid grid-cols-[100px_auto] gap-3'>
                                <label className=' text-sm block'> Giá trị </label>
                                <div className='flex items-center gap-3 flex-wrap'>
                                    {item.values.map((valueItem, indexValue) => {
                                        return (
                                            <div key={valueItem._id} className='w-fit min-w-24 max-w-44 relative'>
                                                <input className='bg-white p-1 border text-sm' {...register(`options.${index}.values.${indexValue}.label`)} placeholder='Xanh,M,...' />
                                                <X onClick={() => onRemoveValue(index, indexValue, item)} className='absolute right-1 top-1/2 -translate-y-1/2 hover:text-red-500' size={20} />
                                            </div>
                                        )
                                    })}
                                    <button type='button' onClick={() => onAddValue(index,item)} className='px-3 py-1 border border-black flex items-center text-xs hover:bg-white  '> <Plus size={16} /> Giá trị</button>
                                </div>

                            </div>
                            {
                                item.is_show_image && (
                                    <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                                        <label className=' text-sm block'> Ảnh </label>
                                        {item.name !== '' && (
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                {item?.values.map((valueItem, indexValue: number) => (
                                                    <ImageValueOption key={valueItem._id} update={update} option={item} indexOption={index} index={indexValue} value={valueItem} />
                                                ))}

                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                )}
                <button type='button' disabled={options?.length === 2 ? true : false} onClick={() => onAddOption()} className=' flex items-center gap-2 px-4 py-2 border text-sm hover:bg-black hover:text-white'><Plus /> Thêm phân loại</button>
            </div>
        </div>
    )
}

export default ClassifyProduct