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

    return data;
  } catch (error) {
    return error;
  }
});
