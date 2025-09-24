export async function request(method, url, headers, body, controller) {
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
    const resJson = await res.json();

    if (!res.ok) {
      return;
    }

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
