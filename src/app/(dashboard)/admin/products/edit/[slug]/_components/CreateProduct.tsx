import Link from "next/link"


const CreateProduct = () => {
 
    return (
        <div className='flex justify-between items-center'>
            <Link href={'/admin/products'}><button type='submit' className=' text-gray-400 text-sm rounded border px-4 py-2 transition-colors duration-300  hover:text-black'>Quay lại</button></Link>
            <button type='submit' className='bg-black text-white text-sm rounded border px-4 py-2 transition-colors duration-300 hover:bg-white hover:text-black'>Cập nhật </button>
        </div>
    )
}

export default CreateProduct