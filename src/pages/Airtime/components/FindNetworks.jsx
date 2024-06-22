import { MdNavigateNext } from "react-icons/md";
import phone from "../../../assets/images/airtime-phone2.png";
import transaction from "../../../assets/images/transaction.svg";
import Button from "../../../components/Button";
import tablet from "../../../assets/images/airtime-tab.png";
import tablet2 from "../../../assets/images/slant-mobile.png";

const FindNetworks = () => {
  return (
    <div className="pt-[135.04px] font-karla">
      <div className="flex max-lg:flex-col ">
        <div className="lg:w-[650px]">
          <h2 className="text-greenPrimary text-[24px] lg:text-[48px] lg:leading-[56.11px] lg:text-[#1A1A1A] leading-[28.06px] max-lg:text-center font-[700]">
            Find all Nigerian mobile networks on Beels
          </h2>
          <p className="text-greenPrimary font-[500] lg:text-[24px] lg:leading-[28px] text-[16px] leading-[18.7px] max-lg:text-center mt-[40px] lg:mt-[20px]">
            Buy Airtel, Glo, MTN and 9Mobile airtime and internet data directly
            from your account.
          </p>
          <Button
            className={
              "lg:flex hidden lg:mt-[53px] gap-x-[16px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
            }
          >
            <span>Open a Beels for Business Account</span>
            <MdNavigateNext className="text-[32px]" />
          </Button>
        </div>
        <img src={phone} className="lg:w-[636px] lg:h-[475px]" />
        <Button
          className={
            "flex lg:hidden gap-x-[16px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
          }
        >
          <span>Open a Beels for Business Account</span>
          <MdNavigateNext className="text-[32px]" />
        </Button>
      </div>

      <div className="mt-[48px] lg:mt-[300px] lg:flex lg:flex-row-reverse lg:gap-x-[53.38px]">
        <div>
          <h4 className="font-[700] lg:text-[48px] lg:leading-[56.11px] lg:text-[#1A1A1A] text-[24px] leading-[28.06px] max-lg:text-center text-greenPrimary">
            Get your airtime top-up in a few seconds.
          </h4>
          <p className="text-[16px] lg:leading-[28px] lg:text-[24px] lg:mt-[20px] leading-[18.7px] max-lg:text-center font-[500] text-greenPrimary">
            You&apos;ll get your airtime or data soon after you complete your
            purchase on the app.
          </p>
          <button className="hidden lg:block border-b-[1.8px] border-greenPrimary text-greenPrimary text-[20px] leading-[16px] px-[12px] py-[16px] mt-[33px]">
            Join Beels
          </button>
        </div>
        <div className=" max-lg:mt-[40px] pb-[52px]">
          <div className="pl-[66.07px] z-0 relative">
            {/* Circle */}
            <div className="bg-[#FFC8B9] lg:size-[403px] z-0 max-lg:top-[-20px] absolute  rounded-full size-[214.72px]"></div>
          </div>
          {/* Card */}
          <div className="pl-[38.89px] lg:mt-[53px]">
            <div className="flex gap-x-[10.58px] bg-white relative z-10 py-[11.02px] px-[14.1px] w-[289.11px] lg:w-[542.62px]">
              <img src={transaction} className="" />
              <div className="flex flex-col gap-y-[1.76px] lg:gap-y-[3.31px]">
                <p className="text-[12.34px] lg:text-[23.16px] lg:leading-[27.07px] leading-[14.43px] lg:tracking-[4%] lg:text-greenPrimary">
                  Transaction Notification
                </p>
                <p className="font-[400] lg:text-[19.85px] lg:leading-[23.21px] lg:text-greenPrimary text-[10.58px] leading-[12.36px] tracking-[-4%]">
                  You just recharged MTN VTU 2348045679805- Airtime with N200
                </p>
                <p className="text-[7.05px] lg:text-[13.23px] lg:leading-[15.47px] text-black leading-[8.24px] font-[300]">
                  Feb. 27. 11:38pm
                </p>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="mt-[11.02px] lg:mt-[20.68px] ">
            <div className="flex gap-x-[10.58px] bg-white relative z-20 py-[11.02px] px-[14.1px] w-[289.11px] lg:w-[542.62px]">
              <img src={transaction} className="" />
              <div className="flex flex-col gap-y-[1.76px] lg:gap-y-[3.31px]">
                <p className="text-[12.34px]  lg:text-[23.16px] lg:leading-[27.07px] lg:text-greenPrimary leading-[14.43px] tracking-[]">
                  Transaction Notification
                </p>
                <p className="font-[400] text-[10.58px] lg:text-[19.85px] lg:leading-[23.21px] lg:text-greenPrimary leading-[12.36px] tracking-[-4%]">
                  You just recharged MTN VTU 2348045679805- Airtime with N200
                </p>
                <p className="text-[7.05px] lg:text-[13.23px] lg:leading-[15.47px] text-black leading-[8.24px] font-[300]">
                  Feb. 27. 11:38pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={
            "lg:hidden gap-x-[20px] text-[20px] items-center font-[500] leading-[16px] bg-transparent border-b-[1.8px] border-greenPrimary rounded-none px-0 text-center  text-greenPrimary "
          }
        >
          Start with Beels for business Now
        </Button>
      </div>

      <div className="mt-[48px] lg:mt-[157px]">
        <div className="flex max-lg:flex-col lg:items-center lg:gap-x-[81.9px] ">
          <div className="lg:w-[650px]">
            <h2 className="text-greenPrimary text-[24px] lg:text-[48px] lg:leading-[56.11px] lg:text-[#1A1A1A] leading-[28.06px] max-lg:text-center font-[700]">
              Send airtime to your friends and family.
            </h2>
            <p className="text-greenPrimary font-[500] lg:text-[24px] lg:leading-[28px] text-[16px] leading-[18.7px] max-lg:text-center mt-[40px] lg:mt-[24px]">
              Recharge any Nigerian phone number from your Beels app even when
              you’re anywhere.
            </p>
            <button className="hidden lg:block border-b-[1.8px] border-greenPrimary text-greenPrimary text-[20px] leading-[16px] px-[12px] py-[16px] mt-[33px]">
              Join Beels
            </button>
          </div>
          <img src={tablet} className="lg:hidden" />
          <div className="hidden lg:block relative">
            <img src={tablet2} className="relative z-10" />
            <div className="rounded-full size-[403px] bg-[#FFC8B9] absolute top-0 translate-y-[15%] z-0 "></div>
          </div>
          <Button
            className={
              "lg:hidden flex gap-x-[16px] mt-[20px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
            }
          >
            <span>Open a Beels for Business Account</span>
            <MdNavigateNext className="text-[32px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindNetworks;
