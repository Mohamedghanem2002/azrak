import React from "react";
import bestSeller from "../assets/bestSeller.jpg";
import star from "../assets/Vector.png";
import cart from "../assets/shop.png";

const products = [
  {
    category: "العناية",
    name: "سيروم عناية بالبشرة",
    price: 140,
    oldPrice: 180,
    discount: 10,
  },
  {
    category: "العناية",
    name: "سيروم عناية بالبشرة",
    price: 140,
    oldPrice: 180,
    discount: 10,
  },
  {
    category: "العناية",
    name: "سيروم عناية بالبشرة",
    price: 140,
    oldPrice: 180,
    discount: 10,
  },
  {
    category: "العناية",
    name: "سيروم عناية بالبشرة",
    price: 140,
    oldPrice: 180,
    discount: 10,
  },
  {
    category: "العناية",
    name: "سيروم عناية بالبشرة",
    price: 140,
    oldPrice: 180,
    discount: 10,
  },
  {
    category: "العناية",
    name: "سيروم عناية بالبشرة",
    price: 140,
    oldPrice: 180,
    discount: 10,
  },
];

function BestSeller() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-center font-normal text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] text-[#597445]">
        الأكثر مبيعــــــــــــــــــا
      </h2>

      <p className="text-[#222222] font-bold text-[20px] md:text-[28px] leading-[32px] md:leading-[48px] tracking-[0] border-b-2 border-[#597445] inline-block">
        سر الجمال الذي يبحث عنه الجميع
      </p>

      <p className="font-scheherazade font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] tracking-[0] text-center text-[#202020CC] mt-6">
        استكشف الخيارات الرائجة التي تعزز جمالك وتلبي احتياجاتك الشخصية
      </p>

      <div className="container-style grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-12 gap-4 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-[0px_4px_20px_#0000000F] w-[185px] h-[350px] relative flex flex-col items-center "
          >
            <div className="absolute top-4 right-4 bg-[#BD1C1C] text-white text-[12px] px-3 py-1">
              -{product.discount}%
            </div>

            <img src={bestSeller} alt={product.name} className="w-[150px]" />

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} alt="star" />
              ))}
            </div>

            <h4 className="text-[#597445] font-medium text-[20px] leading-[30px] text-center mt-2">
              {product.category}
            </h4>

            <h3 className="text-[#1E2519] font-normal text-[20px] leading-[30px] text-center">
              {product.name}
            </h3>

            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-[#9B1D1D] font-medium text-[14px]">
                {product.price} ر.س
              </span>

              <span className="text-[#999999] font-normal text-[14px] line-through">
                {product.oldPrice} ر.س
              </span>
            </div>

            <button className="mt-4 w-full bg-[#597445] text-white flex items-center justify-center gap-3 py-2">
              <img
                src={cart}
                alt="cart"
                className="w-[20px] invert brightness-0"
              />
              <span>أضف للسلة</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
