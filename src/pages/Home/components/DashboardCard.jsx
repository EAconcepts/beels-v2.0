import product from "../../../assets/images/product.svg";
import avatar from "../../../assets/images/avatar.svg";
import orders from "../../../assets/images/order-bag.svg";

const DashboardCard = () => {
  return (
    <div className=" absolute left-[4px] bottom-[-30px] flex flex-col bg-white font-karla rounded-[4.59px] py-[5.5px] tracking-[4%] px-[7.34px]">
      <span className="font-[500] text-[7.34px] leading-[8.58px]  text-[#082C25CC]">
        Dashboard
      </span>
      <div className="flex gap-x-[7.34px] mt-[5.5px] ">
        <div className="bg-[#D1C2F966] w-[44.02px] items-center rounded-[2.75px] p-[3.67px] flex flex-col gap-y-[3.3px]">
          <img src={product} className="size-[12.83px]" />
          <span className="font-[400] text-[6.42px] leading-[7.5px] text-center text-greenSecondary">
            Products: 2
          </span>
        </div>
        <div className="bg-[#D1C2F966] w-[44.02px] rounded-[2.75px] items-center p-[3.67px] flex flex-col gap-y-[3.3px]">
          <img src={avatar} className="size-[12.83px]" />
          <span className="font-[400] text-[6.42px] leading-[7.5px] text-center text-greenSecondary">
            Customers: 1k
          </span>
        </div>
        <div className="bg-[#D1C2F966] w-[44.02px] rounded-[2.75px] items-center p-[3.67px] flex flex-col gap-y-[3.3px]">
          <img src={orders} className="size-[12.83px]" />
          <span className="font-[400] text-[6.42px] leading-[7.5px] text-center text-greenSecondary">
            Orders: 1k
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
