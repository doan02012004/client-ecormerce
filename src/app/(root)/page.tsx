import React from 'react'
import { Banner, BestSeller, CategoriesHome, Suggesstion } from './_components'



const HomePage = () => {
  return (
    <div className='container'>
      <Banner />
      <CategoriesHome />
      <BestSeller />
      <Suggesstion />
    </div>
  )
}

export default HomePage