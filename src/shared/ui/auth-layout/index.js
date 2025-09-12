import AuthButton from "../auth-button";
import styles from "./auth-layout.module.css";

export default function AuthLayout({ children, buttonText }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Welcome</h1>
          <div className={styles.links}>
            <a data-link href="/login" className={styles.link__active}>
              Login
            </a>
            <a data-link href="/register">
              Signup
            </a>
          </div>
          <form>
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
