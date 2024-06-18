import { BiLogoPlayStore } from "react-icons/bi";
import { PiGlobe } from "react-icons/pi";
import HeroCard from "./components/heroCard";
import Features from "./components/Features";
import GetPaid from "./components/GetPaid";
import start from "../../assets/images/start-business.png";
import Faqs from "./components/Faq";
import Download from "./components/Download";

const Home = () => {
  return (
    <div className="w-full pt-[15px] bg-[#F4FDED] font-karla">
      <p className="bg-greenPrimary text-[#B6F485] py-[5px] text-center">
        Coming soon on Apple Store
      </p>
      <div className="flex flex-col items-center px-[20px] mt-[44px]">
        <h1 className="text-[32px] font-karla font-[700] leading-[37.41px] text-center text-black ">
          Every big business today started small and started right!!
        </h1>
        <p className="text-[16px] mt-[16px] font-[400] text-center leading-[18.7px]">
          Start <span className="font-caveat leading-[20.16px] ">RIGHT</span>{" "}
          with Beels. Grow your business{" "}
          <span className="font-caveat leading-[20.16px] "> FASTER</span> with
          our tailored credit options. Open a business account and boost your{" "}
          <span className="font-caveat leading-[20.16px] "> REVENUE</span> by
          listing on our marketplace.
        </p>
        <p className="mt-[14px] font-[500] text-[20px] leading-[23.38px] text-center text-black">
          Available on
        </p>
        <div>
          {/* Playstore */}
          <div className="w-[203.83px] mt-[10px] bg-white rounded-[69.15px] py-[5.53px] px-[27.66px] flex gap-x-[6.92px] justify-center items-center">
            <span className="text-[16px] leading-[19.4px] font-[400] font-karla text-greenPrimary">
              Google Playstore
            </span>
            <BiLogoPlayStore className="" />
          </div>
          {/* Web */}
          <div className="w-[203.83px] mt-[10px] bg-white rounded-[69.15px] py-[5.53px] px-[27.66px] flex gap-x-[6.92px] justify-center items-center">
            <span className="text-[16px] leading-[19.4px] font-[400] font-karla text-greenPrimary">
              Web
            </span>
            <PiGlobe className="text-black" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[31.94px]">
        <HeroCard />
      </div>
      <div className="bg-white  pb-[55px]">
        <Features />
      </div>
      <div className="px-[20px] pt-[99px] ">
        <GetPaid />
      </div>
      <div className="mt-[181px] px-[20px]">
        <p className="font-[700] text-[24px] leading-[28.06px] text-center text-greenPrimary">
          {" "}
          Start right with Beels, where your needs are attended to.
        </p>
        <div className="mt-[26px] relative">
          <img src={start} className=" border-white h-[304px]  w-[304px]" />
          <div className="flex flex-col absolute bottom-[32px] pl-[27px] pr-[57px]">
            <h3 className="text-[24px] leading-[28px] font-[700] text-white">
              Small Businesses
            </h3>
            <p className="font-[400] pr-[31px] text-[14px] leading-[16.37px] text-[#E4E4E4]">
              Concentrate on expanding your business, as Beels takes care of
              your financial management.
            </p>
          </div>
        </div>
        <div className="pt-[64px]">
          <Faqs />
        </div>
        <div className="mt-[64px]">
            <Download/>
        </div>
      </div>
    </div>
  );
};

export default Home;
