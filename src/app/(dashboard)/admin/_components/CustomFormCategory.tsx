'use client'
import { Icategory } from '@/shemas/categories'
import { ChevronRightIcon, X } from 'lucide-react'
import React, { Dispatch, SetStateAction, useState } from 'react'


type Props = {
    data: Icategory[],
    max?: 2 | 3,
    value: Icategory[],
    setValue: Dispatch<SetStateAction<Icategory[]>>
}

const CustomFormCategory = ({ data, max = 3, value = [], setValue }: Props) => {
    const [type1, setType1] = useState<Icategory[]>([])
    const [type2, setType2] = useState<Icategory[]>([])

    const onSetCategoryType0 = (category: Icategory) => {
        if (value[0]?._id !== category._id || !value[0]) {
            setType1(category.children)
            setType2([])
            setValue([category])
        }
    }

    const onSetCategoryType1 = (category: Icategory) => {
        if (value[1]?._id !== category._id || !value[1]) {
            setType2(category.children)
            setValue([value[0], category])
        }

    }

    const onSetCategoryType2 = (category: Icategory) => {
        if (value[2]?._id !== category._id || !value[2]) {
            setValue([value[0], value[1], category])
        }
    }

    const onRemoveChooseCate = () => {
        setValue([])
        setType1([])
        setType2([])
    }
    return (
        <div className='w-full'>
            {/* input  */}
            <div className='mb-2 border py-2 pl-2  w-full cursor-pointer group-hover:border-black '>
                {value.length > 0 ? (
                    <div className='flex items-center relative gap-2 pr-10'>
                        {value.map((ite, i) => {
                            if (i < value.length - 1) {
                                return (
                                    <span key={ite._id}>{ite.name} /</span>
                                )
                            } else {
                                return <span key={ite._id}>{ite.name}</span>
                            }

                        })}
                        <X onClick={onRemoveChooseCate} size={18} className=' absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 transition-colors ease-in-out hover:text-red-500' />
                    </div>
                ) : (
                    <p className='text-gray-500 w-full h-full'>-- Chọn danh mục...</p>
                )}
            </div>
            {/* content  */}
            { data.length > 0 && (
                <div className={`w-full p-3 border grid grid-cols-3 gap-4 `}>
                    <div className='flex flex-col max-h-48 overflow-y-scroll'>
                        {data && data.map((cate) => (
                            <div key={cate._id} onClick={() => onSetCategoryType0(cate)} className={` ${value[0] && value[0]?._id == cate._id && 'bg-gray-200'} p-1 border flex justify-between items-center cursor-pointer hover:bg-gray-200`}>
                                <p>{cate.name}</p>
                                {cate.children.length > 0 && (
                                    <ChevronRightIcon size={16} />
                                )}
                            </div>
                        ))}
                    </div>

                    {type1.length > 0 && (
                        <div className='flex flex-col max-h-48 overflow-y-scroll'>
                            {type1.map((cate) => (
                                <div key={cate._id} onClick={() => onSetCategoryType1(cate)} className={` ${value[1] && value[1]?._id == cate._id && 'bg-gray-200'} p-1 border flex justify-between items-center cursor-pointer hover:bg-gray-200`}>
                                    <p>{cate.name}</p>
                                    {cate.children.length > 0 && (
                                        <ChevronRightIcon size={16} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {type2.length > 0 && (
                        <div className='flex flex-col max-h-48 overflow-y-scroll'>
                            {type2.map((cate) => (
                                <div key={cate._id} className='w-full'>
                                    {max == 3 ? (
                                        <div onClick={() => onSetCategoryType2(cate)} className={` ${value[2] && value[2]?._id == cate._id && 'bg-gray-200'} p-1 border cursor-pointer hover:bg-gray-200`}>
                                            <p>{cate.name}</p>
                                        </div>
                                    ) : (
                                        <div className={` p-1 border cursor-pointer text-gray-400 `}>
                                            <p>{cate.name}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            { data.length == 0 && (
                <div className={`w-full p-3 border flex justify-center items-center h-48`}>
                    <div className='text-center'>
                        <p>No Data</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomFormCategory