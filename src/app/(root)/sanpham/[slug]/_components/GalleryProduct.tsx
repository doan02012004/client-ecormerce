import Image from 'next/image'
import React, { useEffect } from 'react'
import { TypeProductDetail } from '@/schemas/product'
import { useProductPageContext } from '@/app/AppProvider';


type GalleryProductProps = {
    product: TypeProductDetail
}
const GalleryProduct = ({ product }: GalleryProductProps) => {

    const { imageMainProductPage, setImageMainProductPage } = useProductPageContext()

    useEffect(() => {
        setImageMainProductPage(product.images[0].url)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])

    const onSetImage = (url: string) => {
        if (url == imageMainProductPage) {
            return
        }
        setImageMainProductPage(url)
    }
    return (
        <div className=' basis-[35%] p-3 bg-white rounded-lg flex-shrink-0 h-fit md:sticky top-32'>
            <div className='w-full min-h-44 overflow-hidden rounded-lg mb-4'>
                <Image src={imageMainProductPage==''? product.images[0].url: imageMainProductPage} width={400} height={400} className='w-full h-full object-cover' alt='Áo len mùa đông' />
            </div>
            <div className='w-96 mx-auto flex flex-wrap gap-3'>
                {product.images.map((ite) => (
                    <div key={ite.url} onClick={() => onSetImage(ite.url)} className={`${ite.url == imageMainProductPage && 'border-blue-500 border-[2px]'} w-16 h-16 overflow-hidden rounded cursor-pointer border hover:border-blue-500 hover:border-[2px] `}>
                        <Image src={ite.url} width={400} height={400} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryProduct