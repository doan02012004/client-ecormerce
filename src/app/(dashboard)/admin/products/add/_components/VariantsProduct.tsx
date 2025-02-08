
import React, { useCallback, useEffect } from 'react'
import VariantItem from './VariantItem'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { Imodel, IoptionProduct, Iproduct } from '@/types/product'
import FormFieldVariant from './FormFieldVariant'


const VariantsProduct = () => {

    const {register, control, setValue, formState: { errors }, watch } = useFormContext<Iproduct>()
    const options = useWatch({
        control,
        name: 'options'
    }) as IoptionProduct[]
    const models = useWatch({
        control,
        name: 'models'
    }) as Imodel[]
    const type = watch('type')
    const { fields: modelsField } = useFieldArray({
        control,
        name: 'models'
    })
    const createVariants = useCallback((options: IoptionProduct[], models: Imodel[] | []) => {
        const variants: Imodel[] = []
        if (options.length === 0) return []
        if (options.length === 1) {
            options[0].values.map((value) => {
                const indexModel = models.findIndex((model) => model.name == `${value.label}`)
                if (indexModel >= 0) {
                    variants.push(models[indexModel])
                } else {
                    if (value?.label) {
                        variants.push({
                            name: `${value.label}`,
                            image: value.image,
                            original_price: 0,
                            price: 0,
                            stock: 0
                        })
                    }
                }

            })
        }
        if (options.length === 2 && options[1].values[0].label !== '') {
            options[0].values.map((value1) => {
                options[1].values.map((value2) => {
                    const indexModel = models.findIndex((model) => model.name == `${value1.label}, ${value2.label}`)
                    if (indexModel >= 0) {
                        variants.push(models[indexModel])
                    } else {
                        if (value1.label && value2.label) {
                            variants.push({
                                name: `${value1.label}, ${value2.label}`,
                                original_price: 0,
                                price: 0,
                                image: value1.image,
                                stock: 0
                            })
                        }
                    }
                })
            })
        }
        return variants
    }, [])
    useEffect(() => {
        if (type && type == 'configurable') {
            const variants = createVariants(options, models)
            setValue('models', variants)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options])

    console.log(errors)
    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Các thuộc tính
            </div>
            <div className=' px-2 py-4 bg-gray-200'>
                <FormFieldVariant setValue={setValue} models={models} />
                <div className='grid grid-cols-5 border  group  focus-within:border-blue-500 *:p-1 *:bg-white *:border'>
                    <div className='text-sm' >
                       Tên
                    </div>
                   <p className='text-sm'>Giá niêm yết</p>
                   <p className='text-sm'>Giá bán</p>
                   <p className='text-sm'>SL kho</p>
                   <p className='text-sm'>Sku</p>

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