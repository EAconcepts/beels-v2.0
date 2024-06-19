import ComingSoon from "../../components/ComingSoon";
import Hero from "./components/Hero";
import Features from "../Home/components/Features";
import BIRMgt from "./components/BIRMgt";
import Faqs from "../Home/components/Faq";
import Download from "../Home/components/Download";

const Invoicing = () => {
  return (
    <div className="bg-[#F4FDED] font-karla">
      <div>
        <ComingSoon />
      </div>
      <div className="mt-[54px] px-[20px]">
        <Hero />
      </div>
      {/* Features */}
      <div className="px-[20px] pb-[102px] pt-[55px] mt-[89px] bg-white ">
        <h2 className=" text-black text-[28px] text-center leading-[32.73px] font-[700]">
          Effortless Invoicing in Simple steps
        </h2>
        {/* Features */}
        <div>
          <Features />
        </div>
      </div>
      {/* BIR Managment */}
      <div className="px-[20px]">
        <BIRMgt />
      </div>
      <div className="mt-[153px]">
        <Faqs />
      </div>
      <div className="mt-[84px]">
        <Download />
      </div>
    </div>
  );
};

export default Invoicing;
