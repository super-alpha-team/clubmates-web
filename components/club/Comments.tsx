import React from 'react'
import CenterBreadcrumb from 'components/kit/CenterBreadcrumb';
import Comment from 'components/kit/Comment';

const DATA = Array(2).fill({
    avartar: "https://i.pinimg.com/564x/9a/7f/15/9a7f15a54460da2229d4b9c8da9bcbc9.jpg",
    comment: `Slate helps you see 
    how many more days 
    you need to work to 
    reach your financial `,
    stars: 4,
    name: "Regina Miles",
    role: "Student",
})

function Comments() {
    return (
        <div className="py-16 bg-[#F4F8FE]">
            <CenterBreadcrumb heading="Đánh giá nhận xét" subheading="" />
            <div className="flex justify-center gap-x-[70px]">
                {DATA.map(({avartar, comment, stars, name, role}) => <Comment avartar={avartar} comment={comment} stars={stars} name={name} role={role} />)}
            </div>
        </div>
    )
}

export default Comments
