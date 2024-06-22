import buy from "../assets/images/affordable.svg";
import subscribe from "../assets/images/earn.svg";
import topup from "../assets/images/automate.svg"

const FeaturesList = () => {

    const features = [
        {
          icon: buy,
          content: "Buy airtime from any Nigerian mobile network.",
        },
        {
          icon: topup,
          content: "Top up airtime on your phone in a few seconds",
        },
        {
          icon: subscribe,
          content: "Subscribe to your favorite mobile data plan easily.",
        },
      ]
  return (
    <div className="bg-[#FFFFFF] lg:px-[64px] px-[20px] py-[91px]">
        <div className="flex max-lg:flex-col gap-y-[20px] lg:gap-x-[20px]">
          {features?.map((feat, index) => (
            <div
              key={index}
              className="bg-[#F8FEF3] rounded-[8px] flex flex-col gap-y-[8px] py-[16px] px-[16px]"
            >
              <div className="bg-[#D0F8B1] flex justify-center items-center size-[40px] rounded-full">
                <img src={feat.icon} className="size-fit" />
              </div>
              <p className="text-[20px] font-[700] text-[#03110E] leading-[24px]">
                {feat.content}
              </p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default FeaturesList