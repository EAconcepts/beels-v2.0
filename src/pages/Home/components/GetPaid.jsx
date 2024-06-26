import Button from "../../../components/Button";
import dashboard from "../../../assets/images/dashboard.png";
import DashboardCard from "./DashboardCard";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

// import img2 from "../../../assets/images/card-img2.png";

const GetPaid = ({card, className, Card}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return (
    <div className={twMerge("bg-white lg:justify-between lg:flex pb-[55.03px] rounded-[24px] sticky top[5vh] pt-[42px] lg:gap-x-[27px] px-[25px]", className)}>
      <div>
        <h3 className="text-[24px] lg:w-full lg:text-[48px] lg:leading-[56.11px] lg:text-[#03110E] font-[700] leading-[28.06px] text-greenPrimary">
          {card?.title}
        </h3>
        <p className="mt-[16px] lg:w-[535px] lg:mt-[20px] lg:text-[24px] lg:leading-[24px] font-[400] text-greenPrimary">
         {card?.content}
        </p>
        <Button
          className={"mt-[28px] lg:mt-[31px] lg:text-[20px] lg:leading-[16px]"}
        >
          Join Beels
        </Button>
      </div>
      <div className="flex  max-lg:w-full lg:w-full relative border-[16px] lg:rounded-[8px] border-white max-lg:justify-center max-lg:mt-[27.88px]">
        <img src={card.image} className="lg:max-w-[519.63px] lg:max-h-[333px]" />
        {/* <DashboardCard /> */}
        {Card}
      </div>
    </div>
  );
};

export default GetPaid;
