import { BiLogoPlayStore } from "react-icons/bi";
import { PiGlobe } from "react-icons/pi";
import HeroCard from "./components/heroCard";
import Features from "./components/Features";
import GetPaid from "./components/GetPaid";
import start from "../../assets/images/start-business.png";
import Faqs from "./components/Faq";
import Download from "./components/Download";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import BeelersStories from "./components/BeelersStories";
import ComingSoon from "../../components/ComingSoon";

const Home = () => {
  return (
    <div className="w-full pt-[15px] lg:pb-[121px] bg-[#F4FDED] font-karla">
      {/* coming soon */}
      <ComingSoon />
      <div className="lg:flex gap-x-[100px] lg:px-[64px] lg:mt-[118px]">
        <div className="flex flex-col max-lg:items-center max-lg:px-[20px] max-lg:mt-[44px]">
          <h1 className="text-[32px] lg:text-[64px] font-karla font-[700] lg:leading-[63.13px] leading-[37.41px] max-lg:text-center text-black ">
            Every big business today started small and started right!!
          </h1>
          <p className="text-[16px] lg:text-[24px] lg:leading-[28.06px] mt-[16px] font-[400] max-lg:text-center leading-[18.7px]">
            Start <span className="font-caveat leading-[20.16px] ">RIGHT</span>{" "}
            with Beels. Grow your business{" "}
            <span className="font-caveat leading-[20.16px] lg:leading-[30.24px] text-[#FF7650] ">
              {" "}
              FASTER
            </span>{" "}
            with our tailored credit options. Open a business account and boost
            your{" "}
            <span className="font-caveat leading-[20.16px] text-[#FF7650] ">
              {" "}
              REVENUE
            </span>{" "}
            by listing on our marketplace.
          </p>
          <p className="mt-[14px] font-[500] text-[20px] leading-[23.38px] max-lg:text-center text-black">
            Available on
          </p>
          <div className="lg:flex justify-between ]">
            {/* Playstore */}
            <div className="max-lg:w-[203.83px] mt-[10px] bg-white rounded-[69.15px] py-[5.53px] lg:py-[8px] px-[27.66px] flex gap-x-[6.92px] justify-center items-center">
              <span className="text-[16px] lg:text-[24px] leading-[19.4px] font-[400] font-karla text-greenPrimary">
                Google Playstore
              </span>
              <BiLogoPlayStore className="" />
            </div>
            {/* Web */}
            <div className="max-lg:w-[203.83px] lg:w-fit lg:py-[8px] mt-[10px] bg-white rounded-[69.15px] py-[5.53px] lg:px-[50px] px-[27.66px] flex gap-x-[6.92px] justify-center items-center">
              <span className="text-[16px] lg:text-[24px] leading-[19.4px] font-[400] font-karla text-greenPrimary">
                Web
              </span>
              <PiGlobe className="text-black" />
            </div>
          </div>
        </div>
        <div className=" justify-end lg:pr-[100px] max-lg:mt-[31.94px] ">
          <HeroCard />
        </div>
      </div>
      <div className="bg-white  pb-[55px]">
        <div className="pt-[55px] mt-[28px] lg:px-[64px] px-[16px] flex flex-col  w-full">
          <h1 className="text-[28px] lg:text-[48px] lg:px-[106px] lg:leading-[56.11px] font-[700] leading-[38.73px] text-center text-black">
            Unlock the full potential of your business with a feature-rich
            account designed for growth.
          </h1>
          <Features />
        </div>
      </div>
      <div className="px-[20px] lg:px-[64px] pt-[99px] ">
        <GetPaid />
      </div>
      {/* Start right */}
      <div className="mt-[181px] px-[20px] lg:px-[64px] lg:flex lg:items-center lg:justify-between lg:gap-x-[83px]">
        {/* Start right */}
        <div>
          <p className="font-[700] lg:text-[48px] lg:leading-[56.11px] lg:text-[#1A1A1A] text-[24px] leading-[28.06px] max-lg:text-center text-greenPrimary">
            {" "}
            Start right with Beels, where your needs are attended to.
          </p>
          <div className="flex gap-x-[85px] lg:mt-[138px]">
            {/* Prev */}
            <div className="flex rounded-full items-center justify-center bg-white lg:size-[100px]">
              <MdArrowLeft className="lg:text-[64px]" />
            </div>
            {/* Next */}
            <div className="flex rounded-full bg-white  items-center justify-center lg:size-[100px]">
              <MdArrowRight className="lg:text-[64px]" />
            </div>
          </div>
        </div>
        {/* Small Business */}
        <div className="lg:w-full max-lg:mt-[26px] relative">
          <img
            src={start}
            className=" border-white max-lg:h-[304px] lg:w-full  w-[304px]"
          />
          <div className="flex flex-col lg:bottom-[48px] lg:left-[48px] absolute bottom-[32px] pl-[27px] pr-[57px] lg:gap-y-[10px]">
            <h3 className="text-[24px] lg:text-[36px] lg:leading-[28px] leading-[28px] font-[700] text-white">
              Small Businesses
            </h3>
            <p className="font-[400] pr-[31px] lg:text-[24px] lg:leading-[28px] text-[14px] leading-[16.37px] text-[#E4E4E4]">
              Concentrate on expanding your business, as Beels takes care of
              your financial management.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>{/* <BeelersStories/> */}</div>
        <div className="pt-[64px]">
          <Faqs />
        </div>
        <div className="mt-[64px lg:mt-[162px] lg:px-[64px]">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Home;
