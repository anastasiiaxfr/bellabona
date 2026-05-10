"use client";

import { useRef, useEffect } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import CardServices from "../cards/CardServices";

function ServicesSlider({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      if (swiper.navigation) {
        swiper.navigation.destroy();
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10 flex mt-10 justify-end sm:justify-center gap-4 items-center">
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="
          relative left-0 top-1/2 z-10
          flex h-12 w-12 -translate-y-1/2
          items-center justify-center
          rounded-full bg-white
          shadow-lg transition
          hover:bg-cstm-secondary
        "
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <button
          ref={nextRef}
          aria-label="Next slide"
          className="
          relative right-0 top-1/2 z-10
          flex h-12 w-12 -translate-y-1/2
          items-center justify-center
          rounded-full bg-white
          shadow-lg transition
          hover:bg-cstm-secondary
        "
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      <Swiper
        modules={[Grid, Navigation]}
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: {
              rows: 1,
            },
          },
          728: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 1,
            },
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="pb-4"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardServices {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ServicesSlider;
