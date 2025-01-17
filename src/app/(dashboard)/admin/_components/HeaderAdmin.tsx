import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const HeaderAdmin = () => {
    return (
        <header className=" flex sticky bg-white z-30 top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 
        before:content-[''] before:absolute before:inset-0 before:h-4 before:top-full before:bg-gradient-to-b before:from-gray-100 before:to-transparent">
            <div className="flex items-center justify-between px-4">
                <SidebarTrigger className="-ml-1" />
            </div>
        </header>
    )
}

export default HeaderAdmin

