import { LOCAL_STORAGE_ACCESS_TOKEN } from "@/shared/constants";
import { getCurrentUser } from "@/shared/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./successful-auth.module.css";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const { method, id } = router.query;

  const [username, setUsername] = useState("");
  const [hasAccess, setHasAccess] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchUser() {
      const response = await getCurrentUser(
        localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN)
      );

      if (!response) {
        setHasAccess(false);
        return;
      }

      if (response.user._id !== id) {
        setHasAccess(false);
        return;
      }

      setUsername(response.user.username);
      setHasAccess(true);

      setTimeout(() => router.push("/home"), 3000);
    }

    fetchUser();
  }, [id, router]);

  if (hasAccess === null) {
    return (
      <div className={styles.wrapper}>
        <span className={`spinner ${styles.spinner}`}></span>
      </div>
    );
  }

  if (hasAccess === false) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          You do not have permission to this page
        </h1>
        <Link href="/login">Go to login page</Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <img src="/icons/successful-auth-user.png" alt="user-icon" />
      <h3 className={styles.username}>{username}</h3>
      <h1 className={styles.title}>You have successfully logged in</h1>
    </div>
  );
}
