import Image from 'next/image'
import React from 'react'
import ao_len from '@/assets/images/ao-len.jpg'
const GalleryProduct = () => {
    return (
        <div className=' basis-[35%] p-3 bg-white rounded-lg  h-fit md:sticky top-32'>
            <div className='w-full min-h-44 overflow-hidden rounded-lg mb-4'>
                <Image src={ao_len} width={400} height={400} className='w-full h-full object-cover' alt='Áo len mùa đông' />
            </div>
        </div>
    )
}

export default GalleryProduct