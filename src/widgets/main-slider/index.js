// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MovieItem from "@/shared/ui/movie-item";

import styles from "./main-slider.module.css"

export default function MainSlider({ list }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      breakpoints={{
        600: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.slider}
    >
      { list.map((movie, index) => (
        <SwiperSlide key={index}>
          <MovieItem imgUrl={movie.poster_path} movieId={movie.id} />
        </SwiperSlide>
      )) }
    </Swiper>
  );
}
