import { Metadata } from 'next';
import React from 'react'
import Header from './_components/Header';
type WebsiteLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Home",
    description: "HomePage",
  };
const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <Header />
            {children}
            
        </div>
    )
}

export default WebsiteLayout