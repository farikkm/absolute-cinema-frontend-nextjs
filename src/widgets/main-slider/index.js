import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MovieItem from "@/shared/ui/movie-item";

import styles from "./main-slider.module.css";

export default function MainSlider({ list }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        1024: {
          slidesPerView: 5,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.wrapper}
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          <MovieItem imgUrl={item.poster_path} movieId={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
