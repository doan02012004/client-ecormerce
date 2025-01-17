'use client'
import React, { useEffect, useRef, useState } from 'react'

type CustomInputTextProps = {
    name: string,
    id?: string,
    classNameInput?: string,
    placeholder?: string,
    max?:number,
    value?:string
    onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (event:React.ChangeEvent<HTMLInputElement>) => void
}
const CustomInputText = ({  name, id, placeholder = '',value,onBlur, classNameInput,max,onChange  }: CustomInputTextProps) => {
    const [validateMax,setValidateMax] = useState(false)
    const inputRef = useRef<HTMLInputElement|null>(null)
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(max){
            if(e.target.value.length>max){
                setValidateMax(true)
                return
            }else{
                if(validateMax !== false) setValidateMax(false)
            }
        }
        if(onChange) onChange(e)
    }

    const onBlurInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
       
        if(onBlur) onBlur(e)
    }

    useEffect(()=>{
        if(inputRef.current){
            if(value){
                inputRef.current.value = value
            }
        }
    },[value,inputRef])
    return (
        <div className=' relative w-full h-full'>
            <input onChange={onChangeInput} onBlur={onBlurInput} type="text" name={name} id={id ?? ''} placeholder={placeholder} className={`w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500 ${classNameInput} `} />
           {max && ( <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs'>0/{max}</span>)}
        </div>
    )
}

export default CustomInputText