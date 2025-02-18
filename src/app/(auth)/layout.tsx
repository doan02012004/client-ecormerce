import { Metadata } from 'next';
import React from 'react'

type WebsiteLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Auth",
    description: "Auth",
  };
const AuthLayout = ({ children }: WebsiteLayoutProps) => {
    return (
        <div className='min-h-screen bg-gray-100'>
            {children}
        </div>
    )
}

export default AuthLayout