import { BASE_URL } from "@/shared/constants";
import { request } from "@/shared/helpers/request";

const login = async (user) => {
  const data = await request(
    "POST",
    `${BASE_URL}/api/v1/auth/login`,
    { "Content-Type": "application/json" },
    user
  );

  return data;
};

const registerUser = async (user) => {
  const data = await request(
    "POST",
    `${BASE_URL}/api/v1/auth/register`,
    { "Content-Type": "application/json" },
    user
  );

  return data;
};

const getCurrentUser = async (accessToken, controller) => {
  const data = await request(
    "GET",
    `${BASE_URL}/api/v1/auth/current-user`,
    {
      Authorization: `Bearer ${accessToken}`,
    },
    {},
    controller
  );
  return data;
};

export { login, registerUser, getCurrentUser };
