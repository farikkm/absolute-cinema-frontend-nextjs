export async function authRequest(method, url, headers, body, controller) {
  try {
    const options = {
      method,
      headers,
    };

    if (controller) {
      options.signal = controller.signal;
    }

    if (method !== "GET" && method !== "HEAD") {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);
    if (!res.ok) {
      return;
    }

    const resJson = await res.json();
    if (!resJson.success) {
      return { message: resJson.message, data: resJson.data };
    }

    return resJson.data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.warn("Запрос отменён по таймауту");
      return;
    }
    if (error.message) {
      return error.message;
    }
    console.error(error);
  }
}

export async function tmdbRequest(params) {
  const url = "https://api.themoviedb.org/3" + params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmQ2MDM4YWRlZjE5NjgzOTFmMzlkYjNmYzBkNDJmYiIsIm5iZiI6MTY4Mjg2NDM2Mi42OCwic3ViIjoiNjQ0ZTc4ZWE5YWZmYzAxZmZlZGY5OTM3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rCJgNLBydPPFkhQHG7RGg9y2khXmzTHZ1ahH2MF_rzM",
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
