'use client'
import React, { useState } from 'react'
import CustomFormCategory from '../../../_components/CustomFormCategory'
import { ImageIcon, UploadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Icategory, IcategoryForm } from '@/types/categories'
import { useToast } from '@/hooks/use-toast'
import { uploadImage } from '@/services/image'
import { CustomLoading } from '@/components/web'
import Image from 'next/image'
import { useCategoryCreate, useCategoryQueryForm } from '@/hooks/api/category'


const FormAddCategory = () => {
    const [loadingImage, setLoadingImage] = useState<boolean>(false)
    const [categoriesValue, setCategoriesValue] = useState<Icategory[]>([])
    const { categories } = useCategoryQueryForm()
    const categoryCreateMutation = useCategoryCreate()
    const [categoryForm, setCategoryForm] = useState<IcategoryForm>({
        name: '',
        parent_id: null,
        url_thumbnail: '',
        url_path: '',
        display_name: '',
    })
    const { toast } = useToast()

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCategoryForm({
            ...categoryForm,
            [name]: value
        })
    }

    const onHandleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoadingImage(true)
        if (e.target.files) {
            try {
                const file = e.target.files[0]
                const data = await uploadImage(file)
                if (data?.url) {
                    setCategoryForm({
                        ...categoryForm,
                        url_thumbnail: data.url
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        setLoadingImage(false)
    }

    const onSubmit = () => {
        console.log(categoryForm)
        if (categoryForm.name == '') {
            toast({
                variant: "destructive",
                title: "Chưa nhập đủ thông tin",
                description: "Bạn cần nhập đủ thông tin để thêm option mới",
                duration: 3000
            })
            return
        }
        const newCategory = {
            ...categoryForm,
            parent_id: categoriesValue[categoriesValue.length -1]?._id ?? null
        } as IcategoryForm
       categoryCreateMutation.mutate(newCategory)
    }
    return (
        <div>
            <div className=' min-h-screen bg-white px-16 py-8 mb-6 border *:mb-6'>
                <div className='flex items-center gap-4 *:text-sm'>
                    <label className=' basis-36 font-semibold'>Tên danh mục</label>
                    <input type="text" name='name' onChange={(e) => onChangeInput(e)} placeholder='Tên danh mục...' className='p-2 border bg-white w-full' />
                </div>
                <div className='flex items-center gap-4 *:text-sm'>
                    <label className=' basis-36 font-semibold'>Tên hiển thị</label>
                    <div className='w-full'>
                        <input type="text" name='display_name' onChange={(e) => onChangeInput(e)} placeholder='Tên hiển thị...' className='p-2 border mb-1 bg-white w-full' />
                        <p className='text-xs text-red-500'> Tên hiển thị sẽ cùng tên danh mục nếu để trống !</p>
                    </div>
                </div>
                <div className='flex  gap-4 group *:text-sm'>
                    <label className=' basis-36 font-semibold'>Danh mục cha</label>
                    <CustomFormCategory max={2} data={categories} value={categoriesValue} setValue={setCategoriesValue} />
                </div>
                <div className='flex items-center gap-4 *:text-sm'>
                    <label className=' basis-36 font-semibold'>Ảnh danh mục</label>
                    <div className='flex gap-4'>
                        <div className='border w-32 h-36'>
                            {categoryForm.url_thumbnail !== '' ? (
                                <Image className='w-full h-full object-cover' src={categoryForm.url_thumbnail} width={200} height={200} alt={categoryForm.name ?? 'ảnh danh mục'} />
                            ) : (
                                <ImageIcon className='w-full h-full' />
                            )}
                        </div>
                        <div>
                            <label htmlFor="file_upload" className=' flex items-center gap-2 border py-2 px-3 cursor-pointer bg-white text-sm transition-colors ease-in-out hover:bg-primary hover:text-white'>
                                Chọn ảnh
                                {loadingImage ? (
                                    <CustomLoading />
                                ) : (
                                    <UploadIcon size={14} />
                                )}
                            </label>
                            <input type="file" disabled={loadingImage} onChange={(e) => onHandleUpload(e)} name="" id="file_upload" className='hidden' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-white p-2 border sticky bottom-0'>
                <div className=' self-end flex items-center gap-6 '>
                    <Button variant={'secondary'}>Quay lại</Button>
                    <Button onClick={() => onSubmit()}>Tạo mới</Button>
                </div>
            </div>
        </div>
    )
}

export default FormAddCategory