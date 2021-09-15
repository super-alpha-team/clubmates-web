import ActivityItem from 'components/kit/ActivityItem'
import React from 'react'

const DATA = Array(4).fill({
    data: {
        img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
        logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
        joined: true,
        destination: "Long An",
        category: "Tình nguyện",
        name: "Xuân tình nguyện - bạn của mọi nhà",
        description:
            "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
        status: "Đang diễn ra",
        percent: "25%",
        participants: "25/100",
        cost: "100k",
    },
})

function Highlights() {
    return (
        <div className="py-16 px-8 flex flex-col justify-center">
            <div className="pb-8 flex items-center cursor-pointer">
                <span className="text-xl">HOẠT ĐỘNG NỔI BẬT</span>
                <p className="pl-8 text-h">Xem thêm</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="grid justify-items-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {DATA.map((result, index) => (
                    <ActivityItem key={index} data={result.data} />
                ))}
            </div>
        </div>
    )
}

export default Highlights
