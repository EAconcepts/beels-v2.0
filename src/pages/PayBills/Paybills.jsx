import Hero from "../Airtime/components/Hero";
import heroImg from "../../assets/images/beels-hero.png";
import buy from "../../assets/images/affordable.svg";
import subscribe from "../../assets/images/earn.svg";
import topup from "../../assets/images/automate.svg";
import FindNetworks from "../Airtime/components/FindNetworks";
import ComingSoon from "../../components/ComingSoon";
import Faqs from "../Home/components/Faq";
import Download from "../Home/components/Download";

const Paybills = () => {
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
    <div className="bg-[#F4FDED]">
      <ComingSoon />
      <div className="mt-[54px]">
        <Hero
          heading={"Pay your business bills any time on Beels Business."}
          desc={
            "Find all major internet, TV, electricity on the Beels for Business web and mobile apps."
          }
          img={heroImg}
          curveStyle=" "
        />
      </div>
      <div className="bg-[#FFFFFF] lg:px-[64px] px-[20px] py-[91px]">
        <div className="flex max-lg:flex-col gap-y-[20px] lg:gap-x-[20px]">
          {features?.map((feat, index) => (
            <div
              key={index}
              className="bg-[#F8FEF3] rounded-[8px] flex flex-col gap-y-[8px] py-[16px] px-[16px]"
            >
              <div className="bg-[#D0F8B1] flex justify-center items-center size-[40px] rounded-full">
                <img src={feat.icon} className="size-fit" />
              </div>
              <p className="text-[20px] font-[700] text-[#03110E] leading-[24px]">
                {feat.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[20px] lg:px-[64px]">
        <FindNetworks
          heading={"Make easy bill payments any time."}
          desc={
            "All major bills and service providers are on Beels Business, so you’ll never need to switch to another app to pay for your business utilities."
          }
          heading2={"Get your tokens on the app and by email."}
          desc2={
            "Beels for  Business makes it easy for you to find your meter, internet and TV tokens without checking your inbox."
          }
          heading3={"Find all popular internet and TV subscription packages."}
          desc3={
            "Whether you have a favorite internet or TV subscription package or you’re looking for the right one for you, you’ll find it on the Beels for Business app."
          }
        />
      </div>
      <div className="mt-[200px]">
        <Faqs headingStyle={"lg:text-greenPrimary"} />
      </div>
      <div>
        <Download/>
      </div>
    </div>
  );
};

export default Paybills;
