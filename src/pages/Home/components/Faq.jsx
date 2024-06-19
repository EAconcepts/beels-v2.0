import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = () => {
  const data = [
    {
      id: 0,
      title: "How do you Pronounce Beels?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                      ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                      In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                      Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      id: 1,
      title: "What type of businesses are eligible for this service?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                      ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                      In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                      Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      id: 2,
      title: "How long does it take to receive funds?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                      ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                      In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                      Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      id: 3,
      title: "How can I contact with support?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                      ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                      In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                      Fusce sed commodo purus, at tempus turpis.`,
    },
  ];

  return (
    <div className="lg:px-[64px] px-[24px]">
      <h2 className="text-[24px] lg:text-[76px] lg:text-black lg:leading-[88.84px] text-greenPrimary text-center leading-[28.06px] font-[700]">
        Frequently asked questions
      </h2>
      <div className="flex mt-[40px] lg:mt-[80px] flex-col gap-y-[24px]">
        {data?.map((faq, index) => (
          <Faq key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;

export const Faq = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex flex-col border-b pb-[24px] text-[14px] font-inter"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center lg:font-inter justify-between ">
        <span className="text-greenPrimary lg:text-black lg:text-[24px] lg:leading-[29.05px] font-[500] leading-[16.94px] ">
          {title}
        </span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && <p className={"pt-[12px] lg:text-black lg:text-[24px] lg:leading-[29.05px]"}>{content}</p>}
    </div>
  );
};
