'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

import star from '@/assets/images/star.png'
import star_half from '@/assets/images/star_half.png'
import star_none from '@/assets/images/star_none.png'
type RateProps = {
    number: number,
    className?:string,
    size?:string
}
const Rate = ({ number,className,size }: RateProps) => {
    const [rate, setRate] = useState<number>(0)
    const totalRate = useCallback((number: number) => {
        return Math.round(number * 2) / 2;
    }, [])
    useEffect(() => {
        const newRate = totalRate(number)
        if (newRate > 0) {
            setRate(newRate)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number])
    return (
        <div className={className}>
            <div className='flex items-center gap-x-1'>
            {Array.from({ length: 5 }).map((_, index: number) => {
                return (
                    <span key={index} className={`${size?size:'size-3'} overflow-hidden`}>
                        <Image src={Number(rate - (index + 1)) >= 0 ? star : (rate - (index + 1) == -0.5 ? star_half : star_none)} width={12} height={12} alt='star' className='w-full h-full object-cover' />
                    </span>
                )
            })}
        </div>
        </div>
    )
}

export default Rate