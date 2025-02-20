import React from 'react'
import { ShippingAddress, ShippingMethod } from './_components'
import PaymentMethod from './_components/PaymentMethod'
import CheckoutCart from './_components/CheckoutCart'
import './checkout.css'
import { Button } from '@/components/ui/button'

const CheckoutPage = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-8'>
          <ShippingAddress />
          <ShippingMethod />
          <PaymentMethod />
          <CheckoutCart />
        </div>
        <div className='col-span-4'>
          <div className='bg-white p-4 mb-4'>
              {/* header  */}
              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-medium text-lg '>Mã giảm giá</h3>
                <button className='px-2 py-1 text-xs rounded border text-white transition-colors duration-300 bg-black hover:text-black hover:bg-white'>Mã giảm giá của bạn</button>
            </div>
            <div className='flex justify-between items-center mb-2 *:text-sm'>
              <span>Tổng sản phẩm</span>
              <span className='font-semibold'>2</span>
            </div>
            <div className='flex justify-between items-center mb-2 *:text-sm'>
              <span>Tổng số tiền</span>
              <span className='font-semibold'>0d</span>
            </div>
            <div className='flex justify-between items-center *:text-sm'>
              <span>Tiết kiệm</span>
              <span className='font-semibold text-red-500'>150.000đ</span>
            </div>

          </div>
          <div className='bg-white p-4 mb-4'>
            <div className='flex justify-between items-center mb-2 *:text-sm'>
              <span>Tổng sản phẩm</span>
              <span className='font-semibold'>2</span>
            </div>
            <div className='flex justify-between items-center mb-2 *:text-sm'>
              <span>Tổng số tiền</span>
              <span className='font-semibold'>0d</span>
            </div>
            <div className='flex justify-between items-center *:text-sm'>
              <span>Tiết kiệm</span>
              <span className='font-semibold text-red-500'>150.000đ</span>
            </div>

          </div>
          <Button className='w-full'>Thanh Toán</Button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage