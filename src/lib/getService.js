export const getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const data = await res.json();
  return data;
};

export const getServiceDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`, {
    cache: "no-cache",
  });
  const service = await res.json();
  return service;
};
