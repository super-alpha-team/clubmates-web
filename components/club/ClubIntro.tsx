import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
// .sliderWrapper {
//     :global(.swiper-pagination-bullet) {
//       background: white;
//       width: 1rem;
//       height: 1rem;
//       border-radius: .5rem;
//       opacity: 1;
//   }
  
//   :global(.swiper-pagination-bullet-active) {
//     background-color: blue;
//     width: 5rem;
//     height: 1rem;
//     border-radius: .5rem;
//   }
// }
const DATA = {
    name: "Câu lạc bộ Alpha",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et placerat non mauris, sollicitudin. Egestas arcu at pellentesque purus sodales interdum amet. Sed dapibus varius bibendum varius imperdiet nunc, et. Placerat leo, vulputate aenean nunc pulvinar ultrices vitae amet, non. Eu viverra vitae velit adipiscing velit facilisis eget vitae proin. Malesuada a, turpis in malesuada maecenas tincidunt. Facilisi dui quis suscipit id lobortis. Quisque fermentum aliquet ut risus. Ut molestie porta volutpat habitasse diam urna, turpis.",
    img: ["https://i.pinimg.com/564x/da/07/66/da076613372bfb031c9deccdfa673f89.jpg", "https://i.pinimg.com/564x/da/07/66/da076613372bfb031c9deccdfa673f89.jpg", "https://i.pinimg.com/564x/da/07/66/da076613372bfb031c9deccdfa673f89.jpg"]
}

const { name, intro, img } = DATA

function ClubIntro() {
    useEffect(() => {
        if (typeof document !== "undefined") {
          const bullets = document.querySelectorAll(".swiper-pagination-bullet")

          bullets.forEach((bullet) => {
            bullet.classList.add("bg-cyan-light")
          })

          const swiper = document.querySelectorAll(".swiper-pagination")
          console.log(swiper)
          swiper.forEach((e)=>{
            //   e.classList.add("")
          })
        }
      }, []);
    return (
        <div className="w-full py-16 flex justify-center items-center bg-cyan-light bg-opacity-10">
            <div className="w-10/12 flex justify-between items-start">
                <div className="w-2/5 h-full flex justify-center cursor-pointer">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {img.map((v) => <SwiperSlide><img src={v} alt="" /></SwiperSlide>)}
                    </Swiper>
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
