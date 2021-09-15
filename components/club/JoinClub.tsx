import React from 'react'

function JoinClub() {
  return (
    <div className="w-full h-[185px] mb-16 grid place-items-center bg-cyan-light bg-opacity-10">
      <div className="w-[900px] h-[70px] pr-3 pl-12 flex justify-between items-center bg-white rounded-md">
        <input type="email" name="" id="" className="w-5/6 h-full focus-visible:outline-none" placeholder="Trở thành thành viên của Câu lạc bộ" />
        <button className="w-[50px] h-[50px] grid place-items-center bg-cyan-light bg-opacity-60 rounded-md hover:bg-opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default JoinClub
