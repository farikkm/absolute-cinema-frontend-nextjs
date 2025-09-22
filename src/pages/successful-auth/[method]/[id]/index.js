import { useRouter } from "next/router";

import styles from "./successful-auth.module.css";
import ProtectedPage from "@/features/user/ui/ProtectedPage";
import isAuth from "@/features/user/libs/isAuth";

function Page() {
  const router = useRouter();
  const { method } = router.query;

  const { hasAccess, username } = isAuth()

  if (!hasAccess) return;

  if (method === "register") {
    setTimeout(() => router.push("/login"), 3000);
    return (
      <div className={styles.wrapper}>
        <img src="/icons/successful-auth-user.png" alt="user-icon" />
        <h1 className={styles.title}>Your account is successfully created</h1>
      </div>
    );
  }

  if (method === "login") {
    setTimeout(() => router.push("/home"), 3000);
    return (
      <div className={styles.wrapper}>
        <img src="/icons/successful-auth-user.png" alt="user-icon" />
        <h3 className={styles.username}>{username}</h3>
        <h1 className={styles.title}>You have successfully logged in</h1>
      </div>
    );
  }
}

export default ProtectedPage(Page);
