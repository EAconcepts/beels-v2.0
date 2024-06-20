import ComingSoon from "../../components/ComingSoon";
import Hero from "../Invoicing/components/Hero";
import heroImg from "../../assets/images/receipt-hero.png";
import Features from "../Home/components/Features";
import BIRMgt from "../Invoicing/components/BIRMgt";
import Faqs from "../Home/components/Faq";
import Download from "../Home/components/Download";

const Receipt = () => {
  return (
    <div>
      <div className="bg-[#F4FDED] font-karla">
        <div>
          <ComingSoon />
        </div>
        <div className="mt-[54px] px-[20px]">
          <Hero
            heroImg={heroImg}
            heading={"Receipting"}
          />
        </div>
        {/* Features */}
        <div className="px-[20px] pb-[102px] pt-[55px] mt-[89px] bg-white ">
          <h2 className=" text-black text-[28px] text-center leading-[32.73px] font-[700]">
            Effortless Bookkeeping in Simple steps
          </h2>
          {/* Features */}
          <div>
            <Features />
          </div>
        </div>
        {/* BIR Managment */}
        <div className="px-[20px]">
          <BIRMgt
            heading={
              "Free Up Your Time: Effortless Bookkeeping Management with "
            }
          />
        </div>
        <div className="mt-[153px]">
          <Faqs />
        </div>
        <div className="mt-[84px]">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Receipt;
