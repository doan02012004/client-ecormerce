'use client'

import { CustomLoading } from '@/components/web';
import { setProductImages, setProductInfor } from '@/redux/features/productSlice';
import { RootState } from '@/redux/store';
import { Edit3Icon, ImageIcon} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';

// Dynamic import để vô hiệu hóa SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const InforbaseProduct = () => {
    const { register, formState: { errors } } = useForm({
        mode: "onChange"
    })
    const [maxImage,] = useState<number>(9);
    const [loadingImages, setLoadingImages] = useState<boolean>(false)
    const productInfor = useSelector((state: RootState) => state.product.productInfor)
    const dispatch = useDispatch()

    const onChangeImages = async(e: React.ChangeEvent<HTMLInputElement>) => {
        setLoadingImages(true)
        if (e.target.files) {
            const files = Array.from(e?.target?.files).slice(0, Number(maxImage -productInfor.images.length )); // Chuyển FileList thành mảng
             for (const file of files) {
                const formData = new FormData()
                formData.append('image', file)
                try {
                    const res = await fetch(`http://localhost:8000/api/v1/images/upload`, {
                        method: 'POST',
                        body: formData,
                    })
                    const data = await res.json()
                    if (data?.url) {
                        dispatch(setProductImages({ url: data?.url }))
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
     
        setLoadingImages(false)

    }

    const onChangeFieldProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(setProductInfor({ ...productInfor, [name]: value }))
    }

    return (
        <div className='px-2 py-4 rounded-lg bg-white'>
            {/* header  */}
            <h2 className=' uppercase text-base mb-10'>Thông tin cơ bản</h2>
            <div className='px-6 flex flex-col gap-8'>
                {/* Ảnh sp  */}
                <div className='grid grid-cols-[100px_auto] gap-3 items-center' >
                    <div className='text-sm'>
                        <span className='text-red-500'>*</span> Ảnh
                    </div>
                    <div className='flex items-center flex-wrap gap-5'>
                        {productInfor?.images?.map((image) => (
                            <div key={image.url} className='size-16 border rounded-md overflow-hidden'>
                                <Image src={image.url} width={100} height={100} className='w-full h-full object-cover' alt={`image`} />
                            </div>
                        ))}
                        <label className={` ${productInfor.images.length >= 9 && 'border-red-500'} relative size-16 border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500`} htmlFor='upload-images'>
                            {productInfor.images.length < maxImage && (
                                <input disabled={loadingImages} onChange={(e) => onChangeImages(e)} multiple type="file" className='hidden' id='upload-images' />
                            )}
                            <div className='flex flex-col items-center gap-2'>
                                {loadingImages ? (
                                    <CustomLoading />
                                ) : (
                                    <ImageIcon size={24} />
                                )}
                                <span className='text-xs'>{productInfor?.images?.length}/{maxImage}</span>
                            </div>
                        </label>
                    </div>
                </div>
                {/* Tên sp  */}
                <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                    <label className='flex text-sm'>  <span className='text-red-500'>*</span> Tên sản phẩm</label>
                    <input {...register('name', { required: true, minLength: 0, maxLength: 120, onChange: (e) => onChangeFieldProduct(e) })} type="text" className={` ${errors?.name && 'border-red-500'} text-sm px-3 outline-0 py-1 border focus:outline-1 focus:outline-blue-500`} />
                </div>
                {/* danh mục  */}
                <div className='grid grid-cols-[150px_auto] gap-3 items-center'>
                    <label className='text-sm' htmlFor=""><span className='text-red-500'>*</span> Danh mục sản phẩm</label>
                    <div className=' relative w-full h-full'>
                        <input type="text" className='w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500 ' defaultValue={'Quần áo > áo len '} />
                        <span className=' absolute  right-2 top-1/2 -translate-y-1/2 text-xs'><Edit3Icon size={16} /></span>
                    </div>
                </div>
                {/* mô tả  */}
                <div className='grid grid-cols-[120px_auto] gap-3 '>
                    <label className='text-sm' htmlFor=""><span className='text-red-500'>*</span> Mô tả sản phẩm</label>
                    <div className=' relative w-full h-full'>
                        <ReactQuill placeholder='Nhập mô tả sản phẩm...' value={productInfor?.description} onChange={(value) => dispatch(setProductInfor({ ...productInfor, ['description']: value }))} />
                        <span className=' absolute right-1 bottom-2 text-xs'>20/1000</span>
                    </div>
                </div>
                <div className='grid grid-cols-[120px_auto] gap-3 '>
                    <label className='text-sm' htmlFor=""><span className='text-red-500'>*</span> Loại sản phẩm</label>
                    <div className=' relative w-full h-full'>
                        <select defaultValue={productInfor?.type} onChange={(e) => dispatch(setProductInfor({ ...productInfor, [e.target.name]: e.target.value }))} name="type" className='border px-3 py-2'>
                            <option value="configurable">Sẩn phẩm có cấu hình</option>
                            <option value="simple">Sẩn phẩm đơn giản</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InforbaseProduct