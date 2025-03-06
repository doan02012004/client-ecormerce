import Image from 'next/image'
import React from 'react'
import { SelectedTick } from '@/components/web'
import { useProductPageContext } from '@/app/AppProvider'
import { ImodelProductData, IOptionProductValueData } from '@/types/product'
type OptionProductButtonProps = {
    value: IOptionProductValueData,
    showImage: boolean,
    index:number,
    model:ImodelProductData | null  ,
    onSetSelectOption: (indexOption: number, indexValue: number) => void,
    indexOption:number,
    selectOptions: {[key:number]:number} 
}
const OptionProductButton = ({ value, showImage,indexOption,onSetSelectOption,model,selectOptions,index }: OptionProductButtonProps) => {

     const {setImageMainProductPage } = useProductPageContext()

    const customClassName = (selectOptions: {[key:number]:number} |undefined, model:ImodelProductData|null) => {
        // let selected = 'selected-tick-border'
        let classname = ` border rounded min-h-11 hover:border-blue-500`
        if(showImage){
            classname = `${classname} flex items-center gap-2 p-[8px_24px_8px_8px]`
        }else{
            classname = `${classname} w-16`
        }

        if(model && model.stock == 0) {
             classname = `${classname} bg-gray-200`
        }

        if(selectOptions && selectOptions[indexOption] == index){
            classname = `${classname} selected-tick-border`
        }
        return classname
    }

    const isDisabeldButton = (model:ImodelProductData|null) => {
        if(model && model.stock == 0) {
            return true
        }
        return false
    }

    const onHoverButton = (e:React.MouseEvent<HTMLButtonElement>) => {
        if(!showImage) {
            return
        }
        const imageUrl = e.currentTarget.getAttribute('data-url')
        if(imageUrl && imageUrl!==''){
            setImageMainProductPage(imageUrl)
        }
    }

    return (
        <button disabled={isDisabeldButton(model)} className={customClassName(selectOptions,model)} onClick={ () => onSetSelectOption(indexOption,index)} onMouseEnter={(e) => onHoverButton(e)} data-url={value?.image}>
            {showImage && (
                <div className='overflow-hidden size-9 rounded'>
                    <Image src={value?.image} width={100} height={100} alt={value.label} className='w-full h-full object-cover' />
                </div>
            )}
            <span className='block text-sm font-medium text-black'>{value.label}</span>
            {selectOptions && selectOptions[indexOption] == index && (<SelectedTick /> )}
        </button>
    )
}

export default OptionProductButton