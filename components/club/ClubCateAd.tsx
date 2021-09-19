import React from 'react'

interface ClubCateProps {
    cate: string;
    data: string;
    des?: string;
}
const ClubCateAdDATA = {
    category: "Thành viên",
    data: "210",
    des: "Hãy mô tả tôi"
}
function ClubCateAd() {
    const { category, data, des } = ClubCateAdDATA
    return (
        <div className="w-[300px] h-[150px] p-4 flex flex-col justify-between rounded-[10px] shadow-lg bg-white">
            <div className="h-9 flex items-end justify-between">
                <div className="w-[34px] h-[34px] flex justify-center items-center rounded-[5px] bg-cyan-light opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                </div>
                <p className="w-56 text-[20px] text-gray-dark">{category}</p>
            </div>
            <div className="h-12">
                <h3 className="text-[28px]">{data}</h3>
                <div className="w-[70px] h-1 bg-[#85DED3]"></div>
            </div>
            <p className="h-5 text-sm text-[#787878]">{des}</p>
        </div>
    )
}

export default ClubCateAd
