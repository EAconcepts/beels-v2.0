import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Autoplay, Navigation  } from "swiper/modules";
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
    <div className="lg:px-[64px] lg:mt-[173px] pt-[105px] pb-[173px]">
      <h1 className="text-[59px] leading-[72px] tracking-[-1.92px] text-center text-[#4B4C4D]">
        Beelars Stories
      </h1>
      <div className="lg:mt-[47.7px]">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={70}
          slidesPerView={4}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F5F2ED] font-inter lg:px-[28.8px] lg:py-[25.2px] w-[336.6px] h-[383.4px] rounded-[10.8px] flex flex-col justify-between">
                <div className="flex flex-col gap-y-[20.61px]">
                  <img src={qoute} className="lg:w-[67.5px] h-[46.59px]" />
                  <h2 className="pr-[24.4px] font-inter font-[500] text-[#413D45] lg:tracking-[-0.63px] lg:text-[24.3px] lg:leading-[29.41px]">
                    {story.content}
                  </h2>
                </div>
                <div className="flex flex-col gap-y-[9px]">
                  <p className="font-[500] lg:text-[11.7px] lg:leading-[16.2px] tracking-[-0.13px] text-[#67646A]">
                    {story.from}
                  </p>
                  <p className="text-[9.9px] font-[500] leading-[14.4px] tracking-[-0.11px] text-[#413D45]">
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
