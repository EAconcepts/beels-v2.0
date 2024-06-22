import ComingSoon from "../../components/ComingSoon";
import heroImg from "../../assets/images/tranfer-img.png";
import Hero from "../Airtime/components/Hero";
import FeaturesList from "../../components/FeaturesList";
import FindNetworks from "../Airtime/components/FindNetworks";
import Faqs from "../Home/components/Faq";
import Download from "../Home/components/Download";

const Transfer = () => {
  return (
    <div className="bg-[#F4FDED]">
      <ComingSoon />
      <div className="mt-[54px]">
        <Hero
          heading={"Send money easily with Beels for Business."}
          desc={"Send money easily with Beels for Business."}
          img={heroImg}
          curveStyle=" "
        />
      </div>
      <div>
        <FeaturesList />
      </div>
      <div className="px-[20px] lg:px-[64px]">
        <FindNetworks
          heading={"Make easy bill payments any time."}
          desc={
            "All major bills and service providers are on Beels Business, so you’ll never need to switch to another app to pay for your business utilities."
          }
          heading2={"Know when your transfers are completed."}
          desc2={
            "For your peace of mind, you’ll get a notification on the Beels for Business mobile app when each transfer you make gets to the beneficiary bank."
          }
          heading3={"Find all popular internet and TV subscription packages."}
          desc3={
            "Whether you have a favorite internet or TV subscription package or you’re looking for the right one for you, you’ll find it on the Beels for Business app."
          }
        />
      </div>
      <div>
        <Faqs headingStyle={"lg:text-greenPrimary"} />
      </div>
      <div>
        <Download />
      </div>
    </div>
  );
};

export default Transfer;
