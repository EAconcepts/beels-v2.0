

const FeatureCard = ({heading, desc}) => {
  return (
    <div>
          <h4 className="font-[700] lg:text-[48px] lg:leading-[56.11px] lg:text-[#1A1A1A] text-[24px] leading-[28.06px] max-lg:text-center text-greenPrimary">
           {heading || " Get your airtime top-up in a few seconds."}
          </h4>
          <p className="text-[16px] lg:leading-[28px] lg:text-[24px] lg:mt-[20px] leading-[18.7px] max-lg:text-center font-[500] text-greenPrimary">
            {desc || "You&apos;ll get your airtime or data soon after you complete your purchase on the app."}
          </p>
          <button className="hidden lg:block border-b-[1.8px] border-greenPrimary text-greenPrimary text-[20px] leading-[16px] px-[12px] py-[16px] mt-[33px]">
            Join Beels
          </button>
        </div>
  )
}

export default FeatureCard