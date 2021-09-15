import CenterBreadcrumb from 'components/kit/CenterBreadcrumb'
import React from 'react'

const DATA = Array(3).fill({
    ques: `Can I install/upload anything I want on there?`,
    anw: `Laboris qui labore cillum culpa in sunt quis sint veniam.
    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
    minim velit nostrud pariatur culpa magna in aute.`,
})

function FrequentlyAskedQues() {
    return (
        <div className="py-16 grid place-items-center bg-cyan-light bg-opacity-10">
            <CenterBreadcrumb heading="Câu hỏi thường gặp" subheading="" />
            <div className="w-1/2 mb-20">
                {DATA.map((v, index)=>
                    <details id={index.toString()} className="mb-4 py-2 border-b-[0.5px] border-gray">
                        <summary className="text-xl mb-1 font-semibold cursor-pointer">{v.ques}</summary>
                        <span className="text-justify">{v.anw}</span>
                    </details>
                )}
            </div>
        </div>
    )
}

export default FrequentlyAskedQues
