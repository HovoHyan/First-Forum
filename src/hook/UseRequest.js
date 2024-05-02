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

  const PUT = async ({ url, newData }) => {
    const result = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(newData),
    });
    return result.json();
  };
  return { GET, POST, DELETE, PUT };
};
