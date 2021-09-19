import React from 'react'
import { BreadCrumbProps } from './CenterBreadcrumb'

function LeftBreadCrumb({heading, subheading}: BreadCrumbProps) {
    return (
        <div className="w-full max-h-40 grid place-items-start gap-y-5 bg-none">
            <span className="w-[100px] h-1 bg-cyan-light"></span>
            <h1 className="w-full text-5xl text-left text-cyan-dark font-bold">{heading}</h1>
            <p className="max-w-3xl text-justufy text-gray-dark">{subheading}</p>
        </div>
    )
}

export default LeftBreadCrumb
