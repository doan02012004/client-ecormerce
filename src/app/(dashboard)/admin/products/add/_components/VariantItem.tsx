import { useToast } from '@/hooks/use-toast'
import { setProductModels } from '@/redux/features/productSlice'
import { RootState } from '@/redux/store'
import { Imodel } from '@/shemas/product'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'


type VariantItemProps  ={
    model:Imodel,
    index:number
}


interface dataForm {
    original_price:number,price:number,stock:number,sku:string
}

const VariantItem = ({model,index}:VariantItemProps) => {
    const {register,formState:{errors},reset} = useForm<dataForm>({
        mode:'onChange'
    })
    const productModels = useSelector((state:RootState) => state.product.productModels)
    const dispatch = useDispatch()
    const {toast} = useToast()

    useEffect(()=>{
        reset(model)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[model])

    const onBlurFieldVariant = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        if(!value || Number(value) <0){
            toast({
                variant: "destructive",
                title: "Lỗi thêm dữ liệu.",
                description: "Dữ liệu không hợp lệ."
            })
            reset(model)
            return
        }
        const newModels = productModels.map((model,i) => index === i ? {...model,[name]:Number(value)} : model)
        dispatch(setProductModels(newModels))
    }
  return (
    <form className='grid grid-cols-5 border  group  focus-within:border-blue-500 *:p-1 *:bg-white *:border'>
        <div >
            {model?.name}
        </div>
        <div className={`${errors?.original_price && 'border-red-500'} `}>
            <input {...register('original_price',{required:true,min:0,onBlur:(e) =>onBlurFieldVariant(e)})} type='number' className='w-full h-full outline-0 text-sm' placeholder='Giá niêm yết...' />
        </div>
        <div className={`${errors?.price && 'border-red-500'} `}>
            <input  {...register('price',{required:true,min:0,onBlur:(e) =>onBlurFieldVariant(e)})} type='number' className='w-full h-full outline-0 text-sm' placeholder='Giá bán...' />
        </div>
        <div className={`${errors?.stock && 'border-red-500'} `}>
            <input {...register('stock',{required:true,min:0,onBlur:(e) =>onBlurFieldVariant(e)})} type='number' className='w-full h-full outline-0 text-sm' placeholder='Số lượng...' />
        </div>
        <div>
            <input  {...register('sku',{onBlur:(e) =>onBlurFieldVariant(e)})}  type='text' className='w-full h-full outline-0 text-sm' placeholder='Sku phân loại...' />
        </div>
        
    </form>
  )
}

export default VariantItem