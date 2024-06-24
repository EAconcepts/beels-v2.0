import success from "../../../assets/images/success-check.png";

const SuccessCard = () => {
  return (
    <div className="bg-white px-[9.59px] py-[6.39px] lg:px-[13.39px] lg:py-[8.93px] z-40 max-w-[131px] lg:max-w-[183px] flex flex-col items-center rounded-[5.58px]">
      <div className="w-full flex flex-col items-center">
        <img src={success} className="max-lg:size-[28.76px]" />
        <h5 className="text-[7.99px] lg:text-[11.16px] text-greenPrimary font-[700] leading-[8.34px] lg:leading-[13.04px] ">
          Transfer Successful
        </h5>
        <p className="text-[4.79px] lg:text-[6.7px] font-[500] leading-[5.6px] lg:leading-[7.83px] text-[#082C25CC]">
          Congratulations! Your transfer of #130.00 to PRECIOUS ADEIZA OWUDA was
          successfull
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
