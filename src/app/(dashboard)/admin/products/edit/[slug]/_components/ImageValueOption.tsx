import { CustomLoading } from '@/components/web'
import { useToast } from '@/hooks/use-toast'
import { TypeProductOptionEdit, TypeProductValueOptionEdit } from '@/schemas/product'
import { uploadImage } from '@/services/image'
import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


type Props = {
    value: TypeProductValueOptionEdit,
    option: TypeProductOptionEdit,
    index:number,
    indexOption:number,
    update?: (index: number, value: TypeProductOptionEdit) => void
}

const ImageValueOption = ({ value,index,update,option,indexOption }: Props) => {
    const [loadingImage,setLoadingImage] = useState<boolean>(false)
    const {toast} = useToast()
    useEffect(() => {

    }, [value])
    const onChangeImageFile = async(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setLoadingImage(true)
            const file = e.target.files[0]
            try {
                
                const data = await uploadImage(file)
                if (data?.url) {
                    if(update){
                        update(indexOption,{
                            ...option,
                            values:option.values.map((val,i) =>i == index ? {...val,image:data.url} : val )
                        })
                    }
                }
            } catch (error) {
               toast({
                variant:'destructive',
                title:"Lỗi thêm ảnh",
                description:'Upload ảnh không thành công !'
               })
               console.log(error)
            }
            setLoadingImage(false)
        }
    }
    return (
        <div className='flex flex-col items-center gap-1'>
            <label className=' relative size-14 bg-white border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500' htmlFor={`upload-images-value-${ value?._id}`}>
                {value.image ? (
                    <div className='w-full h-full overflow-hidden'>
                        <Image src={value?.image ?? ''} width={100} height={100} className=' object-cover h-full w-full' alt='ảnh' />
                    </div>
                ) : (
                    <>
                     
                        <div className='flex flex-col items-center gap-2'>
                        {loadingImage ? (
                                    <CustomLoading />
                                ) : (
                                    <ImageIcon size={24} />
                                )}
                        </div>
                    </>
                )}
                   <input onChange={(e) => onChangeImageFile(e)} type="file" className='hidden' id={`upload-images-value-${value?._id}`} />
            </label>
            <span className='line-clamp-1 text-xs  max-w-24'>{value?.label}</span>
        </div>
    )
}

export default ImageValueOption