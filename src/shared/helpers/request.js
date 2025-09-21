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
    const resJson = await res.json();

    if (!res.ok) {
      return;
    }

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