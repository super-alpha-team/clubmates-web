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
  onNext: () => void;
};

const GeneralInformationTab = ({
  clubInfo,
  setClubInfo,
  logoImg,
  setLogoImg,
  photoImg,
  setPhotoImg,
  onNext,
}: GeneralInformationProps) => {
  const [errors, setErrors] = useState({
    title: "",
    cate: "",
    color: "",
    location: "",
    createdAt: "",
    des: "",
    website: "",
    numberPhone: "",
    email: "",
    logoUrl: "",
    photosUrl: "",
  });

  const onDescriptionChange = (e) => {
    const { name, value } = e.target;
    setClubInfo({ ...clubInfo, [name]: value });
    errors.des =
      value.length == 0 ? "Không để trống ảnh mô tả câu lạc bộ!" : "";
  };

  const onTitleChange = (e) => {
    const { name, value } = e.target;
    setClubInfo({ ...clubInfo, [name]: value });
    errors.title = value.length == 0 ? "Không để trống tên câu lạc bộ!" : "";
  };

  const handleUploadLogo = (event) => {
    setLogoImg(URL.createObjectURL(event.target.files[0]));
    setClubInfo({ ...clubInfo, ["ClubLogoUrl"]: event.target.files[0] });
    errors.logoUrl =
      event.target.files[0].length == 0
        ? "Không để trống logo câu lạc bộ!"
        : "";
  };

  const handleUploadPhoto = (event) => {
    setPhotoImg(URL.createObjectURL(event.target.files[0]));
    setClubInfo({ ...clubInfo, ["ClubPhotosUrl"]: event.target.files[0] });
    errors.photosUrl =
      event.target.files[0].length == 0
        ? "Không để trống ảnh mô tả câu lạc bộ!"
        : "";
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = () => {
    let valid = true;

    if (clubInfo.ClubTitle.length == 0) {
      valid = false;
      errors.title = "Không để trống tên câu lạc bộ!";
    }

    if (clubInfo.ClubCate.length == 0) {
      valid = false;
      errors.cate = "Không để trống danh mục!";
    }

    if (clubInfo.ClubLocation.length == 0) {
      valid = false;
      errors.location = "Không để trống địa điểm!";
    }

    if (clubInfo.ClubColor.length == 0) {
      valid = false;
      errors.color = "Không để trống màu chủ đạo!";
    }

    if (clubInfo.ClubCreatedAt.length == 0) {
      valid = false;
      errors.createdAt = "Không để trống ngày thành lập!";
    }

    if (clubInfo.ClubDes.length == 0) {
      valid = false;
      errors.des = "Không để trống mô tả câu lạc bộ!";
    }

    if (clubInfo.ClubLogoUrl.length == 0) {
      valid = false;
      errors.logoUrl = "Không để trống logo câu lạc bộ!";
    }

    if (clubInfo.ClubPhotosUrl.length == 0) {
      valid = false;
      errors.photosUrl = "Không để trống ảnh mô tả câu lạc bộ!";
    }

    if (clubInfo.ClubWebsite.length == 0) {
      valid = false;
      errors.website = "Không để trống Website!";
    }

    if (clubInfo.ClubNumberPhone.length == 0) {
      valid = false;
      errors.numberPhone = "Không để trống số điện thoại!";
    }

    if (!validEmailRegex.test(clubInfo.ClubEmail)) {
      valid = false;
      errors.email = "Email không hợp lệ!";
    }
    setErrors({ ...errors });

    return valid;
  };

  const onHandleNextChange = () => {
    if (validateForm()) onNext();
  };

  return (
    <>
      <div className="w-full grid gap-2 grid-cols-2">
        <div className="grid grid-cols-2 gap-2 grid-rows-3">
          <div className="col-span-2">
            <p className="font-semibold">
              Tên câu lạc bộ <span className="text-error">*</span>
            </p>
            <div className="pl-2">
              {errors.title === "" ? (
                <input
                  className="w-full h-[37px] text-sm bg-[#F1F1F2] focus:border-orange focus:border focus:bg-white transition duration-50 outline-none rounded-lg pl-2"
                  placeholder="Nhập tên Câu lạc bộ"
                  name="ClubTitle"
                  onChange={onTitleChange}
                  value={clubInfo.ClubTitle}
                ></input>
              ) : (
                <>
                  <input
                    className="w-full h-[37px] text-sm bg-white border-red-600 border focus:border-orange focus:border focus:bg-white transition duration-50 outline-none rounded-lg pl-2"
                    placeholder="Nhập tên Câu lạc bộ"
                    name="ClubTitle"
                    onChange={onTitleChange}
                    value={clubInfo.ClubTitle}
                  ></input>
                  <p className="text-xs m-1 text-red-600">{errors.title}</p>
                </>
              )}
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
              errorType="cate"
              errors={errors}
              setError={setErrors}
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
              errorType="color"
              errors={errors}
              setError={setErrors}
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
              errorType="location"
              errors={errors}
              setError={setErrors}
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
              errorType="createdAt"
              errors={errors}
              setError={setErrors}
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
                <p className="text-xs m-1 text-red-600">{errors.logoUrl}</p>
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
                <p className="text-xs m-1 text-red-600">{errors.photosUrl}</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2 mb-4">
          <p className="font-semibold">
            Mô tả <span className="text-error">*</span>
          </p>
          <div className="pl-2">
            {errors.des === "" ? (
              <textarea
                className="resize-none w-full pt-2 text-sm border border-[#F2F5FA] focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-[#F1F1F2] outline-none pl-2"
                placeholder="Nhập mô tả"
                rows={4}
                onChange={onDescriptionChange}
                value={clubInfo.ClubDes}
                name="ClubDes"
              ></textarea>
            ) : (
              <>
                <textarea
                  className="resize-none w-full pt-2 text-sm border border-red-600 focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-white outline-none pl-2"
                  placeholder="Nhập mô tả"
                  rows={4}
                  onChange={onDescriptionChange}
                  value={clubInfo.ClubDes}
                  name="ClubDes"
                ></textarea>
                <p className="text-xs ml-1 text-red-600">{errors.des}</p>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 col-span-2 gap-1">
          <InputComponent
            title="Website"
            action={setClubInfo}
            clubInfo={clubInfo}
            name="ClubWebsite"
            errorType="website"
            errors={errors}
            setError={setErrors}
          />
          <InputComponent
            title="Số điện thoại"
            action={setClubInfo}
            clubInfo={clubInfo}
            name="ClubNumberPhone"
            errorType="numberPhone"
            errors={errors}
            setError={setErrors}
          />
          <InputComponent
            title="Email"
            action={setClubInfo}
            clubInfo={clubInfo}
            name="ClubEmail"
            errorType="email"
            errors={errors}
            setError={setErrors}
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="text-lg pl-8 h-11 pr-8 pt-2 pb-2 rounded-full bg-orange text-white shadow-lg hover:bg-orange-dark transition duration-200"
          onClick={onHandleNextChange}
        >
          Tiếp tục
        </button>
      </div>
    </>
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
