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
import img2 from "../../assets/images/card-img2.png";
import img3 from "../../assets/images/card-img3.png";
import dashboard from "../../assets/images/dashboard.png";
import BalanceCard from "./components/BalanceCard";
import DashboardCard from "./components/DashboardCard";
import NanoCard from "./components/NanoCard";

const Home = () => {
  const cards = [
    {
      title: "Open a Beels for business account designed for your business",
      content:
        "Gain instant Insights, Initiate Transactions, Approve Payments, and Monitor Account Balance, all from Once Unified Dashboard with Beels.",
      image: dashboard,
      style: `bg-[#F2EDFF] top-[5vh]`,
      card: <BalanceCard className={"absolute bottom-[-40px] left-[24px]"} />,
    },
    {
      title:
        "Access up to 100 million via various credit products for your business.",
      content:
        "Skip the wait on unpaid invoices or inflexible financing options. With Beels, access up to ₦100,000,000  within just 48 hours to fuel your business growth and expansion.",
      image: img3,
      style: "bg-[#FFD4C8] top-[12vh]",
      card: <NanoCard className={"absolute bottom-[-40px] left-[34px]"} />,
    },
    {
      title: "Get Paid Everywhere",
      content:
        "Accelerate your customers’ payment process by offering familiar payment methods they’re accustomed to, ensuring swift and seamless transactions with Beels.",
      image: img2,
      style: "bg-white top-[15vh]",
      card: <DashboardCard className={"left-[24px]"} />,
    },
  ];
  return (
    <div className="w-full pt-[15px] lg:pb-[121px] bg-[#F4FDED] font-karla">
      {/* coming soon */}
      <ComingSoon />
      <div className="lg:flex gap-x-[50px] lg:px-[64px] lg:mt-[118px] ">
        <div className="flex flex-col max-lg:items-center max-lg:px-[20px]  max-lg:mt-[44px]">
          <h1 className="text-[32px] lg:text-[52px] font-karla font-[700] lg:leading-[63.13px] leading-[37.41px] max-lg:text-center text-black ">
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
        <div className=" justify-end lg:pr-[50px] max-lg:mt-[31.94px] ">
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
        {cards?.map((card, index) => (
          <GetPaid
            key={index}
            card={card}
            Card={card.card}
            className={card.style}
          />
        ))}
      </div>
      {/* Start right */}
      <div className="mt-[181px] px-[20px] lg:px-[64px] lg:flex lg:items-center lg:justify-between lg:gap-x-[83px]">
        {/* Start right */}
        <div>
          <p className="font-[700] lg:text-[48px] lg:leading-[56.11px] lg:text-[#1A1A1A] text-[24px] leading-[28.06px] max-lg:text-center text-greenPrimary">
            {" "}
            Start right with Beels, where your needs are attended to.
          </p>
          {/* Navigation */}
          <div className="hidden lg:flex gap-x-[85px] max-lg:justify-center lg:mt-[138px]">
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
        <div className="lg:W-full lg:shrink-0">
          <div className="lg:w-full max-lg:flex max-lg:justify-center max-lg:mt-[26px] relative shrink-0">
            <img
              src={start}
              className=" border-white shrink-0 max-lg:h-[304px] lg:w-[668px] lg:w-ful lg:h-[620px]  w-[304px]"
            />
            <div className="flex flex-col max-lg:left-[12px] lg:bottom-[48px] lg:left-[48px] absolute bottom-[32px] pl-[27px] pr-[57px] lg:gap-y-[10px]">
              <h3 className="text-[24px] lg:text-[36px] lg:leading-[28px] leading-[28px] font-[700] text-white">
                Small Businesses
              </h3>
              <p className="font-[400] pr-[31px] lg:text-[24px] lg:leading-[28px] text-[14px] leading-[16.37px] text-[#E4E4E4]">
                Concentrate on expanding your business, as Beels takes care of
                your financial management.
              </p>
            </div>
          </div>
          {/* Navigation Mobile*/}
          <div className="lg:hidden max-lg:mt-[28px] flex gap-x-[85px] max-lg:justify-center lg:mt-[138px]">
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
      </div>
      <div>
        <div className="max-lg:px-[20px] lg:px-[64px] max-lg:mt-[87px]">
          <BeelersStories />
        </div>
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
