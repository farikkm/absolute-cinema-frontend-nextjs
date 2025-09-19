import { useEffect, useState } from "react";
import { getCurrentUser } from "../hooks/useAuth";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "../constants";

export default function isAuth() {
  const [loading, setLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
      if (!accessToken) {
        setHasAccess(false);
        return;
      }

      setLoading(true);
      const response = await getCurrentUser(accessToken);
      setLoading(false);

      if (!response.user) {
        setHasAccess(false);
        return;
      }

      setHasAccess(true);
    }

    fetchUser();
  }, []);

  return { loading, hasAccess };
}