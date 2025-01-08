
import { Metadata } from 'next';
import React from 'react'
type CheckoutLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Thanh Toán",
    description: "Trang thanh toán của người dùng",
};
const CheckoutLayout = ({ children }: CheckoutLayoutProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default CheckoutLayout