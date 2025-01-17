
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';
import React from 'react'
import { AppSidebar, HeaderAdmin } from './_components';
import { Toaster } from '@/components/ui/toaster';

type AdminLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
};
const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
               <HeaderAdmin />
                <div className='p-4 min-h-screen bg-gray-100'>
                {children}
               <Toaster />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AdminLayout