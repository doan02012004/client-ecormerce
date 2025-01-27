
import { CustomInputText } from '@/components/web'
import { useToast } from '@/hooks/use-toast'
import { setProductModels, setProductOptions } from '@/redux/features/productSlice'
import { RootState } from '@/redux/store'
import { Imodel, IoptionProduct } from '@/shemas/product'
import { discount, genarateId } from '@/utils/client/main'
import { Plus, X } from 'lucide-react'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageValueOption from './ImageValueOption'


const ClassifyProduct = () => {
    const productOptions = useSelector((state: RootState) => state.product.productOptions)
    const productModels = useSelector((state: RootState) => state.product.productModels)
    const dispatch = useDispatch()
    const { toast } = useToast()
    //hàm tạo models
    const createVariants = useCallback((options: IoptionProduct[], models: Imodel[] | []) => {
        const variants: Imodel[] = []
        if (options.length === 0) return []
        if (options.length === 1) {
            options[0].values.map((value) => {
                const indexModel = models.findIndex((model) => model.name == `${value.label}`)
                if (indexModel >= 0) {
                    variants.push(models[indexModel])
                } else {
                    if (value?.label) {
                        variants.push({
                            name: `${value.label}`,
                            original_price: 0,
                            price: 0,
                            discount: discount(0, 0),
                            stock: 0
                        })
                    }
                }

            })
        }
        if (options.length === 2 && options[1].values[0].label !== '') {
            options[0].values.map((value1) => {
                options[1].values.map((value2) => {
                    const indexModel = models.findIndex((model) => model.name == `${value1.label}, ${value2.label}`)
                    if (indexModel >= 0) {
                        variants.push(models[indexModel])
                    } else {
                        if (value1.label && value2.label) {
                            variants.push({
                                name: `${value1.label}, ${value2.label}`,
                                original_price: 0,
                                price: 0,
                                discount: discount(0, 0),
                                stock: 0
                            })
                        }
                    }
                })
            })
        }
        return variants
    }, [])

    // hàm thêm option cho sản phẩm
    const onAddOption = () => {
        if (!productOptions.some((option) => option.name == '')) {
            dispatch(setProductOptions([...productOptions, {
                _id: genarateId(),
                name: '',
                is_show_image: false,
                values: [
                    {
                        _id: genarateId(),
                        label: '',
                        image:''
                    }
                ]

            }]))
        } else {
            toast({
                variant: "destructive",
                title: "Chưa nhập đủ thông tin",
                description: "Bạn cần nhập đủ thông tin để thêm option mới",
                duration: 3000
            })
        }
    }

    // hàm xóa option sản phẩm
    const onRemoveOption = (item: IoptionProduct) => {
        if (productOptions.length > 1) {
            const newOptions = productOptions.filter((option) => option._id !== item._id)
            dispatch(setProductOptions(newOptions))
        }
    }

    // hàm validate option và tạo models 
    const onAddModels = () => {
        let check = false
        if (productOptions.some((option) => option.name === '')) {
            return toast({
                variant: "destructive",
                title: "Lỗi tạo thuộc tính.",
                description: "Bạn cần nhập đầy đủ thông tin phân loại.",
            })
        }
        if (productOptions.length == 2) {
            if (productOptions[0].name === productOptions[1].name) {
                return toast({
                    variant: "destructive",
                    title: "Lỗi tạo thuộc tính.",
                    description: "Tên phân loại đang bị trùng nhau.",
                })
            }
            const all_value = productOptions.flatMap((option) => option.values)
            const value_label = all_value.map((value) => value.label)
            const check_all_value = new Set(value_label).size !== value_label.length
            if (check_all_value) {
                return toast({
                    variant: "destructive",
                    title: "Lỗi tạo thuộc tính.",
                    description: "Giá trị phân loại đang bị trùng nhau.",
                })
            }
        } else {
            productOptions.map((option) => {
                const value_label = option.values.map((value) => value.label.toLowerCase())
                const checkValue = new Set(value_label).size !== value_label.length;
                if (checkValue) {
                    check = true
                }
            })
            if (check) {
                return toast({
                    variant: "destructive",
                    title: "Lỗi tạo thuộc tính.",
                    description: "Giá trị phân loại đang bị trùng nhau.",
                })
            }
        }
    const variants = createVariants(productOptions,productModels)
    dispatch(setProductModels(variants))
    }

    //hàm xử lý tên phân loại
    const onChangeNameClassify = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const newOptions = productOptions.map((item) => item._id === id ? { ...item, name: e.target.value } : item)
        dispatch(setProductOptions(newOptions))

    }

    //hàm xử lý giá trị của phân loại
    const onChangeValueClassify = (e: React.ChangeEvent<HTMLInputElement>, indexOption: number, id_value: string) => {
        const label = e.target.value
        const values = productOptions[indexOption].values
        const newValues = values.map((value) => value._id === id_value ? { ...value, label: label } : value)
        const newOptions = productOptions.map((item, i) => i === indexOption ? { ...item, values: newValues } : item)
        dispatch(setProductOptions(newOptions))

    }
    const onAddValueOptions = (option: IoptionProduct, index: number) => {
        const fakeId = genarateId()
        const newOptions = productOptions.map((item, i) => i === index ? { ...item, values: [...item.values, { label: '',image:null, _id: fakeId }] } : item)
        dispatch(setProductOptions(newOptions))
    }
    //hàm xử lý giá trị của phân loại
    // const onBlurValueClassify = (e: React.ChangeEvent<HTMLInputElement>, indexOption: number, indexValue: number) => {
    //     // const label = e.target.value
    //     // const values = productOptions[indexOption].values
    //     // if (label == '' && productOptions.length > 1) {
    //     //     const newValues = values.filter((value, index) => index === indexValue)
    //     //     const newOptions = productOptions.map((item, i) => i === indexOption ? { ...item, values: newValues } : item)
    //     //     dispatch(setProductOptions(newOptions))

    //     // }
    // }
    return (
        <div className='grid grid-cols-[100px_auto] gap-3' >
            <div className='text-sm'>
                Phân loại
            </div>
            <div className='*:mb-8'>
                {productOptions?.map((item:IoptionProduct, index: number) => (
                    <div key={item._id} className='bg-gray-200 border px-3 pt-8 pb-4 relative *:mb-4'>
                        {index > 0 && (<X onClick={() => onRemoveOption(item)} className=' absolute right-1 top-1 cursor-pointer hover:text-red-500' />)}
                        <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                            <label className=' text-sm block'> Tên phân loại</label>
                            <CustomInputText classNameInput='bg-white' name='option_name' placeholder='Màu sắc, size,...' onChange={(e) => onChangeNameClassify(e, item?._id ?? '')} />
                        </div>
                        <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                            <label className=' text-sm block'> Giá trị </label>
                            {item.name !== '' && (
                                <div className='flex items-center gap-3 flex-wrap'>
                                    {item?.values.map((valueItem) => (
                                        <div key={valueItem._id} className='w-fit min-w-24 max-w-44'>
                                            <CustomInputText value={valueItem.label}  name='product_name' onChange={(e) => onChangeValueClassify(e, index, valueItem?._id ?? '')} placeholder='VD: xanh,đỏ,M,L,X,...' />
                                        </div>
                                    ))}
                                    <button onClick={() => onAddValueOptions(item, index)} className='px-3 py-1 border border-black flex items-center text-xs hover:bg-white  '> <Plus size={16} /> Giá trị</button>
                                </div>
                            )}
                        </div>
                       {
                        item.is_show_image && (
                            <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                            <label className=' text-sm block'> Ảnh </label>
                            {item.name !== '' && (
                                <div className='flex items-center gap-3 flex-wrap'>
                                    {item?.values.map((valueItem,indexValue:number) => (
                                       valueItem.label !=='' && <ImageValueOption key={valueItem._id} index={indexValue} option={item} value={valueItem} />
                                    ))}
                                   
                                </div>
                            )}
                        </div>
                        )
                       }
                    </div>
                ))}
                <div className=' flex items-center gap-6'>
                    <button disabled={productOptions?.length === 2 ? true : false} onClick={onAddOption} className=' flex items-center gap-2 px-4 py-2 border text-sm hover:bg-black hover:text-white'><Plus /> Thêm phân loại</button>
                    <button onClick={onAddModels} className=' flex items-center gap-2 px-4 py-2 border text-sm hover:bg-black hover:text-white'><Plus /> Tạo thuộc tính</button>
                </div>
            </div>
        </div>
    )
}

export default ClassifyProduct