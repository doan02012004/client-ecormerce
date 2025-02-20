import { Trash } from 'lucide-react'
import React from 'react'
import './cart.css'
import CartContent from './_components/CartContent'
const CartPage = () => {
    return (
        <section className='container'>
            <h1 className='font-medium text-lg uppercase mb-4'>Giỏ hàng</h1>
            <div>
                <div>
                    {/* header  */}
                    <div className=' grid-cart px-4 py-2 rounded bg-white mb-4 *:text-sm'>
                        <div>
                            {/* <input type="checkbox" className='size-5' /> */}
                            <span className='text-sm'>Tất cả sản phẩm (4)</span>
                        </div>
                        <span className='hidden md:block'>Đơn giá</span>
                        <span className='hidden md:block'>Số lượng</span>
                        <span className='hidden md:block'>Thành tiền</span>
                        <button><Trash /></button>
                    </div>
                   <CartContent />
                </div>
            </div>
        </section>
    )
}

export default CartPage