import { useToast } from '@/hooks/use-toast'
import { TypeProductModelEdit } from '@/schemas/product'
import { Minus, Plus } from 'lucide-react'
import { MutableRefObject} from 'react'

type InputStockProductDetailProps = {
    inputRef: MutableRefObject<HTMLInputElement | null>,
    selectVariant: TypeProductModelEdit | null
}
const InputStockProductDetail = ({ inputRef, selectVariant }: InputStockProductDetailProps) => {

    const { toast } = useToast()

    const onChangeStockInput = (action: 'increase' | 'decrease' | 'change', value: number) => {
        if (!selectVariant) {
            toast({
                variant: "destructive",
                title: "Lỗi",
                description: "Vui lòng chọn loại hàng"
            })

            return
        }

        if (!inputRef || !inputRef.current) {
            return
        }
        const currentValue = inputRef.current.value
        switch (action) {
            case 'increase':
                if (currentValue && Number(currentValue) <= selectVariant.stock) {
                    const newValue = Number(currentValue) + value
                    inputRef.current.value = String(newValue)
                }
                break;
            case 'decrease':
                if (currentValue && Number(currentValue) > 1) {
                    const newValue = Number(currentValue) - value
                    inputRef.current.value = String(newValue)
                }
                break;
            case 'change':
                if (!value || Number(value) < 0 || Number(value) > selectVariant?.stock) {
                    inputRef.current.value = String(1)
                } else {
                    inputRef.current.value = String(value)
                }
                break;
            default:
                break;
        }
    }


    return (
        <div className={`${!selectVariant && 'bg-slate-100'} flex items-center border mb-6 w-fit `}>
            <button onClick={() => onChangeStockInput('decrease', 1)} disabled={selectVariant ? false : true} className='border size-9 flex justify-center items-center bg-transparent hover:bg-gray-200'><Minus size={20} /></button>
            <input ref={inputRef} onBlur={(e: React.ChangeEvent<HTMLInputElement>) => onChangeStockInput('change', Number(e.target.value))} disabled={selectVariant ? false : true} className='border h-9 w-11 flex justify-center items-center text-center bg-transparent  hover:bg-gray-200' type="number" min={1} defaultValue={1} />
            <button onClick={() => onChangeStockInput('increase', 1)} disabled={selectVariant ? false : true} className='border size-9 flex justify-center items-center bg-transparent hover:bg-gray-200'><Plus /></button>
        </div>
    )
}

export default InputStockProductDetail