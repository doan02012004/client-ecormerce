'use client'

import { CustomLoading } from '@/components/web';
import { useCategoryQueryForm } from '@/hooks/api/category';
import { uploadImage } from '@/services/image';
import { ImageIcon, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Icategory } from '@/types/categories';
import { genarateId } from '@/utils/main';
import { TypeProduct } from '@/schemas/product';
import CustomFormCategory from '@/app/(dashboard)/admin/_components/CustomFormCategory';


// Dynamic import để vô hiệu hóa SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const InforbaseProductEdit = () => {
    const { register, formState:{errors}, watch, setValue, control } = useFormContext<TypeProduct>()
    const { categories } = useCategoryQueryForm()
    const [maxImage,] = useState<number>(9);
    const [loadingImages, setLoadingImages] = useState<boolean>(false)
    const { fields: imagesData, remove } = useFieldArray({
        control,
        name: 'images'
    })

    const formData = watch()

    const onChangeImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentImages: { url: string }[] = formData.images
        setLoadingImages(true)
        if (e.target.files) {
            const files = Array.from(e?.target?.files).slice(0, Number(maxImage - formData.images.length)); // Chuyển FileList thành mảng
            for (const file of files) {
                try {
                    const data = await uploadImage(file)
                    if (data?.url) {
                        currentImages.push({ url: data.url })
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        setValue('images', currentImages)
        setLoadingImages(false)

    }

    const onChangeTypeProduct = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        if(value == 'simple'){
            setValue('options',[])
            setValue('models',[
                {
                    image:'',
                    name:'',
                    original_price:0,
                    price:0,
                    stock:0,
                    discount:0,
                    weight:0,
                    combinations:[],
                    sku:''
                }
            ])

            return
        }
        if(value=='configurable'){
            setValue('options',[
                {
                    id:genarateId(),
                    name:'',
                    is_show_image:true,
                    values:[
                        {
                            id:genarateId(),
                            image:'',
                            label:''
                        }
                    ]
                }
            ],{shouldValidate:true})
            setValue('models',[])
            return
        }
    }
    // console.log(errors)
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
                    <div>
                        <div className='flex items-center flex-wrap gap-5'>
                            {imagesData.map((image, index: number) => (
                                <div key={image.id} className=' relative'>
                                    <div className='size-20 border rounded-md overflow-hidden'>
                                        <Image src={image.url} width={100} height={100} className='w-full h-full object-cover' alt={`image`} />
                                    </div>
                                    <X size={20} onClick={() => remove(index)} className=' absolute cursor-pointer -top-6 -translate-x-1/2 left-1/2 hover:text-red-500' />
                                </div>
                            ))}
                            <label className={` ${formData.images.length >= maxImage && 'border-red-500'} relative size-16 border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500`} htmlFor='upload-images'>
                                {formData.images.length < maxImage && (
                                    <input disabled={loadingImages} onChange={(e) => onChangeImages(e)} multiple type="file" className='hidden' id='upload-images' />
                                )}
                                <div className='flex flex-col items-center gap-2'>
                                    {loadingImages ? (
                                        <CustomLoading />
                                    ) : (
                                        <ImageIcon size={24} />
                                    )}
                                    <span className='text-xs'>{formData.images?.length}/{maxImage}</span>
                                </div>
                            </label>
                        </div>
                        {errors?.images && (<p className='text-red-500 text-xs'>{errors.images.message}</p>)}
                    </div>
                </div>
                {/* Tên sp  */}
                <div className='grid grid-cols-[100px_auto] gap-3 '>
                    <label className='flex text-sm'>  <span className='text-red-500'>*</span> Tên sản phẩm</label>
                    <div className='w-full'>
                        <input {...register('name')} type="text" className={` ${errors?.name && 'border-red-500'} text-sm px-3 outline-0 py-1 border w-full focus:outline-1 focus:outline-blue-500`} />
                        {errors?.name && (<p className='text-red-500 text-xs'>{errors.name.message}</p>)}
                    </div>
                </div>
                {/* danh mục  */}
                <div className='grid grid-cols-[100px_auto] gap-3'>
                    <label className='text-sm' ><span className='text-red-500'>*</span> Danh mục</label>
                    <CustomFormCategory max={3} data={categories} value={formData.categories} setValue={(value:Icategory[]) => setValue('categories', value)} />
                </div>
                {/* mô tả  */}
                <div className='grid grid-cols-[100px_auto] gap-3 '>
                    <label className='text-sm' htmlFor=""><span className='text-red-500'>*</span> Mô tả </label>
                    <div className=' w-full h-full'>
                        <ReactQuill placeholder='Nhập mô tả sản phẩm...' value={formData.description} onChange={(value) => setValue('description', value)} />
                        {errors?.description && (<p className='text-red-500 text-xs'>{errors.description.message}</p>)}
                    </div>
                </div>
                <div className='grid grid-cols-[100px_auto] gap-3 '>
                    <label className='text-sm' htmlFor=""><span className='text-red-500'>*</span> Loại</label>
                    <div className=' relative w-full h-full'>
                        <select defaultValue={formData?.type} {...register('type',{onChange:(e) =>onChangeTypeProduct(e) })} name="type" className='border px-3 py-2 text-sm *:text-sm'>
                            <option value="configurable">Sẩn phẩm có cấu hình</option>
                            <option value="simple">Sẩn phẩm đơn giản</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InforbaseProductEdit