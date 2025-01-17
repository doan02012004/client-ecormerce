
import { ConfigurationProduct, CreateProduct, InforbaseProduct, InforDetailProduct, InforShipProduct, ProgressProduct } from './_components'


const ProductAddAdminPage = () => {
    
    return (
        <div className='pb-40 min-w-[1000px]'>

            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-9 *:mb-4'>
                    <h1 className=' uppercase text-base '>Thêm sản phẩm</h1>
                    <InforbaseProduct />
                    <ConfigurationProduct />
                    <InforDetailProduct />
                    <InforShipProduct />
                </div>
                <div className='sticky top-20 h-max col-span-3 flex flex-col'>
                    <div className=' p-2 rounded-lg bg-white min-h-32'>
                      <ProgressProduct />
                       <CreateProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAddAdminPage