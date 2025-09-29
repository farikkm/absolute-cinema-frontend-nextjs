import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MovieItem from "@/shared/ui/movie-item";

import styles from "./main-slider.module.css";
import MovieFilter from "../movie-filter";

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
