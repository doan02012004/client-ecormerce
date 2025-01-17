'use client'
import { ChevronDown, SearchIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

interface optionsSelect {
    value: string,
    label: string,
    disable?: boolean,
    selected?: boolean
}

type CustomSelectProps = {
    options: optionsSelect[],
    value?: string,
    placeholder?: string,
    onChange?: (value: string) => void
}

const CustomSelect = ({ value = '', onChange, options, placeholder = 'Select...' }: CustomSelectProps) => {
    const [selectOptions, setSelectOptions] = useState([] as optionsSelect[])
    const [dropDown, setDropDown] = useState(false)
    const [option, setOption] = useState<optionsSelect | null>(null)

    // set options
    useEffect(() => {
        if (options && options?.length > 0) {
            setSelectOptions(options)
        } else {
            setSelectOptions([])
        }
    }, [options])

    // find options by value
    useEffect(() => {
        if (value !== '') {
            const option = options.find((item: optionsSelect) => item.value === value)
            if (option) {
                setOption(option)
            }
        } else {
            if (option !== null) setOption(null)
        }
    }, [value, option, options])

    const onSetValue = (item: optionsSelect) => {

        if (onChange) {
            if (item.value === value) {
                return onChange('')
            } else {
                setDropDown(false)
                return onChange(item.value)
            }
        }
    }

    const onSearch = (text: string) => {
        const filter = options.filter((item: optionsSelect) => item.label.toLowerCase().includes(text.toLowerCase()))
        setSelectOptions(filter)
    }
    return (
        <div className='w-full relative h-auto'>
            {/* trickger  */}
            <div onClick={() => setDropDown(!dropDown)} className={`${dropDown && 'border-blue-500'} cursor-pointer w-full p-2 bg-white border min-h-8 hover:border-blue-500`}>
                <div className='flex justify-between items-center'>
                    {
                        value !== '' ? (
                            <span className='text-sm'>{option?.label}</span>
                        ) : (
                            <span className='text-sm text-gray-300'>{placeholder}</span>
                        )
                    }
                    <ChevronDown size={20} className={`${dropDown && 'rotate-180'} transition-transform duration-300 ease-in-out`} />
                </div>
            </div>

            {/* content  */}
            {dropDown && (
                <div className=' absolute top-full border h-auto w-full z-20 mt-2 bg-gray-200'>
                    {/* search  */}
                    <div className='flex items-center gap-2 px-3 pt-2 pb-4 bg-white'>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)} placeholder='search...' type="text" className='w-full h-full p-2 border text-sm' disabled={selectOptions?.length == 0 && true} />
                        <SearchIcon className=' cursor-pointer hover:text-blue-500' />
                    </div>
                    {/* options  */}
                    <div className={`${selectOptions?.length > 0 ? 'min-h-24 w-full flex items-center flex-wrap gap-4 overflow-y-auto' : 'min-h-20'} py-4 px-3`}>
                        {selectOptions?.length > 0 ? (
                            selectOptions.map((item) => (
                                <div onClick={() => onSetValue(item)} key={item.value} className={`${value == item.value && 'border-blue-500 text-blue-700'} p-2 border cursor-pointer bg-white min-h-10 h-full place-content-center hover:border-blue-500`}>
                                    <span className='text-sm'>{item?.label}</span>
                                </div>

                            ))
                        ) : (
                            <div className='text-center text-sm'>
                                No data
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomSelect