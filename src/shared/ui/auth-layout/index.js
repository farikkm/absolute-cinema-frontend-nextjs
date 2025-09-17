import Link from "next/link";
import AuthButton from "../auth-button";
import styles from "./auth-layout.module.css";
import { useRouter } from "next/router";

export default function AuthLayout({ children, buttonText }) {
  const router = useRouter();
  const pathname = router.asPath;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Welcome</h1>
          <div className={styles.links}>
            <Link href="/login" className={pathname === "/login" ? styles.link__active : ""}>
              Login
            </Link>
            <Link href="/register" className={pathname === "/register" ? styles.link__active : ""}>
              Signup
            </Link>
          </div>
          <form className={styles.form}>
            <div className={styles.inputs}>{children}</div>
            <span className={styles.forgot__password}>Forgot Password?</span>
            <div className={styles.button}>
              <AuthButton>{buttonText}</AuthButton>
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <img src="/images/auth/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
}
