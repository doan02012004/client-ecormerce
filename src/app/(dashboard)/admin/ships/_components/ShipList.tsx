'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useShipQuery } from '@/hooks/api/ship'
import { IshipInfo } from '@/types/ship'
import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ShipList = () => {
    const [ships, setShips] = useState<IshipInfo[]>([])
    const shipQuery = useShipQuery()

    useEffect(() => {
        if (shipQuery.data && shipQuery.data.length && shipQuery.data.length > 0) {
            setShips(shipQuery.data)
        } else {
            setShips([])
        }
        console.log(shipQuery)
    }, [shipQuery.data])

    return (
        <div className='min-h-screen bg-white p-2'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Tên nhà vận chuyển
                        </TableHead>
                        <TableHead>
                            Thời gian ước tínhtính
                        </TableHead>
                        <TableHead>
                            Trạng thái
                        </TableHead>
                        <TableHead>
                            Chức năng
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ships.map((ship) => (
                        <TableRow key={ship._id} >
                            <TableCell>
                                {ship.name}
                            </TableCell>
                            <TableCell>
                                {ship.estimated_time} ngày
                            </TableCell>
                            <TableCell>
                                {ship.status && 'Hoạt động'}
                                {!ship.status && 'Dừng hoạt động'}
                            </TableCell>
                            <TableCell className='flex flex-wrap gap-2'>
                                <button className='border p-1 transition-colors duration-300 hover:bg-blue-500 hover:text-white' title='Xem chi tiết'>
                                    <Trash size={16} />
                                </button>
                                <a href={`/admin/ships/edit/${ship._id}`} >
                                    <button className='border p-1 transition-colors duration-300 hover:bg-blue-500 hover:text-white' title='Chỉnh sửa'>
                                        <Edit size={16} />
                                    </button>
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ShipList