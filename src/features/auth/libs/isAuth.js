import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentUser } from "../api";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "@/shared/constants";

export default function isAuth() {
  const [loading, setLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(null);
  const [username, setUsername] = useState("");

  const router = useRouter();
  const { id, method } = router.query;

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);

      if (accessToken === "undefined") {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      const response = await getCurrentUser(accessToken);
      console.log(response);

      if (!response.user) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      if (id && id !== response.user._id) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      setHasAccess(true);
      setLoading(false);
      setUsername(response.user.username);
    }

    if (method && method === "register") {
      setHasAccess(true);
      setLoading(false);
    } else {
      fetchUser();
    }

  }, [id]);

  return { loading, hasAccess, username };
}
