import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import qoute from "../../../assets/images/qoute.svg";

const BeelersStories = () => {
  const stories = [
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
    {
      content: "I highly recommend business should use Beels",
      from: "Peter, Belgium",
      desc: "on what he learned when sitting with himself",
    },
  ];
  return (
    <div className="lg:px-[64px lg:mt-[173px] max-lg:pt-[28px] pt[105px] pb-[70.95px] lg:pb-[173px] max-lg:bg-white">
      <h1 className="text-[24px] leading-[28.06px] text-greenPrimary lg:text-[59px] lg:leading-[72px] tracking-[-1.92px] text-center lg:text-[#4B4C4D]">
        Beelars Stories
      </h1>
      <div className="lg:mt-[47.7px] mt-[42px]">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={70}
          // slidesPerView={4}
          centeredSlides={true}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 4,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper max-lg:flex justify-center w-full "
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index} className="  justify-center flex">
              <div className="bg-[#F5F2ED] font-inter px-[14.8px] py-[12.95px] lg:px-[28.8px] lg:py-[25.2px] max-lg:w-[173px] max-lg:h-[197.05px] w-[336.6px] h-[383.4px] rounded-[10.8px] flex flex-col justify-between">
                <div className="flex flex-col gap-y-[20.61px]">
                  <img
                    src={qoute}
                    className="lg:w-[67.5px] lg:h-[46.59px] max-lg:w-[34.69px] max-lg:-h-[23.94px]"
                  />
                  <h2 className="pr-[24.4px] font-inter font-[500] text-[#413D45] lg:tracking-[-0.63px] text-[12.48px] leading-[15.11px] tracking-[-0.32px] lg:text-[24.3px] lg:leading-[29.41px]">
                    {story.content}
                  </h2>
                </div>
                <div className="flex flex-col gap-y-[9px]">
                  <p className="font-[500] lg:text-[11.7px] lg:leading-[16.2px] tracking-[-0.13px] text-[6.01px] text-[#67646A] leading-[8.33px]">
                    {story.from}
                  </p>
                  <p className=" lg:text-[9.9px] text-[5.09px] leading-[7.4px] font-[500]  lg:leading-[14.4px] tracking-[-0.06px] lg:tracking-[-0.11px] text-[#413D45] lg:text-[#413D45]">
                    {story.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BeelersStories;
