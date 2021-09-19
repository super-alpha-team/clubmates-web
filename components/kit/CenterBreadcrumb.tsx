import React from 'react'

export interface BreadCrumbProps {
    heading: string;
    subheading: string;
}

function CenterBreadcrumb({heading, subheading}: BreadCrumbProps) {
    return (
        <div className="w-full pb-8 grid place-items-center gap-y-4 bg-none">
            <span className="w-[100px] h-1 bg-cyan-light"></span>
            <h1 className="w-full text-5xl text-center text-cyan-dark font-bold">{heading}</h1>
            <p className="max-w-3xl text-justufy text-gray-dark">{subheading}</p>
        </div>
    )
}

export default CenterBreadcrumb
