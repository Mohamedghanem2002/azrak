import React from "react";
import home_1 from "../assets/home-1.jpg";
import home_2 from "../assets/home-2.jpg";
import home_3 from "../assets/home-3.png";
import logo from "../assets/logo.png";
import arrow_left from "../assets/arrow-left.png";
import point from "../assets/button-1.png";
import point_1 from "../assets/button.png";
import slide_1 from "../assets/slide-1.png";
import slide_2 from "../assets/slide-2.png";
import slide_3 from "../assets/slide-3.png";
import slide_4 from "../assets/slide-4.png";
import slide_5 from "../assets/slide-5.png";
import slide_6 from "../assets/slide-6.png";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="h-[700px] hidden lg:block ">
          <img src={home_1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-lightGreen ">
          <img src={logo} alt="" className="w-[110px]  mx-auto mt-12 " />
          <img src={home_3} alt="" className="mt-[-115px]" />
          <h1 className="font-bold text-[40px] leading-[78px] text-center text-[#597445]">
            العنايـــــــة التي تستحقهـــــا بشرتــــــــــــــــــــــــك
          </h1>
          <p className="font-normal text-[24px] leading-[24px] text-center text-[#1E2519C7] mt-8">
            منتجات طبيعية 100% لتغذية بشرتك
          </p>
          <button className="flex bg-[#597445] text-[#FFFFFF] w-[220px] h-[60px] items-center justify-center mx-auto gap-2 mt-16 mb-8">
            اكتشــــف المزيد
            <img src={arrow_left} alt="arrow" className="w-[24px] h-[24px]" />
          </button>

          <div className="hidden lg:flex  w-[64px] h-[16px] items-center justify-between mx-auto mt-20  ">
            <img
              src={point}
              alt=""
              className="w-[8px] h-[8px] cursor-pointer"
            />
            <img
              src={point_1}
              alt=""
              className="w-[16px] h-[16px] cursor-pointer"
            />
            <img
              src={point}
              alt=""
              className="w-[8px] h-[8px] cursor-pointer"
            />
          </div>
        </div>
        <div className="h-[700px]  hidden lg:block ">
          <img src={home_2} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className=" w-full h-[100px] bg-darkGreen hidden lg:flex  ">
        <div className="flex container-style items-center justify-between  h-full">
          <img
            src={slide_6}
            alt=""
            className="w-[100px] h-[30px] invert brightness-0"
          />
          <img
            src={slide_5}
            alt=""
            className="w-[150px] h-[30px] invert brightness-0"
          />
          <img
            src={slide_4}
            alt=""
            className="w-[70px] h-[80px] invert brightness-0"
          />
          <img
            src={slide_3}
            alt=""
            className="w-[80px] h-[80px] invert brightness-0"
          />
          <img
            src={slide_2}
            alt=""
            className="w-[150px] h-[30px] invert brightness-0"
          />
          <img
            src={slide_1}
            alt=""
            className="w-[70px] h-[30px] invert brightness-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
