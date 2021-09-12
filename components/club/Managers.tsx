import CenterBreadcrumb from 'components/kit/CenterBreadcrumb'
import React from 'react'

const DATA = Array(3).fill({
    avartar: "https://i.pinimg.com/564x/9a/7f/15/9a7f15a54460da2229d4b9c8da9bcbc9.jpg",
    name: "Regina Miles",
    role: "Designer",
})
function Managers() {
    return (
        <div className="py-16">
            <CenterBreadcrumb heading="Thành viên quản lý" subheading="" />
            <div className="flex justify-center gap-x-[70px]">
                {DATA.map((v) => <div className="px-[25px] pt-[25px] grid gap-y-[25px]">
                    <img src={v.avartar} alt={v.name} className="w-[128px] h-[128px] rounded-[50%]" />
                    <div className="font-bold text-center">
                        <div className="text-[#252B42]">{v.name}</div>
                        <span className="text-sm text-[#737373]">{v.role}</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Managers
