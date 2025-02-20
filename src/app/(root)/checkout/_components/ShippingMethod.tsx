import React from 'react'
import ShippingMethodItem from './ShippingMethodItem'

const ShippingMethod = () => {
  return (
    <div className='p-4 rounded bg-white mb-4'>
       {/* header  */}
      <div className=' mb-3'>
        <h3 className='font-medium text-lg '>Hình thức giao hàng</h3>
      </div>
      {/* content  */}
      <div className='grid grid-cols-2 gap-6'>
          <ShippingMethodItem />
          <ShippingMethodItem />
      </div>
    </div>
  )
}

export default ShippingMethod