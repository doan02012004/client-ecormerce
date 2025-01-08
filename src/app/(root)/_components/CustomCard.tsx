import React from 'react'

type CustomCardProps = {
    children:React.ReactNode,
    title:string,
    className?:string
}
const CustomCard = ({children,title,className}:CustomCardProps) => {
  return (
    <div className={`w-full p-3 rounded-lg bg-white ${className}`}>
        {/* title  */}
        <h1 className=' font-semibold text-black mb-4'>{title}</h1>
        {children}
    </div>
  )
}

export default CustomCard