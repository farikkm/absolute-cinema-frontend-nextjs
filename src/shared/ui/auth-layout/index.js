import Link from "next/link";
import AuthButton from "../auth-button";
import styles from "./auth-layout.module.css";
import { useRouter } from "next/router";

export default function AuthLayout({ children }) {
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
          {children}
        </div>
        <div className={styles.right}>
          <img src="/images/auth/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
}
