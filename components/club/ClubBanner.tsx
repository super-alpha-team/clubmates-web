import React from 'react'
import ClubCateAd from './ClubCateAd'

function ClubBanner() {
    const clubName = "Câu lạc bộ Alpha"
    const logo = "https://s3-alpha-sig.figma.com/img/e7ad/b307/5f07c4b51f08f200a468b71f4b3606d8?Expires=1632096000&Signature=Em91Ga4b~f-niay8ooeK8eKaBGJZqBXVBaW0Q3TzGt24a6SWYovK8~tTChed4H8C4EWvQsZEvdGm5fmvE2XvcyJYgV3L6~5knZn~0JvmD0wm7d-O2IBNohwQPyjCSVbcNk7f-1v8yYzAq1w8iaZnib2pYFU5hwrOArCvfzvne1gQ0M44KTzc~bYRc4hBYOsvPWjtOQfIA56lvdD87jt8T~fv1eNV~TBvB7shGCIv0~WsJDphjtP56xGrhuL6FfdHRj1sJznsip6RNJK5Pb7zNaHcPNC3vvxNfGA6GWjyF~tt3zLX~TOJdyya~OhNAkorhxlpaLm2aJkDkUUz9E-ayg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

    return (
        <div className="w-full py-16 flex justify-around items-center">
            <div className="pb-8 flex flex-col gap-y-28">
                <ClubCateAd />
                <ClubCateAd />
            </div>
            <div className="flex flex-col justify-around">
                <div className="w-[150px] h-[1px] absolute left-[500px] top-[173.14px] transform skew-y-[-160deg] bg-gray-dark"></div>
                <div className="w-[150px] h-[1px] absolute left-[614.9px] top-[353px] transform skew-y-[150deg] bg-gray-dark"></div>
            </div>
            {/* Logo */}
            <div className="flex flex-col justify-center items-center">
                <circle className="w-[342px] h-[342px] relative flex justify-center items-center rounded-full border-2 border-[#85DED3]">
                    <circle className="w-[312px] h-[312px] flex justify-center items-center rounded-full border-[1px] border-[#85DED3]">
                        <img src={logo} alt="" className="w-60 h-60" />
                    </circle>
                    <div className="w-[17px] h-[17px] absolute top-20 left-[14px] rounded-full bg-cyan-dark"></div>
                    <div className="w-[17px] h-[17px] absolute bottom-16 left-6 rounded-full bg-cyan-dark"></div>
                    <div className="w-[17px] h-[17px] absolute bottom-10 left-[280px] rounded-full bg-cyan-dark"></div>
                    <div className="w-[17px] h-[17px] absolute top-14 left-[294px] rounded-full bg-cyan-dark"></div>
                </circle>
                <h1 className="mt-8 text-center text-5xl text-cyan-dark">{clubName}</h1>
            </div>
            <div className="flex flex-col justify-between">
                <div className="w-[150px] h-[1px] absolute left-[770px] top-[190px] transform bg-gray-dark"></div>
                <div className="w-[150px] h-[1px] absolute left-[914.9px] top-[353px] transform skew-y-[150deg] bg-gray-dark"></div>
            </div>
            <div className="pb-16 flex flex-col gap-y-24">
                <ClubCateAd />
                <ClubCateAd />
            </div>
        </div>
    )
}

export default ClubBanner
