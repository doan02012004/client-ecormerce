import Image from 'next/image'
import React from 'react'
import { SelectedTick } from '@/components/web'
import { TypeProductModelEdit, TypeProductValueOptionEdit } from '@/schemas/product'
import { useProductPageContext } from '@/app/AppProvider'
type OptionProductButtonProps = {
    value: TypeProductValueOptionEdit,
    showImage: boolean,
    model:TypeProductModelEdit | null  ,
    onSetSelectOption: (key:string,value:string) => void,
    name:string,
    selectOption?: {name:string,value:string} 
}
const OptionProductButton = ({ value, showImage,name,onSetSelectOption,model,selectOption }: OptionProductButtonProps) => {

     const {setImageMainProductPage } = useProductPageContext()

    const customClassName = (selectOption:{name:string,value:string}|undefined, model:TypeProductModelEdit|null) => {
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

        if(selectOption && selectOption.value == value.label){
            classname = `${classname} selected-tick-border`
        }
        return classname
    }

    const isDisabeldButton = (model:TypeProductModelEdit|null) => {
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
        <button disabled={isDisabeldButton(model)} className={customClassName(selectOption,model)} onClick={ () => onSetSelectOption(name,value.label)} onMouseEnter={(e) => onHoverButton(e)} data-url={value?.image}>
            {showImage && (
                <div className='overflow-hidden size-9 rounded'>
                    <Image src={value?.image} width={100} height={100} alt={value.label} className='w-full h-full object-cover' />
                </div>
            )}
            <span className='block text-sm font-medium text-black'>{value.label}</span>
            {selectOption && selectOption.value == value.label && (<SelectedTick /> )}
        </button>
    )
}

export default OptionProductButton