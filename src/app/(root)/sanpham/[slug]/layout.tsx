
import { Metadata } from 'next';
import React from 'react'
type ProductDetailLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Mua sản phẩm",
    description: "Mua sản phẩm chất lượng tại MD-Fashion",
};
const ProductDetailLayout = ({ children }: ProductDetailLayoutProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default ProductDetailLayout