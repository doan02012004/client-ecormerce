'use client'

import { TypeProductModelEdit } from '@/schemas/product';
import { getUser } from '@/services/auth';
import { TypeUser } from '@/types/user';
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode,
}
interface AppContextProps {
  user: TypeUser | null,
  loadingFetchUser: boolean;
  openMiniBooking: boolean;
  imageMainProductPage:string,
  currentVariant: TypeProductModelEdit | null
  setOpenMiniBooking: Dispatch<SetStateAction<boolean>>;
  setLoadingFetchUser: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<TypeUser | null>>;
  setCurrentVariant: Dispatch<SetStateAction<TypeProductModelEdit | null>>;
  setImageMainProductPage: Dispatch<SetStateAction<string>>;
}
const AppContext = createContext<AppContextProps>({

  openMiniBooking: false,
  loadingFetchUser: false,
  user: null,
  currentVariant: null,
  imageMainProductPage:'',
  setOpenMiniBooking: () => { },
  setLoadingFetchUser: () => { },
  setUser: () => { },
  setCurrentVariant: () => { },
  setImageMainProductPage: () => { },

})
const AppProvider = ({ children }: Props) => {
  const [user, setUser] = useState<TypeUser | null>(null)
  const [loadingFetchUser, setLoadingFetchUser] = useState(false)
  const [openMiniBooking, setOpenMiniBooking] = useState<boolean>(false)
  const [currentVariant, setCurrentVariant] = useState<TypeProductModelEdit | null>(null)
  const [imageMainProductPage,setImageMainProductPage] = useState<string>('')
  useEffect(() => {
    const fetchUser = async () => {
      setLoadingFetchUser(true)
      const result = await getUser()
      if (result.ok) {
        const data = await result.json()
        setUser(data.user)
      }
      setLoadingFetchUser(false)
    }
    fetchUser()
  }, [])
  return (
    <AppContext.Provider value={{
      openMiniBooking,
      setOpenMiniBooking,
      loadingFetchUser,
      setLoadingFetchUser,
      user,
      setUser,
      currentVariant,
      setCurrentVariant,
      imageMainProductPage,
      setImageMainProductPage
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const value = useContext(AppContext)
  return value
}

export const useProductPageContext = () => {
  const {currentVariant,setCurrentVariant,imageMainProductPage,setImageMainProductPage} = useContext(AppContext)
  return {currentVariant,setCurrentVariant,imageMainProductPage,setImageMainProductPage}
}

export default AppProvider