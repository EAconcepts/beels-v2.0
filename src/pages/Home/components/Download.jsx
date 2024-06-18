import playstore from "../../../assets/images/playstore.svg";
import Button from "../../../components/Button";
import phoneLoan from "../../../assets/images/phone-loan.png";
import graident2 from "../../../assets/images/gradient2.svg";

const Download = () => {
  return (
    <div className="pt-[58px] bg-white rounded-[24px] mb-[94px]">
      <div className="px-[28px] flex flex-col gap-y-[7px]">
        <p className="font-[400] text-[14px] leading-[24px] text-greenPrimary">
          Download the Beels for Business App
        </p>
        <h3 className="font-[700] text-[24px] leading-[28.06px] text-greenPrimary">
          Beels for business makes your business soar higher.
        </h3>
      </div>
      <div className="flex flex-col gap-y-[20px]">
        <img src={playstore} className="mt-[54px] size-fit" />
        <Button className="bg-white text-greenPrimary w-full text-[20px] leading-[16px] font-[500] border-[1px] border-greenPrimary rounded-[4px]">Join Beels</Button>
        <div className="relative flex justify-end overflow-hidden pt-[75.4px]">
            <img src={phoneLoan} className="z-20" />
            <img src={graident2} className="absolute left-[20%] transform rotate-180  top-[-70px] "/>
            <img src={graident2} className="absolute bottom-0 rounded-b-[24px]"/>
        </div>
      </div>
    </div>
  );
};

export default Download;
