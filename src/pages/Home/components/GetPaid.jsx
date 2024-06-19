import Button from "../../../components/Button";
import dashboard from "../../../assets/images/dashboard.png";
import DashboardCard from "./DashboardCard";

const GetPaid = () => {
  return (
    <div className="bg-[#F2EDFF] pt-[44px] rounded-[24px]">
      <div className="bg-[#FFD4C8] pt-[42px] rounded-[24px]">
        <p className="text-[24px] lg:invisible h-[19px] overflow-hidden font-[700] leading-[28.06px]  text-greenPrimary px-[25px]">
          Access up to 100 million via various credit products for your
          business.
        </p>
        <div className="bg-white lg:justify-between lg:flex pb-[55.03px] rounded-[24px] pt-[42px] px-[25px]">
          <div>
            <h3 className="text-[24px] lg:w-[512px] lg:text-[54px] lg:leading-[63.13px] lg:text-[#03110E] font-[700] leading-[28.06px] text-greenPrimary">
              Get Paid Everywhere
            </h3>
            <p className="mt-[16px] lg:w-[535px] lg:mt-[20px] lg:text-[24px] lg:leading-[24px] font-[400] text-greenPrimary">
              Accelerate your customers&apos; payment process by offering
              familiar payment methods they&apos;re accustomed to, ensuring
              swift and seamless transactions with Beels.
            </p>
            <Button
              className={
                "mt-[28px] lg:mt-[31px] lg:text-[20px] lg:leading-[16px]"
              }
            >
              Join Beels
            </Button>
          </div>
          <div className="flex  max-lg:w-full relative border-[16px] lg:rounded-[8px] border-white max-lg:justify-center max-lg:mt-[27.88px]">
            <img src={dashboard} className="lg:w-[519.63px] lg:h-[333px]" />
            <DashboardCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPaid;
