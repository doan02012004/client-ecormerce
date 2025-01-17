import { Sidebar, SidebarContent, SidebarFooter} from '@/components/ui/sidebar'
import React from 'react'
import CustomSidebarHeader from './CustomSidebarHeader'
import { Bot, SquareTerminal } from 'lucide-react'
import NavMain from './NavMain'

const AppSidebar = () => {

    const data = {  
        navMain: [
          {
            title: "Sản phẩm",
            url: "#",
            icon: <SquareTerminal />,
            isActive: true,
            items: [
              {
                title: "Danh sách",
                url: "/admin/products",
              },
              {
                title: "Thêm sản phẩm",
                url: "/admin/products/add",
              },
              {
                title: "Settings",
                url: "#",
              },
            ],
          },
          {
            title: "Danh mục",
            url: "#",
            icon: <Bot />,
            items: [
              {
                title: "Genesis",
                url: "#",
              },
              {
                title: "Explorer",
                url: "#",
              },
              {
                title: "Quantum",
                url: "#",
              },
            ],
          },
          {
            title: "Người dùng",
            url: "#",
            icon: <Bot />,
            items: [
              {
                title: "Genesis",
                url: "#",
              },
              {
                title: "Explorer",
                url: "#",
              },
              {
                title: "Quantum",
                url: "#",
              },
            ],
          },
        ]
      }

    return (
        <Sidebar collapsible="icon">
            <CustomSidebarHeader />
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar