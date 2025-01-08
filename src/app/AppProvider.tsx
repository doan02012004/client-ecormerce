'use client'

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type Props = {
    children: React.ReactNode
}
interface AppContextProps {
    openMiniCart: boolean;
    openMiniBooking:boolean
    setOpenMiniCart: Dispatch<SetStateAction<boolean>>;
    setOpenMiniBooking: Dispatch<SetStateAction<boolean>>;
  }
const AppContext = createContext<AppContextProps>({
    openMiniCart:false,
    openMiniBooking:false,
    setOpenMiniCart: () => {},
    setOpenMiniBooking: () => {},
})
const AppProvider = ({children}: Props) => {
    const [openMiniCart,setOpenMiniCart] = useState<boolean>(false)
    const [openMiniBooking,setOpenMiniBooking] = useState<boolean>(false)
  return (
    <AppContext.Provider value={{openMiniCart,openMiniBooking,setOpenMiniCart,setOpenMiniBooking}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = ()=>{
    const value = useContext(AppContext)
    return value
}
export default AppProvider