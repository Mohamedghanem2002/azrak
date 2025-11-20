import React, { useState } from "react";

import slider_1 from "../assets/slider-1.png";
import slider_2 from "../assets/slider-2.png";
import slider_3 from "../assets/slider-3.jpg";
import slider_4 from "../assets/slider-4.png";
import slider_5 from "../assets/slider-5.png";
import right from "../assets/right.png";
import left from "../assets/left.png";

const data = [
  {
    id: 1,
    title: "ماسكرا الورا مضادة للمياه",
    color: "المكياج",
    price: "١٤٠ ج.م",
    disPrice: "٩٥ ج.م",
    image: slider_1,
    category: "ماسكــــــــــــــــارا",
  },
  {
    id: 2,
    title: "كريم اساس الورا عالي التغطية",
    color: "المكياج",
    price: "١٨٠ ج.م",
    disPrice: "٩٥ ج.م",
    image: slider_2,
    category: "كريم أساس",
  },
  {
    id: 3,
    title: "حمرة شفاة الورا",
    color: "المكياج",
    price: "٩٥ ج.م",
    disPrice: "٩٥ ج.م",
    image: slider_3,
    category: "حمرة شفاه",
  },
  {
    id: 4,
    title: "حمرة خدود الورا",
    color: "المكياج",
    price: "٧٥ ج.م",
    disPrice: "٩٥ ج.م",
    image: slider_4,
    category: "حمرة خدود",
  },
  {
    id: 5,
    title: "أيشادو الورا",
    color: "المكياج",
    price: "٢٤٠ ج.م",
    disPrice: "٩٥ ج.م",
    image: slider_5,
    category: "أيشادو",
  },
];

function BestSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const goTo = (i) => setIndex(i);

  const product = data[index];

  return (
    <section className="bg-[#E7F0DC] py-10 px-4 md:px-16 lg:px-32 mt-12">
      <div className="text-center mb-10">
        <h2 className="font-normal text-xs md:text-sm text-[#202020]">
          افضـــــل الاقســـــــام
        </h2>

        <p className="text-[#202020] font-bold text-xl md:text-3xl border-b-2 border-[#202020] inline-block">
          استكشف مجموعة متنوعة من الأقسام المتاحة
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between container-style w-full">
        <div className="text-right w-full lg:w-auto hidden lg:block mb-6 lg:mb-0">
          <ul className="flex flex-col gap-6 text-lg">
            {data.map((item, i) => (
              <li
                key={i}
                onClick={() => goTo(i)}
                className={`cursor-pointer transition whitespace-nowrap text-[22px] md:text-[28px] lg:text-[32px] p-2 
          ${
            index === i
              ? "text-[#202020] font-bold border-b-2 border-[#202020]"
              : "text-[#20202057]"
          }`}
              >
                {item.category}
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex items-center justify-center w-full lg:w-auto">
          <img
            src={right}
            alt="next"
            onClick={next}
            className="cursor-pointer w-8 h-8 md:w-10 md:h-10  right-0 top-1/2 -translate-y-1/2"
          />

          <div className="flex flex-col items-center mx-4">
            <div
              className="bg-white shadow-md w-[250px] md:w-[300px] lg:w-[330px] 
                      h-[350px] md:h-[410px] lg:h-[440px] overflow-hidden"
            >
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[#597445] mt-4 font-normal text-[16px] md:text-[18px] text-center">
              {product.color}
            </p>
            <p className="font-medium text-[18px] md:text-[20px] text-[#1E2519] mt-2 text-center">
              {product.title}
            </p>

            <div className="flex gap-4 items-center justify-center mt-2">
              <p className="text-[#BD1C1C] font-semibold text-[20px]">
                {product.price}
              </p>
              <p className="text-[#1E251996] font-semibold text-[18px] line-through">
                {product.disPrice}
              </p>
            </div>
          </div>

          <img
            src={left}
            alt="prev"
            onClick={prev}
            className="cursor-pointer w-8 h-8 md:w-10 md:h-10  left-0 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
}

export default BestSection;
