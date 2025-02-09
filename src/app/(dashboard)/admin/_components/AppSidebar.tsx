import { Sidebar, SidebarContent, SidebarFooter} from '@/components/ui/sidebar'
import React from 'react'
import CustomSidebarHeader from './CustomSidebarHeader'
import { Bot, SquareTerminal } from 'lucide-react'
import NavMain from './NavMain'

const AppSidebar = () => {

    const data = {  
        navMain: [
          {
            title: "Quản lý sản phẩm",
            url: "#",
            icon: <SquareTerminal />,
            isActive: true,
            items: [
              {
                title: "Sản phẩm",
                url: "/admin/products",
              },
              {
                title: "Danh mục",
                url: "/admin/categories",
              },
              {
                title: "Thông tin chi tiết",
                url: "/admin/optionals",
              },
            ],
          },
          {
            title: "Quản lý người dùng",
            url: "#",
            icon: <Bot />,
            items: [
              {
                title: "Người dùng",
                url: "/admin/categories",
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
            title: "Quản lý đơn hàng",
            url: "#",
            icon: <Bot />,
            items: [
              {
                title: "Đơn hàng",
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