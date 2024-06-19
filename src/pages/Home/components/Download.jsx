import playstore from "../../../assets/images/playstore.svg";
import Button from "../../../components/Button";
import phoneLoan from "../../../assets/images/phone-loan.png";
import graident2 from "../../../assets/images/gradient2.svg";

const Download = () => {
  return (
    <div className="pt-[58px] lg:flex lg:pt-[128px] bg-white rounded-[24px] max-lg:mb-[94px]">
      <div className="lg:px-[35px]">
        <div className="max-lg:px-[28px] flex flex-col gap-y-[7px]">
          <p className="font-[400] lg:font-[500] text-[14px] lg:text-[16px] lg:text-[#1A1A1A] leading-[24px] text-greenPrimary">
            Download the Beels for Business App
          </p>
          <h3 className="font-[700] lg:w-[641px] lg:text-[54px] lg:leading-[63.13px] lg:text-[#1A1A1A] text-[24px] leading-[28.06px] text-greenPrimary">
            Beels for business makes your business soar higher.
          </h3>
        </div>
        <div className="flex max-lg:flex-col max-lg:px-[24px] gap-y-[20px] lg:mt-[34px] lg:gap-x-[20px]">
          <img src={playstore} className="max-lg:mt-[54px]  size-fit" />
          <Button className="bg-white text-greenPrimary w-full text-[20px] leading-[16px] font-[500] lg:w-fit lg:py-[16px] lg:h-fit border-[1px] border-greenPrimary rounded-[4px]">
            Join Beels
          </Button>
        </div>
      </div>
      {/* Phone image */}
      <div className="relative flex lg:w-full lg:justify-center max-lg:justify-end overflow-hidden pt-[75.4px]">
        <img src={phoneLoan} className="z-20 lg:w-[335.21px]" />
        <img
          src={graident2}
          className="absolute max-lg:left-[20%] lg:left-[50%] transform rotate-180  top-[-70px] "
        />
        <img src={graident2} className="absolute lg:left-0 bottom-0 lg:w-[429px] rounded-b-[24px]" />
      </div>
    </div>
  );
};

export default Download;
