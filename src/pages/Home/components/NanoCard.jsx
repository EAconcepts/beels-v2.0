import { twMerge } from "tailwind-merge";
import naira from "../../../assets/images/branded-naira.svg";
import exclaim from "../../../assets/images/exclamation.svg";

const NanoCard = ({className}) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-[4.68px] py-[4.68px] px-[3.85px] lg:rounded-[8.49px] lg:max-w-[232px] lg:py-[8.49px] lg:px-[7.08px] ",
        className
      )}
    >
      <div className="rounded-[7.08px] bg-white border-[0.71px] border-[#082C251A]">
        <div className="bg-gradient-to-tl from-[#B6F485] to-[#B6F485] flex ">
          <img src={naira} className="lg:size-[22px] size-[12px] rounded-[7.08px]" />
          <div className="flex flex-col gap-y-[1.142px]">
            <h3 className="lg:text-[12.74px] text-[7.03px] leading-[8.22px] text-greenPrimary lg:leading-[14.89px] font-[500]">
              Business Nano credit
            </h3>
            <p className="lg:text-[8.94px] text-[4.69px] leading-[5.48px] lg:leading-[9.93px] font-[400] text-[#082C25CC]">
              Active Credit request | 12 jun, 2023
            </p>
          </div>
          </div>
          <div className="py-[8.49px] px-[9.91px]">
          <div className="flex gap-x-[12px]">
            <div className="flex flex-col">
              <p className="lg:text-[14.15px] text-[7.81px] leading-[9.13px text-[#082C25] font-[500] leading-[16.55px]">
                4 <span className="text-[4.69px] lg:text-[8.49px]  leading-[5.48px] lg:leading-[9.93px]">%</span>
              </p>
              <p className="lg:text-[8.49px] text-[4.69px] leading-[5.48px] lg:eading-[9.93px] font-[400] text-[#082C25CC]">
                Min. Interest
              </p>
            </div>
            {/* 90 days */}
            <div className="flex flex-col">
              <p className="lg:text-[14.15px] text-[7.81px] leading-[9.13px text-[#082C25] font-[500] leading-[16.55px]">
                90 <span className="text-[4.69px] lg:text-[8.49px]  leading-[5.48px] lg:leading-[9.93px]">Days</span>
              </p>
              <p className="lg:text-[8.49px] text-[4.69px] leading-[5.48px] lg:eading-[9.93px] font-[400] text-[#082C25CC]">
                Max. Duration
              </p>
            </div>
            <div className="flex gap-x-[2.83px] bg-[#F1FC7966] py-[4.25px] px-[8.94px]">
              <p className="lg:text-[14.15px] text-[#082C25] font-[500] leading-[16.55px]">
               Under Reivew
              </p>
             <img src={exclaim} className=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NanoCard;
