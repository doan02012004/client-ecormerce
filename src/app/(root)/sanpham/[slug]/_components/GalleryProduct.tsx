import Image from 'next/image'
import React from 'react'
import ao_len from '@/assets/images/ao-len.jpg'
const GalleryProduct = () => {
    return (
        <div className=' basis-[40%] p-3 bg-white rounded-lg max-h-[550px] sticky top-3'>
            <div className='w-full min-h-44 overflow-hidden rounded-lg mb-4'>
                <Image src={ao_len} width={400} height={400} className='w-full h-full object-cover' alt='Áo len mùa đông' />
            </div>
            <div className='grid grid-cols-5 gap-2'>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
                <div>
                    <div className='w-full max-h-16 h-full overflow-hidden rounded-lg border-2 cursor-pointer hover:border-gray-900'>
                        <Image src={ao_len} width={150} height={150} className='w-full h-full object-cover' alt='Áo len mùa đông' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryProduct