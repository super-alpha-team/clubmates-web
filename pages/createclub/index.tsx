import React, { useState } from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import "react-calendar/dist/Calendar.css";

import GeneralInformationTab from "components/createclub/tabs/GeneralInformationTab";
import OrganizeStructureTab from "components/createclub/tabs/OrganizeStructureTab";
import ActivityTab from "components/createclub/tabs/ActivityTab";

const CreateClub = () => {
  const [clubInfo, setClubInfo] = useState({
    ClubTitle: "",
    ClubCate: "",
    ClubColor: "",
    ClubLocation: "",
    ClubCreatedAt: "",
    ClubDes: "",
    ClubWebsite: "",
    ClubNumberPhone: "",
    ClubEmail: "",
    ClubLogoUrl: "",
    ClubPhotosUrl: "",
  });
  const [clubGroupInfo, setClubGroupInfo] = useState([]);
  const [activityInfo, setActivityInfo] = useState([]);

  const [tabNumber, setTabNumber] = useState(1);
  const [maxTabNumber, setMaxTabNumber] = useState(1);

  const [logoImg, setLogoImg] = useState(null);
  const [photoImg, setPhotoImg] = useState(null);

  const onNext = () => {
    setTabNumber(tabNumber + 1);
    setMaxTabNumber(tabNumber + 1);
  };

  const onSaveClubInfo = () => {
    console.log("clubinfo", clubInfo);
    console.log("activit", activityInfo);
    console.log("clubgroup", clubGroupInfo);
  };

  const changeTabNumber = (tabNum) => {
    if (tabNum <= maxTabNumber) {
      setTabNumber(tabNum);
    }
  };

  return (
    <div>
      <Header />
      <div className="mr-60 ml-60 mb-20">
        {/* title page */}
        <div className="flex flex-col items-center mb-8 ">
          <p className="text-5xl font-semibold mt-12 mb-4">Tạo Câu lạc bộ</p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
            sagittis blandit morbi ipsum orci sit.
          </p>
          <p className="">
            Pretium commodo arcu, dictumst amet sitdui ut magna interdum
          </p>
        </div>
        {/* tab info */}
        <div className="flex gap-1 mb-6">
          <div
            className="w-[255px] cursor-pointer"
            onClick={() => changeTabNumber(1)}
          >
            <p className="text-orange">1. Thông tin chung</p>
            <div className="w-full border-4 border-orange rounded-sm mb-6"></div>
          </div>
          {tabNumber >= 2 ? (
            <div
              className="w-[255px] cursor-pointer"
              onClick={() => changeTabNumber(2)}
            >
              <p className="text-orange">2. Cơ cấu</p>
              <div className="w-full border-4 border-orange rounded-sm mb-6"></div>
            </div>
          ) : (
            <div
              className="w-[255px] cursor-pointer"
              onClick={() => changeTabNumber(2)}
            >
              <p className="text-[#b6b6b6]">2. Cơ cấu</p>
              <div className="w-full border-4 border-[#b6b6b6] rounded-sm mb-6"></div>
            </div>
          )}
          {tabNumber >= 3 ? (
            <div
              className="w-[255px] cursor-pointer"
              onClick={() => changeTabNumber(3)}
            >
              <p className="text-orange">3. Hoạt động</p>
              <div className="w-full border-4 border-orange rounded-sm mb-6"></div>
            </div>
          ) : (
            <div
              className="w-[255px] cursor-pointer"
              onClick={() => changeTabNumber(3)}
            >
              <p className="text-[#b6b6b6]">3. Hoạt động</p>
              <div className="w-full border-4 border-[#b6b6b6] rounded-sm mb-6"></div>
            </div>
          )}
          {tabNumber >= 4 ? (
            <div
              className="w-[255px] cursor-pointer"
              onClick={() => changeTabNumber(4)}
            >
              <p className="text-orange">4. Tạo</p>
              <div className="w-full border-4 border-orange rounded-sm mb-6"></div>
            </div>
          ) : (
            <div
              className="w-[255px] cursor-pointer"
              onClick={() => changeTabNumber(4)}
            >
              <p className="text-[#b6b6b6]">4. Tạo</p>
              <div className="w-full border-4 border-[#b6b6b6] rounded-sm mb-6"></div>
            </div>
          )}
        </div>
        {/* main section */}
        {tabNumber === 1 ? (
          <GeneralInformationTab
            clubInfo={clubInfo}
            setClubInfo={setClubInfo}
            logoImg={logoImg}
            setLogoImg={setLogoImg}
            photoImg={photoImg}
            setPhotoImg={setPhotoImg}
          />
        ) : tabNumber === 2 ? (
          <OrganizeStructureTab
            clubGroupInfo={clubGroupInfo}
            setClubGroupInfo={setClubGroupInfo}
          />
        ) : tabNumber === 3 ? (
          <ActivityTab
            activityInfo={activityInfo}
            setActivityInfo={setActivityInfo}
          />
        ) : (
          <div className="flex items-center mt-6">
            <img
              src="/icons/bi_check-circle-fill.svg"
              alt="check"
              className="text-orange mr-2"
            />{" "}
            <p>Chính sách bảo mật và quyền riêng tư</p>
          </div>
        )}

        {/* next button */}
        <div className="flex justify-center mt-12">
          {tabNumber === 4 ? (
            <button
              className="text-lg pl-8 h-11 pr-8 pt-2 pb-2 rounded-full bg-orange text-white shadow-lg hover:bg-orange-dark transition duration-200"
              onClick={onSaveClubInfo}
            >
              Tạo câu lạc bộ
            </button>
          ) : (
            <button
              className="text-lg pl-8 h-11 pr-8 pt-2 pb-2 rounded-full bg-orange text-white shadow-lg hover:bg-orange-dark transition duration-200"
              onClick={onNext}
            >
              Tiếp tục
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateClub;
