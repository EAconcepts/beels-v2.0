import Button from "../../../components/Button";
import dashboard from "../../../assets/images/dashboard.png";
import DashboardCard from "./DashboardCard";

const GetPaid = () => {
  return (
    <div className="bg-[#F2EDFF] pt-[44px] rounded-[24px]">
      <div className="bg-[#FFD4C8] pt-[42px] rounded-[24px]">
        <p className="text-[24px] h-[19px] overflow-hidden font-[700] leading-[28.06px] text-greenPrimary px-[25px]">
          Access up to 100 million via various credit products for your
          business.
        </p>
        <div className="bg-white pb-[55.03px] rounded-[24px] pt-[42px] px-[25px]">
          <h3 className="text-[24px] font-[700] leading-[28.06px] text-greenPrimary">
            Get Paid Everywhere
          </h3>
          <p className="mt-[16px]">
            Accelerate your customers&apos; payment process by offering familiar
            payment methods they&apos;re accustomed to, ensuring swift and
            seamless transactions with Beels.
          </p>
          <Button className={"mt-[28px]"}>Join Beels</Button>
          <div className="flex w-full relative border-[16px] border-white justify-center pt-[27.88px]">
            <img src={dashboard} className="" />
            <DashboardCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPaid;
