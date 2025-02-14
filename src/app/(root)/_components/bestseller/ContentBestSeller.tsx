'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/css";

import Product from '../../../../components/web/product/Product'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';


const ContentBestSeller = () => {
  return (
    <div className=' relative px-6'>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0:{
            slidesPerView:2,
            spaceBetween:20
          },
          600:{
            slidesPerView:3,
            spaceBetween:20
          },
          768:{
            slidesPerView:4,
            spaceBetween:20
          },
          1280:{
            slidesPerView:6,
            spaceBetween:20
          }

        }}
        navigation={{
          nextEl:'.swiper_next_bestseller',
          prevEl:'.swiper_prev_bestseller'
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
      </Swiper>
      <button className=' cursor-pointer swiper_prev_bestseller absolute z-[5] left-0 top-1/2 -translate-y-1/2 size-10 rounded-full flex justify-center items-center border bg-white hover:shadow hover:shadow-gray-400 hover:text-red-600 active:text-indigo-600'><ArrowLeft /></button>
      <button className=' cursor-pointer swiper_next_bestseller absolute z-[5] right-0 top-1/2 -translate-y-1/2 size-10 rounded-full flex justify-center items-center border bg-white hover:shadow hover:shadow-gray-400 hover:text-red-600 active:text-indigo-600'><ArrowRight /></button>
    </div>
  )
}

export default ContentBestSeller