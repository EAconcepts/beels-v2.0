import logo from "../assets/logo.svg";
import logoText from "../assets/images/logoText.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";

const Topnav = () => {
  return (
    <header className="bg-white font-karla pt-[30px] pr-[18px] pl-[20px] pb-[18px]">
      <nav className="flex w-full justify-between items-center">
        <div className="flex gap-x-[70px]">
          {/* logo */}
          <div className="flex gap-x-[8.94px]">
            <img src={logo} className="" />
            <img src={logoText} className="" />
          </div>
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
        <BiMenuAltRight className="text-[32px] lg:hidden " />
      </nav>
    </header>
  );
};

export default Topnav;
