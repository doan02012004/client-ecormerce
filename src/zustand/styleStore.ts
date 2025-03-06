
import { create } from 'zustand'

export interface IstyleGridFormProductAdmin {
    display:'grid',
    gridTemplateColumns:string,
  }
export interface IstyleStore {
  styleGridFormProductAdmin:IstyleGridFormProductAdmin ,
  setStyleGridFormProductAdmin: (style:IstyleGridFormProductAdmin) => void
}
const useStyleStore = create<IstyleStore>((set) => ({
   styleGridFormProductAdmin:{
    display:'grid',
    gridTemplateColumns:'repeat(6, 1fr)'
   },
   setStyleGridFormProductAdmin:  (style) => set({styleGridFormProductAdmin:style}),
}))

export default useStyleStore