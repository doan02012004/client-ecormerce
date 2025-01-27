import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'

type CustomLoadingProps = {
    size?:number
}

const CustomLoading = ({size=22}: CustomLoadingProps) => {
  return (
    <LoaderCircleIcon size={size} className='loader' />
  )
}

export default CustomLoading