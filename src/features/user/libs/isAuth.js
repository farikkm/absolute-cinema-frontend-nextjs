import { useEffect, useState } from "react";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "@/shared/constants";
import { getCurrentUser } from "../api";
import { useRouter } from "next/router";

export default function isAuth() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
      if (!accessToken) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      const response = await getCurrentUser(accessToken);

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

      setUsername(response.user.username);
      setHasAccess(true);
      setLoading(false);
    }

    fetchUser();
  }, [id]);

  return { loading, hasAccess, username };
}
