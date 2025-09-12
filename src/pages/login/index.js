import styles from "./login.module.css";

export default function Page() {
  return (
      <div id="login-page" className={styles.wrapper}>
        <div className={styles.container}>
          <div className="left">
            <h1 className="title">Welcome</h1>
            <div className="links">
              <a data-link href="/login" className="_active">
                Login
              </a>
              <a data-link href="/register">
                Signup
              </a>
            </div>
            <div className="inputs"></div>
            <span className="forgot-password">Forgot Password?</span>
            <div className="button"></div>
          </div>
          <div className="right">
            <img src="/images/auth/avatar.png" alt="" />
          </div>
        </div>
      </div>
  );
}
