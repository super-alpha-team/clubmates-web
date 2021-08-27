import React, { useState } from "react";
import DropdownButton from "components/search/DropdownButton"
// import Activity from "components/layout/Activity";
import RelevantResults from "components/layout/RelevantResults";
import SearchResults from "components/layout/SearchResults";

type AppProps = {
  query: string;
};

// // https://nextjs.org/docs/routing/shallow-routing
const LoginSuccess = ({ query }: AppProps) => {
  const [categoryFilter, setCategoryFilter] = useState<string>(null)
  const [timeFilter, setTimeFilter] = useState<string>(null)
  const [provinceFilter, setProvinceFilter] = useState<string>(null)
  const [priceFilter, setPriceFilter] = useState<string>(null)

  return <div>
    <div >
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <div className="mt-8 mb-4 px-4 h-12 w-4/5 bg-white border rounded-full flex flex-row justify-center items-center">
          <div className="mr-2 relative w-32 text-red-400 items-center">
            <select className="z-20 w-full appearance-none border-none active:border-none" id="type">
              <option value="all">Tất cả</option>
              <option value="club">Câu lạc bộ</option>
              <option value="activity">Hoạt động</option>
            </select>
            <img className="z-10 absolute bottom-0 right-0" src="/icons/entypo_select-arrows.svg"></img>
          </div>
          <div className="mr-8 h-4/5 w-px bg-gray-200"></div>
          <div className="w-full flex flex-row justify-between">
            <input className="w-full outline-none border-none" type="text" id="search" placeholder="Tìm kiếm bất cứ thứ gì ở đây..."></input>
            <svg className="ml-3 h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <p className="text-sm mb-4">
          <span>Đề xuất:&nbsp;</span>
          <span className="text-red-400">Mùa hè xanh, MHX, chiến dịch,..</span>
        </p>

        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-4 px-24 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <DropdownButton value={categoryFilter} title="Danh mục" items={["Thể thao", "Tình nguyện", "Văn nghệ"]} action={setCategoryFilter}></DropdownButton>
          <DropdownButton value={timeFilter} title="Thời gian" items={["Trong tuần", "Trong tháng", "Trong quý"]} action={setTimeFilter}></DropdownButton>
          <DropdownButton value={provinceFilter} title="Địa điểm" items={provinces} action={setProvinceFilter}></DropdownButton>
          <DropdownButton value={priceFilter} title="Giá" items={["Miễn phí", "Dưới 100k", "Dưới 500k"]} action={setPriceFilter}></DropdownButton>
        </div>
      </div>
   
      <div className="p-4">
      <SearchResults searchKeyword="Chiến dịch mùa hè xanh lá" results={DATA} />
      <RelevantResults relevantResults={DATA}/>
    </div>
    </div>
  </div>;
  
  // return (
  //   <div className="p-4">
  //     <SearchResults searchKeyword="Chiến dịch mùa hè xanh lá" results={DATA} />
  //     <RelevantResults relevantResults={DATA}/>
  //   </div>
  // );
};

export default LoginSuccess;

export async function getServerSideProps(context) {
  return {
    props: { token: context?.query ?? "" }, // will be passed to the page component as props
  };
}

const provinces = [
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Thành phố Hồ Chí Minh",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
]

const DATA = [
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },
  {
    data: {
      img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
      logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
      joined: true,
      destination: "Long An",
      category: "Tình nguyện",
      name: "Xuân tình nguyện - bạn của mọi nhà",
      description: "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
      status: "Đang diễn ra",
      percent: "25%",
      participants: "25/100",
      cost: "100k",
    }
  },

]