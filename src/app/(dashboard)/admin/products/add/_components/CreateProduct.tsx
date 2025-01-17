'use client'
import { RootState } from '@/redux/store'
import { checkDataProductModels } from '@/utils/client/main'
import React from 'react'
import { useSelector } from 'react-redux'

const CreateProduct = () => {
    const productInfor = useSelector((state:RootState) => state.product.productInfor)
    const productOptions = useSelector((state:RootState) => state.product.productOptions)
    const productModels = useSelector((state:RootState) => state.product.productModels)
    const productShip = useSelector((state:RootState) => state.product.productShip)

    const onCreateProductPublic = () =>{
        // let check = {
        //     checkModels:true,
        //     checkInfor:true,
        //     checkOptions:true,
        //     checkShip:true
        // }
        // const check1 = checkDataProductModels(productModels)
       
    }
    return (
        <div className='flex justify-between items-center'>
            <button className=' text-gray-400 text-sm rounded border px-4 py-2 transition-colors duration-300  hover:text-black'>Lưu & ẩn</button>
            <button onClick={onCreateProductPublic} className='bg-black text-white text-sm rounded border px-4 py-2 transition-colors duration-300 hover:bg-white hover:text-black'>Lưu & hiển thị</button>
        </div>
    )
}

export default CreateProduct