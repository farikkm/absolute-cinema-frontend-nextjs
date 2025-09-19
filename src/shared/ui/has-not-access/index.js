import Link from "next/link";
import styles from "./has-not-access.module.css";

export default function HasNotAccessPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>You do not have access to this page</h1>
      <Link className={styles.link} href="/login">
        Go to Login Page
      </Link>
    </div>
  );
}
