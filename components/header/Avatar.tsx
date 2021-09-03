import React, { useState } from "react";

// export default function Avatar{
//     // const onBlur = (e) => {
//     //   setExpandedAvatar(!expandedAvatar);
//     //   console.log("blur", expandedAvatar);
//     // };
//     const [expandedAvatar, setExpandedAvatar] = useState(false);
//     function onBlur(e) {
//         console.log("blur");
//     }
//     function setx() {
//         // if (expandedAvatar) {
//         //   setExpandedAvatar(false);
//         // } else {
//         //   setExpandedAvatar(true);
//         // }
//         setExpandedAvatar(true);
//         return true;
//     }
//     return (
//         <div className="flex flex-col items-end" tabIndex={0} onBlur={onBlur}>
//             <button className="bg-gray w-11 h-11" onClick={setx}>
//                 <div className="bg-gray"></div>
//             </button>
//             {expandedAvatar ? (
//                 <div className="absolute z-50 w-36 bg-white p-2 rounded-lg mt-12 border">
//                     <ul className="text-black">
//                         <li className="mt-0 px-1 py-1 rounded hover:bg-gray-100 cursor-pointer font-semibold">
//                             Trang cá nhân
//                         </li>
//                         <li className="mt-0 px-1 py-1 rounded hover:bg-gray-100 cursor-pointer font-semibold">
//                             Đăng xuất
//                         </li>
//                     </ul>
//                 </div>
//             ) : (
//                 ""
//             )}
//         </div>
//     );
// };
