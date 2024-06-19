import affordable from "../../../assets/images/affordable.svg";
import automate from "../../../assets/images/automate.svg";
import two47 from "../../../assets/images/247.svg";
import earn from "../../../assets/images/earn.svg";

const Features = () => {
  const features = [
    {
      icon: affordable,
      title: "Affordable Credit",
      desc: "Reduce the cost of growing your business with us, access bespoke credit solutions just for you and your business.",
    },
    {
      icon: automate,
      title: "Automate Process",
      desc: "Reduce human errors when you use our system to verify identities, collect payments, generate invoices, track payments, reconcile accounts, and send reminders.",
    },
    {
      icon: two47,
      title: "24/7 Support",
      desc: "We want to ensure your business don’t get stucked, our customer support is able to get your issues resolved no matter what day or time it is.",
    },
    {
      icon: earn,
      title: "Earn More",
      desc: "Maximize your earning potential by listing on our marketplace. We handle the hassle of selling to working professionals, so you can focus on your business.",
    },
  ];
  return (
    <div>
      <div className="pt-[55px] mt-[28px] lg:px-[64px] px-[16px] flex flex-col  w-full">
        <h1 className="text-[28px] lg:text-[48px] lg:px-[106px] lg:leading-[56.11px] font-[700] leading-[38.73px] text-center text-black">
          Unlock the full potential of your business with a feature-rich account
          designed for growth.
        </h1>
        <div className="flex max-lg:flex-col lg:justify-center lg:flex-wrap mt-[40px] gap-y-[20px]">
          {features?.map((feat, index) => (
            <div className="flex lg:w-[424px] bg-[#F8FEF3] flex-col p-[16px]" key={index}>
              <div className="flex flex-col gap-y-[8px]">
                <div className="bg-[#D0F8B1] rounded-full size-[40px] px-[8px] py-[10.5px] gap-[8px]">
                  <img src={feat.icon} className="size-full" />
                </div>
                <h3 className="text-[16px]lg:text-[20px] lg:leading-[24px] font-[500] leading-[19.35px] text-[#03110E]">
                  {feat.title}
                </h3>
              </div>
              <p className="text-[14px] lg:leading-[20px] font-[400] leading-[24px] text-[#666666] ">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
