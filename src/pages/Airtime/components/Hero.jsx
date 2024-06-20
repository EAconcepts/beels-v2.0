import { BiLogoPlayStore } from "react-icons/bi";
import { PiGlobe } from "react-icons/pi";
import heroImg from "../../../assets/images/airtime-phone.png"
import curve from "../../../assets/images/curve.svg"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-[32px] text-center text-black font-[700] leading-[37.41px]">
          Recharge your phone easily on the Beels for Business app
        </h2>
        <p className="text-black mt-[16px] text-center leading-[18.7px] text-[16px] font-[400] ">
          Buy Airtel Glo, MTN and 9Mobile airtimes and internet data anytime.
        </p>
        <p className="mt-[31px] font-[500] text-[20px] leading-[23.38px] max-lg:text-center text-black">
          Available on
        </p>
        {/* Download */}
        <div className="lg:flex justify-between">
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

        {/* image */}
        <div className="mt-[52.94px] relative ">
          <img src={curve} className="absolute top-[-20px] " />
          <img src={heroImg } className="z-10 relative" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
