import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu 1.png";
import icon from "../assets/icon.png";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      {/* Top Navbar */}
      <div className="container-style">
        <nav className="flex justify-between items-center p-1">
          <img src={logo} alt="Logo" className="w-16 h-10 md:w-40 md:h-16" />

          <input
            type="text"
            placeholder="ما الذي تبحث عنه؟"
            className="w-full px-4 py-2 mx-2 text-[14px] sm:text-[18px] sm:px-12 sm:py-4 sm:mx-8 text-[#B5B5B5] border border-[#E7E7E7] rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          />

          <img src={cart} alt="Cart" className="w-10 h-10" />
        </nav>
      </div>
      {/* Full width divider */}
      <hr className="w-full border border-[#E7E7E7] " />
      {/* Bottom Navbar */}
      <div className="container-style">
        <nav className="flex justify-between items-center p-0">
          {/* Right Section */}
          <div className="flex gap-8">
            <img
              src={menu}
              alt="menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer"
            />

            <ul className="hidden lg:flex gap-5 ">
              <li className="text-[#202020] text-[14px] cursor-pointer">
                جميع الاقسام
              </li>
              <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
                المكياج
              </li>
              <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
                العناية
              </li>
              <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
                العطور
              </li>
              <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
                تخفيضات
              </li>
              <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
                الماركات
              </li>
            </ul>
          </div>

          {/* Mobile Dropdown Menu */}
          {openMenu && (
            <div className="md:hidden absolute top-60 right-0  w-full bg-white shadow-md rounded-xl mt-2 p-4 z-50">
              <ul className="flex flex-col gap-4 text-[16px] text-[#202020]">
                <li className="cursor-pointer">جميع الاقسام</li>
                <li className="border-t border-[#CDCDCD] pt-2 cursor-pointer">
                  المكياج
                </li>
                <li className="border-t border-[#CDCDCD] pt-2 cursor-pointer">
                  العناية
                </li>
                <li className="border-t border-[#CDCDCD] pt-2 cursor-pointer">
                  العطور
                </li>
                <li className="border-t border-[#CDCDCD] pt-2 cursor-pointer">
                  تخفيضات
                </li>
                <li className="border-t border-[#CDCDCD] pt-2 cursor-pointer">
                  الماركات
                </li>
              </ul>
            </div>
          )}

          {/* Left Section */}
          <ul className="flex  gap-1 lg:gap-5 ">
            <li className="text-[#202020] text-[14px] flex items-center gap-2 cursor-pointer">
              <img src={icon} alt="icon" className="w-[16px] h-[16px]" />
              العربية - رس
            </li>
            <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
              سياسة الإستبدال أو الاسترجاع
            </li>
            <li className="border-r-2 border-[#CDCDCD] px-2 text-[#202020] text-[14px] cursor-pointer">
              تواصل معنا
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default NavBar;
