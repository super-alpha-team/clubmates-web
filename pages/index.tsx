import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React, { FC } from "react";
import Image from "next/image";
import hompageImage from "../public/assets/homepage.svg";
import section11 from "../public/assets/section1-1.svg";
import section12 from "../public/assets/section1-2.svg";
import section13 from "../public/assets/section1-3.svg";
import user01 from "../public/assets/user01.svg";
import section5 from "../public/assets/section5.svg";

const HomePage: FC = () => {
  return (
    <div className="">
      <Header />
      <div className="lg:pr-24 lg:pl-24 pr-8 pl-8">
        <Image
          src={hompageImage}
          alt="image"
          //layout="fill"
          //width="1000"
          height="491"
        />
        <section className="pb-20 pt-12 lg:pt-20">
          <h1 className="text-center text-4xl font-bold mb-12 text-cyan-dark">
            Nền tảng Clubmates
          </h1>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex flex-col items-center">
              <Image
                src={section11}
                alt="image"
                height="300"
                className="pl-4 pr-4 sm:pl-0 sm:pr-0"
              />
              <p className="text-lg mb-8 mt-4 md:mb-0 md:mt-8">
                Tối ưu và đồng bộ
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={section12}
                alt="image"
                height="300"
                className="pl-4 pr-4 sm:pl-0 sm:pr-0"
              />
              <p className="text-lg mb-8 mt-4 md:mb-0 md:mt-8">
                Dễ dàng thao tác và làm việc nhóm
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={section13}
                alt="image"
                height="300"
                className="pl-4 pr-4 sm:pl-0 sm:pr-0"
              />
              <p className="text-lg mt-4 md:mb-0 md:mt-8">
                Quản lý thông tin cá nhân
              </p>
            </div>
          </div>
        </section>

        {/* hoạt động nổi bật */}
        <section className="pb-20 pt-8">
          <div className="flex flex-col items-center mb-16">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="text-3xl font-bold text-cyan-dark mb-6">
              Hoạt động nổi bật
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
            </p>
            <p>the 1500s, when an unknown printer took a galley of type.</p>
          </div>
          <div className="text-center">components</div>
        </section>

        {/* câu lạc bộ nổi bật */}
        <section className="pb-20 pt-12">
          <div className="flex flex-col items-center mb-16">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="text-3xl font-bold text-cyan-dark mb-6">
              Câu lạc bộ nổi bật
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
            </p>
            <p>the 1500s, when an unknown printer took a galley of type.</p>
          </div>
          <div className="text-center">components</div>
        </section>

        {/* section đánh giá nhận xét */}
        <section className="pb-20 pt-12">
          <div className="flex flex-col items-center mb-16">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="text-3xl font-bold text-cyan-dark mb-6">
              Đánh giá nhận xét
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
            </p>
            <p>the 1500s, when an unknown printer took a galley of type.</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-around">
            <div className="lg:w-1/2 w-full mb-12 lg:mb-0 pl-4 md:pl-0 pr-4 md:pr-0 flex justify-center">
              <div className="sm:w-5/6 flex flex-col items-center pt-8 pb-12 bg-bgc shadow-card rounded-xl">
                <Image
                  src={user01}
                  alt="user 01"
                  width="128"
                  className="rounded-full"
                />
                <p className="sm:w-1/4 w-2/4 text-center mt-6">
                  Rất xinh đẹp rất tuyệt vời, Rất xinh đẹp rất tuyệt vời, Rất
                  xinh đẹp rất tuyệt vời
                </p>
                <div className="flex mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-center">Regina Miles</p>
                  <p className="font-semibold text-center">Student</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full pl-4 md:pl-0 pr-4 md:pr-0  flex justify-center">
              <div className="sm:w-5/6 flex flex-col items-center pt-8 pb-12 bg-bgc shadow-card rounded-xl">
                <Image
                  src={user01}
                  alt="user 01"
                  width="128"
                  className="rounded-full"
                />
                <p className="sm:w-1/4 w-2/4 text-center mt-6">
                  Rất xinh đẹp rất tuyệt vời, Rất xinh đẹp rất tuyệt vời, Rất
                  xinh đẹp rất tuyệt vời
                </p>
                <div className="flex mt-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-center">Regina Miles</p>
                  <p className="font-semibold text-center">Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* số liệu nổi bật */}
        <section className="pb-20 pt-12 flex lg:flex-row flex-col ">
          <div className="flex-1 mb-12 lg:mb-0">
            <Image src={section5} alt="image 5" layout="fill" />
          </div>
          <div className="flex flex-col flex-1 ml-12 justify-center">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="text-3xl font-bold text-cyan-dark mb-6">
              Số liệu nổi bật
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
            </p>
            <p>the 1500s, when an unknown printer took a galley of type.</p>
            <div className="flex sm:flex-row flex-col gap-14 mt-6 mb-6">
              <p>
                <span className="text-5xl font-bold text-orange">20</span>
                <br />
                Câu lạc bộ
                <span>
                  <br />
                </span>
                đội nhóm
              </p>
              <p>
                <span className="text-5xl font-bold text-orange">55+</span>
                <br />
                Hoạt động
                <span>
                  <br />
                </span>
                đã và đang diễn ra
              </p>
              <p>
                <span className="text-5xl font-bold text-orange">600+</span>
                <br />
                Sinh viên
                <span>
                  <br />
                </span>
                đã và đang tham gia
              </p>
            </div>
            <button className="w-36 p-2 rounded-full bg-cyan-dark text-white shadow-button">
              Xem chi tiết
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
