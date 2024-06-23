import heroImg from "../../../assets/images/heroImg.png";
import hero2 from "../../../assets/images/hero2.png";
import SuccessCard from "./SuccessCard";
import BalanceCard from "./BalanceCard";
import Tag from "./Tag";

const HeroCard = () => {
  return (
    <div className="max-lg:w-[348px] pl-[76px]  rounded-[8px] lg:h-[512px] lg:w-[581px] max-lg:h-[367px] overflow-hidde relative">
      <img src={heroImg} className="lg:hidden h-full object-cover " />
      <img src={hero2} className="hidden lg:block h-full object-cover " />
      {/* Total Balance */}
      <div className="absolute top-[50%] left-[-10px]">
        <BalanceCard />
      </div>
      <div className="absolute z-40 top-[80px] right-[-100px]">
        <SuccessCard />
      </div>
      <div className="absolute z-40 bottom-[0] right-[-100px]">
        <Tag />
      </div>
    </div>
  );
};

export default HeroCard;
