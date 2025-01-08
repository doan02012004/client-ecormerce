import React from 'react'
import ContentSuggesstion from './ContentSuggesstion'

const Suggesstion = () => {
  return (
    <div className='bg-white w-full p-3 rounded-lg mb-3'>
    {/* header  */}
    <div className='flex justify-between items-center pb-2 border-b mb-3'>
        <h2 className=' uppercase text-xl font-bold '>Gợi ý hôm nay</h2>
      
    </div>
    {/* content  */}
    <ContentSuggesstion />

</div>
  )
}

export default Suggesstion