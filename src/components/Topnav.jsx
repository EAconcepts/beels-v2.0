import logo from "../assets/logo.svg";
import logoText from "../assets/images/logoText.svg";
import invoice from "../assets/images/invoice.svg";
import receipt from "../assets/images/receipt.svg";
import money from "../assets/images/money.svg";
import bookkeeping from "../assets/images/bookkeeping.svg";
import deposit from "../assets/images/fixed-deposit.svg";
import moneyMarket from "../assets/images/money-market.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";
import { useState } from "react";
import { IoCaretDownOutline, IoCloseCircleOutline } from "react-icons/io5";

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
        link: "/domestic-transfer",
      },
    ],
  },
  {
    title: "Company",
    link: "/company",
  },
];
const Topnav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showProfessional, setShowProfessional] = useState(false);

  return (
    <header
      className={`relative z-50 bg-white font-karla max-lg:h-[88px] pt-[30px] pr-[18px] pl-[20px] pb-[18px] ${
        openMenu && " max-lg:fixed w-full"
      }`}
    >
      <nav className="flex w-full justify-between items-center ">
        <div className="flex gap-x-[100px]">
          {/* logo */}
          <Link to="/" className="flex gap-x-[8.94px] cursor-pointer">
            <img src={logo} className="" />
            <img src={logoText} className="" />
          </Link>
          {/* Menu links */}
          <div className="w-full hidden lg:flex justify-between items-center">
            {/* Links */}
            <div className="flex gap-x-[40px]">
              <div
                onClick={() => {
                  setShowProfessional(false);
                  setShowBusiness((prev) => !prev);
                }}
                to="#"
                className="flex gap-x-[10px] items-center relative"
              >
                {showBusiness && <FloatingMenu />}
                <span className="text-[24px] tracking-[1.5px] text-center text-greenPrimary leading-[28.06px] font-[500]">
                  Business
                </span>
                <IoMdArrowDropdown className="text-black text-[24px]" />
              </div>
              <div
                onClick={() => {
                  setShowBusiness(false);
                  setShowProfessional((prev) => !prev);
                }}
                className="flex gap-x-[10px] relative items-center"
              >
                {showProfessional && <ProfMenu />}
                <span className="text-[24px] tracking-[1.5px] text-center text-greenPrimary leading-[28.06px] font-[500]">
                  Professional
                </span>
                <IoMdArrowDropdown className="text-black text-[24px]" />
              </div>
              <NavLink to="/company" className="flex gap-x-[10px] items-center">
                <span className="text-[24px] tracking-[1.5px] text-center text-greenPrimary leading-[28.06px] font-[500]">
                  Company
                </span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex gap-x-[17px] ">
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

        {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
      </nav>
    </header>
  );
};

const FloatingMenu = () => {
  const bsMgt = [
    { title: "Invoice", path: "/invoicing", icon: invoice },
    { title: "Receipt", path: "/receipt", icon: receipt },
    { title: "Book-Keeping", path: "/bookkeeping", icon: bookkeeping },
  ];
  const cashMgt = [
    { title: "Beels Money Market note", path: "#", icon: invoice },
    { title: "Fixed Deposit", path: "#", icon: receipt },
  ];
  const payment = [
    { title: "Airtime & Data", path: "/airtime", icon: invoice },
    { title: "Pay Bills", path: "/airtime", icon: receipt },
    { title: "Virtual card", path: "#", icon: receipt },
    {
      title: "Global pay china",
      desc: "coming soon",
      path: "#",
      icon: receipt,
    },
    { title: "Domestic Transfer", path: "/domestic-transfer", icon: receipt },
  ];
  return (
    <div className="flex absolute top-[100px] pt-[56px] px-[25px] left-0 justify-between w-[587px]  bg-white pb-[100px]">
      <div className="">
        {/* Business Mgt */}
        <div className="flex flex-col">
          <h4 className="text-[20px] font-[500] leading-[23.38px] text-center tracking-[1.5px] text-black">
            Business Management
          </h4>
          <div className="flex flex-col mt-[18px] gap-y-[16px]">
            {bsMgt?.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="flex gap-x-[14.2px] items-center"
              >
                <img src={link.icon} />
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Cash Mgt */}
        <div className="flex flex-col mt-[47px]">
          <h4 className="text-[20px] font-[500] leading-[23.38px] tracking-[1.5px] text-black">
            {" "}
            Cash Management
          </h4>
          <div className="flex flex-col mt-[18px] gap-y-[16px]">
            {cashMgt?.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="flex gap-x-[14.2px] items-center"
              >
                <img src={link.icon} />
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Cash Mgt */}
        <div className="flex flex-col mt-[61px]">
          <h4 className="text-[20px] font-[500] leading-[23.38px] tracking-[1.5px] text-black">
            {" "}
            Credit
          </h4>
          <div className="flex flex-col mt-[18px] gap-y-[16px]">
            <Link to="#" className="flex gap-x-[14.2px] items-center">
              <div className=" bg-gradient-to-tr from-[#B6F485] to-[#E9FDF2] rounded-full size-[48px] flex items-center justify-center">
                <img src={money} />
              </div>
              <span>Business Nano Credit</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* Cash Mgt */}
        <div className="flex flex-col mt[47px]">
          <h4 className="text-[20px] font-[500] leading-[23.38px] tracking-[1.5px] text-black">
            {" "}
            Payment Services
          </h4>
          <div className="flex flex-col mt-[18px] gap-y-[16px]">
            {payment?.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="flex gap-x-[14.2px] items-center"
              >
                <img src={link.icon} />
                <div className="flex flex-col gap-y-[5px]">
                  <span>{link.title}</span>
                  {link?.desc && (
                    <span className="text-[10px] leading-[11.69px] tracking-[1.5px] text-[#FF7650]">
                      {link.desc}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfMenu = () => {
  const navigateTo = useNavigate();
  const payment = [
    { title: "Airtime & Data", path: "/airtime", icon: invoice },
    { title: "Pay Bills", path: "/bills", icon: receipt },
    { title: "Virtual card", path: "#", icon: receipt },

    { title: "Domestic Transfer", path: "/domestic-transfer", icon: receipt },
  ];
  return (
    <div className="flex absolute top-[100px] pt-[56px] px-[25px] left-0 justify-between w-[587px]  bg-white pb-[100px]">
      <div className="flex flex-col">
        {/* Cash Mgt */}
        <div className="flex flex-col mt[47px]">
          <h4 className="text-[20px] font-[500] leading-[23.38px] tracking-[1.5px] text-black">
            {" "}
            Payment Services
          </h4>
          <div className="flex flex-col mt-[18px] gap-y-[16px]">
            {payment?.map((link, index) => (
              <div
                onClick={() => {
                  navigateTo(`${link.path}`);
                }}
                key={index}
                className="flex gap-x-[14.2px] items-center"
              >
                <img src={link.icon} />
                <div className="flex flex-col gap-y-[5px]">
                  <span>{link.title}</span>
                  {link?.desc && (
                    <span className="text-[10px] leading-[11.69px] tracking-[1.5px] text-[#FF7650]">
                      {link.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ setOpenMenu }) => {
  const [showBsMgt, setShowBsMgt] = useState(false);
  const [showProf, setShowPof] = useState(false);
  const menus = [
    {
      title: "Business Management",
      subMenu: [
        { title: "Invoice", link: "/invoicing", icon: invoice },
        { title: "Receipt", link: "/receipt", icon: receipt },
        { title: "Book-Keeping", link: "/bookkeeping", icon: bookkeeping },
      ],
    },
    {
      title: "Cash Management",
      subMenu: [
        { title: "Beels Money Market note", link: "#", icon: moneyMarket },
        { title: "Fixed Deposit", link: "/#", icon: deposit },
      ],
    },
    {
      title: "Company",
      link: "/company",
    },
  ];
  const navigateTo = useNavigate()
  return (
    <div className="fixed h-[calc(100vh-88px)] overflow-y-scroll z-40 font-karla overflow-hidden left-0 top-[88px] bottom-0 bg-[#F4FDED] w-full pt-[55px] px-[20px] flex flex-col pb-[50px]">
      <div className="flex flex-col gap-y-[24px]">
        {menus.map((menu, index) => (
          <div key={index} className="">
            <Link
              onClick={() => {
                if (index == 0) {
                  setShowBsMgt((prev) => !prev);
                  console.log(index);
                }
                if (index == 1) {
                  setShowPof((prev) => !prev);
                  console.log(index);
                }
                if(index==2) {navigateTo(menu.link)
                  setOpenMenu(false)
                }
              }}
              key={index}
              to={menu?.link}
              className="pb-[16px] flex justify-between w-full border-b-[0.8px] border-[#082C2566]"
            >
              <span className="text-[16px] font-[500] leading-[16px] text-black">
                {menu.title}
              </span>
              {menu.subMenu && <IoCaretDownOutline />}
            </Link>
            {(showBsMgt && index==0|| showProf && index==1)  && (
                <div className="mt-[16px]">
                  {menu.subMenu?.map((sub, index) => (
                    <Link
                      key={index}
                      to={sub.link}
                      className="flex gap-x-[12.47px] items-center"
                    >
                      <img src={sub.icon} className="size-[29.57px]" />
                      <span className="font-[500] text-[11.76px] leading-[13.75px] tracking-[0.92px]">
                        {sub.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

          </div>
        ))}
      </div>
      {/* Buttons */}
      <div className="mt-[100px] flex flex-col items-center gap-y-[24px] ">
        <Button className="w-full">Join Beels</Button>
        <Button className="w-full bg-white text-greenPrimary border-[1px] border-greenPrimary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Topnav;
