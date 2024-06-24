import tag from "../../../assets/images/tag.svg";
import naira from "../../../assets/images/naira.svg";
const Tag = () => {
  return (
    <div className="rounded-[8px] flex justify-between w-[198px] lg:w-[320px] bg-white p-[12px] border-[0.8px] border-[#082C2533]">
      <div className="flex items-center gap-x-[12px] shrink-0">
        <img src={tag} className="max-lg:size-[29.7px]" />
        <div className="flex flex-col max-lg:gp-y-[2.47px]">
          <h5 className="font-[500] text-[9.9px] leading-[11.57px] lg:text-[16px] text-greenPrimary lg:leading-[18.67px] ">
            #BBRT0001
          </h5>
          <p className="text-[8.66px] lg:text-[14px] leading-[10.13px] lg:leading-[16.37px] text-[#082C2599] font-[400]">
            Owuda Precious
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-[4px] text-[8.2px] lg:text-[16px] font-[500] leading-[8.64px] lg:leading-[18.7px] text-greenPrimary">
          <img src={naira} className="max-lg:size-[8px]" />
          <span> 10,500</span>
        </div>
        <p className="text-[4.5px] lg:text-[14px] text-[#082C2599] leading-[6px] lg:leading-[16.37px] font-[400]">
          14 Jan, 2023
        </p>
      </div>
    </div>
  );
};

export default Tag;
