import React from "react";
import catogery_1 from "../assets/category-1.png";
import catogery_2 from "../assets/category-2.png";
import catogery_3 from "../assets/category-3.png";
import catogery_4 from "../assets/category-4.png";
import catogery_5 from "../assets/category-5.png";
import catogery_6 from "../assets/category-6.png";

const categories = [
  { img: catogery_1, title: "العنايـــة بالجســــم", count: 55 },
  { img: catogery_2, title: "العنايـــة بالجســــم", count: 55 },
  { img: catogery_3, title: "العنايـــة بالجســــم", count: 55 },
  { img: catogery_4, title: "العنايـــة بالجســــم", count: 55 },
  { img: catogery_5, title: "العنايـــة بالجســــم", count: 55 },
  { img: catogery_6, title: "العنايـــة بالجســــم", count: 55 },
];

function Categories() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-center font-normal text-[14px] leading-[18px] text-[#597445]">
        التصنيفات
      </h2>

      <p className="text-[#222222] font-bold text-[28px] leading-[48px] tracking-[0] border-b-2 border-[#597445] inline-block">
        كل ما تحتاجه في مكان واحد
      </p>

      <p className="font-scheherazade font-normal text-[16px] leading-[22px] tracking-[0] text-center text-[#202020CC] mt-6">
        من العناية بالشعر إلى مستحضرات البشرة والعطور
      </p>

      <div className="container-style grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-12 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] relative pt-16 md:pt-20 flex flex-col items-center p-4  w-full max-w-[180px] mx-auto"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-[110px] md:w-[140px] lg:w-[170px] absolute -top-10 left-1/2 -translate-x-1/2"
            />

            <h3 className="text-[#597445] font-medium text-[18px] md:text-[22px] lg:text-[24px] text-center mt-12">
              {cat.title}
            </h3>

            <p className="text-[#202020] font-normal text-[14px] md:text-[16px] text-center">
              {cat.count} قطعه
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
