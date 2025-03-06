
import { redirect } from 'next/navigation'
import React from 'react'
import CouponEditPageMain from './_components/CouponEditPageMain'
import moment from 'moment'
import { Icoupon } from '@/types/coupon'
import { env } from '@/utils/config'

const CouponEditPage = async ({ params }: { params: Promise<{ code: string }> }) => {
  const code = (await params).code
  const result = await fetch(`${env.DOMAIN_SERVER}/coupons/detail/${code}`,{
    cache:'no-store'
  })
  if (!result.ok) redirect('/admin/coupons')
  const coupon = await result.json() as Icoupon
  const newCoupon = {
    ...coupon,
    value_fixed: coupon.value_fixed,
    start_date: moment(coupon.start_date).format('yyyy-MM-DD'),
    end_date: moment(coupon.end_date).format('yyyy-MM-DD')
  }
  return (
    <CouponEditPageMain coupon={newCoupon} />
  )
}

export default CouponEditPage