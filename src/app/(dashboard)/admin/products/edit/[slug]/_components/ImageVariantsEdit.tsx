import { IoptionProductFromAdd, IproductFormEdit } from '@/types/product'
import React from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import ImageValueOption from './ImageValueOption'

const ImageVariantsEdit = () => {
    const { control,setValue, formState: { errors } } = useFormContext<IproductFormEdit>()
    const optionsWatch = useWatch({
        control,
        name: 'options'
    }) as IoptionProductFromAdd[]

    const updateImage = ({url,index}:{url:string,index:number}) => {
        const firstOption = optionsWatch[0]
        const updateValuesFirstOption = firstOption.values.map((val,i) => i == index ? {...val,image:url}: val)
        const newOptions = optionsWatch.map((ite,i) => i== 0 ? {...firstOption,values:updateValuesFirstOption}:ite)
        setValue("options",newOptions)
    }

    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Ảnh phân loại
            </div>
            <div>
            <div>
                <div className='flex items-center gap-6 flex-wrap'>
                    {optionsWatch[0]?.values?.map((valueItem, indexValue: number) => (
                        <ImageValueOption key={valueItem.id} update={updateImage} index={indexValue} value={valueItem} />
                    ))}
                </div>
            </div>
            {errors?.options && errors.options[0]?.root && (<p className='text-red-500 text-xs mt-2'>{errors.options[0]?.root?.message}</p>)}
            </div>
        </div>
    )
}

export default ImageVariantsEdit