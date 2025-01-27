'use client'
import React, { useState } from 'react'
import CustomFormCategory from '../../../_components/CustomFormCategory'
import { ImageIcon, UploadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { categoriesData } from '@/lib/data'
import { Icategory } from '@/shemas/categories'
import { useToast } from '@/hooks/use-toast'

const FormAddCategory = () => {
    const [categories, setCategories] = useState<Icategory[]>([])
    const [categoryForm,setCategoryForm] = useState<Icategory>({
        name:'',
        parent_id:'',
        url_thumbnail:'',
        url_path:'',
        slug:'',
        display_name:'',
        type:0,
        children:[]
    })
    const {toast} = useToast()

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target
        setCategoryForm({
            ...categoryForm,
            [name]:value
        })
    }

    const onSubmit = () =>{
        if(categoryForm.name == '') {
            toast({
                variant: "destructive",
                title: "Chưa nhập đủ thông tin",
                description: "Bạn cần nhập đủ thông tin để thêm option mới",
                duration: 3000
            })
            return
        }
        // const newCategory = {
        //     ...categoryForm,

        // }
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
                    <CustomFormCategory max={2} data={categoriesData} value={categories} setValue={setCategories} />
                </div>
                <div className='flex items-center gap-4 *:text-sm'>
                    <label className=' basis-36 font-semibold'>Ảnh danh mục</label>
                    <div className='flex gap-4'>
                        <div className='border w-32 h-36'>
                            <ImageIcon className='w-full h-full' />
                        </div>
                        <div>
                            <label htmlFor="file_upload" className=' flex items-center gap-2 border py-2 px-3 cursor-pointer bg-white text-sm transition-colors ease-in-out hover:bg-primary hover:text-white'>
                                Chọn ảnh
                                <UploadIcon size={14} />
                            </label>
                            <input type="file" name="" id="file_upload" className='hidden' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-white p-2 border sticky bottom-0'>
                <div className=' self-end flex items-center gap-6 '>
                    <Button variant={'secondary'}>Quay lại</Button>
                    <Button onClick={onSubmit}>Tạo mới</Button>
                </div>
            </div>
        </div>
    )
}

export default FormAddCategory