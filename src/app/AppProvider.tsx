'use client'

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type Props = {
    children: React.ReactNode
}
interface AppContextProps {
    openMiniCart: boolean;
    openMiniBooking:boolean;
    imageFiles:File[];
    imageFileValueOptions:File[];
    setOpenMiniCart: Dispatch<SetStateAction<boolean>>;
    setOpenMiniBooking: Dispatch<SetStateAction<boolean>>;
    setImageFileValueOption: Dispatch<SetStateAction<File[]>>;
    setImageFiles: Dispatch<SetStateAction<File[]>>;
  }
const AppContext = createContext<AppContextProps>({
    openMiniCart:false,
    imageFiles:[],
    imageFileValueOptions:[],
    openMiniBooking:false,
    setImageFileValueOption:() => {},
    setOpenMiniCart: () => {},
    setOpenMiniBooking: () => {},
    setImageFiles:() => {},
})
const AppProvider = ({children}: Props) => {
    const [openMiniCart,setOpenMiniCart] = useState<boolean>(false)
    const [openMiniBooking,setOpenMiniBooking] = useState<boolean>(false)
    const [imageFiles,setImageFiles] = useState<File[]>([])
    const [imageFileValueOptions,setImageFileValueOption] = useState<File[]>([])
  return (
    <AppContext.Provider value={{openMiniCart,openMiniBooking,setOpenMiniCart,setOpenMiniBooking,imageFiles,setImageFiles,imageFileValueOptions,setImageFileValueOption}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = ()=>{
    const value = useContext(AppContext)
    return value
}
export default AppProvider