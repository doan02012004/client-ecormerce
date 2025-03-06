
import React, { useCallback, useEffect } from 'react'
import VariantItem from './VariantItem'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import FormFieldVariant from './FormFieldVariant'
import { genarateId } from '@/utils/main'

import { ImodelProductFormAdd, IoptionProductFromAdd, IproductFromAdd } from '@/types/product'



const VariantsProduct = () => {

    const { register, control, setValue, formState: { errors } } = useFormContext<IproductFromAdd>()
    const options = useWatch({
        control,
        name: 'options'
    }) as IoptionProductFromAdd[]

    const models = useWatch({
        control,
        name: 'models'
    }) as ImodelProductFormAdd[]

    const { fields: modelsField } = useFieldArray({
        control,
        name: 'models'
    })


    const createVariants = useCallback((options: IoptionProductFromAdd[] | [], models: ImodelProductFormAdd[]) => {
        const variants: ImodelProductFormAdd[] = []
        if (options.length === 0) return [
            {
                id: genarateId(),
                name: '',
                tiers_index: [],
                image: '',
                original_price: 0,
                price: 0,
                discount: 0,
                sku: '',
                stock: 0,
                weight: 0,
                ship: {
                    height: 0,
                    length: 0,
                    width: 0
                },
                sold: 0,
                is_default: true
            }
        ]
        if (options.length === 1) {
            options[0].values.map((value, index) => {
                const indexModel = models.findIndex((model) => {
                    if (model.name == `${value.label}`) {
                        return true
                    } else if (model.tiers_index[0] === index) {
                        return true
                    } else {
                        return false
                    }
                })
                if (indexModel >= 0) {
                    variants.push({ ...models[indexModel], name: `${value.label}`, tiers_index: [index], image: value.image, discount: 0 })
                } else {
                    variants.push({
                        id: genarateId(),
                        name: `${value.label}`,
                        image: value.image,
                        discount: 0,
                        tiers_index: [index],
                        original_price: 0,
                        price: 0,
                        stock: 0,
                        weight: 0,
                        sku: '',
                        ship: {
                            height: 0,
                            length: 0,
                            width: 0
                        },
                        sold: 0,
                        is_default: false
                    })
                }

            })
        }
        if (options.length === 2) {
            options[0].values.map((value1, index1) => {
                options[1].values.map((value2, index2) => {
                    const indexModel = models.findIndex((model) => {
                        if (model.tiers_index[0] == index1 && model.tiers_index[1] == index2) {
                            return true
                        } else if (model.name === `${value1.label}, ${value2.label}`) {
                            return true
                        } else {
                            return false
                        }
                    })
                    if (indexModel >= 0) {
                        variants.push({ ...models[indexModel], name: `${value1.label}, ${value2.label}`, image: value1.image, tiers_index: [index1, index2] })
                    } else {
                        variants.push({
                            id: genarateId(),
                            name: `${value1.label}, ${value2.label}`,
                            original_price: 0,
                            tiers_index: [index1, index2],
                            price: 0,
                            discount: 0,
                            image: value1.image,
                            stock: 0,
                            weight: 0,
                            sku: '',
                            ship: {
                                height: 0,
                                length: 0,
                                width: 0
                            },
                            sold: 0,
                            is_default: false
                        })
                    }
                })
            })
        }
        return variants
    }, [])


    useEffect(() => {
        const variants = createVariants(options, models)
        setValue('models', variants)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options])

    if (options.length == 0) {
        return (
            <div className=' space-y-4'>
                <div className='grid grid-cols-[100px_auto] gap-3' >
                    <div className='text-sm'>
                        Giá niêm yết
                    </div>
                    <div className='min-w-[450px]'>
                        <div className={`relative w-max`}>
                            <input className={`bg-white pl-2 py-2 pr-10 border rounded outline-0 text-sm transition-colors duration-300 w-full ${errors?.models && errors?.models[0]?.original_price && 'border-red-500'} focus:border-gray-600 hover:border-gray-600`} {...register(`models.0.original_price` as const, { valueAsNumber: true })} placeholder='Giá niêm yết...' />
                            <span className={` absolute right-1 top-1/2 -translate-y-1/2 text-xs border-l border-gray-500 pl-1 `}>VNĐ</span>
                        </div>
                        {errors?.models && errors?.models[0]?.original_price && (<p className='text-red-500 text-xs'>{errors?.models[0]?.original_price.message}</p>)}
                    </div>

                </div>
                <div className='grid grid-cols-[100px_auto] gap-3' >
                    <div className='text-sm'>
                        Giá bán
                    </div>
                    <div className='min-w-[450px]'>
                        <div className={`relative w-max`}>
                            <input className={`bg-white pl-2 py-2 pr-10 border rounded outline-0 text-sm transition-colors duration-300 w-full ${errors?.models && errors?.models[0]?.price && 'border-red-500'} focus:border-gray-600 hover:border-gray-600`} {...register(`models.0.price` as const, { valueAsNumber: true })} placeholder='Giá bán...' />
                            <span className={` absolute right-1 top-1/2 -translate-y-1/2 text-xs border-l border-gray-500 pl-1 `}>VNĐ</span>
                        </div>
                        {errors?.models && errors?.models[0]?.price && (<p className='text-red-500 text-xs'>{errors?.models[0]?.price.message}</p>)}
                    </div>

                </div>
                <div className='grid grid-cols-[100px_auto] gap-3' >
                    <div className='text-sm'>
                        Kho hàng
                    </div>
                    <div className='min-w-[450px]'>
                        <div className={`relative w-max`}>
                            <input className={`bg-white pl-2 py-2 pr-10 border rounded outline-0 text-sm transition-colors duration-300 w-full ${errors?.models && errors?.models[0]?.stock && 'border-red-500'} focus:border-gray-600 hover:border-gray-600`} {...register(`models.0.stock` as const, { valueAsNumber: true })} placeholder='Số lượng...' />
                        </div>
                        {errors?.models && errors?.models[0]?.stock && (<p className='text-red-500 text-xs'>{errors?.models[0]?.stock.message}</p>)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Các thuộc tính
            </div>
            <div className=' px-2 py-4 bg-gray-200'>
                <FormFieldVariant setValue={setValue} models={models} />
                <div className='grid grid-cols-5 border  group  focus-within:border-blue-500 *:p-1 *:bg-white *:border *:min-h-11 *:flex *:items-center *:justify-center '>
                    <div >
                        <h3 className='text-sm'>
                            {options.length == 0 && "Tên"}
                            {options.length == 1 && `${options[0].name}`}
                            {options.length == 2 && `${options[0].name}, ${options[1].name}`}
                        </h3>
                    </div>
                    <div>
                        <h3 className='text-sm'>Giá niêm yết</h3>
                    </div>
                    <div>
                        <h3 className='text-sm'>Giá bán</h3>
                    </div>
                    <div>
                        <h3 className='text-sm'>SL kho</h3>
                    </div>
                    <div>
                        <h3 className='text-sm'>Sku</h3>
                    </div>

                </div>
                {
                    modelsField.map((model, index: number) => (
                        <VariantItem key={model?.id} index={index} model={model} register={register} errors={errors} />
                    ))
                }

            </div>

        </div>
    )
}

export default VariantsProduct