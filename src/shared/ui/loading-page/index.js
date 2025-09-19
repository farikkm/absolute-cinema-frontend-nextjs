import styles from "./loading-page.module.css";

export default function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <span className={`spinner ${styles.spinner}`}></span>
    </div>
  );
}
