// page.jsx
import styles from "./home.module.css";
import withAuth from "@/shared/libs/withAuth";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { imgUrl: "/images/home/01.png" },
  { imgUrl: "/images/home/02.png" },
  { imgUrl: "/images/home/03.png" },
  { imgUrl: "/images/home/04.png" },
  { imgUrl: "/images/home/01.png" },
  { imgUrl: "/images/home/02.png" },
];

function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider__wrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          slideToClickedSlide
          initialSlide={2}
          speed={600}
          pagination={{
            el: `.${styles.pagination}`,
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiper.on("click", () => {
              console.log("Clicked index:", swiper);
            });
          }}
          className={styles.slider}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {({ isActive }) => (
                <div
                  className={`${styles.slide__content} ${
                    isActive ? styles.slide__active : ""
                  }`}
                >
                  <img src={slide.imgUrl} alt="movie-small-img" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination}></div>
      </div>
    </div>
  );
}

export default withAuth(Page);
