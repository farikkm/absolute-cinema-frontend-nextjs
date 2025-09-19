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
      throw new Error("Что-то пошло не так! Попробуйте еще раз!")
    }

    const resJson = await res.json();

    if (!resJson.success) {
      return { message: resJson.message, data: resJson.data }
    }

    return resJson.data;
  } catch (error) {
    throw new Error("Internal server error!")
  }
}