import { MdNavigateNext } from "react-icons/md";
import keepTrack from "../../../assets/images/keep-track2.png";
import Button from "../../../components/Button";

const BIRMgt = () => {
  return (
    <div className="pt-[93px]">
      <div className="flex flex-col gap-y-[24px]">
        <h2 className="text-greenPrimary text-[32px] font-[700] leading-[37.41px] text-center">
          Free Up Your Time: Effortless BIR Management with{" "}
          <span className="text-[#FF7650] font-caveat font-[400] leading-[40.32px]">
            Beels
          </span>
        </h2>
        <p className="font-[500] text-[16px] leading-[28px] text-center text-greenPrimary">
          Your all-in-one solution for Bookkeeping, Invoicing, and Receipts
          (BIR). We offer a user-friendly platform that automates tedious tasks
          and empowers you to manage your finances with ease.
        </p>
      </div>
      <div className="mt-[48px]">
        <div className="">
          <h5 className="text-[24px] leading-[28.06px] text-center font-[700] text-greenPrimary">
            Keep track of due invoices and paid invoices easily wherever you
            are.
          </h5>
          <p className="text-[14px] mt-[24px] font-[500] text-center leading-[16.37px] text-greenPrimary">
            Take the stress out of receiving payments. Invoice notifications on
            the Beels for Business app keep ypu on top of your finances round
            the clock.
          </p>
        </div>
        <img src={keepTrack} className="mt-[24px]" />
        <Button
          className={
            "flex gap-x-[16px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
          }
        >
          <span>Open a Beels for Business Account</span>
          <MdNavigateNext className="text-[32px]" />
        </Button>
      </div>
      {/* Business account */}
      <div className="mt-[48px]">
        <div className="">
          <h5 className="text-[24px] leading-[28.06px] text-center font-[700] text-greenPrimary">
            Create invoices and send them by email or other convenient channels.
          </h5>
          <p className="text-[14px] mt-[24px] font-[500] text-center leading-[16.37px] text-greenPrimary">
            Beels for Business simplifies your invoicing process forever with
            straightforward invoices that you can share with your customers
            almost anywhere.
          </p>
        </div>
        <img src={keepTrack} className="mt-[24px]" />
        <Button
          className={
            "gap-x-[20px] text-[20px] items-center font-[500] leading-[16px] bg-transparent border-b-[1.8px] border-greenPrimary rounded-none px-0 text-center  text-greenPrimary "
          }
        >
          Start with Beels for business Now
        </Button>
      </div>

      {/* Receive invoice */}
      <div className="mt-[48px]">
        <div className="">
          <h5 className="text-[24px] leading-[28.06px] text-center font-[700] text-greenPrimary">
          Receive invoice payments by transfer or by card
          </h5>
          <p className="text-[14px] mt-[24px] font-[500] text-center leading-[16.37px] text-greenPrimary">
          There’s more than one way to get paid. Beels for Business invoices give your customers multiple payment options and no room for excuses.
          </p>
        </div>
        <img src={keepTrack} className="mt-[24px]" />
        <Button
          className={
            "flex gap-x-[16px] text-[16px] items-center font-[500] leading-[16px] text-white py-[16px] pr-[6px] pl-[22px]"
          }
        >
          <span>Open a Beels for Business Account</span>
          <MdNavigateNext className="text-[32px]" />
        </Button>
      </div>
    </div>
  );
};

export default BIRMgt;
