
import React from 'react'
import PaymentMethodItem from './PaymentMethodItem'


const PaymentMethod = () => {
  return (
    <div className='p-4 rounded bg-white mb-4'>
       {/* header  */}
      <div className=' mb-3'>
        <h3 className='font-medium text-lg '>Phương thức thanh toán</h3>
      </div>
      {/* content  */}
      <div className='grid grid-cols-3 gap-6'>
        <PaymentMethodItem />
        <PaymentMethodItem />
        <PaymentMethodItem />
      </div>
    </div>
  )
}

export default PaymentMethod