import { Imodel, IoptionProduct, Iproduct } from "@/types/product"
import { sortBy } from "lodash"
import isEqual from 'lodash/isEqual'

export const genarateId = () => {
  return `id-${Date.now()}`
}

export const discount = (original_price: number, price: number) => {
  if (original_price == 0 && price == 0) return 0
  const discount = (original_price - price) / original_price * 100
  return Math.floor(discount)

}
export const checkDataProductInfor = (data: Iproduct) => {
  return Object.values(data).some((value) => value === null || value === undefined || value === "");
}

export const checkDataProductOptions = (data: IoptionProduct[]) => {
  let check = false
  if (data.some((option) => option.name === '')) {
    return false
  }
  if (data.length == 2) {
    if (data[0].name === data[1].name) {
      return false
    }
    const all_value = data.flatMap((option) => option.values)
    const value_lable = all_value.map((value) => value.label)
    const check_all_value = new Set(value_lable).size !== value_lable.length
    if (check_all_value) {
      return false
    }
  } else {
    data.map((option) => {
      const value_lable = option.values.map((value) => value.label.toLowerCase())
      const checkValue = new Set(value_lable).size !== value_lable.length;
      if (checkValue) {
        check = true
      }
    })
    if (check) {
      return false
    }
  }

  return true
}

export const checkDataProductModels= (data: Imodel[]) => {
  if(data?.length ===0) return false
  for(const model of data){
    delete model.sku 
    delete model._id
    console.log(model)
    if(Object.keys(model).some((value) => value === null || value === undefined || value === "" || Number(value) < 0)){
      return false
    }
  }

  return true
}
export const defaultImage = () =>{
  return '/assets/images/images.png'
}

export const formatPrice = (price:number) =>{
  if(!price) return `0 đ`
  return `${price.toLocaleString('vi-VN')} đ`
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isSameArray = (arr1:any,arr2:any,key:string[]) => {
  const check = isEqual(sortBy(arr1,key),sortBy(arr2,key))
  return check
}


