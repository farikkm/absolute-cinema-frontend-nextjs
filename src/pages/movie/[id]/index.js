import styles from "./movie.module.css";

import { tmdbRequest } from "@/shared/helpers/requests";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState(null);
  const [activeBanner, setActiveBanner] = useState("");

  useEffect(() => {
    if (!router.isReady) return;

    async function fetchMovieById() {
      const data = await tmdbRequest(`/movie/${id}?language=en-US`);
      setMovie(data);
    }

    fetchMovieById();
  }, [router.isReady, id]);

  return (
    <div className={styles.wrapper}>
      {movie && (
        <div className={styles.banner}>
          <img src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path} />
        </div>
      )}
    </div>
  );
}
