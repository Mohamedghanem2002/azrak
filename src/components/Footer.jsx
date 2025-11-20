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

function Footer() {
  return (
    <footer className="bg-[#F6F6F6] mt-12">
      {/* section top */}
      <div className="container-style  ">
        {/* flex justify-between items-center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  pb-8 w-full items-center border-b-2  border-[#00000030] ">
          {" "}
          <h3 className="font-medium   text-2xl text-[#222222] ">
            الاشتراك في النشرة البريدية
          </h3>
          <input
            type="text"
            placeholder="أدخل بريدك الالكتروني"
            className="p-4 "
          />
          <div className="flex gap-2">
            <div className="flex gap-4 border-2 border-[#20202012] p-4 bg-[#20202012]">
              <img src={phone} alt="" />
              <div>
                <p className="text-[18px]"> اتصل بنا</p>
                <p> 009612345678932</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-[#20202012] p-4 bg-[#20202012]">
              <img src={message} alt="" className="" />
              <div>
                <p className="text-[18px]"> راسلنا</p>
                <p> Allura@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8  border-b-2 border-[#00000030]  mt-4">
          <div>
            <img src={logo} alt="logo" className="w-[110px]   " />
            <p className="  font-normal  text-lg text-[#222222E5]  mt-4">
              متجر الورا هو وجهة مميزة لمنتجات العناية والمكياج والعطور، حيث
              يقدم مجموعة متنوعة من المستحضرات ذات الجودة العالية لتلبية
              احتياجات العملاء.
            </p>
            <div className="flex gap-2 mt-4">
              <img src={facebook} alt="" className="cursor-pointer" />
              <img src={twitter} alt="" className="cursor-pointer" />
              <img src={instagram} alt="" className="cursor-pointer" />
              <img src={snap} alt="" className="cursor-pointer" />
              <img src={whats} alt="" className="cursor-pointer" />
            </div>
          </div>

          <div className="py-4 px-8 md:border-r-2 border-[#00000030]">
            <h3 className=" font-scheherazade font-semibold text-xl  leading-[25px]  tracking-normal  text-right text-[#202020]">
              حسابي
            </h3>
            <ul>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                حسابى
              </li>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                طلباتى
              </li>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                سلة المشتريات
              </li>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                المفضلة
              </li>
            </ul>
          </div>
          <div className="py-4 px-8 md:border-r-2 border-[#00000030]">
            <h3 className=" font-scheherazade font-semibold text-xl  leading-[25px]  tracking-normal  text-right text-[#202020]">
              روابط مهمة
            </h3>
            <ul>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                من نحن
              </li>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                سياسة الخصوصية
              </li>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                الشروط والاحكام
              </li>
              <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                الدعم الفني
              </li>
            </ul>
          </div>
          <div className="flex  md:border-r-2 border-[#00000030] py-4 px-8 gap-2">
            <div className="">
              <h3 className=" font-scheherazade font-semibold text-xl  leading-[25px]  tracking-normal  text-right text-[#202020]">
                تواصل معنا
              </h3>
              <ul>
                <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                  009612345678932
                </li>
                <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                  009612345678932
                </li>
                <li className=" text-[#202020E5] font-normal text-lg  leading-[25px]  tracking-normal mt-4 cursor-pointer">
                  009612345678932
                </li>
              </ul>
            </div>
            <img src={logoFooter} alt="" />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={num} alt="" className="w-auto" />

            <p className="font-scheherazade font-normal text-[20px] text-[#202020] text-center md:text-right">
              جميع الحقوق محفوظه لدي جليمر
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <img src={visa} alt="" className="w-[50px] h-auto" />
              <img src={mastercard} alt="" className="w-[50px] h-auto" />
              <img src={paypal} alt="" className="w-[50px] h-auto" />
              <img src={mada} alt="" className="w-[50px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
