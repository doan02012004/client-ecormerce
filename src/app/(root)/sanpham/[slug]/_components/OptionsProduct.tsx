
import React, { Dispatch, SetStateAction, useCallback } from 'react'
import OptionProductButton from './OptionProductButton'
import { TypeProductOptionsEdit } from '@/schemas/product'
import { IfilterVariantsBySelectOptions, selectOption } from './InforProduct'
type OptionsProductProps = {
    options: TypeProductOptionsEdit,
    selectOptions: selectOption[],
    filterVariantBySelectOptions: IfilterVariantsBySelectOptions[],
    setSelectOptions: Dispatch<SetStateAction<selectOption[]>>
}
const OptionsProduct = ({ options, selectOptions, setSelectOptions, filterVariantBySelectOptions }: OptionsProductProps) => {


    const onSetSelectOption = useCallback((key: string, value: string) => {
        setSelectOptions((prev) => {
            const findOption = prev.find((option) => option.name === key);
      
            if (findOption) {
              if (findOption.value === value) {
                return prev.filter((op) => op.value !== value);
              }
              return prev.map((ite) => (ite.name === key ? { ...ite, value } : ite));
            }
            
            return [...prev, { name: key, value }];
          });
    },[])

    return (
        <div>
            {options.map((option) => {
                const findFilterVariant = filterVariantBySelectOptions.find((ite) => ite.name == option.name)
                return (
                    <div className='mb-2' key={option?._id}>
                        <h3 className='text-sm font-medium mb-2'>{option?.name}</h3>
                        <div className='flex items-center gap-3 flex-wrap'>
                            {option.values.map((val) => {
                                let model = null
                                const findSelectOption = selectOptions.find((sel) => sel.name == option.name)
                                if(findFilterVariant){
                                    const findVarriant = findFilterVariant.variants.find((variant)=> {
                                        const findIndex = variant.combinations.findIndex((ite) => ite.name == option.name && ite.value == val.label)
                                        if(findIndex >= 0){
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
                                    <OptionProductButton key={val?._id} value={val} name={option.name} model={model} selectOption={findSelectOption} onSetSelectOption={onSetSelectOption} showImage={option.is_show_image} />
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