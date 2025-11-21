import React from "react";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import message from "../assets/message.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import snap from "../assets/snap.png";
import whats from "../assets/whats.png";
import logoFooter from "../assets/logoFooter.png";
import num from "../assets/Number.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/master.png";
import paypal from "../assets/paypal.png";
import mada from "../assets/mada.png";
import send from "../assets/send.png";
import drops from "../assets/drops.png";

function Footer() {
  return (
    <footer className="bg-[#F6F6F6] mt-12 ">
      <div className="container-style">
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b-2 border-[#00000030]">
          <h3 className="font-medium text-2xl text-[#222222] text-center md:text-right">
            الاشتراك في النشرة البريدية
          </h3>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="أدخل بريدك الالكتروني"
              className="  p-3 pl-12 w-full  outline-none   text-right  "
            />
            <img
              src={send}
              alt="Send"
              className="absolute left-3 top-1/4 -translate-y-1/2 w-8 h-8 cursor-pointer"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <div className="flex gap-4 border-2 border-[#20202012] p-4 bg-[#20202012] ">
              <img src={phone} alt="" />
              <div>
                <p className="text-[18px]">اتصل بنا</p>
                <p>009612345678932</p>
              </div>
            </div>

            <div className="flex gap-4 border-2 border-[#20202012] p-4 bg-[#20202012] ">
              <img src={message} alt="" />
              <div>
                <p className="text-[18px]">راسلنا</p>
                <p>Allura@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 gap-10 border-b-2 border-[#00000030] mt-4">
          {/* Column 1 */}
          <div>
            <img src={logo} alt="logo" className="w-[120px] mx-auto md:mx-0" />
            <p className="font-normal text-lg text-[#222222E5] mt-4 text-center md:text-right">
              متجر الورا هو وجهة مميزة لمنتجات العناية والمكياج والعطور، حيث
              يقدم مجموعة متنوعة من المستحضرات ذات الجودة العالية لتلبية
              احتياجات العملاء.
            </p>

            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <img src={facebook} alt="" className="cursor-pointer" />
              <img src={twitter} alt="" className="cursor-pointer" />
              <img src={instagram} alt="" className="cursor-pointer" />
              <img src={snap} alt="" className="cursor-pointer" />
              <img src={whats} alt="" className="cursor-pointer" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="py-4 px-8 md:border-r-2 border-[#00000030] text-right">
            <h3 className="font-scheherazade font-semibold text-xl text-[#202020]">
              حسابي
            </h3>
            <ul>
              {["حسابى", "طلباتى", "سلة المشتريات", "المفضلة"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-[#202020E5] font-normal text-lg mt-4 cursor-pointer hover:text-darkGreen"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="py-4 px-8 md:border-r-2 border-[#00000030] text-right">
            <h3 className="font-scheherazade font-semibold text-xl text-[#202020]">
              روابط مهمة
            </h3>
            <ul>
              {[
                "من نحن",
                "سياسة الخصوصية",
                "الشروط والاحكام",
                "الدعم الفني",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[#202020E5] font-normal text-lg mt-4 cursor-pointer hover:text-darkGreen"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex justify-between md:border-r-2 border-[#00000030] py-4 px-8 gap-4 text-right">
            <div>
              <h3 className="font-scheherazade font-semibold text-xl text-[#202020]">
                تواصل معنا
              </h3>
              <ul>
                {["009612345678932", "009612345678932", "009612345678932"].map(
                  (num, i) => (
                    <li
                      key={i}
                      className="text-[#202020E5] font-normal text-lg mt-4 cursor-pointer hover:text-darkGreen"
                    >
                      {num}
                    </li>
                  )
                )}
              </ul>
            </div>
            <img
              src={logoFooter}
              alt=""
              className="w-[80px] h-auto mx-auto md:mx-0 "
            />
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={num} alt="" className="w-auto max-w-[160px]" />

            <p className="font-scheherazade font-normal text-[20px] text-[#202020] text-center md:text-right">
              جميع الحقوق محفوظه لدي جليمر
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {[visa, mastercard, paypal, mada].map((img, i) => (
                <img key={i} src={img} alt="" className="w-[50px] h-auto" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
