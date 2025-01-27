import { CustomLoading } from '@/components/web'
import { useToast } from '@/hooks/use-toast'
import { setImagesProductOption } from '@/redux/features/productSlice'
import { RootState } from '@/redux/store'
import { IoptionProduct, IvalueOptionProduct } from '@/shemas/product'
import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
    value: IvalueOptionProduct,
    option: IoptionProduct,
    index:number
}

const ImageValueOption = ({ value,index }: Props) => {
    const productOptions = useSelector((state: RootState) => state.product.productOptions)
    const [loadingImage,setLoadingImage] = useState<boolean>(false)
    const dispatch = useDispatch()
    const {toast} = useToast()
    useEffect(() => {

    }, [value])
    const onChangeImageFile = async(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setLoadingImage(true)
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            try {
                const res = await fetch(`http://localhost:8000/api/v1/images/upload`, {
                    method: 'POST',
                    body: formData,
                })
                const data = await res.json()
                if (data?.url) {
                    dispatch(setImagesProductOption({index:index,image:data.url}))
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
    console.log(productOptions)
    return (
        <div className='flex flex-col items-center gap-1'>
            <label className=' relative size-14 bg-white border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500' htmlFor={`upload-images-value-${value?._id}`}>
                {value.image ? (
                    <div className='w-full h-full overflow-hidden'>
                        <Image src={value?.image ?? ''} width={100} height={100} className=' object-cover h-full w-full' alt='ảnh' />
                    </div>
                ) : (
                    <>
                        <input onChange={onChangeImageFile} type="file" className='hidden' id={`upload-images-value-${value?._id}`} />
                        <div className='flex flex-col items-center gap-2'>
                        {loadingImage ? (
                                    <CustomLoading />
                                ) : (
                                    <ImageIcon size={24} />
                                )}
                        </div>
                    </>
                )}
            </label>
            <span className='line-clamp-1 text-xs  max-w-24'>{value?.label}</span>
        </div>
    )
}

export default ImageValueOption