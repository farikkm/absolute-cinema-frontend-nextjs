import styles from "./login.module.css";

export default function Page() {
  return (
      <div id="login-page" className={styles.wrapper}>
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
            <div className={styles.inputs}></div>
            <span className={styles.forgot__password}>Forgot Password?</span>
            <div className={styles.button}></div>
          </div>
          <div className={styles.right}>
            <img src="/images/auth/avatar.png" alt="" />
          </div>
        </div>
      </div>
  );
}
