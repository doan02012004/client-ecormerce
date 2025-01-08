import React from 'react'
import { ShippingAddress, ShippingMethod } from './_components'


const CheckoutPage = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-8'>
                <ShippingAddress />
                <ShippingMethod />
            </div>
            <div className='col-span-4'></div>
        </div>
    </div>
  )
}

export default CheckoutPage