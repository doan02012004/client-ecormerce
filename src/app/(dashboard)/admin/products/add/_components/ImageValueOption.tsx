import { RootState } from '@/redux/store'
import { IoptionProduct, IvalueOptionProduct } from '@/shemas/product'
import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type Props = {
    value: IvalueOptionProduct,
    option:IoptionProduct
}

const ImageValueOption = ({ value, option }: Props) => {
    const productOptions = useSelector((state: RootState) => state.product.productOptions)
    const [imageUrl,setImageUrl] = useState<string>('')
    useEffect(() => {

    },[value])
    const onChangeImageFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
    }
    return (
        <div className='flex flex-col items-center gap-1'>
            <label className=' relative size-14 bg-white border rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500' htmlFor='upload-images-value'>
                {value.image ? (
                    <div className='w-full h-full overflow-hidden'>
                        <Image src={imageUrl} width={100} height={100} className=' object-cover h-full w-full' alt='ảnh' />
                    </div>
                ) : (
                    <>
                        <input onChange={onChangeImageFile} type="file" className='hidden' id='upload-images-value' />
                        <div className='flex flex-col items-center gap-2'>
                            <ImageIcon size={24} />
                        </div>
                    </>
                )}
            </label>
            <span className='line-clamp-1 text-xs  max-w-24'>{value?.label}</span>
        </div>
    )
}

export default ImageValueOption