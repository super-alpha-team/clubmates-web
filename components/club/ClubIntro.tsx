import React from 'react'
const DATA = {
    name: "Câu lạc bộ Alpha",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat non mauris, sollicitudin. Egestas arcu at pellentesque purus sodales interdum amet. Sed dapibus varius bibendum varius imperdiet nunc, et. Placerat leo, vulputate aenean nunc pulvinar ultrices vitae amet, non. Eu viverra vitae velit adipiscing velit facilisis eget vitae proin. Malesuada a, turpis in malesuada maecenas tincidunt. Facilisi dui quis suscipit id lobortis. Quisque fermentum aliquet ut risus. Ut molestie porta volutpat habitasse diam urna, turpis.",
    img: "https://i.pinimg.com/564x/da/07/66/da076613372bfb031c9deccdfa673f89.jpg"
}
function ClubIntro() {
    const {name, intro, img} = DATA
    return (
        <div className="w-full py-16 flex justify-center items-center bg-cyan-light bg-opacity-10">
            <div className="w-10/12 flex justify-between items-start">
                <div className="slider w-2/5 flex justify-center">
                    <img src={img} alt={name} className="w-full h-5/6" />
                </div>
                <div className="w-1/2 flex flex-col gap-y-[16px]">
                    <h1 className="text-4xl">{name}</h1>
                    <p className="text-gray-dark">{intro}</p>
                    <button className="w-[350px] p-2 flex items-center justify-around bg-cyan-light bg-opacity-60 hover:bg-opacity-70 text-xl text-white rounded">
                        Chúng tôi đang tuyển thành viên
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClubIntro
