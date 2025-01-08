'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";


import banner1 from '@/assets/images/banner1.jpg'
import banner2 from '@/assets/images/banner2.jpg'
import banner3 from '@/assets/images/banner3.jpg'
import banner4 from '@/assets/images/banner4.jpg'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Banner = () => {
  return (
    <div className='bg-white w-full p-3 rounded-lg grid grid-cols-12 gap-6 mb-3'>
      <div className=' col-span-12 lg:col-span-8 row-span-2 border rounded-lg overflow-hidden'>
        <Swiper
          // effect='fade'
          // slideActiveClass='1'
          slidesPerView={1}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false}}
          loop={true}
          navigation={true}
          className='h-80'
        >
          <SwiperSlide >
            <div className='relative h-full w-full rounded-lg overflow-hidden cursor-pointer'>
              <div className='w-full h-full'>
                <Image src={banner1} width={400} height={400} alt='banner' className='w-full h-full object-cover' />
              </div>
              <div className='absolute inset-0 bg-black/40 flex justify-center items-center z-20'>
                  <div className='w-full px-5'>
                    <h2 className='text-2xl uppercase font-bold text-orange-500 mb-2'>Các Trận Cầu Đỉnh Cao</h2>
                    <h4 className='font-bold text-base text-white mb-4'>Những phụ kiện chất lượng</h4>
                    <Button className='bg-transparent border border-white cursor-pointer hover:text-red-500 hover:border-red-500'>Xem Ngay <ArrowRight /></Button>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='relative h-full w-full rounded-lg overflow-hidden cursor-pointer'>
              <div className='w-full h-full'>
                <Image src={banner2} width={400} height={400} alt='banner' className='w-full h-full object-cover' />
              </div>
              <div className='absolute inset-0 bg-black/40 flex justify-center items-center z-20'>
                  <div className='w-full px-5'>
                    <h2 className='text-2xl uppercase font-bold text-orange-500 mb-2'>Các Trận Cầu Đỉnh Cao</h2>
                    <h4 className='font-bold text-base text-white mb-4'>Những phụ kiện chất lượng</h4>
                    <Button className='bg-transparent border border-white cursor-pointer hover:text-red-500 hover:border-red-500'>Xem Ngay <ArrowRight /></Button>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='relative h-full w-full rounded-lg overflow-hidden'>
              <div className='w-full h-full'>
                <Image src={banner3} width={400} height={400} alt='banner' className='w-full h-full object-cover' />
              </div>
              <div className='absolute inset-0 bg-black/40 flex justify-center items-center z-20'>
                  <div className='w-full px-5'>
                    <h2 className='text-2xl uppercase font-bold text-orange-500 mb-2'>Các Trận Cầu Đỉnh Cao</h2>
                    <h4 className='font-bold text-base text-white mb-4'>Những phụ kiện chất lượng</h4>
                    <Button className='bg-transparent border border-white cursor-pointer hover:text-red-500 hover:border-red-500'>Xem Ngay <ArrowRight /></Button>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='relative h-full w-full rounded-lg overflow-hidden cursor-pointer'>
              <div className='w-full h-full'>
                <Image src={banner4} width={400} height={400} alt='banner' className='w-full h-full object-cover' />
              </div>
              <div className='absolute inset-0 bg-black/40 flex justify-center items-center z-20'>
                  <div className='w-full px-5'>
                    <h2 className='text-2xl uppercase font-bold text-orange-500 mb-2'>Các Trận Cầu Đỉnh Cao</h2>
                    <h4 className='font-bold text-base text-white mb-4'>Những phụ kiện chất lượng</h4>
                    <Button className='bg-transparent border border-white cursor-pointer hover:text-red-500 hover:border-red-500'>Xem Ngay <ArrowRight /></Button>
                  </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=' hidden lg:block col-span-4 p-4 rounded-lg bg-gray-800 relative'>
          <h1 className='uppercase text-xl text-white mb-3'>Đặt Sân Bóng Đá</h1>
          <p className=' m-0 text-sm text-green-100'>Hỗ trợ đặt sân bóng đá trực tuyến trên toàn quốc. Giúp bạn dễ dàng đặt các lịch đấu ở nơi bạn muốn !</p>
          <Button className=' absolute right-4 bottom-4 bg-white text-red-700 border border-gray-300 hover:bg-gray-100'>Xem Ngay</Button>
      </div>
      <div className='hidden lg:block col-span-4 p-4 rounded-lg bg-gray-800 relative'>
          <h1 className='uppercase text-xl text-white mb-3'>Đặt Sân Bóng Đá</h1>
          <p className=' m-0 text-sm text-green-100'>Hỗ trợ đặt sân bóng đá trực tuyến trên toàn quốc. Giúp bạn dễ dàng đặt các lịch đấu ở nơi bạn muốn !</p>
          <Button className=' absolute right-4 bottom-4 bg-white text-red-700 border border-gray-300 hover:bg-gray-100'>Xem Ngay</Button>
      </div>
    </div>
  )
}

export default Banner