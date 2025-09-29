import styles from "./movie-filter.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";

export default function MovieFilter({ options, changeFilterState }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      breakpoints={{
        425: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 8,
        },
      }}
      className={styles.slider}
    >
      {options.map((option, index) => (
        <SwiperSlide key={index}>
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={() => changeFilterState(option.label, !option.checked)}
            className={`${option.checked ? styles.checked : ""} ${
              styles.fitler__option
            }`}
          >
            <span>{option.label}</span>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
