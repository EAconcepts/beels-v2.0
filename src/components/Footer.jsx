import logo from "../assets/logo.svg";
import logoText from "../assets/images/logoText.svg";
import qrcode from "../assets/images/qrcode.svg";
import copyright from "../assets/images/copyright.svg";

const Footer = () => {
  return (
    <div className="bg-white px-[16px] lg:pt-[39px]  lg:px-[40px] lg:pb-[62.7px] pt-[48px] pb-[17.7px] font-inter">
      <div className="border-b-[0.1px]  pb-[24px]">
        {/* logo */}
        <div className="flex gap-x-[8.94px] items-center">
          <img src={logo} className="h-[31.3px] w-[26.18px]" />
          <img src={logoText} className="h-[23.48px] w-[97.87px]" />
        </div>
        <div className="lg:border-y-[0.1px] lg:py-[40px] lg:my-[40px] lg:w-full lg:gap-x-[80px] lg:flex lg:items-center ">
          {/* Barcode */}
          <div className="max-lg:mt-[40px] max-lg:pt-[24px] flex-shrink-0 lg:w-[437px]">
            <div className="border-[2px] border-dashed rounded-[8px]  p-[20px]">
              <div className="p-[10.2px]">
                <img src={qrcode} className="" />
              </div>
              <p className="text-greenPrimary mt-[12px] lg:text-[20px] lg:leading-[24.2px] text-[14px] leading-[16.94px] font-[400]">
                Scan to download App on the Playstore.
              </p>
            </div>
          </div>
          {/* About */}
          <div className="flex lg:justify-between lg:w-full max-lg:flex-col gap-y-[24px] px-[8px] max-lg:mt-[40px]">
            <div className="flex flex-col gap-y-[24px]">
              <p className="text-[16px] lg:text-[24px] lg:leading-[29.05px] font-inter font-[600] leading-[19.36px] text-greenPrimary">
                About Us
              </p>
              <p className="font-[400] lg:text-[20px] lg:leading-[24.2px] pb-[12px] text-[14px] leading-[16.94px] text-greenPrimary border-b-[0.1px] w-[207px]">
                Our Company
              </p>
              <p className="font-[400] lg:text-[20px] lg:leading-[24.2px] pb-[12px] text-[14px] leading-[16.94px] text-greenPrimary border-b-[0.1px]  w-[207px]">
                Products
              </p>
            </div>
            <div className="flex flex-col gap-y-[24px]">
              <p className="text-[16px] lg:text-[24px] lg:leading-[29.05px] font-inter font-[600] leading-[19.36px] text-greenPrimary">
                Legal
              </p>
              <p className="font-[400] lg:text-[20px] lg:leading-[24.2px] pb-[12px] text-[14px] leading-[16.94px] text-greenPrimary border-b-[0.1px] w-[207px]">
                Terms of Use
              </p>
              <p className="font-[400] lg:text-[20px] lg:leading-[24.2px] pb-[12px] text-[14px] leading-[16.94px] text-greenPrimary border-b-[0.1px]  w-[207px]">
                Privacy Policy
              </p>
            </div>
            <div className="flex flex-col gap-y-[24px]">
              <p className="text-[16px] lg:text-[24px] lg:leading-[29.05px] font-inter font-[600] leading-[19.36px] text-greenPrimary">
                Support
              </p>
              <p className="font-[400] pb-[12px] lg:text-[20px] lg:leading-[24.2px] text-[14px] leading-[16.94px] text-greenPrimary border-b-[0.1px] w-[207px]">
                Contact Us
              </p>
              <p className="font-[400] lg:text-[20px] lg:leading-[24.2px] pb-[12px] text-[14px] leading-[16.94px] text-greenPrimary border-b-[0.1px]  w-[207px]">
                FAQ
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-b-[0.1px] "></div>
        <div className="flex gap-x-[4px] mt-[24px] items-center">
          <img src={copyright} className="lg:size-[20px]" />
          <p className="text-[12px] lg:text-[16px] font-[400] leading-[14.52px] text-greenPrimary">
            Digit Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
