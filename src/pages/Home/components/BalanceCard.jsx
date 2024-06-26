import eyeClosed from "../../../assets/images/eyeClosed.svg";
import transfer from "../../../assets/images/transferIcon.svg";
import receive from "../../../assets/images/receiveIcon.svg";
import Button from "../../../components/Button";
import { FaGreaterThan } from "react-icons/fa6";
import naira from "../../../assets/images/naira-white.svg";
import { twMerge } from "tailwind-merge";

const BalanceCard = ({className}) => {
  return (
    <div className={twMerge("max-lg:w-[109px] lg:w-[174.94px] bg-greenPrimary rounded-[6.32px] relative ", className)}>
      {/* Beels Point */}
      <div className="absolute top-[-3px] right-[-2.5px] rounded-t-[2.95px] rounded-r-[6.32px] p-[2.32px] rounded-l-[2.95px] flex ">
        <span className=" rounded-t-[3.16px] roudned-b-[4.22px] text-[4.37px] leading-[5.11px] lg:text-[6.96px] text-greenPrimary font-[500] lg:leading-[8.13px] rounded-l-[3.16px] bg-gradient-to-b from-[#B6F485] to-[#E9FDF2] py-[2.32px] pr-[2.11px]">
          Beels Point
        </span>
        <div className="flex gap-x-[4px] px-[4.22px] bg-white items-center">
          <span className="pl-[4.22px] py-[2.82px] text-[3.97px] leading-[4.65px] lg:text-[6.32px] font-[500] lg:leading-[7.39px] text-greenPrimary">
            BP203
          </span>
          <FaGreaterThan className="text-[4px] lg:text-[6px] text-greenPrimary" />
        </div>
      </div>

      <div className="p-[6.32px] ">
        <h4 className="text-[5.3px] leading-[6.2px] lg:text-[8.43px] font-[400] lg:leading-[9.89px] text-[#FFFFFFCC]">
          Total balance
        </h4>
        <div className="flex gap-x-[4.22px] mt-[4.22px]">
          <div className="flex gap-x-[4px] text-[9.27px] lg:text-[14.75px] leading-[10.84px] lg:leading-[17.25px] font-[700] text-white">
            <img src={naira} className="" />

            <span>32,550.00</span>
          </div>
          <img src={eyeClosed} className="max-lg:size-[6.62px]" />
        </div>
        <div className="mt-[12.65px] flex gap-x-[8.43px]">
          <Button
            className={
              "bg-white p-[2.11px] rounded-[5.27px] flex gap-x-[4.22px] items-center"
            }
          >
            <img src={transfer} alt="" className=" max-lg:size-[8.83px] " />
            <span className="text-[4.64px] lg:text-[7.38px] font-[500] leading-[5.42px] lg:leading-[8.62px] text-greenPrimary">
              {" "}
              Transfer Funds
            </span>
          </Button>
          <Button
            className={
              "bg-white p-[2.11px] rounded-[5.27px] flex gap-x-[4.22px] items-center"
            }
          >
            <img src={receive} alt="" className="max-lg:size-[8.83px]" />
            <span className="text-[4.64px] lg:text-[7.38px] font-[500] leading-[5.42px] lg:leading-[8.62px] text-greenPrimary">
              Receive Funds
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
