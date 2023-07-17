"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <section className=" flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/About/Picture1.svg"
            width={220}
            height={120}
            className="w-full h-[336px] block"
            alt="Picture1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/About/Picture2.svg"
            width={220}
            height={120}
            className="w-full h-[336px] block"
            alt="Picture2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/About/Picture3.svg"
            width={220}
            height={120}
            className="w-full h-[336px] block"
            alt="Picture3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
