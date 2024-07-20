export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const data = await $fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        accept: "application/json",
      },
      body,
    });

    setCookie(event, "data", data.flat(), {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return data;
  } catch (error) {
    return error;
  }
});
