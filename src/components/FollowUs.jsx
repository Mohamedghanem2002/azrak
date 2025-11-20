import React from "react";
import follow_1 from "../assets/follow-1.jpg";
import follow_2 from "../assets/follow-2.png";
import follow_3 from "../assets/follow-3.jpg";
import follow_4 from "../assets/follow-4.jpg";

function FollowUs() {
  return (
    <section className="mt-12 w-full relative">
      <div
        className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    z-10 p-12
    text-white font-bold text-xl md:text-2xl
    bg-black/0 backdrop-blur-md 
    text-center 
  "
      >
        {" "}
        <h2 className="text-[24px] text-[#FFFFFF]">@Allura.Cosmetics</h2>
        <h2 className="text-[20px] text-[#FFFFFF]">تابعنا على انستجرام</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[240px]">
        {[follow_1, follow_2, follow_3, follow_4].map((img, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={img}
              alt={`follow-${i + 1}`}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FollowUs;
