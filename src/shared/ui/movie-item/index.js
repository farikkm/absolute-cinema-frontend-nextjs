import Link from "next/link";
import styles from "./movie-item.module.css";

export default function MovieItem({ imgUrl, movieId }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <img
          className={styles.img}
          src={"https://image.tmdb.org/t/p/w500" + imgUrl}
          alt=""
        />
      </div>
      <Link href={`/movie/${movieId}`} className={styles.button}>
        More info
      </Link>
    </div>
  );
}
