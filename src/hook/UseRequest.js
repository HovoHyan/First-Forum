export const UseRequest = () => {
  const GET = async (url) => {
    const result = await fetch(url);
    return result.json();
  };

  const POST = async (url, data) => {
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return result.json();
  };

  const DELETE = async (url) => {
    await fetch(url, {
      method: "DELETE",
    });
  };

  const PatchAAAAAA = async (url, data, userPost) => {
    const result = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ posts: [...userPost, data.id] }),
    });
    return result.json();
  };
  return { GET, POST, DELETE, PatchAAAAAA };
};
