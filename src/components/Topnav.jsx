import logo from "../assets/logo.svg";
import logoText from "../assets/images/logoText.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";
import { useState } from "react";
import { IoCaretDownOutline, IoCloseCircleOutline } from "react-icons/io5";

const Topnav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={` bg-white font-karla max-lg:h-[88px] pt-[30px] pr-[18px] pl-[20px] pb-[18px] ${
        openMenu && "fixed w-full"
      }`}
    >
      <nav className="flex w-full justify-between items-center">
        <div className="flex gap-x-[70px]">
          {/* logo */}
          <Link to="/" className="flex gap-x-[8.94px]">
            <img src={logo} className="" />
            <img src={logoText} className="" />
          </Link>
          {/* Menu links */}
          <div className="w-full hidden lg:flex justify-between items-center">
            {/* Links */}
            <div className="flex gap-x-[40px]">
              <NavLink to="#" className="flex gap-x-[10px] items-center">
                <span className="text-[24px] tracking-[1.5px] text-center text-greenPrimary leading-[28.06px] font-[500]">
                  Business
                </span>
                <IoMdArrowDropdown className="text-black text-[24px]" />
              </NavLink>
              <NavLink to="#" className="flex gap-x-[10px] items-center">
                <span className="text-[24px] tracking-[1.5px] text-center text-greenPrimary leading-[28.06px] font-[500]">
                  Professional
                </span>
                <IoMdArrowDropdown className="text-black text-[24px]" />
              </NavLink>
              <NavLink to="#" className="flex gap-x-[10px] items-center">
                <span className="text-[24px] tracking-[1.5px] text-center text-greenPrimary leading-[28.06px] font-[500]">
                  Company
                </span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex gap-x-[17px]">
          <Button className="">Join Beels</Button>
          <Button className="bg-white text-greenPrimary border-[1px] border-greenPrimary">
            Login
          </Button>
        </div>
        {/* Hambugger */}
        <div onClick={() => setOpenMenu((prev) => !prev)}>
          {openMenu ? (
            <IoCloseCircleOutline className="text-[32px]" />
          ) : (
            <BiMenuAltRight className="text-[32px] lg:hidden " />
          )}
        </div>

        {openMenu && <MobileMenu />}
      </nav>
    </header>
  );
};

const MobileMenu = () => {
  const menuList = [
    {
      title: "Business",
      links: [
        {
          title: "Invoicing",
          link: "/invoicing",
        },
        {
          title: "Bookkeeping",
          link: "/bookkeeping",
        },
        {
          title: "Receipt",
          link: "/receipt",
        },
        {
          title: "Airtime",
          link: "/airtime",
        },
      ],
    },
    {
      title: "Professional",
      links: [
        {
          title: "Airtime & Data",
          link: "/airtime",
        },
        {
          title: "Pay Bills",
          link: "/bills",
        },
        {
          title: "Virtual Card",
          link: "/cards",
        },
        {
          title: "Domestic Transfer",
          link: "/transfers",
        },
      ],
    },
    {
      title: "Company",
      link: "company",
    },
  ];
  return (
    <div className="fixed h-screen font-karla overflow-hidden left-0 top-[88px] bottom-0 bg-[#F4FDED] w-full pt-[55px] px-[20px] flex flex-col">
      <div className="flex flex-col gap-y-[24px]">
        {menuList.map((menu, index) => (
          <Link
            key={index}
            to={""}
            className="pb-[16px] flex justify-between w-full border-b-[0.8px] border-[#082C2566]"
          >
            <span className="text-[16px] font-[500] leading-[16px] text-black">
              {menu.title}
            </span>
            {menu.links && <IoCaretDownOutline />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
