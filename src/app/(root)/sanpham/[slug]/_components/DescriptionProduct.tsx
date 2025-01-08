'use client'

import { CustomCard } from '@/app/(root)/_components'
import React, { useRef, useState } from 'react'

const DescriptionProduct = () => {
    const [open, setOpen] = useState(false)
    const divRef = useRef<HTMLDivElement | null>(null)
    return (
        <CustomCard
            title='Mô tả sản phẩm'
        >
            <div ref={divRef} className={`pb-4  relative ${open ? 'min-h-44': 'h-44 overflow-hidden' }`}>
                Áo Thun 3 Lỗ Nữ 2 Chiếc Lá Vải Cotton Co Giãn 4 Chiều Mặc Đẹp Tôn Dáng, Đa Nặng Mặc Tập GYM, Dạo Phố, Tập Thể Dục SN121 Sally Boutique

                + Áo phù hợp với nhiều độ tuổi

                + Thích hợp mặc hàng ngày đi chơi du lịch, dạo phố, tập thể dục,

                + Có thể phối (mix đồ) với nhiều trang phục khác nhau như: quần short, jean, chân váy, áo khoác vest,

                1. CHI TIẾT SẢN PHẨM

                Kích cỡ: Form ôm nhẹ size S,M,L,XL,XXL(43kg - 68kg)

                Màu sắc: Trắng, Đen, Hồng, Vàng bò, Đỏ cam, Xanh lông công, Xám chì, Xám tro, Xanh ve chai, Đỏ đô, Xanh két (màu có thể chênh lệch đôi chút với thực tế do anh sáng, màn hình điện thoại, máy tính,)

                Mùa: Mọi mùa trong năm, thích hợp với khí hậu nhiệt đới nóng ẩm của nước ta.

                Đường may: tinh tế đều và đẹp, đạt chuẩn VNXK

                Họa tiết in PET/Decal Hàn Quốc rất bền và đẹp, hàng y hình 100%



                2. HƯỚNG DẪN CHỌN SIZE

                Tùy vào vóc dáng của mỗi người(chiều cao+cân nặng+số đo 3 vòng) nên size có thể khác, nếu muốn mặc rộng rãi có thể chọn tăng thêm 1 hoặc 2 size

                3. ĐỔI TRẢ & HOÀN TIỀN.

                Tất cả các sản phẩm áo thun tại Sally Shop đều được kiểm tra kỹ trước khi đóng hàng gửi đi. Tuy nhiên sẽ có những lúc không tránh khỏi được những sai sót, mong các bạn thông cảm. Để đảm bảo cho các bạn yên tâm mua hàng, shop có những chính sách quy định về đổi trả & hoàn tiền đảm bảo quyền lợi khi trước và sau khi mua hàng.

                + Trong vòng 07 ngày kể từ lúc nhận sản phẩm

                + Hàng hoá vẫn còn mới, chưa qua sử dụng, giặt ủi

                + Hàng hoá bị lỗi hoặc hư hỏng do vận chuyển hoặc do nhà sản xuất

                + Hàng không đúng số đo, kiểu dáng như quý khách đặt hàng

                + Giao thiếu số lượng sản phẩm trong đơn hàng

                + Quá 07 ngày kể từ khi Quý khách nhận hàng

                + Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của SALLY BOUTIQUE

                + Không thích, không hợp, đặt nhầm mã, nhầm màu,

                + Áo đã qua mặc, giặt ủi, chỉnh sửa đường may



                4. HƯỚNG DẪN BẢO QUẢN

                + Không được dùng thuốc tẩy mạnh

                + Ủi với nhiệt độ vừa phải.

                + Tránh chà mạnh bằng bàn chảy

                + Hạn chế phơi trực tiếp dưới ánh nắng gắt

                + Không giặt chung với sản phẩm dễ ra màu khác

                + Vải tối màu: đen, đỏ, xanh đậm,..có thể ra màu ở 1,2 nước giặt đầu tiên

                Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....

                Sản phẩm này là tài sản cá nhân được bán bởi Nhà Bán Hàng Cá Nhân và không thuộc đối tượng phải chịu thuế GTGT. Do đó hoá đơn VAT không được cung cấp trong trường hợp này.
               {!open && (
                 <div className=' absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white/100 via-white/30 to-transparent h-28'></div>
               )}
            </div>
            <button onClick={()=>setOpen(!open)} className='w-full text-blue-500 hover:text-red-600'>{open?'Thu Gọn':'Xem Thêm'}</button>
        </CustomCard>
    )
}

export default DescriptionProduct