import { MdNavigateNext } from "react-icons/md";
import phone from "../../../assets/images/airtime-phone2.png";
import transaction from "../../../assets/images/transaction.svg";
import Button from "../../../components/Button";
import tablet from "../../../assets/images/airtime-tab.png";

const FindNetworks = () => {
  return (
    <div className="pt-[135.04px] font-karla">
      <div className="flex flex-col ">
        <h2 className="text-greenPrimary text-[24px] leading-[28.06px] text-center font-[700]">
          Find all Nigerian mobile networks on Beels
        </h2>
        <p className="text-greenPrimary font-[500] text-[16px] leading-[18.7px] text-center mt-[40px]">
          Buy Airtel, Glo, MTN and 9Mobile airtime and internet data directly
          from your account.
        </p>
        <img src={phone} className="" />
        <Button
          className={
            "flex gap-x-[16px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
          }
        >
          <span>Open a Beels for Business Account</span>
          <MdNavigateNext className="text-[32px]" />
        </Button>
      </div>
      <div className="mt-[48px]">
        <h4 className="font-[700] text-[24px] leading-[28.06px] text-center text-greenPrimary">
          Get your airtime top-up in a few seconds.
        </h4>
        <p className="text-[16px] leading-[18.7px] text-center font-[500] text-greenPrimary">
          You&apos;ll get your airtime or data soon after you complete your
          purchase on the app.
        </p>
        <div className=" mt-[40px] pb-[52px]">
          <div className="pl-[66.07px] z-0 relative">
            {/* Circle */}
            <div className="bg-[#FFC8B9] z-0 top-[-20px] absolute  rounded-full size-[214.72px]"></div>
          </div>
          {/* Card */}
          <div className="pl-[38.89px]">
            <div className="flex gap-x-[10.58px] bg-white relative z-10 py-[11.02px] px-[14.1px] w-[289.11px]">
              <img src={transaction} className="" />
              <div className="flex flex-col gap-y-[1.76px]">
                <p className="text-[12.34px] leading-[14.43px] tracking-[]">
                  Transaction Notification
                </p>
                <p className="font-[400] text-[10.58px] leading-[12.36px] tracking-[-4%]">
                  You just recharged MTN VTU 2348045679805- Airtime with N200
                </p>
                <p className="text-[7.05px] text-black leading-[8.24px] font-[300]">
                  Feb. 27. 11:38pm
                </p>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="mt-[11.02px]">
            <div className="flex gap-x-[10.58px] bg-white relative z-20 py-[11.02px] px-[14.1px] w-[289.11px]">
              <img src={transaction} className="" />
              <div className="flex flex-col gap-y-[1.76px]">
                <p className="text-[12.34px] leading-[14.43px] tracking-[]">
                  Transaction Notification
                </p>
                <p className="font-[400] text-[10.58px] leading-[12.36px] tracking-[-4%]">
                  You just recharged MTN VTU 2348045679805- Airtime with N200
                </p>
                <p className="text-[7.05px] text-black leading-[8.24px] font-[300]">
                  Feb. 27. 11:38pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={
            "gap-x-[20px] text-[20px] items-center font-[500] leading-[16px] bg-transparent border-b-[1.8px] border-greenPrimary rounded-none px-0 text-center  text-greenPrimary "
          }
        >
          Start with Beels for business Now
        </Button>
      </div>

      <div className="mt-[48px]">
        <div className="flex flex-col ">
          <h2 className="text-greenPrimary text-[24px] leading-[28.06px] text-center font-[700]">
          Send airtime to your friends and family.
          </h2>
          <p className="text-greenPrimary font-[500] text-[16px] leading-[18.7px] text-center mt-[40px]">
          Recharge any Nigerian phone number from your Beels app even when you’re anywhere.
          </p>
          <img src={tablet} className="" />
          <Button
            className={
              "flex gap-x-[16px] mt-[20px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
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
