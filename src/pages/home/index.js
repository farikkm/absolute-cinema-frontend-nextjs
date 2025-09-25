// page.jsx
import styles from "./home.module.css";
import ProtectedPage from "@/features/auth/ui/ProtectedPage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { tmdbRequest } from "@/shared/helpers/requests";
import { useEffect, useState } from "react";
import Header from "@/widgets/header";

function Page() {
  const initialIndex = 10;

  const [popularMovies, setPopularMovies] = useState([]);
  const [activeBanner, setActiveBanner] = useState("");
  const [activeMovie, setActiveMovie] = useState(null);

  useEffect(() => {
    async function fetchPopularMovies() {
      const data = await tmdbRequest("/movie/popular?language=en-US&page=1");
      setPopularMovies(data.results);
      setActiveBanner(
        "https://image.tmdb.org/t/p/w1280" +
          data.results[initialIndex].backdrop_path
      );
      setActiveMovie(data.results[initialIndex]);
    }

    fetchPopularMovies();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />

      {popularMovies.length > 0 && (
        <section className={styles.hero}>
          <div className={`transition-mask ${styles.banner}`}>
            <img src={activeBanner} alt="movie-banner" />
          </div>
          <div className={`${styles.container} container`}>
            <div className={styles.slider__wrapper}>
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={true}
                slideToClickedSlide
                initialSlide={initialIndex}
                speed={600}
                onSwiper={(swiper) => {
                  swiper.on("click", () => {
                    setActiveBanner(
                      `https://image.tmdb.org/t/p/w1280${
                        popularMovies[swiper.activeIndex].backdrop_path
                      }`
                    );
                    setActiveMovie(popularMovies[swiper.activeIndex]);
                  });
                }}
                className={styles.slider}
              >
                {popularMovies.map((slide, index) => (
                  <SwiperSlide key={index} className={styles.slide}>
                    {({ isActive }) => (
                      <div
                        className={`${styles.slide__content} ${
                          isActive ? styles.slide__active : ""
                        }`}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`}
                          alt="movie-small-img"
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{activeMovie.title}</h1>
              <p className={styles.subtitle}>{activeMovie.overview}</p>
              {/* <div className={styles.buttons}>
              <button>Watch Movie</button>
              <button>More info</button>
            </div> */}
            </div>
          </div>
        </section>
      )}

      <section className={styles.trends}>
        <div className={styles.trends__top}>
          <h2 className={styles.trends__title}>Trends</h2>
          <a href="#">See more</a>
        </div>
      </section>
    </div>
  );
}

export default ProtectedPage(Page);
