import { Icart } from '@/types/cart'
import { create } from 'zustand'

export interface IcartStore {
    cart: Icart,
    openMiniCart:boolean,
    setCart: (cart: Icart) => void,
    setOpenMiniCart: (value:boolean) => void
}
const useCartStore = create<IcartStore>((set) => ({
    cart: {
        total: 0,
        items: [],
        _id: '',
        user_id: ""
    },
    openMiniCart:false,
    setOpenMiniCart: (value) => set({openMiniCart:value}),
    setCart: (cart) => set({cart:cart}),
}))

export default useCartStore