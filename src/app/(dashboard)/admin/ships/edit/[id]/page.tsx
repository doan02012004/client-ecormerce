import React from 'react'
import ShipMainEditAdmin from './_components/ShipMainEditAdmin'
import { GetShipAdminById } from '@/services/ship'
import { redirect } from 'next/navigation'
import { genarateId } from '@/utils/main'
import { IshipItemFormAdd } from '@/types/ship'

const ShipEditAdmin = async({params}:{params:Promise<{id:string}>}) => {
  const id = (await params).id
  const result = await GetShipAdminById(id)
  if(!result.ok){
    redirect('/admin/ships')
  }
  const data = await result.json()
  const dataAfter ={
    ...data,
    items:data.items.map((item:IshipItemFormAdd,index:number) => ({...item,id:`${genarateId()}-${index}`}))
  }
  return (
    <div>
      <ShipMainEditAdmin ship={dataAfter}/>
    </div>
  )
}

export default ShipEditAdmin