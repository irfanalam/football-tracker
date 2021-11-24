export const getData = async () => {
  const response = await fetch(`https://api.refactor.ro/football/fixtures`, {
    method: "GET",
    headers: {
      authorization: "Bearer oB5i2lAnkoCo4dLd8pI1avSLsiee9unDteaSdrgnco",
    },
  });
  return await response.json();
};
