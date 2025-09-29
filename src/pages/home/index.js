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
import MovieItem from "@/shared/ui/movie-item";
import MainSlider from "@/widgets/main-slider";
import MovieFilter from "@/widgets/movie-filter";

function Page() {
  const initialIndex = 10;

  // Movies
  const [nowPlaying, setNowPlaying] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  // Active Items
  const [activeBanner, setActiveBanner] = useState("");
  const [activeMovie, setActiveMovie] = useState(null);

  // Options
  const [moviesFilterOptions, setMoviesFilterOptions] = useState([
    {
      label: "Drama",
      checked: false,
      filterId: 18,
    },
    {
      label: "Action",
      checked: false,
      filterId: 28,
    },
    {
      label: "Adventure",
      checked: false,
      filterId: 12,
    },
    {
      label: "Romance",
      checked: false,
      filterId: 10749,
    },
    {
      label: "Fantasy",
      checked: false,
      filterId: 14,
    },
    {
      label: "Comedy",
      checked: false,
      filterId: 35,
    },
    {
      label: "Animation",
      checked: false,
      filterId: 16,
    },
    {
      label: "Thriller",
      checked: false,
      filterId: 53,
    },
    {
      label: "Mystery",
      checked: false,
      filterId: 9648,
    },
    {
      label: "Historical",
      checked: false,
      filterId: 36,
    },
  ]);

  // Functions
  const updateArrayByKey = (array, key, keyValue, changes) => {
    return array.map((item) =>
      item[key] === keyValue ? { ...item, ...changes } : item
    );
  };

  const changeFilterState = (optionLabel, newOption) => {
    setMoviesFilterOptions((prev) =>
      updateArrayByKey(prev, "label", optionLabel, { checked: newOption })
    );
  };

  async function fetchNowPlaying() {
    const data = await tmdbRequest("/movie/now_playing?language=en-US&page=1");
    setNowPlaying(data.results);
    setActiveBanner(
      "https://image.tmdb.org/t/p/w1280" +
        data.results[initialIndex].backdrop_path
    );
    setActiveMovie(data.results[initialIndex]);
  }

  async function fetchMoviesList(genres) {
    if (!genres) {
      const data = await tmdbRequest("/discover/movie?language=ru-RU");
      setMoviesList(data.results);
      return;
    }

    let genresIds = genres.join("|");
    const data = await tmdbRequest(
      `/discover/movie?language=ru-RU&with_genres=${genresIds}`
    );
    setMoviesList(data.results);
  }

  // Hooks
  useEffect(() => {
    fetchNowPlaying();
    fetchMoviesList();
  }, []);

  useEffect(() => {
    const genres = moviesFilterOptions
      .filter((option) => option.checked)
      .map((option) => option.filterId);

    fetchMoviesList(genres);
  }, [moviesFilterOptions]);

  return (
    <div className={styles.wrapper}>
      <Header />

      {nowPlaying.length > 0 && (
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
                        nowPlaying[swiper.activeIndex].backdrop_path
                      }`
                    );
                    setActiveMovie(nowPlaying[swiper.activeIndex]);
                  });
                }}
                className={styles.slider}
              >
                {nowPlaying.map((slide, index) => (
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
        <div className="container">
          <div className="section-start">
            <h2 className={styles.trends__title}>Trends</h2>
            <a href="#">See more</a>
          </div>

          {nowPlaying.length > 0 && <MainSlider list={nowPlaying} />}
        </div>
      </section>

      <section className={styles.trends}>
        <div className="container">
          <div className="section-start">
            <h2 className={styles.trends__title}>Movies</h2>
            <a href="#">See more</a>
          </div>

          {moviesList.length > 0 && (
            <>
              <MovieFilter
                options={moviesFilterOptions}
                changeFilterState={changeFilterState}
              />
              <MainSlider list={moviesList} />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProtectedPage(Page);
