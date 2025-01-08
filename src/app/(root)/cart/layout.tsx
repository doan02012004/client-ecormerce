
import { Metadata } from 'next';
import React from 'react'
type CartLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Giỏ hàng",
    description: "Giỏ hàng của bạn",
};
const CartLayout = ({ children }: CartLayoutProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default CartLayout