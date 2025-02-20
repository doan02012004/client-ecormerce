'use client'
import React, { useEffect, useRef, useState } from 'react'

import Rate from '@/components/web/Rate'
import { CustomCard } from '@/app/(root)/_components'
import DescriptionProduct from './DescriptionProduct'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart } from 'lucide-react'
import OptionsProduct from './OptionsProduct'
import { TypeProductDetail, TypeProductModelEdit, TypeProductModelsEdit, TypeProductOptionsEdit } from '@/schemas/product'
import { formatPrice, isSameArray } from '@/utils/main'
import InputStockProductDetail from './InputStockProductDetail'
import { useToast } from '@/hooks/use-toast'
import { useCartAdd } from '@/hooks/api/cart'


type InforProductProps = {
    product: TypeProductDetail
}

export interface selectOption {
    name: string,
    value: string
}

const ShowPriceProductDetail = ({ product, variant }: { product: TypeProductDetail, variant: TypeProductModelEdit | null }) => {
    if (variant) {
        if (variant.price == variant.original_price) {
            return (
                <span className='block text-lg font-semibold text-black'>{formatPrice(variant.price)}</span>
            )
        } else {
            return (
                <div className='flex gap-x-3 mb-2'>
                    <span className='block text-lg font-semibold text-black'>{formatPrice(variant.price)}</span>
                    <span className='block text-base text-gray-400 line-through'>{formatPrice(variant.original_price)}</span>
                </div>
            )
        }
    }
    if (product.price == product.original_price) {
        return (
            <span className='block text-lg font-semibold text-black'>{formatPrice(product.price)}</span>
        )
    }

    return (
        <div className='flex gap-x-3 mb-2'>
            <span className='block text-lg font-semibold text-black'>{formatPrice(product.price)}</span>
            <span className='block text-base text-gray-400 line-through'>{formatPrice(product.original_price)}</span>
        </div>
    )
}

export interface IfilterVariantsBySelectOptions {
    name: string,
    variants: TypeProductModelsEdit
}

const InforProduct = ({ product }: InforProductProps) => {
    const { toast } = useToast()
    const [filterVariantsBySelectOptions, setFilterVariantsBySelectOptions] = useState<IfilterVariantsBySelectOptions[]>([])
    const [selectOptions, setSelectOptions] = useState<selectOption[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [selectVariant, setSelectVariant] = useState<TypeProductModelEdit | null>(() => {
        if (product.type == 'simple') {
            return product.models[0]
        } else {
            return null
        }
    })

    const AddToCartMutation = useCartAdd()

    // Tìm variant bằng selectVariant (khi người dùng nhấp chọn thuộc tính)
    const onFindVariant = (models: TypeProductModelsEdit, selectVariant: TypeProductModelEdit | null, selectOptions: selectOption[]) => {

        if (selectOptions.length == 0) {
            if (selectVariant) {
                setSelectVariant(null)
            }
            return
        }

        const findVarriant = models.find((model) => {
            const newCombinations = model.combinations.map((ite) => ({ name: ite.name, value: ite.value }))
            const check = isSameArray(selectOptions, newCombinations, ["name", "value"])
            return check
        })
        if (findVarriant) {
            setSelectVariant(findVarriant)
            return
        } else {
            if (selectVariant) {
                setSelectVariant(null)
                return
            }
        }
    }

    // Lọc variant bằng selectOptions (khi người dùng nhấp chọn thuộc tính)
    const onFilterVarriantsBySelectOptions = (models: TypeProductModelsEdit, options: TypeProductOptionsEdit | [], selectOptions: selectOption[]) => {
        if (options.length == 0 || options.length == 1) {
            return
        }
        // nếu options có 2 giá trị trở lên
        if (options.length == 2) {
            const newFilterVarriants = selectOptions.map((option) => {
                const variants = models.filter((model) => {
                    const findIndex = model.combinations.findIndex((ite) => ite.name == option.name && ite.value == option.value)
                    if (findIndex >= 0) {
                        return true
                    } else {
                        return false
                    }
                })
                const differentOption = options.filter((ite) => ite.name !== option.name)
                return {
                    name: differentOption[0].name,
                    variants: variants
                }
            }) as IfilterVariantsBySelectOptions[]
            setFilterVariantsBySelectOptions(newFilterVarriants)
            return
        }


    }

    // Lọc variant bằng selectOptions (khi người dùng nhấp chọn thuộc tính)
    const onFilterVarriants = (models: TypeProductModelsEdit, options: TypeProductOptionsEdit | []) => {

        // nếu options có 1 giá trị 
        if (options.length == 1) {
            const newFilterVarriants = [{
                name: options[0].name,
                variants: models
            }] as IfilterVariantsBySelectOptions[]
            setFilterVariantsBySelectOptions(newFilterVarriants)
            return
        }

    }

    useEffect(() => {
        if(product.type == 'configurable'){
            onFindVariant(product.models, selectVariant, selectOptions)
        }
        if (product.options.length == 1) {
            onFilterVarriants(product.models, product.options)
        } else if (product.options.length == 2) {
            onFilterVarriantsBySelectOptions(product.models, product.options, selectOptions)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectOptions])

    // Thêm giỏ hàng 
    const onAddToCart = () => {
        if (!selectVariant) {
            return toast({
                variant: 'destructive',
                title: 'Thêm giỏ hàng',
                description: "Vui lòng chọn phân loại sản phẩm"
            })
        }
        if (selectVariant.stock <= 0) {
            return toast({
                variant: 'destructive',
                title: 'Thêm giỏ hàng',
                description: "Sản phẩm này đã hết hàng"
            })
        }
        if(!inputRef || !inputRef?.current){
            return toast({
                variant: 'destructive',
                title: 'Thêm giỏ hàng',
                description: "Vui lòng thử lại"
            })
        }

        const data = {
            product_id:product._id,
            variant_id: selectVariant?._id ?? '',
            quantity:Number(inputRef.current.value)
        }
        AddToCartMutation.mutate(data)
    }

    return (
        <div className=' basis-[60%] '>
            <div className='p-3 bg-white rounded-lg w-full mb-4'>
                {/* name  */}
                <h2 className='text-2xl font-semibold text-black mb-2'>{product?.name}</h2>
                {/* rate  */}
                <div className='flex items-center gap-x-2 mb-2'>
                    <span className='block text-sm text-black'>{product?.rate}</span>
                    <Rate number={product?.rate} />
                    <span className='block text-sm text-gray-500'>(100)</span>
                    <div className='w-px h-3 bg-gray-500'></div>
                    <span className='block text-sm text-gray-500'>Đã bán 20</span>
                </div>
                {/* price  */}
                <ShowPriceProductDetail product={product} variant={selectVariant} />
                {/* option  */}
                <div className='mb-6'>
                    <OptionsProduct options={product.options} filterVariantBySelectOptions={filterVariantsBySelectOptions} selectOptions={selectOptions} setSelectOptions={setSelectOptions} />
                </div>
                <InputStockProductDetail inputRef={inputRef} selectVariant={selectVariant} />
                <div className='flex items-center gap-4 mb-6'>
                    <Button onClick={() => onAddToCart()}>Thêm giỏ hàng <ShoppingCart /></Button>
                    {/* <Button>Mua ngay</Button> */}
                    <Button className='text-red-500 bg-white hover:bg-blue-100'><Heart /></Button>
                </div>
            </div>
            <CustomCard
                title='Thông tin chi tiết'
                className='mb-4'
            >
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
                <div className='flex justify-between pb-2 border-b mb-2'>
                    <h3 className='max-w-[45%] text-sm text-gray-500'>Thương Hiệu</h3>
                    <div className='w-[50%] text-black text-sm'>
                        Addidas
                    </div>
                </div>
            </CustomCard>
            <DescriptionProduct />
        </div>
    )
}


export default InforProduct