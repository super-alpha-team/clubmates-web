import React, { useState } from "react";

import DrowpdownButton from "components/createclub/DropdownButton";
import DrowpdownCalendar from "components/createclub/DrowpdownCalendar";
import DropdownColorful from "components/createclub/DropdownColorful";
import InputComponent from "components/createclub/InputComponent";

type GeneralInformationProps = {
  logoImg: any;
  setLogoImg: (string) => void;
  photoImg: any;
  setPhotoImg: (string) => void;
  clubInfo: any;
  setClubInfo: (string) => void;
};

const GeneralInformationTab = ({
  clubInfo,
  setClubInfo,
  logoImg,
  setLogoImg,
  photoImg,
  setPhotoImg,
}: GeneralInformationProps) => {
  const onDescriptionChange = (e) => {
    const { name, value } = e.target;
    setClubInfo({ ...clubInfo, [name]: value });
  };

  const onNameChange = (e) => {
    const { name, value } = e.target;
    setClubInfo({ ...clubInfo, [name]: value });
  };

  const handleUploadLogo = (event) => {
    setLogoImg(URL.createObjectURL(event.target.files[0]));
    setClubInfo({ ...clubInfo, ["ClubLogoUrl"]: event.target.files[0] });
  };

  const handleUploadPhoto = (event) => {
    setPhotoImg(URL.createObjectURL(event.target.files[0]));
    setClubInfo({ ...clubInfo, ["ClubPhotosUrl"]: event.target.files[0] });
  };

  return (
    <div className="w-full grid grid-cols-2">
      <div className="grid grid-cols-2 grid-rows-3">
        <div className="col-span-2">
          <p className="font-semibold">
            Tên câu lạc bộ <span className="text-error">*</span>
          </p>
          <div className="pl-2">
            <input
              className="w-full h-[37px] text-sm bg-[#F1F1F2] focus:border-orange focus:border focus:bg-white transition duration-50 outline-none rounded-lg pl-2"
              placeholder="Nhập tên Câu lạc bộ"
              name="ClubTitle"
              onChange={onNameChange}
              value={clubInfo.ClubTitle}
            ></input>
          </div>
        </div>
        <div>
          <p className="font-semibold">
            Danh mục <span className="text-error">*</span>
          </p>
          <DrowpdownButton
            title="Danh mục"
            items={["Học thuật", "Tình nguyện", "Văn nghệ"]}
            action={setClubInfo}
            name="ClubCate"
            clubInfo={clubInfo}
          />
        </div>
        <div>
          <p className="font-semibold">
            Màu chủ đạo <span className="text-error">*</span>
          </p>
          <DropdownColorful
            value={clubInfo.ClubColor}
            action={setClubInfo}
            name="ClubColor"
            clubInfo={clubInfo}
          />
        </div>
        <div>
          <p className="font-semibold">
            Địa điểm <span className="text-error">*</span>
          </p>
          <DrowpdownButton
            title="Địa điểm"
            items={provinces}
            action={setClubInfo}
            name="ClubLocation"
            clubInfo={clubInfo}
          />
        </div>
        <div>
          <p className="font-semibold">
            Ngày thành lập <span className="text-error">*</span>
          </p>
          <DrowpdownCalendar
            action={setClubInfo}
            clubInfo={clubInfo}
            name="ClubCreatedAt"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center">
          <p>
            Thêm logo <span className="text-error">*</span>
          </p>
          <div className="flex flex-col gap-2 items-center mt-2">
            <label>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadLogo}
              />
              <img
                src="/icons/camera.svg"
                alt="entypo_select-arrows"
                className="p-4 mb-2 bg-orange text-white rounded-lg shadow-2xl cursor-pointer"
              />
            </label>
            {clubInfo?.ClubLogoUrl !== "" ? (
              <img src={logoImg} alt="logo" className="w-32" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p>
            Thêm ảnh giới thiệu <span className="text-error">*</span>
          </p>
          <div className="flex flex-col items-center gap-2 mt-2">
            <label>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadPhoto}
              />
              <img
                src="/icons/iconmonstr-picture-8.svg"
                alt="entypo_select-arrows"
                className="p-4 pr-10 pl-10 mb-2 bg-[#F1F1F2] text-white rounded-lg cursor-pointer"
              />
            </label>
            {clubInfo?.ClubPhotosUrl !== "" ? (
              <img src={photoImg} alt="logo" className="w-32" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="col-span-2 mb-4">
        <p className="font-semibold">
          Mô tả <span className="text-error">*</span>
        </p>
        <div className="pl-2">
          <textarea
            className="resize-none w-full pt-2 text-sm border border-[#F2F5FA] focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-[#F1F1F2] outline-none pl-2"
            placeholder="Nhập mô tả"
            rows={4}
            onChange={onDescriptionChange}
            value={clubInfo.ClubDes}
            name="ClubDes"
          ></textarea>
        </div>
      </div>
      <div className="grid grid-cols-3 col-span-2 gap-1">
        <InputComponent
          title="Website"
          action={setClubInfo}
          clubInfo={clubInfo}
          name="ClubWebsite"
        />
        <InputComponent
          title="Số điện thoại"
          action={setClubInfo}
          clubInfo={clubInfo}
          name="ClubNumberPhone"
        />
        <InputComponent
          title="Email"
          action={setClubInfo}
          clubInfo={clubInfo}
          name="ClubEmail"
        />
      </div>
    </div>
  );
};

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
];

export default GeneralInformationTab;
