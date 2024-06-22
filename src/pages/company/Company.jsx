import ComingSoon from "../../components/ComingSoon";
import hero from "../../assets/images/company-hero.png";
import hero2 from "../../assets/images/company-hero2.png";
import curve from "../../assets/images/curve.svg";
import quality from "../../assets/images/quality.svg";
import onboarding from "../../assets/images/onboarding.svg";
import product from "../../assets/images/product-icon.svg";
import sale from "../../assets/images/sale.svg";
import result from "../../assets/images/result.svg";
import headphones from "../../assets/images/headphone.svg";
import clock from "../../assets/images/clock.svg";
import address from "../../assets/images/address.svg";
import email from "../../assets/images/email.svg";
import telephone from "../../assets/images/telephone.svg";
import contact from "../../assets/images/contact-image.png";
import Button from "../../components/Button";
import Download from "../Home/components/Download";

const Company = () => {
  const features = [
    {
      title: "Quality",
      icon: quality,
      content:
        "We are committed to delivering the highest quality service at every touchpoint.  Continuous improvement and a relentless focus on customer feedback ensure Beels consistently exceeds your expectations",
    },
    {
      title: "Onboarding",
      icon: onboarding,
      content:
        "Beels makes getting started a breeze. Our intuitive and straightforward onboarding process guides you through setting up your account quickly and efficiently.",
    },
    {
      title: "Product",
      icon: product,
      content:
        "Beels offers a user-friendly product designed with your needs in mind.  Clear interfaces, intuitive features, and readily available resources ensure you can effortlessly utilize the full potential of Beels.",
    },
    {
      title: "Sale",
      icon: sale,
      content:
        "Our sales approach is consultative, not pushy. We focus on understanding your specific needs and goals, then recommending solutions that truly enhance your experience.",
    },
    {
      title: "Result",
      icon: result,
      content:
        "At Beels, success is measured by your success. We strive to empower you to achieve the desired results, whether it's streamlining your workflow, simplifying a process, or achieving your financial goals.",
    },
    {
      title: "Support",
      icon: headphones,
      content:
        "Our dedicated and knowledgeable support team is always available to assist you. Whether you have a quick question or require in-depth assistance, Beels provides a responsive and helpful support system.",
    },
  ];
  const contactList = [
    {
      icon: clock,
      title: "Office Hours",
      desc: "Monday - Friday 8:00am to 5:00pm",
    },
    {
      icon: address,
      title: "Office Address",
      desc: "Plot A135, Gidanmagoro Karishi Rd. Abuja, Nigeria",
    },
    {
      icon: email,
      title: "Email Address",
      desc: "support@beelsfinance.com",
    },
    {
      icon: telephone,
      title: "Get in Touch",
      desc: "+2347065256508 +2348071140197",
    },
  ];
  return (
    <div className="flex flex-col font-karla bg-[#F4FDED] pt-[54px]">
      <ComingSoon />
      {/* Hero */}
      <div className="mt-[54px] px-[20px] lg:flex flex-col items-center">
        <p className="font-[700] lg:max-w-[1189px] text-[32px] lg:text-[64px] lg:leading-[74.82px] lg:text-greenPrimary leading-[37.41px] text-black text-center">
          Providing access to financial services for all small business owners.
        </p>
        <div className="relative z-0 w-fit mt-[74px]">
          <img src={hero} alt="hero" className="lg:hidden relative z-10 " />
          <img
            src={hero2}
            alt="hero"
            className="hidden lg:block relative z-10 lg:W-full"
          />
          <img
            src={curve}
            alt="curve"
            className="absolute lg:left-[50px] lg:top-[-54px] z-0 top-[-44px]"
          />
          <img
            src={curve}
            alt="curve"
            className="absolute right-0 z-0 bottom-[-40px] lg:right-[44px] rotate-180"
          />
        </div>
      </div>
      {/* Who we are & Mission */}
      <div className="flex max-lg:flex-col lg:gap-x-[117px] lg:px-[64px] px-[20px] gap-y-[32px] mt-[117px]">
        {/* Who we are */}
        <div className="flex flex-col gap-y-[24px]">
          <h2 className="font-[700] lg:text-[64px] lg:leading-[74.82px] text-[32px] leading-[37.41px] max-lg:text-center text-[#082C25]">
            Who we are
          </h2>
          <p className="font-[500] lg:text-black lg:text-[24px] lg:leading-[28.06px] text-[16px] leading-[28px] max-lg:text-center text-[#082C25]">
            We empower individuals with access to credit, simple payments
            solutions, high-yield investment opportunities and easy-to-use tools
            for personal financial management.
          </p>
        </div>
        {/* Our Mission */}
        <div className="flex flex-col gap-y-[24px] pb-[118px]">
          <h2 className="font-[700] lg:text-[64px] lg:leading-[74.82px] text-[32px] leading-[37.41px] max-lg:text-center text-[#082C25]">
            Our Mission
          </h2>
          <p className="font-[500] lg:text-black lg:text-[24px] lg:leading-[28.06px] text-[16px] leading-[28px] max-lg:text-center text-[#082C25]">
            We believe access to credit and quality financial services is a
            human right. Our mission is to empower all people with the financial
            access they need to pursue a life of dignity and prosperity.
          </p>
        </div>
      </div>
      <div className="bg-white lg:px-[80px]">
        <div className="bg-white pt-[71px] max-lg:px-[14px]">
          <h4 className="text-greenPrimary lg:text-[64px] lg:leading-[74.82px] lg:text-[#030F0D] text-[32px] leading-[37.41px] text-center font-[700]">
            With Beels, each step is designed to simplify and enhance your
            experience
          </h4>
          <p className="text-greenPrimary lg:text-[24px] lg:leading-[28px] lg:px-[199.5px] text-[16px] font-[500] leading-[28px] text-center mt-[21px]">
            Every step pf your interaction with Beels is focused on providing a
            seamless user-friendly, and ultimately successful experience.
          </p>
        </div>
        {/*  Features*/}
        <div className="mt-[20px] lg:flex lg:flex-wrap lg:mt-[96px] px-[20px] pb-[91px]">
          {features?.map((feat, index) => (
            <div
              key={index}
              className="lg:w-[406.67px] lg:px-[32px] flex flex-col lg:pt-[60px] pt-[31.26px] text-center gap-y-[31.26px] items-center border-r-[0.16px] border-b-[0.16px] pb-[37.72px]  border-[#082C2599]"
            >
              <img src={feat.icon} className="" />
              <div className="flex flex-col gap-y-[18.76px] items-center">
                <h3 className="font-[700] lg:text-[28px] lg:leading-[28px] text-[32px] leading-[21.88px] text-center text-[#030F0D]">
                  {feat.title}
                </h3>
                <p className="lg:text-[20px] lg:leading-[26px] text-[16px] font-[400] leading-[20.32px]  text-greenPrimary ">
                  {feat.content}
                </p>
              </div>
            </div>
          ))}
          {/* Quality */}
        </div>
      </div>
      {/* Contact */}
      <div className="lg:flex lg:flex-row-reverse justify-end lg:pl-[62.5px] lg:pt-[80px] ">
        {/* Image */}
        <div className="pl-[16px] lg:pt-[85.88px] max-lg:pt-[126.93px] pr-[21px]">
          <div className="relative">
            <img src={contact} className=" z-10 relative w-[304.15px] h-[211.19px] lg:w-[602px] lg:h-[418px]" />
            <div className="w-[284px] lg:w-[563px] lg:h-[390px] z-0 h-[197px] bg-[#E8FBD9] absolute bottom-[-40px] lg:bottom-[-88px] right-0 lg:right-[-67px]"></div>
          </div>
        </div>
        <div className="lg:">
          <div className="flex flex-col max-lg:items-center  mt-[85.88px]">
            <Button
              className={
                "text-[24px] rounded-[100px] py-[8px] font-[400] leading-[28.06px] text-[#DCDCDC] px-[40px]"
              }
            >
              Contact us
            </Button>
            <h3 className="text-[32px] lg:w-[598px] lg:text-[40px] lg:leading-[46.76px] lg:font-[500] font-[700] leading-[37.41px] text-greenPrimary max-lg:text-center mt-[26px]">
              Get in Touch With Us & Let’s Discuss Business
            </h3>
          </div>
          <div className="px-[53px] mt-[45px] pb-[178px] ">
            <div className="flex flex-col gap-y-[32px]">
              {contactList?.map((cont, index) => (
                <div key={index} className="flex items-start gap-x-[24px]">
                  <img src={cont.icon} className="" />
                  <div className="flex flex-col gap-y-[18px]">
                    <h4 className="font-[600] text-[24px] leading-[28px] text-[#082C25]">
                      {cont.title}
                    </h4>
                    <p className="font-[400]  text-wrap text-[20px] leading-[28px] text-[#082C25]">
                      {cont.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Download />
      </div>
    </div>
  );
};

export default Company;
