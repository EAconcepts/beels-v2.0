import tag from "../../../assets/images/tag.svg";
const Tag = () => {
  return (
    <div className="rounded-[8px] flex justify-between w-[320px] bg-white py-[12px] border-[0.8px] border-greenPrimary">
      <div className="flex items-center gap-x-[12px]">
        <img src={tag} className="" />
        <div className="flex flex-col">
          <h5 className="font-[500] text-[16px] text-greenPrimary leading-[18.67px] ">
            #BBRT0001
          </h5>
          <p className="text-[14px] leading-[16.37px] text-[#082C2599] font-[400]">
            Owuda Precious
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="text-[16px] font-[500] leading-[18.7px] text-greenPrimary">
          {" "}
          10,500
        </h5>
        <p className="text-[14p]">14 Jan, 2023</p>
      </div>
    </div>
  );
};

export default Tag;
