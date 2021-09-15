import React from 'react'

type CommentProps = {
    avartar: string;
    comment: string;
    stars: number;
    name: string;
    role: string;
}

function Comment({avartar, comment, stars, name, role}: CommentProps) {
    return (
        <div className="w-[500px] px-[25px] pt-[25px] grid justify-items-center bg-white">
                    <img src={avartar} alt={name} className="w-[128px] h-[128px] rounded-[50%]" />
                    <div className="p-[30px] gap-y-[15px] text-center flex flex-col items-center">
                        <div className="max-w-[159px] text-[#787878]">{comment}</div>
                        <div className="flex">
                            {Array(stars).fill("").map(() => <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-[#F3CD03]" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </>)}
                            {Array(5 - stars).fill("").map(() => <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-[#F3CD03]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </>)}
                        </div>
                        <div className="px-[25px] gap-y-[5px]">
                            <div className="font-bold text-[#252B42]">{name}</div>
                            <span className="text-sm font-bold text-[#737373]">{role}</span>
                        </div>
                    </div>
                </div>
    )
}

export default Comment
