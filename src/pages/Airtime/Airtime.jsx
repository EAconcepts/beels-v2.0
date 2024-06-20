import ComingSoon from "../../components/ComingSoon";
import Hero from "./components/Hero";
import buy from "../../assets/images/affordable.svg";
import subscribe from "../../assets/images/earn.svg";
import topup from "../../assets/images/automate.svg";
import FindNetworks from "./components/FindNetworks";
import Faqs from "../Home/components/Faq";
import Download from "../Home/components/Download";

const Airtime = () => {
  const features = [
    {
      icon: buy,
      content: "Buy airtime from any Nigerian mobile network.",
    },
    {
      icon: topup,
      content: "Top up airtime on your phone in a few seconds",
    },
    {
      icon: subscribe,
      content: "Subscribe to your favorite mobile data plan easily.",
    },
  ];
  return (
    <div className="bg-[#F4FDED] font-karla">
      <ComingSoon />
      <div className="mt-[54px]">
        <Hero />
      </div>
      <div className="bg-[#FFFFFF] px-[20px] py-[91px]">
        <div className="flex flex-col gap-y-[20px]">
          {features?.map((feat, index) => (
            <div
              key={index}
              className="bg-[#F8FEF3] rounded-[8px] flex flex-col gap-y-[8px] py-[16px] px-[16px]"
            >
              <img src={feat.icon} className="size-fit" />
              <p className="text-[20px] font-[700] text-[#03110E] leading-[24px]">
                {feat.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[20px]">
        <FindNetworks />
      </div>
      <div className="mt-[195px]">
        <Faqs />
      </div>
      <div className="mt-[135px]">
        <Download/>
      </div>
    </div>
  );
};

export default Airtime;
