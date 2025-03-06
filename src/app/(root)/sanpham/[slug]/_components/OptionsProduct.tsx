
import React, { Dispatch, SetStateAction, useCallback } from 'react'
import OptionProductButton from './OptionProductButton'
import { IfilterVariantsBySelectOptions, selectOption } from './InforProduct'
import { IoptionProductData } from '@/types/product'
type OptionsProductProps = {
    options: IoptionProductData[],
    selectOptions: selectOption,
    filterVariantBySelectOptions: IfilterVariantsBySelectOptions[],
    setSelectOptions: Dispatch<SetStateAction<selectOption>>
}
const OptionsProduct = ({ options, selectOptions, setSelectOptions, filterVariantBySelectOptions }: OptionsProductProps) => {


    const onSetSelectOption = useCallback((indexOption: number, indexValue: number) => {
        setSelectOptions((prev) => {
           return {...prev,[indexOption]:indexValue}
          });
    },[])

    return (
        <div>
            {options.map((option,indexOption:number) => {
                const findFilterVariant = filterVariantBySelectOptions.find((ite) => ite.index == indexOption)
                return (
                    <div className='mb-2' key={option?._id}>
                        <h3 className='text-sm font-medium mb-2'>{option?.name}</h3>
                        <div className='flex items-center gap-3 flex-wrap'>
                            {option.values.map((val,indexValue:number) => {
                                let model = null
                                if(findFilterVariant){
                                    const findVarriant = findFilterVariant.variants.find((variant)=> {
                                        if(variant.tiers_index[indexOption] == indexValue){
                                            return true
                                        }else{
                                            return false
                                        }
                                    } )
                                    if(findVarriant){
                                        model = findVarriant
                                    }
                                }
                                return (
                                    <OptionProductButton key={val?._id} index={indexValue} value={val} indexOption={indexOption} model={model} selectOptions={selectOptions} onSetSelectOption={onSetSelectOption} showImage={option.is_show_image} />
                                )
                            })}
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default OptionsProduct