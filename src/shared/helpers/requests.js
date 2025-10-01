import { TMDB_BASE_URL } from "../constants";

export async function request(method, url, headers, body) {
  try {
    const options = {
      method,
      headers
    }

    if (method !== "GET" || method !== "HEAD") {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);
    if (!res.ok) {
      return;
    }
    
    const resJson = await res.json();
    if (!resJson.success) {
      return { message: resJson.message, data: resJson.data }
    }

    return resJson.data;
  } catch (error) {
    if (error.message) {
      return error.message
    }
    console.error(error);
  }
}

export async function tmdbRequest(params) {
  const url = TMDB_BASE_URL + params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error occures while doing request to TMDB: ", error);
  }
}