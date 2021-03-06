import React, { FC, useRef } from "react";
import Image from "next/image";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Banner from "components/kit/Banner";

import section11 from "../public/assets/section1-1.svg";
import section12 from "../public/assets/section1-2.svg";
import section13 from "../public/assets/section1-3.svg";
import user01 from "../public/assets/user01.svg";
import section5 from "../public/assets/section5.svg";
import star from "../public/icons/star.svg";
import starOutline from "../public/icons/star-outline.svg";

// import { selectUser, selectStatus } from "redux/userSlice";
// import { useAppSelector } from "redux/hooks";

// import useIntersectionObserver from "./useIntersectionObserver";
// import { useIntersection } from "react-use";
import gsap from "gsap";
import Highlights from "components/club/Highlights";

const HomePage: FC = () => {
  // const user = useAppSelector(selectUser);
  // const status = useAppSelector(selectStatus);

  const sectionRef = useRef(null);
  // const section2Ref = useRef(null);
  // const intersection = useIntersectionObserver({
  //   refs: [sectionRef, section2Ref],
  //   options: {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.6,
  //   },
  // });

  if (typeof document !== "undefined") {
    const fadeIn = (element) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0,
        },
      });
    };

    const fadeOut = (element) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -50,
        ease: "power4.out",
      });
    };

    // if (intersection && intersection.intersectionRatio < 0.6) {
    //   fadeOut(".fadeIn");
    //   console.log("out", intersection);
    // } else {
    //   console.log("in", intersection);
    //   fadeIn(".fadeIn");
    // }
  }

  // if (typeof document !== "undefined") {
  //   const clubmates = document.querySelector(".clubmates");
  //   //console.log("clubmates", clubmates);
  //   clubmates.classList.remove("-translate-y-0", "opacity-1");

  //   const observer = new IntersectionObserver((entries) => {
  //     // console.log("entries", entries);
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         //console.log("entry", entry);
  //         clubmates.classList.remove("-translate-y-16", "opacity-0");
  //         clubmates.classList.add("-translate-y-0", "opacity-1");
  //       } else {
  //         clubmates.classList.remove("-translate-y-0", "opacity-1");
  //         clubmates.classList.add("-translate-y-16", "opacity-0");
  //       }
  //     });
  //   });

  //   observer.observe(clubmates);
  //   // clubmates.forEach((clubmate) => {
  //   //   observer.observe(clubmate);
  //   // });
  // }

  return (
    <div className="">
      <Header />
      <Banner />
      <div id="section1" className="lg:pr-24 lg:pl-24 pr-8 pl-8">
        <section ref={sectionRef} className="pb-20 pt-12 lg:pt-20">
          <h1
            id="clubmates"
            className="clubmates text-center text-4xl font-bold mb-12 text-cyan-dark"
            // className="clubmates text-center text-4xl font-bold mb-12 text-cyan-dark transition duration-700 ease opacity-0 -translate-y-16 delay-200"
          >
            N???n t???ng Clubmates
          </h1>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="fadeIn flex flex-col items-center ">
              <Image
                src={section11}
                alt="image"
                height="300"
                className="pl-4 pr-4 sm:pl-0 sm:pr-0"
              />
              <p className="text-lg mb-8 mt-4 md:mb-0 md:mt-8">
                T???i ??u v?? ?????ng b???
              </p>
            </div>
            <div className="fadeIn flex flex-col items-center">
              <Image
                src={section12}
                alt="image"
                height="300"
                className="pl-4 pr-4 sm:pl-0 sm:pr-0"
              />
              <p className="text-lg mb-8 mt-4 md:mb-0 md:mt-8">
                D??? d??ng thao t??c v?? l??m vi???c nh??m
              </p>
            </div>
            <div className="fadeIn flex flex-col items-center">
              <Image
                src={section13}
                alt="image"
                height="300"
                className="pl-4 pr-4 sm:pl-0 sm:pr-0"
              />
              <p className="text-lg mt-4 md:mb-0 md:mt-8">
                Qu???n l?? th??ng tin c?? nh??n
              </p>
            </div>
          </div>
        </section>

        {/* ho???t ?????ng n???i b???t */}
        <section className="pb-12 pt-8">
          <div className="flex flex-col items-center mb-2">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1
              id="activityH1"
              className="clubmates text-3xl font-bold text-cyan-dark mb-6 "
            >
              Ho???t ?????ng n???i b???t
            </h1>
            <p>
              Nh???ng ho???t ?????ng n???i b???t g???n ????y ???????c Clubmates c???p nh???t s???m nh???t
            </p>
            <p>H??y gh?? qua n???u b???n c?? ???n t?????ng nh??!!!</p>
          </div>
          <div className="">
            <Highlights />
          </div>
        </section>

        {/* c??u l???c b??? n???i b???t */}
        <section className="pb-12 pt-12">
          <div className="flex flex-col items-center mb-2">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="clubmates text-3xl font-bold text-cyan-dark mb-6">
              C??u l???c b??? n???i b???t
            </h1>
            <p>
              Nh???ng c??u l???c b??? ??ang tr??n top trending c???a Clubmtes d???o g???n ????y
            </p>
            <p>???n v??o xem n???u b???n mu???n bi???t th??m v??? ch??ng m??nh nh??</p>
          </div>
          <div className="text-center">
            <Highlights />
          </div>
        </section>

        {/* section ????nh gi?? nh???n x??t */}
        <section className="pb-20 pt-12">
          <div className="flex flex-col items-center mb-16">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="text-3xl font-bold text-cyan-dark mb-6">
              ????nh gi?? nh???n x??t
            </h1>
            <p>
              M???t v??i nh???n x??t n???i b???t m?? ?????i ng?? Clubmates thu th???p ???????c t???
            </p>
            <p>m???t trong nhi???u ng?????i d??ng Clubmates th???i gian qua</p>
          </div>
          <div className="fadeIn flex lg:flex-row flex-col justify-around">
            <div className="lg:w-1/2 w-full mb-12 lg:mb-0 pl-4 md:pl-0 pr-4 md:pr-0 flex justify-center">
              <div className="sm:w-5/6 flex flex-col items-center pt-8 pb-12 bg-bgc shadow-card rounded-xl">
                <Image
                  src={user01}
                  alt="user 01"
                  width="128"
                  className="rounded-full"
                />
                <p className="sm:w-1/4 w-2/4 text-center mt-6">
                  ???ng d???ng r???t tuy???t v???i v?? h???u ??ch, n?? gi??p t??i v?? nh???ng ng?????i
                  b???n qu???n l?? t???t c??u l???c b??? c???a m??nh
                </p>
                <div className="flex mt-3 mb-3">
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image
                      src={starOutline}
                      alt="star"
                      width="18"
                      height="18"
                    />
                  </div>
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
                  R???t gi??p ??ch trong vi???c giao ti???p v?? qu???n l?? c??ng vi???c hi???u
                  qu??? cho c??c th??nh vi??n
                </p>
                <div className="flex mt-3 mb-3">
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image src={star} alt="star" width="18" height="18" />
                  </div>
                  <div className="h-5 w-5">
                    <Image
                      src={starOutline}
                      alt="star"
                      width="18"
                      height="18"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold text-center">Regina Miles</p>
                  <p className="font-semibold text-center">Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* s??? li???u n???i b???t */}
        <section className="pb-20 pt-12 flex lg:flex-row flex-col ">
          <div className="fadeIn flex-1 mb-12 lg:mb-0">
            <Image src={section5} alt="image 5" />
          </div>
          <div className="flex flex-col flex-1 ml-12 justify-center">
            <div className="w-24 border-4 border-cyan-light rounded-full mb-6"></div>
            <h1 className="text-3xl font-bold text-cyan-dark mb-6">
              S??? li???u n???i b???t
            </h1>
            <p>
              S??? li???u ng?????i d??ng v?? ho???t ?????ng c???a Clubmates ???????c ?????i ng?? ph??t
            </p>
            <p>tri???n thu th???p ???????c th???i gian qua</p>
            <div className="flex sm:flex-row flex-col gap-14 mt-6 mb-6">
              <p>
                <span className="text-5xl font-bold text-orange">20</span>
                <br />
                C??u l???c b???
                <span>
                  <br />
                </span>
                ?????i nh??m
              </p>
              <p>
                <span className="text-5xl font-bold text-orange">55+</span>
                <br />
                Ho???t ?????ng
                <span>
                  <br />
                </span>
                ???? v?? ??ang di???n ra
              </p>
              <p>
                <span className="text-5xl font-bold text-orange">600+</span>
                <br />
                Sinh vi??n
                <span>
                  <br />
                </span>
                ???? v?? ??ang tham gia
              </p>
            </div>
            <button className="w-36 p-2 rounded-full bg-cyan-dark text-white shadow-button">
              Xem chi ti???t
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
